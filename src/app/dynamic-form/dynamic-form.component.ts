import {
  AfterContentInit,
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopupModal } from '../popup/popup.modal';
import * as formService from '../shared/fields';
import { generateForm } from '../shared/form-generate';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent
  implements OnInit, AfterContentInit, AfterViewChecked {
  public formGroup: FormGroup;
  public form = formService.segment['userForm'].fields;
  public showPopup: boolean = false;
  public modalObj: PopupModal = {
    header: 'Fill the form',
    // content: 'here you can add content',
    headerStyles: {
      color: 'red',
      fontWeight: 800,
    },
    // subHeader: 'Here you can add sub heading',
    successBtn: true,
    cancelBtn: true,
    extraBtn:'click this btn',
    successBtnStyles: {
      color: 'red',
      backgroundColor: 'yellow',
      border: '2px solid black',
    },
    btnAlign: 'start',
  };

  constructor(
    private fb: FormBuilder,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterContentInit() {
    var fieldArray = generateForm(this.form);
    // fieldArray['hobbies'] = this.fb.array([])
    this.formGroup = this.fb.group(fieldArray);
    this.formGroup.valueChanges.subscribe((val) => {
      console.log(`val`, val);
    });
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {}

  get hobbyArray() {
    return (this.formGroup.get('hobbies') as FormArray).controls;
  }

  onSave() {
    console.log(`this.formGroup`, this.formGroup);
    this.showPopup = false;
  }

  clickMeEvent() {
    console.log(`this.formGroup`, this.formGroup);
  }
}
