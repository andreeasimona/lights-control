import {
	configure,
	shallow
} from 'enzyme';
import {
	expect
} from 'chai';
import api from "../../api/lights";
import fetchMock from "fetch-mock";

const mockedData = [{
		id: 1,
		name: "Balcony",
		active: true,
		brightness: 0
	},
	{
		id: 2,
		name: "Bedroom 01",
		active: false,
		brightness: 70
	}
]

describe('Api calls are working', function () {

	it("should work", () => {
		fetchMock.mock('http://localhost:3000/api/v1/device', {
			data: mockedData
		});
		api.getDevices().then(function (data) {
			console.log('got data', data);
		});
		fetchMock.restore();
	});
});