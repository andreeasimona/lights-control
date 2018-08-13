const endPoint = 'http://localhost:3000/api/v1/device';

const getDevices = () => {
    return fetch(endPoint)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
        })

};

const getDevice = (id) => {
    fetch(`${endPoint}${id}`)
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
