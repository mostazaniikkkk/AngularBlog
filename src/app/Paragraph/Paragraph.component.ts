import { Component, input } from "@angular/core";

@Component({
    selector: "paragraph",
    templateUrl: "./Paragraph.component.html",
    standalone: true
})

export class Paragraph{
    type = input<string>();
    image = input<string>();
    text = input<string>();
}