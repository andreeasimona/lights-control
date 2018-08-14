const endPoint = 'http://localhost:3000/api/v1/device';

const getDevices = (cbSuccess) => {
    return fetch(endPoint)
        .then((response) => response.json())
        .then((response) => {
            cbSuccess(null, response.data);
        })

};

const getDevice = (id) => {
    fetch(`${endPoint}/${id}`)
        .then((response) => {
            console.log(response.data)
        })
};

const updateDevice = (id, data) => { };

const api = {
    getDevices: getDevices,
    getDevice: getDevice,
    updateDevice: updateDevice
};

export default api;
