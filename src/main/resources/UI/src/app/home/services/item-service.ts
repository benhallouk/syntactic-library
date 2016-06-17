import {Injectable} from "@angular/core";
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Item} from "../models/item";

@Injectable()
export class ItemService {
    private itemsUrl = '/api/v1/items';

    constructor(private http: Http) { }

    getItems(): Promise<Item[]> {
        return this.http.get(this.itemsUrl)
               .toPromise()
               .then(response => <Item[]>response.json())
               .catch(this.handleError);
    }

    addItem(name:string) {

    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}