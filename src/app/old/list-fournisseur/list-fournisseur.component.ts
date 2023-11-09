import { Component } from '@angular/core';
import { Fournisseur } from '../models/fournisseur';
@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent {
  list: Fournisseur[] = [
    { idFournisseur: 1, code: "1ABC4522", libelle: "hp" },
    { idFournisseur: 2, code: "2ABC4522", libelle: "dell" },
    { idFournisseur: 3, code: "3ABC4522", libelle: "lenovo" },
    { idFournisseur: 400, code: "40ABC452", libelle: "asus" }
  ];

  getColor(libelle: string): string {
    return libelle == 'hp' ? 'green' : 'yellow';
  }
  code2A(code: string): boolean {
    return code.startsWith('2A');
  }
  delete(i: number) {
    this.list.splice(i, 1);

    let l: number[]= [];
    this.list.forEach(element => {
      l.push(element.idFournisseur)
    });
    console.log("deleted index ", i, "new list has IDs")
     l.forEach( (id) => console.log(id));
  }
}