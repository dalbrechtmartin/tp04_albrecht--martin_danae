import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarteService } from '../carte.service';

@Component({
  selector: 'CarteFormulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent implements OnInit, OnDestroy {
  carteForm: FormGroup;

  constructor(private fb: FormBuilder, private carteService: CarteService) {
    const anneeCourante = new Date().getFullYear() % 100; // Récupère les deux derniers chiffres de l'année courante

    this.carteForm = this.fb.group({
      nom: ['', Validators.required],
      code: ['', [Validators.required, Validators.pattern(/^[45][0-9]{15}$/)]], // Code carte = 16 chiffres commençant par 4 ou 5
      ccv: ['', [Validators.required, Validators.pattern(/^[0-9]{3}$/)]], // CCV = 3 chiffres
      mois: ['', [Validators.required, Validators.min(1), Validators.max(12), Validators.pattern(/^[0-9]{1,2}$/)]],
      annee: ['', [Validators.required, Validators.min(anneeCourante), Validators.max(anneeCourante + 3), Validators.pattern(/^[0-9]{2}$/)]] // Une carte est valable 3 ans
    });
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.carteForm.reset();
  }

  onSubmit(): void {
    if (this.carteForm.valid) {
      console.log(this.carteForm.value); // Debug

      this.carteService.addCarte(this.carteForm.value);
      this.carteForm.reset(); // Réinitialise le formulaire
    }
  }

}

