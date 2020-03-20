import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  get Nom(): string {
    return this._Nom;
  }

  set Nom(value: string) {
    this._Nom = value;
  }

  get Prenom(): string {
    return this._Prenom;
  }

  set Prenom(value: string) {
    this._Prenom = value;
  }

  get Resultat(): number {
    return this._Resultat;
  }

  set Resultat(value: number) {
    this._Resultat = value;
  }



  // tslint:disable-next-line:variable-name
    private _Nom: string;
  // tslint:disable-next-line:variable-name
    private _Prenom: string;
  // tslint:disable-next-line:variable-name
    private _Resultat: number;

  get Email(): string {
    return this._Email;
  }

  set Email(value: string) {
    this._Email = value;
  }

  get Pass(): string {
    return this._Pass;
  }

  set Pass(value: string) {
    this._Pass = value;
  }

  // tslint:disable-next-line:variable-name
    private _Email: string;
  // tslint:disable-next-line:variable-name
    private _Pass: string;

    reponse: Array<number> = [];



  constructor() {
    this._Nom = 'Miller';
    this._Prenom = 'Marine';
    this._Resultat = 0;
    this._Email = 'MarineMiller@gmail.com';
    this._Pass = 'mdp123';
  }

  addresult() {
    this.Resultat++;
  }

}
