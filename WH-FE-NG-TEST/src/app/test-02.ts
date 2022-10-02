/**
 * Update the following components to meet the requirements : 
 * * Bind `field` of [textfield] component to its text input
 * * Pass value of `field` from [textfield] component to [title] property of component [ng-app]
 */
import { Component, Injectable, NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable()
class FormService {
    field:BehaviorSubject<string>;

    constructor() {
        this.field = new BehaviorSubject<string>("");
    }

    setField (value: string) {
        this.field.next(value);
    }
}

@Component({
    selector : 'textfield',
    template : '<input type="text" [(ngModel)]="field" (keyup)="onChange()" />'
})
export class TextField {
    field = "";

    constructor(private formService: FormService) {}
    
    onChange() {
        this.formService.setField(this.field);
    }
}

@Component({
    selector : 'child-component',
    template : `<h2>Title:<h2><br/><textfield></textfield>`
})
export class ChildComponent {

}


@Component({
    selector : 'ng-app',
    template : `<div>
                    <child-component></child-component> <br/>
                    Title is {{title}}
                </div>`
})
export class Test02Component {

    title:string = "";
    subscription: Subscription;

    constructor(private formService: FormService) {}

    ngOnInit() {
        this.subscription = this.formService.field.subscribe((title) => {
            this.title = title;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    
}

@NgModule({
    imports : [
        CommonModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test02Component
            }
        ]),
        FormsModule
    ],
    declarations : [Test02Component,ChildComponent,TextField],
    providers: [FormService]
})
export class Test02Module {};