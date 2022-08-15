import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import * as _ from "lodash";
import * as moment from "moment";
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { CustomersService } from '../services/customers.service';
import { Customer } from '../Dtos/Customer';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { add } from 'lodash';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent {
  customer!: Customer;
  validateForm: FormGroup;
  message!: string;
  status: 'success' | 'info' | 'warning' | 'error' = 'success'
  requestSent: boolean = false;
  autoTips: Record<string, Record<string, string>> = {
    en: {
      required: 'Input is required'
    },
    default: {
      email: 'The input is not valid email'
    }
  };

  constructor(private fb: FormBuilder, private customersService: CustomersService, private router: Router, private activatedRoute: ActivatedRoute, private nzMessageService: NzMessageService) {
    // use `MyValidators`
    const { required, maxLength, minLength, email, mobile, bankAccountNumber } = MyValidators;
    this.validateForm = this.fb.group({
      Firstname: ['', [required, maxLength(12), minLength(6)]],
      Lastname: ['', [required, maxLength(12), minLength(6)]],
      DateOfBirth: ['', [required]],
      PhoneNumber: ['', [required, mobile]],
      Email: ['', [required, email], [this.UniquenessAsyncValidator]],
      BankAccountNumber: ['', [required, bankAccountNumber], [this.UniquenessAsyncValidator]]
    });

    this.activatedRoute.queryParams.subscribe(params => {
      var endPoint = this.router.url.split('?')[0]
      var email = params['email']
      if (endPoint === '/Edit_Customer' && email) {
        this.customersService.getCustomer('Email', email).subscribe(customer => {
          this.customer = customer;
          this.validateForm.reset(this.customer)
        })
      }
    })
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.requestSent = true;
      var newCustomer: Customer = this.validateForm.value;
      newCustomer.DateOfBirth = moment(newCustomer.DateOfBirth).format("YYYY-MM-DD").toString()

      if (this.customer) {
        if (newCustomer.Firstname == this.customer.Firstname && newCustomer.Lastname === this.customer.Lastname && newCustomer.DateOfBirth === this.customer.DateOfBirth) {
          this.update(this.customer, newCustomer)
        } else {
          this.customersService.customerExist(this.validateForm.value).subscribe(data => {
            if (data) {
              this.requestSent = false;
              this.nzMessageService.error('There is another Customer with this Informations.')
              this.message = 'There is a Customer With same Firstname, Lastname and DateOfBirth.'
              this.status = 'error'
            } else {
              this.update(this.customer, newCustomer)
            }
          })
        }
      } else {
        this.customersService.customerExist(this.validateForm.value).subscribe(data => {
          console.log('Search result', data)
          if (data) {
            this.requestSent = false;
            this.nzMessageService.error('There is another Customer with this Informations.')
            this.message = 'There is a Customer With same Firstname, Lastname and DateOfBirth.'
            this.status = 'error'
          } else {
            this.add(newCustomer)
          }
        })
        console.log('submit', this.validateForm.value);
      }

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  add(newOne: Customer) {
    this.status = 'success'
    this.customersService.addCustomer(newOne)
    this.nzMessageService.success('Successfully added new Customer.')
    this.navigateToCustomers();
  }
  update(oldOne: Customer, newOne: Customer) {
    this.status = 'success'
    this.customersService.updateCustomer(oldOne, newOne)
    this.nzMessageService.success('Successfully updated the Customer Informations.')
    this.navigateToCustomers();
  }
  navigateToCustomers(){
    setTimeout(() => {
      this.message = '';
      this.requestSent = false;
      this.router.navigate(['/Customers'])
    }, 500);
  }
  UniquenessAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<MyValidationErrors | null>) => {
      var keys = _.keys(this.validateForm.controls)
      var key = '';
      for (var i = 0; i < keys.length; i++) {
        if (this.validateForm.controls[keys[i]] == control) {
          key = keys[i]
          break;
        }
      }
      if (this.customer && (<any>this.customer)[key] === control.value) {
        observer.next(null);
        observer.complete();
      } else {
        this.customersService.getCustomer(key, control.value).subscribe(data => {
          if (data) {
            observer.next({
              duplicated: { en: `The ${key} is taken!` }
            });
          } else {
            observer.next(null);
          }
          observer.complete();

        })
      }

    });
}

export type MyErrorsOptions = { en: string } & Record<string, NzSafeAny>;
export type MyValidationErrors = Record<string, MyErrorsOptions>;

export class MyValidators extends Validators {
  static override minLength(minLength: number): ValidatorFn {
    return (control: AbstractControl): MyValidationErrors | null => {
      if (Validators.minLength(minLength)(control) === null) {
        return null;
      }
      return { minlength: { en: `MinLength is ${minLength}` } };
    };
  }

  static override maxLength(maxLength: number): ValidatorFn {
    return (control: AbstractControl): MyValidationErrors | null => {
      if (Validators.maxLength(maxLength)(control) === null) {
        return null;
      }
      return { maxlength: { en: `MaxLength is ${maxLength}` } };
    };
  }

  static mobile(control: AbstractControl): MyValidationErrors | null {
    const value = control.value;

    if (isEmptyInputValue(value)) {
      return null;
    }

    return isMobile(value)
      ? null
      : { mobile: { en: `Mobile phone number is not valid` } };
  }
  static override email(control: AbstractControl): MyValidationErrors | null {
    const value = control.value;

    if (isEmptyInputValue(value)) {
      return null;
    }

    return isEmail(value)
      ? null
      : { mobile: { en: `Email format is not valid` } };
  }

  static bankAccountNumber(control: AbstractControl): MyValidationErrors | null {
    const value = control.value;

    if (isEmptyInputValue(value)) {
      return null;
    }

    return isBankAccount(value)
      ? null
      : { mobile: { en: `Bank Account Number is not valid` } };
  }
}

function isEmptyInputValue(value: NzSafeAny): boolean {
  return value == null || value.length === 0;
}

function isMobile(value: string): boolean {
  return typeof value === 'string' && /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value);
}

function isEmail(value: string): boolean {
  return typeof value === 'string' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
}

function isBankAccount(value: string): boolean {
  return typeof value === 'string' && /^\d{5}$/gm.test(value)
}
