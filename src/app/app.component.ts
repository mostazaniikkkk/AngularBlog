import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import jsonData from "../pageContent.json";

//Componentes
import { BarMenu } from './BarMenu/BarMenu.component';
import { Banner } from './Banner/Banner.component';
import { Paragraph } from "./Paragraph/Paragraph.component";
import { EndPage } from './EndPage/EndPage.component';
import { News } from './News/News.component';
import { MainMenu } from './MainMenu/MainMenu.component';

//Servicios
import { BannerService } from './Services/banner.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarMenu, Banner, Paragraph, EndPage, News, MainMenu],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  window = "home";
  home = jsonData.home;

  blogsData = [jsonData.blog[jsonData.blog.length - 1].banner,jsonData.blog[jsonData.blog.length - 2].banner,jsonData.blog[jsonData.blog.length - 3].banner]
  projectsData = [jsonData.projects[jsonData.projects.length - 1].banner,jsonData.projects[jsonData.projects.length - 2].banner,jsonData.projects[jsonData.projects.length - 3].banner]
  entries = [this.blogsData, this.projectsData];

  requiredNews = ["blog", "projects", "youtube"];

  constructor(private BannerService: BannerService) {}

  ngOnInit() {
    this.BannerService.getData().subscribe(data => {
      this.window = data;
    });
  }
}
