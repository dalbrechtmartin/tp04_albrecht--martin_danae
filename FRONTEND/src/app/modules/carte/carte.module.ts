import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ListeComponent } from './liste/liste.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarteService } from './carte.service';



@NgModule({
  declarations: [
    FormulaireComponent,
    ListeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [CarteService],
  exports: [
    FormulaireComponent,
    ListeComponent
  ]
})
export class CarteModule { }
