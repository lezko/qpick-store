export interface Product {
    id: number;
    title: string;
    category: string;
    img: string;
    price: number;
    prevPrice?: number;
    rate: number;
}
