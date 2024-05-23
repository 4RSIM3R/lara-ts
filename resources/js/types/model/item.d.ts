interface Item {
    id: number;
    categoryId: number; // Assuming Category has an id of type number
    name: string;
    slug: string;
    description: string;
    price: number; // In TypeScript, both integer and decimal values are treated as number
    variant: string[] | null; // Assuming this field stores an array of strings, and can be null
    createdAt: Date;
    updatedAt: Date;
}
