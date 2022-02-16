import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PopupModal } from './popup.modal';

type clickEventType = 'continue' | 'close' | 'extra';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit{
    @Input() modalObj: PopupModal;
    @Output('closeEvent') closed = new EventEmitter();
    @Output('saveChanges') clicked = new EventEmitter<clickEventType>();

    ngOnInit() {
        console.log(`modalObj?.btnAlign`, this.modalObj?.btnAlign)
    }

    // closePopup(){
    //     this.closed.emit();
    // }

    // saveEvent(){
    //     this.saveData.emit();
    // }

    btnClickEvent(type: clickEventType) {
        this.clicked.emit(type);
    }

}