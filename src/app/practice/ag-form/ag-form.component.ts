import { Component, ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



@Component({
  selector: 'app-ag-form',
  standalone: true,
  imports: [
    AgGridAngular,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule,
    CommonModule,
    MatNativeDateModule,
    FormlyMatDatepickerModule
  ],
  templateUrl: './ag-form.component.html',
  styleUrls: ['./ag-form.component.scss'],
})
export class AgFormComponent {

  constructor(private cdr: ChangeDetectorRef) {}

  form = new FormGroup({});
  model = {
    id: 0,
    name: '',
    email: '',
    country: '',
    city: '',
    gender: '',
    profession: '',
    phone: '',
    address: '',
    dob: '',
  };
  options: FormlyFormOptions = {};
  submittedData: any[] = [];
  

  // Formly fields with async and dependent fields
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter name',
        required: true,
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        placeholder: 'Enter email',
        required: true,
        type: 'email',
      },
      validators: {
        email: {
          expression: (c:any) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(c.value),
          message: 'Invalid email address',
        },
      },
    },
    {
      key: 'country',
      type: 'select',
      templateOptions: {
        label: 'Country',
        placeholder: 'Select country',
        required: true,
        options: [],
        loading: true,
      },
      hooks: {
        onInit: (field) => {
          field.templateOptions!.options = of([
            { label: 'Bangladesh', value: 'bangladesh' },
            { label: 'Nepal', value: 'nepal' },
            { label: 'India', value: 'india' },
          ]).pipe(delay(500)); // Simulate async loading
          field.templateOptions!['loading'] = false;
        },
      },
    },
    {
      key: 'city',
      type: 'select',
      templateOptions: {
        label: 'City',
        placeholder: 'Select city',
        required: true,
        options: [],
      },
      hooks: {
        onInit: (field) => {
          field.form!.get('country')!.valueChanges.pipe(
            switchMap((country) => {
              if (country === 'bangladesh') {
                return of([
                  { label: 'Dhaka', value: 'dhaka' },
                  { label: 'Magura', value: 'magura' },
                ]);
              } else if (country === 'nepal') {
                return of([
                  { label: 'Kathmundu', value: 'kathmundu' },
                  { label: 'Kalinchowk', value: 'kalinchowk' },
                ]);
              } else if (country === 'India') {
                return of([
                  { label: 'Delhi', value: 'delhi' },
                  { label: 'Kolkata', value: 'kolkata' },
                ]);
              }
              return of([]);
            })
          ).subscribe((options) => {
            field.templateOptions!.options = options;
          });
        },
      },
    },
    {
      key: 'gender',
      type: 'select',
      templateOptions: {
        label: 'Gender',
        options: [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
          { label: 'Other', value: 'other' },
        ],
      },
    },
    {
      key: 'profession',
      type: 'input',
      templateOptions: {
        label: 'Profession',
        placeholder: 'Enter profession',
      },
    },
    {
      key: 'phone',
      type: 'input',
      templateOptions: {
        label: 'Phone Number',
        placeholder: 'Enter phone number',
        required: true,
        type: 'tel',
      },
      validators: {
        phone: {
          expression: (c:any) => /^\+?[0-9]{10,15}$/.test(c.value),
          message: 'Invalid phone number format',
        },
      },
    },
    {
      key: 'address',
      type: 'textarea',
      templateOptions: {
        label: 'Address',
        placeholder: 'Enter address',
        rows: 3,
      },
    },
    {
      key: 'dob',
      type: 'datepicker',
      templateOptions: {
        label: 'Date of Birth',
        placeholder: 'Select date of birth',
        required: true,
      },
    },
  ];


  columnDefs: ColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'email', headerName: 'Email' },
    { field: 'country', headerName: 'Country' },
    { field: 'city', headerName: 'City' },
    { field: 'gender', headerName: 'Gender' },
    { field: 'profession', headerName: 'Profession' },
    { field: 'phone', headerName: 'Phone' },
    { field: 'address', headerName: 'Address' },
    { field: 'dob', headerName: 'Date of Birth' },
  ];
  defaultColDef = {
    flex:1,
    minWidth:100
  }

  // ngOnInit() {}
 
  onSubmit() {
    if (this.form.valid) {
      this.model.id = this.submittedData.length + 1;
      this.submittedData = [...this.submittedData, { ...this.model }];
      this.cdr.detectChanges();
      console.log("data",this.submittedData);
      this.form.reset();
    }
  }
}

