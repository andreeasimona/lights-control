import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import api from '../../api/lights';
import mokedData from './mokedData';
import fetchMock from 'fetch-mock';

describe('Api calls are working', () => {
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
    it('should get the devices', () => {
        api.getDevices().then(response => {
            expect(mokedData.get).to.deep.equal(response.data);
        });
    });
    it('should update a device', () => {
        api.updateDevice(mokedData.update).then(response => {
            expect(mokedData.update).to.deep.equal(JSON.parse(response.body).data);
        });
    });
});
