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

interface IContact {
    name?: string;
    email?: string;
    comment?: string;
}

export { IContact, Product, Products };
