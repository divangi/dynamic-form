import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  public userForm: FormGroup;
  public gender = ['Male', 'Female']
  public forbiddenName = ['test', 'Hello', '123']

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.userForm = this.fb.group({
      userData: this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3), this.checkForbidenName.bind(this)]],
        email: ['', [Validators.required, Validators.email]]
      }),
      gender: ['Male', Validators.required],
      tasks: this.fb.array([
        this.fb.group({
          tname: ['', Validators.required],
          time: ['12:00 AM', [Validators.required, Validators.pattern("^([1-9]|0[1-9]|1[0-2]):[0-5][0-9] ([AaPp][Mm])$")]]
          // /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
        })
      ], Validators.required)
    })

    this.userForm.statusChanges.subscribe((value) => {
      // console.log(`value`, value)
    })

    // this.userForm.patchValue({
    //   userData: {
    //     name: 'helllooG',
    //     email: 'test@gmail.com'
    //   }
    // })
  }

  ngAfterViewInit() {

  }

  get getTaskArray() {
    return (this.userForm.get('tasks') as FormArray).controls
  }


  get userData() {
    return this.userForm.get('userData');
  }

  get name() {
    return this.userData.get('name');
  }

  get email() {
    return this.userData.get('email');
  }

  onSubmit() {
    // console.log(`this.userForm`, this.userForm)
  }

  addNewTask() {
    this.getTaskArray.push(
      this.fb.group({
        tname: this.fb.control(''),
        time: this.fb.control('12:00 AM')
      })
    )
  }

  removeControl(index: number) {
    this.getTaskArray.splice(index, 1);
  }

  checkForbidenName(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenName.includes(control.value)) {
      return { 'forbiddenName': true };
    }
    return null;
  }

  asyncValidator(control: FormControl) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ 'disableWithoutReason': true })
      }, 1500)
    })
  }

}
