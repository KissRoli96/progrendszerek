import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = new Product('', '', 0, '');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProduct(this.route.snapshot.params['id']);
  }

  getProduct(id: string) {
    this.productService.getProduct(id).subscribe((data: Object) => {
      this.product = data as Product;
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.product['_id'], this.product).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}