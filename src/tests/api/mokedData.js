const mockedGetData = [
    {
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
];

const mockedUpdateData = {
    id: 1,
    name: "Balcony",
    active: true,
    brightness: 0
};

const mokedDataApi = {
    get: mockedGetData,
    update: mockedUpdateData
};

export default mokedDataApi;
