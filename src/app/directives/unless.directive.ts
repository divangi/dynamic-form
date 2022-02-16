import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[unless]'
})
export class UnlessDirective{


    // constructor(private templateRef: TemplateRef<any>,
    //     private vfRef: ViewContainerRef){

    // }



    // @Input() set unless(condition: boolean){
    //     if(!condition){
    //         this.vfRef.createEmbeddedView(this.templateRef)
    //     } else {
    //         this.vfRef.clear()
    //     }
    // }    
}