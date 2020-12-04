import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class EasydealService {
  BASEURL;
  apiUrl="http://shopgi.in/";
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
  getshop(){
    console.log(this.apiUrl);

    return this.http.get(this.apiUrl+'shop');
  }
  addshop(formData)
  {
    return this.http.get(this.apiUrl+'shop/post');

  }
}
