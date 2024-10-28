import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-sub-header',
  standalone: true,
  imports: [MatFormFieldModule,MatSelectModule,MatInputModule],
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss'
})
export class SubHeaderComponent {

}
