import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from "./shared/components/top-menu/top-menu.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopMenuComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'FrontendPruebaTecnica';
}
