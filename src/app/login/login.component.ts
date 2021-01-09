import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from '../_services/easydeal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password:any;
  userName:any;
  resposne:any;
  constructor(private router:Router,private eaydeelservice:EasydealService,private toater:ToastrService) { }

  ngOnInit() {

    
  }

  shopadmin(){

    localStorage.setItem("loginstatus",JSON.stringify("shopadmin"));
    this.router.navigate(['/home']);
  }
  Masteradminlogin()
  {

    let req = {
      "userName":this.userName,
      "password":this.password
    }

    this.eaydeelservice.login(req).subscribe(
      data =>{
          console.log(data)
          this.resposne = data['responce'];
          this.toater.success("Login Succesfully");
          if(this.resposne['role']==1)
          {
          localStorage.setItem("loginstatus",JSON.stringify("masteradmin"));
          localStorage.setItem("userdetails",JSON.stringify(this.resposne));

          this.router.navigate(['/home']);
          }
          else  if(this.resposne['role']==2){
            localStorage.setItem("loginstatus",JSON.stringify("locationamin"));
            localStorage.setItem("userdetails",JSON.stringify(this.resposne));
            this.router.navigate(['/home']);
          }
          else  if(this.resposne['role']==3){
            localStorage.setItem("loginstatus",JSON.stringify("shopadmin"));
            localStorage.setItem("userdetails",JSON.stringify(this.resposne));
            this.router.navigate(['/home']);
          }
      },
      error =>{

      }
    )
 


  }
}
