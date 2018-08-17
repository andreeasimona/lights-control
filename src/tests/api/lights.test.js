import { configure, shallow } from "enzyme";
import { expect } from "chai";
import api from "../../api/lights";
import mokedData from "./mokedData";
import fetchMock from "fetch-mock";

describe("Api calls are working", () => {
    it("should get the devices", () => {
        fetchMock.mock("http://localhost:3000/api/v1/device", {
            data: mokedData.get
        });
        api.getDevices().then(response => {
            expect(mokedData.get).to.deep.equal(response.data);
        });
        fetchMock.restore();
    });
    it("should update a device", () => {
        fetchMock.mock("http://localhost:3000/api/v1/device/1", {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                data: mokedData.update
            })
        });
        api.updateDevice(mokedData.update).then(response => {
            expect(mokedData.update).to.deep.equal(JSON.parse(response.body).data);
        });
        fetchMock.restore();
    });
});
