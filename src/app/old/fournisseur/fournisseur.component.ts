import { Component } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent {
  public idFournisseur: number;
  public code: string;
  public libelle: string;

  public hide: boolean;

  constructor() {
    this.idFournisseur = 105;
    this.code = 'A104B89';
    this.libelle = 'MyTeck';
    this.hide = false;
  }

  public handleclick() {
    this.hide = true;
    console.log("this.hide");
  }
}