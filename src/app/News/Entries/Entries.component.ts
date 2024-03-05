import { Component, input } from "@angular/core";

@Component({
    selector: "entries",
    templateUrl: "./Entries.component.html",
    styleUrl: "./Entries.component.scss",
    standalone: true
})

export class Entries{
    resources = input<any>();
}