import { Component, input } from "@angular/core";

@Component({
    selector: "languaje",
    templateUrl: "./Languajes.component.html",
    styleUrl: "./Languajes.component.scss",
    standalone: true
})

export class Languaje{
    name = input<string>();
    img = input<string>();
}