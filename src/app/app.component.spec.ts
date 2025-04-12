
import {AppComponent} from "./app.component";
import { ProductsService} from "./services/products.service";
import {of} from "rxjs";
import {MOCK_PRODUCTS} from "./tests/mock";
import {render, screen} from "@testing-library/angular";
import {expect} from "vitest";

export class MockProductService {
  public products$ = of(MOCK_PRODUCTS)
}

describe('app component', () => {

  it('should render the product', async ()  => {

    await render(AppComponent, {
      providers: [{ provide: ProductsService, useClass: MockProductService }],
    })

    const productTitle  = screen.getByText(MOCK_PRODUCTS[0].title);
    expect(productTitle).toBeDefined()
})});
