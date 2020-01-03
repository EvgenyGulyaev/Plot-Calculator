import axios from 'axios';
import config from '../config';

/**
 * Wrapper for axios
 * @param data - data for request
 * @returns Promise data
 */
const axiosWrapper = async (data) => {
  try {
    const { data: res } = await axios({
      ...data,
      url: `https://cors-anywhere.herokuapp.com/${config.url}&input=${data.url}&includepodid=Result&output=json`,
      headers: {'Access-Control-Allow-Origin' : '*'}
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export default axiosWrapper;
