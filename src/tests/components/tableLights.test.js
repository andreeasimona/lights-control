import React from 'react';
import { configure, mount } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import TableLights from '../../components/tableLights';
import mokedData from '../api/mokedData';
import fetchMock from 'fetch-mock';
import columns from '../../components/columns';

const selectors = {
    header: '[data-display="table-head"]',
    headerRow: '[data-display="table-head"] [data-display="table-row"]',
    body: '[data-display="table-body"]',
    bodyRow: '[data-display="table-body"] [data-display="table-row"]',
    bodyCell: '[data-display="table-body"] [data-display="table-row"] [data-display="table-cell"]'
};

const expectedHtml = [
    '<input value="Balcony">',
    '<code><label class="switch"><input type="checkbox"><span class="slider"></span></label></code>',
    '<code><input type="range" min="0" max="100" value="0">0%</code>',
    '<input value="Bedroom 01">',
    '<code><label class="switch"><input type="checkbox"><span class="slider"></span></label></code>',
    '<code><input type="range" min="0" max="100" value="70">70%</code>'
];

const updateName = 'I have a new name';
const updateBrightness = '50';

configure({ adapter: new Adapter() });
describe('TableLights components works corectly', () => {
    beforeEach(() => {
        fetchMock.mock('http://localhost:3000/api/v1/device', {
            data: mokedData.get
        });
        fetchMock.mock('http://localhost:3000/api/v1/device/1', {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                data: mokedData.update
            })
        });
    });
    afterEach(() => {
        fetchMock.restore();
    });
    it('should set the state corectly and display the lights from the API', async () => {
        const wrapper = mount(<TableLights />);
        const mokedDataGet = mokedData.get;
        wrapper.setState({ rows: mokedDataGet });
        const instance = wrapper.instance();
        expect(...instance.state.rows).to.equal(...mokedDataGet);
        expect(wrapper.find(selectors.header)).to.have.length(1);
        columns.map((element, index) => {
            expect(
                wrapper
                    .find(selectors.headerRow)
                    .childAt(index)
                    .text()
            ).to.equal(columns[index].label);
        });
        expect(wrapper.find(selectors.body)).to.have.length(1);
        expectedHtml.map((element, index) => {
            expect(
                wrapper
                    .find(selectors.bodyCell)
                    .at(index)
                    .childAt(0)
                    .html()
            ).to.equal(element);
        });
    });

    it('should update the light name correctly', async () => {
        const wrapper = mount(<TableLights />);
        const mokedDataGet = mokedData.get;
        wrapper.setState({ rows: mokedDataGet });

        wrapper
            .find(selectors.bodyCell)
            .at(0)
            .childAt(0)
            .simulate('change', { target: { value: updateName } });
        expect(
            wrapper
                .find(selectors.bodyCell)
                .at(0)
                .childAt(0)
                .props().value
        ).to.equal(updateName);
    });

    it('should update the light brightness correctly', async () => {
        const wrapper = mount(<TableLights />);
        const mokedDataGet = mokedData.get;
        wrapper.setState({ rows: mokedDataGet });

        wrapper
            .find(`${selectors.bodyCell} code`)
            .at(1)
            .childAt(0)
            .simulate('change', { target: { value: updateBrightness } });
        expect(
            wrapper
                .find(`${selectors.bodyCell} code`)
                .at(1)
                .childAt(0)
                .props().value
        ).to.equal(updateBrightness);
    });
});
