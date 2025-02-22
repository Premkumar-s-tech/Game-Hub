import axios from "axios";

export interface FetchResponse<T>{
    count: number;
    results: T[];

}
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: 'd9760ee163524a72bb09f05f010f5373'
    }
})