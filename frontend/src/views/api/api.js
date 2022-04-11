const axios = require("axios");

const BASE_URL = "http://localhost:8000/HX";

const TempFlowAq = async () => {
    let res;
    await axios.get(`${BASE_URL}/writeTemp`);
    await axios.get(`${BASE_URL}/writeFlowRate`);
    await axios.get(`${BASE_URL}/getTempFlow`).then(re => {
        res = re.data;
    });
    console.log(res);
    return res;
};

const strTemp = async () => {
    await axios.get(`${BASE_URL}/startFlowRate`);
    const response = await axios.get(`${BASE_URL}/startTemp`);
    console.log("start temp code " + response.status)
    return response.status;
};

const stpTemp = async () => {
    await axios.get(`${BASE_URL}/stopFlowRate`);
    const response = await axios.get(`${BASE_URL}/stopTemp`);
    return response.status
};

export {
    TempFlowAq,
    strTemp,
    stpTemp,
};
