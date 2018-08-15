import React from "react";
import api from "../api/lights";
import { Input } from "rendition";
import throttle from "lodash.throttle";
import store from "../state/store";
import actions from "../state/actions";

const onChangeUpdate = throttle(dataCell => {
    api.updateDevice(dataCell);
}, 1000);

const onChange = newData => {
    store.dispatch({
        type: actions.updateDevice,
        row: newData
    });
    onChangeUpdate(newData);
};

const columns = [
    {
        field: "name",
        label: "Room",
        render: (value, dataCell) => {
            return (
                <input
                    value={value}
                    onChange={e => {
                        let name = e.target.value;
                        onChange({ ...dataCell, name });
                    }}
                />
            );
        }
    },
    {
        field: "active",
        label: "Active",
        render: (value, dataCell) => {
            return (
                <code>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={value}
                            onChange={e => {
                                let active = e.target.checked;
                                let brightness = active ? dataCell.brightness : 0;
                                onChange({ ...dataCell, brightness, active });
                            }}
                        />
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
                        let brightness = e.target.value;
                        let active = parseInt(brightness) === 0 ? false : dataCell.active;
                        onChange({ ...dataCell, brightness, active });
                    }}
                />
                {value}%
            </code>
        )
    }
];

export default columns;
