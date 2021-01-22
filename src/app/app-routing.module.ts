import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCoursetypeComponent } from './coursetype/add-coursetype/add-coursetype.component';
import { CoursetypeComponent } from './coursetype/coursetype.component';
import { EditCoursetypeComponent } from './coursetype/edit-coursetype/edit-coursetype.component';
import { AddGeneralCategoryComponent } from './general-category/add-general-category/add-general-category.component';
import { EditGeneralCategoryComponent } from './general-category/edit-general-category/edit-general-category.component';
import { GeneralCategoryComponent } from './general-category/general-category.component';
import { AddmenuForApprovalComponent } from './home/approval-request/addmenu-for-approval/addmenu-for-approval.component';
import { ApprovalRequestComponent } from './home/approval-request/approval-request.component';
import { LocationAdminViewPendingrequestComponent } from './home/approval-request/location-admin-view-pendingrequest/location-admin-view-pendingrequest.component';
import { MenuApprovalComponent } from './home/approval-request/menu-approval/menu-approval.component';
import { AddCategoryComponent } from './home/category/add-category/add-category.component';
import { EditCategoryComponent } from './home/category/edit-category/edit-category.component';
import { AddDeliveryBoysComponent } from './home/delivery-boys/add-delivery-boys/add-delivery-boys.component';
import { DeliveryBoysComponent } from './home/delivery-boys/delivery-boys.component';
import { EditDeliveryBoysComponent } from './home/delivery-boys/edit-delivery-boys/edit-delivery-boys.component';
import { AddGeneralMenuComponent } from './home/general-menu/add-general-menu/add-general-menu.component';
import { EditGeneralMenuComponent } from './home/general-menu/edit-general-menu/edit-general-menu.component';
import { GeneralMenuComponent } from './home/general-menu/general-menu.component';
import { AddGeneralShopMenuComponent } from './home/general-shop-menu/add-general-shop-menu/add-general-shop-menu.component';
import { EditGeneralShopMenuComponent } from './home/general-shop-menu/edit-general-shop-menu/edit-general-shop-menu.component';
import { GeneralShopMenuComponent } from './home/general-shop-menu/general-shop-menu.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './home/orders/orders.component';
import { AddPincodesComponent } from './home/pincodes/add-pincodes/add-pincodes.component';
import { EditPincodesComponent } from './home/pincodes/edit-pincodes/edit-pincodes.component';
import { PincodesComponent } from './home/pincodes/pincodes.component';
import { AddPreOrdersComponent } from './home/pre-orders/add-pre-orders/add-pre-orders.component';
import { PreOrdersComponent } from './home/pre-orders/pre-orders.component';
import { AddRestaurantMenuComponent } from './home/restaurant-menu/add-restaurant-menu/add-restaurant-menu.component';
import { EditRestaurantMenuComponent } from './home/restaurant-menu/edit-restaurant-menu/edit-restaurant-menu.component';
import { RestaurantMenuComponent } from './home/restaurant-menu/restaurant-menu.component';
import { AddShopMenuComponent } from './home/shop-menu/add-shop-menu/add-shop-menu.component';
import { EditShopMenuComponent } from './home/shop-menu/edit-shop-menu/edit-shop-menu.component';
import { ShopMenuComponent } from './home/shop-menu/shop-menu.component';
import { AddShopComponent } from './home/shop/add-shop/add-shop.component';
import { EditShopComponent } from './home/shop/edit-shop/edit-shop.component';
import { ShopComponent } from './home/shop/shop.component';
import { UsersComponent } from './home/users/users.component';
import { LoginComponent } from './login/login.component';
import { AddOffersComponent } from './offers/add-offers/add-offers.component';
import { EditOffersComponent } from './offers/edit-offers/edit-offers.component';
import { OffersComponent } from './offers/offers.component';
import { DeliveryComponent } from './reports/delivery/delivery.component';
import { PurchaseComponent } from './reports/purchase/purchase.component';
import { ReportsComponent } from './reports/reports.component';
import { SalesComponent } from './reports/sales/sales.component';
import { AddSettingsComponent } from './settings/add-settings/add-settings.component';
import { AddAdminCredentialsComponent } from './settings/admin-credentials/add-admin-credentials/add-admin-credentials.component';
import { AdminCredentialsComponent } from './settings/admin-credentials/admin-credentials.component';
import { EditAdminCredentialsComponent } from './settings/admin-credentials/edit-admin-credentials/edit-admin-credentials.component';
import { AddChatBoxComponent } from './settings/chat-box/add-chat-box/add-chat-box.component';
import { ChatBoxComponent } from './settings/chat-box/chat-box.component';
import { EditChatBoxComponent } from './settings/chat-box/edit-chat-box/edit-chat-box.component';
import { AddLocationAdminPhonenumberComponent } from './settings/location-admin-phonenumber/add-location-admin-phonenumber/add-location-admin-phonenumber.component';
import { EditLocationAdminPhonenumberComponent } from './settings/location-admin-phonenumber/edit-location-admin-phonenumber/edit-location-admin-phonenumber.component';
import { LocationAdminPhonenumberComponent } from './settings/location-admin-phonenumber/location-admin-phonenumber.component';
import { MasteradminphonenumberComponent } from './settings/masteradminphonenumber/masteradminphonenumber.component';
import { AddPriceUpdatorComponent } from './settings/price-updator/add-price-updator/add-price-updator.component';
import { PriceUpdatorComponent } from './settings/price-updator/price-updator.component';
import { SettingsComponent } from './settings/settings.component';
import { AddShopCredentialsComponent } from './settings/shopcredentials/add-shop-credentials/add-shop-credentials.component';
import { EditShopCredentialsComponent } from './settings/shopcredentials/edit-shop-credentials/edit-shop-credentials.component';
import { ShopcredentialsComponent } from './settings/shopcredentials/shopcredentials.component';
import { AddUpiComponent } from './settings/upi/add-upi/add-upi.component';
import { EditUpiComponent } from './settings/upi/edit-upi/edit-upi.component';
import { UpiComponent } from './settings/upi/upi.component';
import { WalletpointsComponent } from './settings/walletpoints/walletpoints.component';
import { AddShopAdminMenuNameComponent } from './shop_admin_section/shop-admin-menu-name/add-shop-admin-menu-name/add-shop-admin-menu-name.component';
import { ShopAdminMenuNameComponent } from './shop_admin_section/shop-admin-menu-name/shop-admin-menu-name.component';
import { AddShopAdminOffersComponent } from './shop_admin_section/shop-admin-offers/add-shop-admin-offers/add-shop-admin-offers.component';
import { ShopAdminOffersComponent } from './shop_admin_section/shop-admin-offers/shop-admin-offers.component';
import { ShopAdminOrdersComponent } from './shop_admin_section/shop-admin-orders/shop-admin-orders.component';
import { SalesReportComponent } from './shop_admin_section/shop-admin-reports/sales-report/sales-report.component';
import { ShopAdminReportsComponent } from './shop_admin_section/shop-admin-reports/shop-admin-reports.component';

