interface Product {
    id: number;
    name: string;
    img: string;
    category: string;
    price: number;
    desc: string;
    ingredients: string[];
}

interface Products {
    products: Product[];
}

export { Product, Products };
