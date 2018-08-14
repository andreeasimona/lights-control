import React from 'react';
import api from "../api/lights";
import { Table } from 'rendition';

const columns = [{ field: "int" }];

class TableLights extends React.Component {
    componentDidMount() {
        api.getDevices(this.cbSuccess);
    }

    cbSuccess = (error, data) => {
        console.log(error, data);
        data.forEach(element => {
            return {
                ...element,
                field: element.name
            }
        });
        console.log({
            ...data,
            field: data.name
        })
        console.log(error, data);
    }
    render() {
        return (
            <div>
                <Table columns={columns} />
            </div>
        );
    }
}

export default TableLights;
