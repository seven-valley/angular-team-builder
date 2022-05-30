import { Component, OnInit } from '@angular/core';
import { Entreprise } from './models/entreprise';
import { Personne } from './models/personne';
import { EntrepriseService } from './services/entreprise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  entreprise = new Entreprise();
  nomEquipe = '';
  equipeIndice =-1;
  nom='';
  prenom='';
  constructor(private service:EntrepriseService){}
  ngOnInit(){
    this.service.getLocal();
    this.entreprise = this.service.entreprise;
    
  }
  ajouterEquipe(){
    this.service.ajouterEquipe(this.nomEquipe);
    this.nomEquipe ='';
  }
  ajouterPersonne(){
    let p = new Personne(this.prenom,this.nom);
    this.service.ajouterPersonne(p,this.equipeIndice)
    this.equipeIndice =-1;
    this.nom='';
    this.prenom='';
  }
  enleverPersonne(i:number){
    this.service.enleverPersonne(i)
  }


}
