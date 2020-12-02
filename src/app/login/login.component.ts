import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  shopadmin(){
    localStorage.setItem("loginstatus",JSON.stringify("shopadmin"));
    this.router.navigate(['/home']);
  }
  Masteradminlogin()
  {
    localStorage.setItem("loginstatus",JSON.stringify("masteradmin"));
    this.router.navigate(['/home']);


  }
}
