import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

import { CategorieComponent } from './categorie/categorie.component';
import { DescriptionVendreComponent } from './description-vendre/description-vendre.component';
import { HomeComponent } from './home/home.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { PaiementComponent } from './paiement/paiement.component';
import { PanierComponent } from './panier/panier.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { VendrePrixComponent } from './vendre-prix/vendre-prix.component';
import { VendreComponent } from './vendre/vendre.component';
import { VerifierPaiementComponent } from './verifier-paiement/verifier-paiement.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'categorie',
    component: CategorieComponent
  },
  {
    path: 'panier',
    component: PanierComponent
  },
  {
    path: 'livraison',
    component: LivraisonComponent
  },
  {
    path: 'paiement',
    component: PaiementComponent
  },
  {
    path: 'vendre',
    component: VendreComponent
  },
  {
    path: 'description-vendre',
    component: DescriptionVendreComponent
  },
  {
    path: 'vendre-prix',
    component: VendrePrixComponent
  },
  {
    path: 'verifier-paiement',
    component: VerifierPaiementComponent
  },
  {
    path :'product',
    component: ProductComponent
  },

{
  path :'cart',
  component:CartComponent
},
  {path:'', redirectTo:'products',pathMatch:'full'},
    {
    path: '**',
    component: Page404Component
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
