import axios, { AxiosError } from 'axios';
import SearchImageResponse from '../interfaces/SearchImageResponse/SearchImageResponse.interface';

const client = axios.create({
    baseURL: 'https://api.unsplash.com/',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`
    }
})

export const searchImageService = async (query: string, page: number) => {
    try {
        const response = await client.get<SearchImageResponse>('/search/photos', {
            params: {
                query,
                page,
                per_page: 10,
            }
        })
        return response.data;
    } catch (err) {
        if (err && err.response) {
            const axiosError = err as AxiosError
            return axiosError.response?.data;
        }

        throw err;
    }
}
