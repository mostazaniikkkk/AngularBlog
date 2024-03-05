import { Component } from "@angular/core";
import { BannerService } from "../Services/banner.service";

@Component({
    selector: "BarMenu",
    templateUrl: "./BarMenu.component.html",
    styleUrl: "./BarMenu.component.scss",
    standalone: true
})

export class BarMenu{
    constructor(private BannerService: BannerService) {}
    
    onClick(data: string) {
        this.BannerService.sendData(data);
      }
}