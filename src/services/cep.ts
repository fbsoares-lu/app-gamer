import axios from 'axios';

const cepApi = axios.create({
    baseURL: 'https://viacep.com.br/ws',
});

const server = axios.create({
    // Endereço da máquina + porta 3333
    baseURL: 'http://192.168.1.17:3333',
});

export { cepApi, server};