import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { matchValidator } from 'src/app/Validators/passwordMatch';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form!: FormGroup;
  isSubmit = false;

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.form = this.fb.group({
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      DOB : ['',Validators.required],
      email : ['', [Validators.required, Validators.email]],
      phone:  ['',Validators.required],      
     
      password: ['', [
        Validators.required,
        // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),
        matchValidator('confirm_password', true)
      ]],
      confirm_password: ['', [
        Validators.required,
        matchValidator('password')
      ]],
    }, 
    )
  }

  // getControl(name: any): AbstractControl | null {

  //   return this.form.get(name)

  // }

 

  Submit() {         
    if (!this.form.valid) {
      this.isSubmit = true;
    }
    else{
      this.isSubmit = false;
      let model = this.form.value;
      // debugger
    }


  }

}


                                                                                                                                                                                                                                    