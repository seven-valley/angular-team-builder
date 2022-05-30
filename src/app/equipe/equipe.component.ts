import { Component, Input, OnInit } from '@angular/core';
import { Equipe } from '../models/equipe';
import { Personne } from '../models/personne';
import { EntrepriseService } from '../services/entreprise.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {
@Input() equipe:Equipe = new Equipe();
@Input() indice:number = 0;


  constructor(private service:EntrepriseService) {}

  ngOnInit(): void {
  }
  enleverEquipe(){
    this.service.enleverEquipe(this.indice);
  }
  enleverPersonneEquipe(iPersonne:number){
    this.service.enleverPersonneEquipe(this.indice,iPersonne);
  }




}
