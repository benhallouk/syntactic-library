import {Component} from "@angular/core";
import {OnInit, Input} from "@angular/core";

@Component({
    selector: 'library-tags',
    templateUrl: './app/home/components/tags/tags.component.html',
    styleUrls: ['./app/home/components/tags/tags.component.css']
})
export class TagsComponent implements OnInit {
    @Input() selectedTag : string;

    ngOnInit() {
    }
}