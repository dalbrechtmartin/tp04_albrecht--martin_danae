import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'CarteListe',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent implements OnInit, OnDestroy {
  cartes = [
    // Carte de test
    {
      nom: 'Danaé ALBRECHT--MARTIN',
      code: '4234 5678 9012 3456',
      ccv: '666',
      mois: 3,
      annee: 26
    },
    {
      nom: 'Edouard MANGEL',
      code: '5234 5678 9012 3456',
      ccv: '123',
      mois: 6,
      annee: 25
    },
    {
      nom: 'Edouard MANGEL',
      code: '4234 5678 9012 3456',
      ccv: '123',
      mois: 6,
      annee: 25
    },
    {
      nom: 'Edouard MANGEL',
      code: '5234 5678 9012 3456',
      ccv: '123',
      mois: 6,
      annee: 25
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
