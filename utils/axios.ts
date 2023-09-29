import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const _axios = axios.create({
  baseURL: publicRuntimeConfig.API_URL_BASE as string,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default _axios;
