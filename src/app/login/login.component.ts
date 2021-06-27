import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginModelService } from './services/login-model.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    route: ActivatedRoute,
    private router: Router,
    fb: FormBuilder,
    private loginModel: LoginModelService
  ) {
    this.loginForm = fb.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  guardarClick(form: FormGroup) {
    if (form.valid) {
      const usuario = form.value;
      this.loginModel.login(usuario).subscribe(
        (res) => {
          localStorage.setItem('token', res);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
