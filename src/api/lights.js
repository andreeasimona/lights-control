import store from "../state/store";
import actions from "../state/actions";
const endPoint = 'http://localhost:3000/api/v1/device';

const getDevices = async () => {
	let results = await fetch(endPoint)
		.then((response) => {
			return response.json()
		});
	store.dispatch({
		type: actions.getDevices,
		rows: results.data
	});
	return results;
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