import actionTypes from "./actions";
let reducerLights = (state, action) => {
    switch (action.type) {
        case actionTypes.addColumn:
            return {
                ...state,
                lights: action.lights
            }
        default:
            return state
    }
}
export default reducerLights;