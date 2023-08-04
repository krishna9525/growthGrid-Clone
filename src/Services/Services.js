import axios from "axios"


const base_Url = 'https://jsonplaceholder.typicode.com';

const fetchData = async (url) => {
  const headers = {
    Type: 'token'
  };

  

  try {
    const res = await axios.get(base_Url + url, { headers });
    return res;

  } catch (error) {
    return error;
  }
}

export default fetchData;


