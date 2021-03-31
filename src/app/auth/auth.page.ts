import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLogin = true
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }


  onLogin(){
    this.authService.login();
    this.router.navigateByUrl('/places/tabs/discover')
  }
  onSubmit(form){
    console.log(form)
  }
  onSwitchAuthMode(){
    this.isLogin = !this.isLogin;
  }
}
