import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PanelFieldWrapper } from './pannel-wrapper.component';


// const FormlyRootModule = FormlyModule.forRoot({
//   validationMessages: [{ name: 'required', message: 'This field is required' }],
//   wrappers: [
//     { name: 'panel', component: PanelFieldWrapper },
//   ],
// });

@Component({
  selector: 'app-advanced-form',
  standalone: true,
  imports: [
    AgGridAngular,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule,
    CommonModule,
    FormlyMatDatepickerModule,
    MatNativeDateModule,
    FormlyMaterialModule,
    
  ],
  templateUrl: './advanced-form.component.html',
  styleUrls: ['./advanced-form.component.scss'],
})
export class AdvancedFormComponent {
  form = new FormGroup({});
  model = {
    id: 0,
    name: '',
    email: '',
    address: { street: '', city: '', zip: '' },
    phoneNumbers: [{ type: 'Mobile', number: '' }],
    dob: '',
    employment: { jobTitle: '', company: '' },
  };
  options: FormlyFormOptions = {};
  submittedData: any[] = [];

  columnDefs: ColDef[] = [
    { field: 'id', headerName: 'ID', editable: false },
    { field: 'name', headerName: 'Name', editable: true, filter: 'agTextColumnFilter' },
    { field: 'email', headerName: 'Email', editable: true },
    { field: 'address.street', headerName: 'Street', editable: true },
    { field: 'address.city', headerName: 'City', editable: true },
    { field: 'address.zip', headerName: 'ZIP Code', editable: true },
    { field: 'dob', headerName: 'Date of Birth', editable: true },
    { field: 'employment.jobTitle', headerName: 'Job Title', editable: true },
    { field: 'employment.company', headerName: 'Company', editable: true },
  ];

  defaultColDef = {
    sortable: true,
    flex: 1,
    minWidth: 100,
    resizable: true,
  };

  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Full Name',
        placeholder: 'Enter full name',
        required: true,
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email Address',
        placeholder: 'Enter email',
        required: true,
        type: 'email',
      },
      validators: {
        email: {
          expression: (c:any) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(c.value),
          message: 'Invalid email format',
        },
      },
    },
    {
      key: 'dob',
      type: 'datepicker',
      templateOptions: {
        label: 'Date of Birth',
        required: true,
      },
      validators: {
        age: {
          expression: (control:any) => {
            const dob = new Date(control.value);
            const age = new Date().getFullYear() - dob.getFullYear();
            return age >= 18;
          },
          message: 'User must be at least 18 years old',
        },
      },
    },
    {
      key: 'address',
      wrappers: [PanelFieldWrapper],
      templateOptions: { label: 'Address' },
      fieldGroup: [
        {
          key: 'street',
          type: 'input',
          templateOptions: { label: 'Street', required: true },
        },
        {
          key: 'city',
          type: 'input',
          templateOptions: { label: 'City', required: true },
        },
        {
          key: 'zip',
          type: 'input',
          templateOptions: { label: 'ZIP Code', required: true, maxLength: 6 },
        },
      ],
    },
    {
      key: 'employment',
      wrappers: [PanelFieldWrapper],
      templateOptions: { label: 'Employment Details' },
      fieldGroup: [
        {
          key: 'jobTitle',
          type: 'input',
          templateOptions: {
            label: 'Job Title',
            placeholder: 'Enter job title',
          },
        },
        {
          key: 'company',
          type: 'input',
          templateOptions: {
            label: 'Company',
            placeholder: 'Enter company name',
          },
        },
      ],
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  onSubmit() {
    if (this.form.valid) {
      this.model.id = this.submittedData.length + 1;
      this.submittedData = [...this.submittedData, { ...this.model }];
      this.cdr.detectChanges();
      this.form.reset();
    }
  }
}
