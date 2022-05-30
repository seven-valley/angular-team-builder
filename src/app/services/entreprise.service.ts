import { Entreprise } from "../models/entreprise";
import { Equipe } from "../models/equipe";
import { Personne } from "../models/personne";

export class EntrepriseService{

public entreprise:Entreprise=new Entreprise();

ajouterEquipe(nom:string){
    let e = new Equipe(nom);
    this.entreprise.equipes.push(e);
    this.saveLocal(); 
}
enleverEquipe(i:number){
    this.entreprise.equipes.splice(i,1);
    this.saveLocal(); 
    
}
getPersonneNextId():number{
    let idPersonne = 1;
    let dernier = this.entreprise.personnes.length -1;
    if (dernier != -1){
        idPersonne = this.entreprise.personnes[dernier].id;
        idPersonne++;
    }
    return idPersonne;
}
ajouterPersonneEquipe(iEquipe:number,iPersonne:number){
    let p = this.entreprise.personnes[iPersonne];
    this.entreprise.equipes[iEquipe].personnes.push(p);
    this.saveLocal(); 
  }
ajouterPersonne(p:Personne,iEquipe:number){
    p.id=this.getPersonneNextId();     
    this.entreprise.personnes.push(p);
    if (iEquipe != -1){
        this.entreprise.equipes[iEquipe].personnes.push(p);
    }
    this.saveLocal(); 
}
enleverPersonneEquipe(iEquipe:number, iPersonne:number) {
    this.entreprise.equipes[iEquipe].personnes.splice(iPersonne, 1);
    this.saveLocal(); 
}

enleverPersonne(iPersonne:number){
    let id = this.entreprise.personnes[iPersonne].id;
    let flag = true; // personne non présente dans les Equipes
    for (let e of this.entreprise.equipes){
        for ( let p of e.personnes){
            if ( id == p.id){
                flag = false;
                break;
            }
        }
    }
    if (flag){
        this.entreprise.personnes.splice(iPersonne,1);
        this.saveLocal(); 
    }else{
        alert ('Cette personne est déjà dans une equipe');
    }    
   
    
}
saveLocal(){
    localStorage.setItem('entreprise',JSON.stringify(this.entreprise));
}
getLocal(){
    let str = localStorage.getItem('entreprise');
    if (str != null)
    {
        this.entreprise = JSON.parse(str);
    }
}

}