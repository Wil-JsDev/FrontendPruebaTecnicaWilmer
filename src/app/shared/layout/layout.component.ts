import { Component } from '@angular/core';
import { TopMenuComponent } from "../components/top-menu/top-menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
})
export default class LayoutComponent { }
