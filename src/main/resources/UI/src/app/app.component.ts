import {Component, OnInit} from "@angular/core";
import {RouteConfig, RouterLink, ROUTER_DIRECTIVES} from "@angular/router-deprecated";

import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/components/about.components";

@Component({
    selector: "app",
    templateUrl: "./app/app.component.html",
    styleUrls: ["./app/app.component.css"],
    directives: [RouterLink, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/home', component: HomeComponent, as: 'Home', useAsDefault: true },
    {path: '/about', component: AboutComponent, as: 'About'}
])
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}