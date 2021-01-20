import axios, { AxiosError } from 'axios';

interface Image {
    id: string;
    urls: {
        thumb: string;
        regular: string
    }
    [key: string]: any;
}

interface SearchImageResponse {
    total: number;
    total_pages: number;
    results: Image[]
}

const client = axios.create({
    baseURL: 'https://api.unsplash.com/',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Client-ID jCnCGoIooO-KrY5XouHb7T6l6RqP_Qd1UJo112z_2tU'
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
