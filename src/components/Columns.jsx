import React from "react";
import api from "../api/lights";
import throttle from "lodash.throttle";
import store from "../state/store";
import actions from "../state/actions";

const onChangeState = (e, dataCell) => {
    let active = e.target.checked;
    let brightness = active ? 100 : 0;
    api.updateDevice({ ...dataCell, brightness, active });
};

const onChangeUpdate = throttle(dataCell => {
    api.updateDevice(dataCell);
}, 1000);

const onChangeBrightness = (brightness, dataCell) => {
    store.dispatch({
        type: actions.updateDevice,
        row: { ...dataCell, brightness }
    });
    onChangeUpdate({ ...dataCell, brightness });
};

const columns = [
    {
        field: "name",
        label: "Room"
    },
    {
        field: "active",
        label: "Active",
        render: (value, dataCell) => {
            return (
                <code>
                    <label className="switch">
                        <input type="checkbox" checked={value} onChange={e => onChangeState(e, dataCell)} />
                        <span className="slider" />
                    </label>
                </code>
            );
        }
    },
    {
        field: "brightness",
        label: "Brightness",
        render: (value, dataCell) => (
            <code>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={value}
                    onChange={e => {
                        let value = e.target.value;
                        onChangeBrightness(value, dataCell);
                    }}
                />
                {value}%
            </code>
        )
    }
];

export default columns;
