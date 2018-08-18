import store from '../state/store';
import actions from '../state/actions';
const endPoint = 'http://localhost:3000/api/v1/device';

const getDevices = async () => {
    let result = await fetch(endPoint)
        .then((response) => {
            return response.json();
        });
    store.dispatch({
        type: actions.getDevices,
        rows: result.data
    });
    return result;
};

const updateDevice = async (data) => {
    let result = await fetch(`${endPoint}/${data.id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            data
        })
    }).then((response) => {
        return response.json();
    });
    return result;
};

const api = {
    getDevices: getDevices,
    updateDevice: updateDevice
};

export default api;