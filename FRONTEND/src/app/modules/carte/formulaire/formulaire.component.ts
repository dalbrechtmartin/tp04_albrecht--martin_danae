import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'CarteFormulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent implements OnInit, OnDestroy {
  carteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    const anneeCourante = new Date().getFullYear() % 100; // Récupère les deux derniers chiffres de l'année courante

    this.carteForm = this.fb.group({
      nom: ['', Validators.required],
      code: ['', [Validators.required, Validators.pattern(/^[45][0-9]{15}$/)]], // Code carte = 16 chiffres commençant par 4 ou 5
      ccv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]], // CCV = 3 chiffres
      mois: ['', [Validators.required, Validators.min(1), Validators.max(12), Validators.minLength(1), Validators.maxLength(2)]],
      annee: ['', [Validators.required, Validators.min(anneeCourante), Validators.max(anneeCourante + 3), Validators.minLength(2), Validators.maxLength(2)]] // Une carte est valable 3 ans
    });
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.carteForm.reset();
  }

  onSubmit(): void {
    console.log(this.carteForm.value);
  }

}

