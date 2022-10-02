/**
 * Update the following components to meet the requirements : 
 * 
 * * Bind [email] property to input[name="email"]
 * * Bind [password] property to input[name="password"]
 * 
 * Without using angular forms, validate both fields so that :
 * * email is in correct format ( ex: ends with @a.com)
 * * password contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters in length
 * * The fields should be validated when trying to submit the form
 * * Prevent the form from doing an actual form submit and instead, after validation pass, turn on the [logged_in] flag
 * 
 * You can add error messages below each field that shows if the field is not valid
 */
import { Component, NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector : 'ng-app',
    template : `<form (submit)="submitHandler($event)">
                    <h2>Login</h2>
                    <br/>
                    <input type="email" value="" name="email" [(ngModel)]="email" placeholder="Email:" />
                    <div *ngIf="emailError" style="color: red">{{emailError}}</div>
                    <br/>
                    <input type="password" value="" name="password" [(ngModel)]="password" placeholder="Password:" />
                    <div *ngIf="passwordError" style="color: red">{{passwordError}}</div>
                    <button type="submit">Submit</button>
                    <br/><br/>
                    <div *ngIf="logged_in">Logged In!</div>
                </form>`
})
export class Test03Component {

    email:string = "";
    password:string = "";
    
    emailError:string = "";
    passwordError:string = "";

    logged_in = false;

    submitHandler(event: SubmitEvent) {
        event.preventDefault();
        // reset state
        this.emailError = this.passwordError = "";
        this.logged_in = false;
        // -- end reset
        
        if (!this.email) {
            this.emailError = "Email is required."
            return;
        }
        if (!/^[a-zA-Z0-9_.+-]+@\w+\.\w{2,}$/.test(this.email)) {
            this.emailError = "Invalid Email.";
            return;
        }

        if (!this.password) {
            this.passwordError = "Password is required."
            return;
        }

        if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(this.password)) {
            this.passwordError = "Invalid Password: your password should contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters in length.";
            return;
        }
        this.logged_in = true;
    }
}

@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test03Component
            }
        ])
    ],
    declarations : [Test03Component]
})
export class Test03Module {};