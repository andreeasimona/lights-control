import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";
import TableLights from "../../components/tableLights";
import mokedData from "../api/mokedData";
import fetchMock from "fetch-mock";

configure({ adapter: new Adapter() });
describe("TableLights components works corectly", () => {
    it("should display the lights from the API", () => {
        fetchMock.mock("http://localhost:3000/api/v1/device", {
            data: mokedData.get
        });
        const wrapper = shallow(<TableLights/>);
        const header = wrapper.find("table-head");
        //console.log("wrapper", wrapper, header);
        expect(header).to.have.length(1);
        expect(true).to.equal(true);
    });
});
