import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  constructor(private auth: AngularFireAuth, private router: Router) {}
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  changeMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit() {
    if (this.isLoginMode === false) {
      this.auth.createUserWithEmailAndPassword(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      );
    } else {
      this.auth
        .signInWithEmailAndPassword(
          this.loginForm.get('email')?.value,
          this.loginForm.get('password')?.value
        )
        .then(() => {
          this.router.navigate(['/dashboard']);
        });
    }
  }
  ngOnInit(): void {}
}
