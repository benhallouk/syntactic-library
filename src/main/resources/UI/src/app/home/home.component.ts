import {Component} from "@angular/core";
import {OnInit, Input} from "@angular/core";

import {UserComponent} from "./components/user/user.component";
import {SearchComponent} from "./components/search/search.component";
import {TagsComponent} from "./components/tags/tags.component";
import {BuddyComponent} from "./components/buddy/buddy.component";

import {Item} from "./models/item";
import {ItemService} from "./services/item-service";

@Component({
    selector: 'item-list',
    templateUrl: './app/home/home.component.html',
    styleUrls: ['./app/home/home.component.css'],
    directives: [UserComponent, SearchComponent, TagsComponent, BuddyComponent],
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