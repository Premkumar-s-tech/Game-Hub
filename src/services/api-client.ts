import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: 'd9760ee163524a72bb09f05f010f5373'
    }
})