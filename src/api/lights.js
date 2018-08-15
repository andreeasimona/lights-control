import store from "../state/store";
import actions from "../state/actions";
const endPoint = 'http://localhost:3000/api/v1/device';

const getDevices = () => {
	return fetch(endPoint)
		.then((response) => response.json())
		.then((response) => {
			store.dispatch({
				type: actions.getDevices,
				rows: response.data
			});
		})

};

const updateDevice = (data) => {
	return fetch(`${endPoint}/${data.id}`, {
			method: 'PATCH',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				data
			})
		})
		.then(response => response.json())
		.then((response) => {
			/*store.dispatch({
				type: actions.updateDevice,
				row: response.data
			});*/
		})
};

const api = {
	getDevices: getDevices,
	updateDevice: updateDevice
};

export default api;