const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:"login"},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'addcategory',component:AddCategoryComponent},
  {path:'shop',component:ShopComponent},
  {path:'addshop',component:AddShopComponent},
  {path:'restaurantmenu',component:RestaurantMenuComponent},
  {path:'addrestaurantmenu',component:AddRestaurantMenuComponent},
  {path:'shopmenu',component:ShopMenuComponent},
  {path:'addshopmenu',component:AddShopMenuComponent},
  {path:'pincodes',component:PincodesComponent},
  {path:'orders',component:OrdersComponent},
  {path:'deliveryboys',component:DeliveryBoysComponent},
  {path:'users',component:UsersComponent},
  {path:'addpincodes',component:AddPincodesComponent},
  {path:'editpincodes',component:EditPincodesComponent},
  {path:'adddeliveryboys',component:AddDeliveryBoysComponent},
  {path:'editdeliveryboys',component:EditDeliveryBoysComponent},
  {path:'generalmenu',component:GeneralMenuComponent},
  {path:'generalshopmenu',component:GeneralShopMenuComponent},
  {path:'addgeneralmenu',component:AddGeneralMenuComponent},
  {path:'addgeneralshopmenu',component:AddGeneralShopMenuComponent},
  {path:'offers',component:OffersComponent},
  {path:'addoffers',component:AddOffersComponent},
  {path:'settings',component:SettingsComponent},
  {path:'addsettings',component:AddSettingsComponent},
  {path:'masteradminphonenumber',component:MasteradminphonenumberComponent},
  {path:'walletpoints',component:WalletpointsComponent},
  {path:'reports',component:ReportsComponent},
  {path:'sales',component:SalesComponent},
  {path:'purchase',component:PurchaseComponent},
  {path:'delivery',component:DeliveryComponent},
  {path:'coursetype',component:CoursetypeComponent},
  {path:'add-coursetype',component:AddCoursetypeComponent},
  {path:'shopadminmenuname',component:ShopAdminMenuNameComponent},
  {path:'shopadminoffers',component:ShopAdminOffersComponent},
  {path:'shopadminorders',component:ShopAdminOrdersComponent},
  {path:'shopadminreports',component:ShopAdminReportsComponent},
  {path:'addshopadminmenuname',component:AddShopAdminMenuNameComponent},
  {path:'addshopadminoffers',component:AddShopAdminOffersComponent},
  {path:'salesreport',component:SalesReportComponent},
  {path:'approvalrequest',component:ApprovalRequestComponent},
  {path:'menuapproval',component:MenuApprovalComponent},
  {path:'priceupdator',component:PriceUpdatorComponent},
  {path:'addpriceupdator',component:AddPriceUpdatorComponent},
  {path:'preorders',component:PreOrdersComponent},
  {path:'addpreorders',component:AddPreOrdersComponent},
  {path:'editcategory',component:EditCategoryComponent},
  {path:'editshop',component:EditShopComponent},
  {path:'generalcategory',component:GeneralCategoryComponent},
  {path:'addgeneralcategory',component:AddGeneralCategoryComponent},
  {path:'editgeneralcategory',component:EditGeneralCategoryComponent},
  {path:'editgeneralmenu',component:EditGeneralMenuComponent},
  {path:'editcoursetype',component:EditCoursetypeComponent},
  {path:'edit-rest-menu',component:EditRestaurantMenuComponent},
  {path:'edit-shop-menu',component:EditShopMenuComponent},
  {path:'edit-general-shop-menu',component:EditGeneralShopMenuComponent},
  {path:'edit-offers',component:EditOffersComponent},
  {path:'shopcredentials',component:ShopcredentialsComponent},
  {path:'addshopcredentials',component:AddShopCredentialsComponent},
  {path:'editshopcredentials',component:EditShopCredentialsComponent},
  {path:'chatbox',component:ChatBoxComponent},
  {path:'addchatbox',component:AddChatBoxComponent},
  {path:'editchatbox',component:EditChatBoxComponent},
  {path:'admincredentials',component:AdminCredentialsComponent},
  {path:'addadmincredentials',component:AddAdminCredentialsComponent},
  {path:'editadmincredentials',component:EditAdminCredentialsComponent},
  {path:'upi',component:UpiComponent},
  {path:'addupi',component:AddUpiComponent},
  {path:'editupi',component:EditUpiComponent},
  {path:'locationadminviewrequest',component:LocationAdminViewPendingrequestComponent},
  {path:'addmenuforapproval',component:AddmenuForApprovalComponent},
  {path:'locationadminphonenumber',component:LocationAdminPhonenumberComponent},
  {path:'addlocationadminphonenumber',component:AddLocationAdminPhonenumberComponent},
  {path:'editlocationadminphonenumber',component:EditLocationAdminPhonenumberComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
