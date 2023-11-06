import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateService } from 'src/app/Services/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form!: FormGroup;
  isSubmit = false;

  constructor(private fb: FormBuilder, private v: ValidateService){}

  ngOnInit(){
    this.form = this.fb.group({
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      DOB : ['',Validators.required],
      email : ['', [Validators.required, Validators.email]],
      phone:  ['',Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      
    },

    this.v.passwordMatch('password', 'confirm_password')
    // [CustomValidators.MatchValidator('password', 'confirmPassword')]
    )
  }

  get confirmPasswordControl() {
    return this.form.get('confirmPassword');
  }

  public getConfirmPasswordError() {
    const control: AbstractControl 
    | any= this.confirmPasswordControl;
    return control.hasError('required')
      ? 'Please confirm the  password'
      : control.hasError('passwordMismatch')
      ? 'The passwords do not match'
      : '';
  }
  
  Submit() {   
    console.log(this.form);
    if (!this.form.valid) {
      this.isSubmit = true;
    }
    else{
      this.isSubmit = false;
      let model = this.form.value;
      debugger
    }


  }

}


                                                                                                                                                                                                                                    