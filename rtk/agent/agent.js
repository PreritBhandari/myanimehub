import config from "../../config";
import http from '../../utitlities/http';

const requests = {
    get: (url, query = 0) => http.get(url, { params: query }),
    del: (url) => http.delete(url),
    put: (url, body) => http.put(url, body),
    post: (url, body) => http.post(url, body),
};

const HomePage = {
    Animes: {
        getByName: (query) => requests.get(`${config.endpoints.animeList.getByName}`, query),
        // getOne: (id) => requests.get(`${config.endpoints.accounts.create}/${id}`),
        // create: (account) => requests.post(config.endpoints.accounts.create, account),
        // update: ({ id, data }) => requests.put(`${config.endpoints.accounts.create}/${id}`, data),
        // delete: (id) => requests.del(`${config.endpoints.accounts.defi}/${id}`),
    },
};

const Agent = {
    HomePage
};

export default Agent;
