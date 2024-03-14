import { Component } from '@angular/core';
import { Languaje } from './Languajes/Languajes.component';

@Component({
    selector: "MainMenu",
    imports: [Languaje],
    templateUrl: "./MainMenu.component.html",
    styleUrl: "./MainMenu.component.scss",
    standalone: true
})

export class MainMenu{
    winController = 0;
    //Nivel intermedio
    python = ["Python", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"];
    cSharp = ["C#", "https://static-00.iconduck.com/assets.00/c-sharp-c-icon-456x512-9sej0lrz.png"];
    unity = ["Unity", "https://static-00.iconduck.com/assets.00/unity-icon-249x256-ry4n8dty.png"];
    html = ["HTML 5", "https://cdn-icons-png.flaticon.com/512/732/732212.png"]
    js = ["Javascript", "https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png"];

    //Nivel basico
    angular = ["Angular", "https://seeklogo.com/images/A/angular-icon-logo-5FC0C40EAC-seeklogo.com.png"];
    sass = ["SASS", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"];
    ts = ["Typescript", "https://cdn-icons-png.freepik.com/512/5968/5968381.png"];
    lua = ["LUA", "https://cdn.iconscout.com/icon/free/png-256/free-lua-3772798-3146931.png"];
    java = ["Java", "https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png"];
    sql = ["SQL", "https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-1955x2048-4pmty46t.png"];
    node = ["Node.js", "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"];

    //Aprendiendo
    zig = ["Zig", "https://cdn.icon-icons.com/icons2/2699/PNG/512/ziglang_logo_icon_170660.png"];
    pl = ["PL/SQL", "https://my.trocaire.edu/wp-content/uploads/2016/12/pl-sql.png"];

    hover(win:number) {
        this.winController = win;
    }
}