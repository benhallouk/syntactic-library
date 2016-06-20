import {Component} from "@angular/core";
import {OnInit, Input} from "@angular/core";

@Component({
    selector: 'library-user',
    templateUrl: './app/home/components/user/user.component.html',
    styleUrls: ['./app/home/components/user/user.component.css']
})
export class UserComponent implements OnInit {
    @Input() currentUser : string;

    ngOnInit() {
    }
}