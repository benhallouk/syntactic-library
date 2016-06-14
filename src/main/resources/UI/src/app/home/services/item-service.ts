import {Injectable} from "@angular/core";
import {Item} from "../models/item";

@Injectable()
export class ItemService {

    private items:Array<Item> = [
        new Item("Item 1", false),
        new Item("Item 2", false),
        new Item("Item 3", false),
        new Item("Item 4", false),
        new Item("Item 5", false)
    ];

    getItems():Array<Item> {
        return this.items;
    }

    addItem(name:string) {
        this.items.push(new Item(name, false));
    }

}