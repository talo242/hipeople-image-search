export interface Image {
    id: string;
    alt_description: string;
    urls: {
        thumb: string;
        regular: string
    }
    [key: string]: any;
}