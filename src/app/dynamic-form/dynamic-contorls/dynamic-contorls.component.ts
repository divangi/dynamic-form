import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { template_ref } from '../../shared/fields'

@Component({
  selector: 'app-dynamic-contorls',
  templateUrl: './dynamic-contorls.component.html',
  styleUrls: ['./dynamic-contorls.component.css']
})
export class DynamicContorlsComponent implements OnInit, AfterViewInit {

  @Input() form;
  @Input() key: string;

  constructor() { }
  ngAfterViewInit(): void {
    console.log(`this.key`, this.key, '=====> ', this.fieldObj)
  }

  get fieldObj(){
    return template_ref[this.key]
  }

  get control(){
    return this.form.get(this.key)
  }

  get isInValid(){
    return this.control.invalid && this.control.touched;
  }

  handleFileInput(event) {
    const files: any = Array.from(event.target.files);
    console.log(`handleFileInput`, files)
  }

  ngOnInit(): void {

  }

}
