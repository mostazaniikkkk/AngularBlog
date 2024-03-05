import { Component, input } from "@angular/core";
import { Entries } from "./Entries/Entries.component";

@Component({
    selector: "news",
    templateUrl: "./News.component.html",
    imports: [Entries],
    standalone: true
})

export class News{
    type = input<string>();
    lastEntries = input<any>();
}