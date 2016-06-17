import {Component} from "@angular/core";
import {OnInit, Input} from "@angular/core";

import {Item} from "../models/item";
import {ItemService} from "../services/item-service";
import {ItemComponent} from "./item.component";

@Component({
    selector: 'item-list',
    templateUrl: './app/home/components/item-list.html',
    styleUrls: ['./app/home/components/item-list.css'],
    directives: [ItemComponent],
    providers: [ItemService]
})
export class HomeComponent implements OnInit {
    @Input() newItem:Item;
    todoCount:number;
    selectedItem:Item;
    items:Array<Item>;

    constructor(private _itemService:ItemService) {}

    ngOnInit() {
        this.newItem = new Item(0, "", "", "");
        this._itemService.getItems().then(items => {
            console.log("Todo component initialized with " + items + " tasks.");
            this.items = items;
            this.calculateTodoCount();
        });
    }

    calculateTodoCount() {
        this.todoCount = this.items.length;
    }

    select(item:Item) {
        this.selectedItem = item;
    }

    add(item:Item) {

    }
}