import actionTypes from "./actions";
let reducerLights = (state, action) => {
	switch (action.type) {
		case actionTypes.getDevices:
			return {
				...state,
				rows: action.rows
			}
		case actionTypes.updateDevice:
			let newRows = state.rows.map(el => {
				if (el.id === action.row.id) {
					return action.row;
				}
				return el;
			});

			return {
				...state,
				rows: newRows
			}
		default:
			return state
	}
}
export default reducerLights;