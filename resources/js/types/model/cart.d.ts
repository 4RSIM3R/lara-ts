import { Item } from "./item";

export interface Cart {
    id?: number;
    user_id?: number;
    item_id?: number;
    quantity?: number;
    created_at?: Date;
    updated_at?: Date;
    item?: Item;
}
