import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductListComponent } from './product-list/product-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

const routes: Routes = [
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/update/:id', component: UserUpdateComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'products/create', component: ProductCreateComponent },
  { path: 'products/update/:id', component: ProductUpdateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NavbarComponent,
    ProductListComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserDetailsComponent,
    ProductCreateComponent,
    ProductDetailsComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule, // add hozzá a MatToolbarModule-ot
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
