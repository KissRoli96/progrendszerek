import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product('', '', 0, '');

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    this.productService.getProduct(productId).subscribe((product: Product) => {
      this.product = product;
    });
  }

}