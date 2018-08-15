import React from "react";
import api from "../api/lights";
import { Table } from "rendition";
import "../style/switcher.css";
import store from "../state/store";
import columns from "./Columns";


class TableLights extends React.Component {
    componentDidMount() {
        api.getDevices();
        store.subscribe(() =>
            this.setState({
                rows: store.getState().rows
            })
        );
    }

    render() {
        if (this.state && this.state.rows) {
            return (
                <div>
                    <Table columns={columns} data={this.state.rows} />
                </div>
            );
        } else return null;
    }
}

export default TableLights;
