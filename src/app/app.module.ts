import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CategorieComponent } from './categorie/categorie.component';
import { PanierComponent } from './panier/panier.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { PaiementComponent } from './paiement/paiement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Page404Component } from './page404/page404.component';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbaarComponent } from './navbaar/navbaar.component';
import { VendrePrixComponent } from './vendre-prix/vendre-prix.component';
import { DescriptionVendreComponent } from './description-vendre/description-vendre.component';
import { VerifierPaiementComponent } from './verifier-paiement/verifier-paiement.component';
import { VendreComponent } from './vendre/vendre.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    CategorieComponent,
    PanierComponent,
    LivraisonComponent,
    PaiementComponent,
    Page404Component,
    NavbarComponent,
    NavbaarComponent,
    VendrePrixComponent,
    DescriptionVendreComponent,
    VerifierPaiementComponent,
    VendreComponent,
    CartComponent,
    HeaderComponent,
    ProductComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule ,
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
