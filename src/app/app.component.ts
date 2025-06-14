import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductsService} from "./services/products.service";
import {AsyncPipe, CurrencyPipe} from "@angular/common";

@Component({
    selector: 'app-root',
    imports: [AsyncPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  public products$ = inject(ProductsService).products$;

}
