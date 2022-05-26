import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  router: Router;
  constructor(private authService: AuthService, router: Router) { this.router = router;}
  Login = new FormGroup({
    user: new FormControl(null),
    senha: new FormControl(null),
    tipo: new FormControl(null)
  });
  ngOnInit(): void {
    
  }
  Entrar(): void{
    this.authService.login(this.Login.value.user, this.Login.value.senha).subscribe(
    success => {      
      localStorage.setItem('tipo', this.Login.value.tipo);
      localStorage.setItem( 'token', success.access);
      if(this.Login.value.tipo == "empresa"){
        this.router.navigate(['/cadastro/vantagem']);
      }else{
        this.router.navigate(['/home']);
      }
    },
    err =>{
      console.log(err);
    });
  }
  

}
