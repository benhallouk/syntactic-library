import {Component} from "@angular/core";
import {OnInit, Input} from "@angular/core";

@Component({
    selector: 'library-search',
    templateUrl: './app/home/components/search/search.component.html',
    styleUrls: ['./app/home/components/search/search.component.css']
})
export class SearchComponent implements OnInit {
    @Input() searchKeyWords : string;

    ngOnInit() {
    }
}