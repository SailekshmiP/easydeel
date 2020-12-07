import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class EasydealService {
  BASEURL;
  apiUrl="https://shopgi.in/";
  constructor(private http:HttpClient) 
  { 
  this.apiUrl;
    
  }
  getcat(){
    console.log(this.apiUrl);
    
    return this.http.get(this.apiUrl+'category');
  }
  addcategory(data)
  {
    return this.http.post(this.apiUrl+'category/post',data);
  }
  editcategory(formData,cat_id)
  {
    return this.http.patch(this.apiUrl+'category/edit/'+cat_id,formData);

  }

  getshop(){
    console.log(this.apiUrl);

    return this.http.get(this.apiUrl+'shop');
  }
  addshop(formData)
  {
    return this.http.post(this.apiUrl+'shop/post',formData);
  }
  editshop(formdata)
  {
    return this.http.patch(this.apiUrl+'shop/post',formdata);

  }
  getalllocations(){

    return this.http.get(this.apiUrl+'location');
  }

  addlocation(r){
    return this.http.post(this.apiUrl+'location/post',r);
  }

  addcourse(r){
    return this.http.post(this.apiUrl+'cource/post',r);
  }
  getallcoursetype()
  {
    return this.http.get(this.apiUrl+'cource');
    
  }
  addrestmenu(r)
  {
    return this.http.post(this.apiUrl+'menurest/post',r);

  }
  getallmenu()
  {
    return this.http.get(this.apiUrl+'menurest');

  }
  addrestmenusss(fomrdata)
  {
    return this.http.post(this.apiUrl+'addrestaurantmenu/post',fomrdata);

  }
  getallmenus()
  {
    return this.http.get(this.apiUrl+'addrestaurantmenu');

  }
}
