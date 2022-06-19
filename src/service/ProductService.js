import axios from "axios";

class ProductService {
    /**
     * @returns {Promise<AxiosResponse<any>>}
     */
    getProducts() {
        return axios.get('https://raw.githubusercontent.com/OlegFomishyn/test-data/main/products.json');
    }
}

export default new ProductService();
