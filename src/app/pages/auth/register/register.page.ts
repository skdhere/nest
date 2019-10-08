import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  register_form: FormGroup;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.register_form = this.formBuilder.group({
        fName: new FormControl('', Validators.compose([
          Validators.maxLength(25),
          Validators.required,
          Validators.pattern('^[a-zA-Z]+$')
        ])),    
        lName: new FormControl('', Validators.compose([
          Validators.maxLength(25),
          Validators.required,
          Validators.pattern('^[a-zA-Z]+$')
        ])),  
        email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        password: new FormControl('', Validators.compose([
          Validators.minLength(5),
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        ])),
    });
  }

  validation_messages = {
    'fName': [
      { type: 'required', message: 'First Name is required.' },
      { type: 'maxlength', message: 'Only 25 characters allowed.' },
      { type: 'pattern', message: 'Only characters allowed' }
    ],   
    'lName': [
      { type: 'required', message: 'Last Name is required.' },
      { type: 'maxlength', message: 'Only 25 characters allowed.' },
      { type: 'pattern', message: 'Only characters allowed' }
    ],   
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
  };

  // On Login button tap, dismiss Register modal and open login Modal
  loginModal() {
    this.navCtrl.navigateRoot('/login');
  }

  register(form) {
    console.log(form);
    this.authService.register(form.value.fName, form.value.lName, form.value.email, form.value.password).subscribe(
      data => {
        this.authService.login(form.value.email, form.value.password).subscribe(
          data => {
          },
          error => {
            console.log(error);
          },
          () => {
            this.navCtrl.navigateRoot('/dashboard');
          }
        );
        this.alertService.presentToast(data['message']);
      },
      error => {
        console.log(error);
      },
      () => {
        
      }
    );
  }
}