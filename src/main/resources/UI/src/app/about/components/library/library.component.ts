import {Component} from "@angular/core";
import {OnInit, Input} from "@angular/core";

@Component({
    selector: 'library-item',
    templateUrl: './app/about/components/library/library.component.html',
    styleUrls: ['./app/about/components/library/library.component.css']
})
export class LibraryComponent implements OnInit {
    @Input() libraryItem : string;

    ngOnInit() {
        this.libraryItem = "from back end";
    }
}