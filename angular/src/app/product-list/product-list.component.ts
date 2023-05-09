import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  showUpdateProductForm(id: string) {
    this.router.navigate([`products/update/${id}`]);
  }

  showProductDetails(id: string): void {
    this.router.navigate(['/products', id]);
  }

  deleteProduct(id: string) {
    if (confirm("Are you sure you want to delete this product?")) {
      this.productService.deleteProduct(id).subscribe(
        (response: any) => {
          console.log(response);
          alert("Product deleted successfully");
          this.products = this.products.filter((product) => product._id !== id);
        },
        (error: any) => {
          console.log(error);
          alert("Failed to delete product");
        }
      );
    }
  }

}