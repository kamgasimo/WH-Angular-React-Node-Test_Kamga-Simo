/**
 * In the following component, update the code so that when the value of the [loan-amount] is changed:
 * * If it's blank or 0, the values of [monthly_payment] and [late_payment] becomes "N/A",
 * * If it has a value, the value of [monthly_payment] becomes 2% of [loan-ammount] and the value of [late_payment] becomes 5% of [monthly_payment].
 * * Both [monthly_payment] and [late_payment] should print in the template in currency format : $1,234
 */

import { Component, Input,NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

@Component({
    selector : 'ng-app',
    template : `<div>
                    <h2>Loan Details</h2>
                    <b>Loan Amount:</b> <input name="loanAmount" [(ngModel)]="loan_amount" (keyup)="onLoanAmountChanged()" type="number"/> <br/>
                    <b>Monthly Payment:</b> {{convertToCurrencyFormat(monthly_payment)}} <br/>
                    <b>Late Payment Fee : {{convertToCurrencyFormat(late_payment)}}</b> <br/>
                </div>`
})
export class Test01Component {

    loan_amount:number = 20500;
    monthly_payment:number|string;
    late_payment:number|string;

    ngOnInit() {
        this.onLoanAmountChanged();
    }

    convertToCurrencyFormat (number: number|string): number|string {
        return typeof number == 'number' ? number.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
          }) : number
    }

    onLoanAmountChanged() {
        this.monthly_payment = this.loan_amount ? this.loan_amount * 2/100 : 'N/A';
        this.late_payment = this.loan_amount ? this.loan_amount * 5/100 : 'N/A';
    }
}

@NgModule({
    imports : [
        RouterModule.forChild([
            {
                path : "",
                component : Test01Component
            }
        ]),
        FormsModule
    ],
    declarations : [Test01Component]
})
export class Test01Module {}