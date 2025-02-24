import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T>{
    count: number;
    next: string | null;
    results: T[];

}
const axiosInstance = axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: 'd9760ee163524a72bb09f05f010f5373'
    },
});

class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res => res.data);
    };
    get = (id: number | string) => {
        return axiosInstance
        .get<T>(this.endpoint + '/' + id)
        .then((res) => res.data);
    }
}
axiosInstance
export default APIClient;