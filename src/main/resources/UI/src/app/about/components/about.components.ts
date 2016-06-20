import {Component} from "@angular/core";
import {OnInit} from "@angular/core";

import {LibraryComponent} from "./library/library.component";

@Component({
    templateUrl: './app/about/components/about.html',
    directives: [LibraryComponent]
})
export class AboutComponent implements OnInit {

    ngOnInit() {

    }
}