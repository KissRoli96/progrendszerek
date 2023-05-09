import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  product: Product = new Product('','', 0, '');

  constructor(private productService: ProductService) { }

  onSubmit() {
    this.productService.createProduct(this.product).subscribe((response) => {
      console.log(response);
      alert('Product created successfully!');
    }, (error) => {
      console.error(error);
      alert('Failed to create product!');
    });
  }

}