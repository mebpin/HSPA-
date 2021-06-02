import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerationForm : FormGroup;
  user : IUser;
  userSubmitted =false;
  constructor( private userService:UserService , private alertifyService: AlertifyService) {}

  ngOnInit() {
    this.registerationForm = new FormGroup({
      fullname : new FormControl(null, Validators.required),
      email : new FormControl(null, [Validators.required,Validators.email]),
      userName : new FormControl(null, [Validators.required,Validators.minLength(4)]),
      password : new FormControl(null, [Validators.required,Validators.minLength(8)]),
      confirmPassword : new FormControl(null, Validators.required),
      mobile : new FormControl(null, Validators.required)
    },this.passwordMatchingValidator
    );

   //this.createRegisterationForm();
  }
  //custom validator
  passwordMatchingValidator(fg:FormGroup):Validators{
    return fg.get('password').value === fg.get('confirmPassword').value? null:
    {notmatched:true};
  }
  /* createRegisterationForm(){
    this.formBuilder.group({

      fullname : ['',Validators.required ],
      email : ['', [Validators.required,Validators.email]],
      password : ['', [Validators.required,Validators.minLength(8)]],
      confirmPassword : ['', Validators.required],
      mobile : ['', Validators.required],
      },
      {
        Validators: this.passwordMatchingValidator
      }
    );
  } */

  onSubmit(){
    console.log(this.registerationForm);
    this.userSubmitted=true;
    if(this.registerationForm.valid){
      //this.user = Object.assign(this.user,this.registerationForm.value)
      //console.log(this.user);
      this.userService.addUser(this.userData());
      this.registerationForm.reset();
      this.alertifyService.success('Congrtulations you have been successfully registered!');
      this.userSubmitted=false;
    } else{
      this.alertifyService.error('Kindly provide the required information befor submission !');

    }


  }
  userData():IUser{
    return this.user={
      fullName:this.fullName.value,
      email:this.email.value,
      userName: this.userName.value,
      password:this.password.value,
      mobile:this.mobile.value
    }
  }

  //getter methods for all from controls
  get fullName(){
    return this.registerationForm.get('fullname') as FormControl;
  }
  get email(){
    return this.registerationForm.get('email') as FormControl;
  }
  get userName(){
    return this.registerationForm.get('userName') as FormControl;
  }
  get password(){
    return this.registerationForm.get('password') as FormControl;
  }
  get cpassword(){
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registerationForm.get('mobile') as FormControl;
  }

}
