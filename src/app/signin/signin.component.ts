import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { generateForm } from '../shared/form-generate'
import * as formService from '../shared/fields';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public formGroup: FormGroup
  public form = formService.segment['signInForm'].fields

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group(generateForm(this.form))
    this.formGroup.valueChanges.subscribe((vasl) => {
      console.log(`object`, vasl)
    })
    // console.log(`this.formGroup`, this.formGroup)
    }

}
