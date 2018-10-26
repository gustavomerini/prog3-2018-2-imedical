import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatDividerModule,
  MatExpansionModule,
  MatSnackBarModule
} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatStepperModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatStepperModule
  ]
})
export class MaterialModule {}
