import {Component, inject} from '@angular/core';
import {ProductsService} from "./services/products.service";
import {AsyncPipe} from "@angular/common";

@Component({
    selector: 'app-root',
    imports: [AsyncPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  public products$ = inject(ProductsService).products$;

}
