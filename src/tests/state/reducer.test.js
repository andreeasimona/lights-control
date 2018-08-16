import { expect } from "chai";
import reducer from "../../state/reducer";
import actionTypes from "../../state/actions";
const rows = [
    {
        id: 1,
        name: "Room 1",
        active: true,
        brightness: 40
    },
    {
        id: 2,
        name: "Room 2",
        active: false,
        brightness: 80
    },
    {
        id: 3,
        name: "Room 3",
        active: true,
        brightness: 20
    }
];

const newRowData = {
    id: 2,
    name: "I am a new room",
    active: true,
    brightness: 0
};

describe("reducer handles the actions correctly", function() {
    it("should store the lights corectly", function() {
        const nextState = reducer(
            {},
            {
                type: actionTypes.getDevices,
                rows
            }
        );
        expect(nextState.rows).to.equal(rows);
    });

    it("should update the lights corectly", function() {
        let nextState = reducer(
            {},
            {
                type: actionTypes.getDevices,
                rows
            }
        );
        nextState = reducer(nextState, {
            type: actionTypes.updateDevice,
            row: newRowData
        });

        let newRows = rows.map(el => {
            if (el.id === newRowData.id) {
                return newRowData;
            }
            return el;
        });
        expect(rows).to.equal(rows);
        expect(...nextState.rows).to.equal(...newRows);
        expect(
            nextState.rows.find(el => {
                el.id === newRowData.id;
            })
        ).to.equal(newRows.id);
    });
});
