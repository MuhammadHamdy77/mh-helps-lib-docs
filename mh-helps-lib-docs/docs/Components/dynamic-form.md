
---

### `import {  DynamicFormComponent } from 'mh-helps-lib'`
```html
# DynamicFormComponent

Generate form fields dynamically.

## Usage
```html
# this all field dynamic 

<div class="form-group" [formGroup]="parentFormGroup" [ngClass]="{'password-input': type === 'password', 'select-box': inputType === 'select'}">
  <label *ngIf="label" class="label" [for]="controlName" [ngClass]="{ required: isRequired && !isDisabled }">
    {{ label | translate }}
  </label>
  @switch (inputType) {
    @case ('input') {
      <input class="form-control"
      [maxlength]="maxLength || 100"
      [type]="type == 'password' ? typeInput : type"
      [placeholder]="placeholder | translate"
      [formControlName]="controlName"
      [id]="controlName"
      (keyup)="type == 'password' ? onInputChanged($event) : null"
      (input)="onChange($event)"
      (blur)="onBlur($event)"
      leadingStart [ngClass]="{
        'is-invalid':
        Controle?.errors &&
          (Controle?.dirty ||
          Controle?.touched || isSubmitted)
      }">
      @if(type == 'password') {
        <button type="button" class="icon-end show-password" (click)="showPassword()">
          <i
          [ngClass]="{
            'fa-thin fa-eye':typeInput === 'text',
            'fa-light fa-eye-slash':typeInput == 'password'
          }"></i>
        </button>
      }
    }
    @case('select') {
      <select
      class="form-control" 
      [attr.disabled]="true"
      [formControlName]="controlName"
      [id]="controlName" (change)="onSelectionChange($event)"
      [ngClass]="{ 'is-invalid': Controle?.errors && (Controle?.dirty ||  Controle?.touched || isSubmitted) }">
        <option [ngValue]="null" selected>
          {{'pleaseSelect' | translate}}
        </option>
        @for(item of selectList; track item) {
          <option [value]="item.value">
            {{item.name}}
          </option>
        }
      </select>
      <span class="icon fs-18">
        <i class="fa-light fa-angle-down"></i>
      </span>
    }
    @case('textarea') {
      <textarea class="form-control"  [placeholder]="placeholder | translate"
      (resize)="true"
      [formControlName]="controlName" maxlength="500"
      [rows]="rows" leadingStart [ngClass]="{
        'is-invalid':
        Controle?.errors &&
          (Controle?.dirty ||
          Controle?.touched || isSubmitted)
      }"></textarea>
    }
    @case('radio') {
      <div>
        <div class="radio_btns_wrapper">
          <div class="d-flex">
            <div class="check_wrapper" *ngFor="let option of radioOptions">
              <p-radioButton
              [name]="controlName"
              [value]="option.value"
              [formControlName]="controlName"
              [inputId]="option.id" 
              ></p-radioButton>
              <label [for]="option.id" class="label_input">{{
                option.label | translate
              }}</label>
            </div>
          </div>
        </div>
    
      </div>
    }
@case('date') {
      <div>
        <p-calendar placeholder="dd/mm/yyyy" [formControlName]="controlName" [dateFormat]="dateFormat" [iconDisplay]="'input'" 
        [showIcon]="true" (onSelect)="onSelectionChange($event)"  />
      </div>
      <div [hidden]="!isUnderAgeError" class="error-message">
        {{ 'mustBeOlderThan15YearsOld' | translate }}
      </div>
    }
  }
 <!-- If Has Errors with Control -->
  @if(Controle?.errors && (Controle?.dirty || Controle?.touched || isSubmitted)) {
    <div class="error-message">
      @if(Controle?.errors?.['required']) {
        <p class="error-message">
          {{'thisFieldIsRequired' | translate}}
        </p>
      }
      @if(Controle?.errors?.['maxlength']) {
        <p class="error-message">
          {{'maxInput100' | translate}}
        </p>
      }
      @if (Controle?.errors?.['pattern'] || Controle?.errors?.['invalidNumber']) {
        <p class="error-message">
          {{patternErrMessage | translate}}
        </p>
      }
    </div>
  }
</div>

```html
# if you want used you can see Example

<app-dynamic-form-input 
  [label]="'password'" 
  [controlName]="'password'" 
  [inputType]="'input'" 
  [type]="'password'" 
  [parentFormGroupValue]="loginForm" 
  [placeholder]="'password'" 
  [isRequired]="true"
  [isSubmitted]="formSubmitted" /> 