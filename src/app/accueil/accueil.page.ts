import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { AngularFireModule } from "@angular/fire/compat";
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  annonces: any[] = [];
  annoncesValides: any[] = [];
  annonce:any;
  categorie:any;
  constructor(private router : Router,public bdd:AngularFireDatabase,private afDatabase: AngularFireDatabase) {
      // const annoncesRef = this.bdd.list('annonce');
    
      // annoncesRef.snapshotChanges().subscribe(annoncesSnapshots => {
      //   this.annonces = annoncesSnapshots.map(annonceSnapshot => {
      //     const annonceKey = annonceSnapshot.key;
      //     const annonceData = annonceSnapshot.payload.val();
      //     return { key: annonceKey, data: annonceData };
      //   });
      // });
      // this.annonces = this.annonces.filter(annonce => annonce.data.prix < 500); // Filtrer les annonces
      // console.log('Annonces:', annoncesRef);
      // this.fetchAndStoreAnnoncesValides();

        //...........
        this.getAllCategorie();
        this.getAllAnnonce();
      //alert(this.annonces[0].nom);
  }
  getAllCategorie() {
    const categorieRef = this.bdd.list('categorie');
    categorieRef.snapshotChanges().subscribe(annoncesValidesSnapshots => {
      this.categorie = annoncesValidesSnapshots.map(annonceValideSnapshot => {
        const categorieKey = annonceValideSnapshot.key;
        const categorieData = annonceValideSnapshot.payload.val();
        return { key: categorieKey, data: categorieData };
      });
    });
  }
  getAllAnnonce() {
    const annoncesValidesRef = this.bdd.list('confirme');
    annoncesValidesRef.snapshotChanges().subscribe(annoncesValidesSnapshots => {
      this.annonce = annoncesValidesSnapshots.map(annonceValideSnapshot => {
        const annonceKey = annonceValideSnapshot.key;
        const annonceValideData = annonceValideSnapshot.payload.val();
        return { key: annonceKey, data: annonceValideData };
      });
      console.log('Attente :', this.annonce);
    });
  }

  fetchAndStoreAnnoncesValides() {
    const annoncesValidesRef = this.bdd.list('annonceValide');
    annoncesValidesRef.snapshotChanges().subscribe(annoncesValidesSnapshots => {
      this.annoncesValides = annoncesValidesSnapshots.map(annonceValideSnapshot => {
        const annonceKey = annonceValideSnapshot.key;
        const annonceValideData = annonceValideSnapshot.payload.val();
        return { key: annonceKey, data: annonceValideData };
      });

      console.log('Annonces validées :', this.annoncesValides);

      // Maintenant, nous récupérons les détails des annonces correspondantes
      this.fetchAndDisplayAnnoncesDetails();
    });
  }

  fetchAndDisplayAnnoncesDetails() {
    const annonceKeys = this.annoncesValides.map(annonceValide => annonceValide.data.annonceKey);

    const annoncesRef = this.bdd.list('annonce');
    annoncesRef.snapshotChanges().subscribe(annoncesSnapshots => {
      this.annoncesValides = annoncesSnapshots
        .filter(annonceSnapshot => annonceKeys.includes(annonceSnapshot.key))
        .map(annonceSnapshot => {
          const annonceKey = annonceSnapshot.key;
          const annonceData = annonceSnapshot.payload.val();
          return { key: annonceKey, data: annonceData };
        });

      console.log('Détails des annonces validées :', this.annoncesValides);
    });
  }

  ngOnInit() {
  }
  add(){
    //.........Pricing
        // this.bdd.list('/pricing').push({
        //   idPricing : 0,
        //   prix : 0,
        //   nomPricing : 'Gratuit'
        // });
        // this.bdd.list('/pricing').push({
        //   idPricing : 50,
        //   prix : 10000,
        //   nomPricing : 'Moyen'
        // });
        // this.bdd.list('/pricing').push({
        //   idPricing : 100,
        //   prix : 10000,
        //   nomPricing : 'Premium'
        // });
    //.........Pricing

    //.........Categorie
        this.bdd.list('/categorie').push({
          idCategorie : 1,
          nomCategorie : 'Auto moto'
        });
        this.bdd.list('/categorie').push({
          idCategorie : 2,
          nomCategorie : 'Immobilier'
        });
        this.bdd.list('/categorie').push({
          idCategorie : 3,
          nomCategorie : 'High Tech'
        });
        this.bdd.list('/categorie').push({
          idCategorie : 4,
          nomCategorie : 'Electroménager'
        });
        this.bdd.list('/categorie').push({
          idCategorie : 5,
          nomCategorie : 'Plein air et sports'
        });
        this.bdd.list('/categorie').push({
          idCategorie : 6,
          nomCategorie : 'Mobilier'
        });
        this.bdd.list('/categorie').push({
          idCategorie : 7,
          nomCategorie : 'Divers'
        });
    //.........Categorie

    //.........SousCategorie
        // --Auto
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 1,
          idCategorie : 1,
          nomSousCategorie : 'Voiture'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 2,
          idCategorie : 1,
          nomSousCategorie : 'Moto'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 3,
          idCategorie : 1,
          nomSousCategorie : 'Pièces détachées et accessoires'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 4,
          idCategorie : 1,
          nomSousCategorie : 'Vélos / cyclomoteurs'
        });
        // --Auto

        // --Immobilier
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 1,
          idCategorie : 2,
          nomSousCategorie : 'Appartement'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 2,
          idCategorie : 2,
          nomSousCategorie : 'Maison'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 3,
          idCategorie : 2,
          nomSousCategorie : 'Terrain'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 4,
          idCategorie : 2,
          nomSousCategorie : 'Bureaux commerciaux'
        });
        // --Immobilier

        // --High Tech
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 1,
          idCategorie : 3,
          nomSousCategorie : 'Téléphones mobiles'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 2,
          idCategorie : 3,
          nomSousCategorie : 'Tablettes'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 3,
          idCategorie : 3,
          nomSousCategorie : 'Ordinateurs portables et bureaux'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 4,
          idCategorie : 3,
          nomSousCategorie : 'Télévisions & Radio'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 5,
          idCategorie : 3,
          nomSousCategorie : 'Appareils photo et caméras'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 6,
          idCategorie : 3,
          nomSousCategorie : 'Consoles de jeux video'
        });
        // --High Tech

        // --Electromenager
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 1,
          idCategorie : 4,
          nomSousCategorie : 'Machines à laver'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 2,
          idCategorie : 4,
          nomSousCategorie : 'Electroménager de cuisine'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 3,
          idCategorie : 4,
          nomSousCategorie : 'Refrigerateurs et congélateurs'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 4,
          idCategorie : 4,
          nomSousCategorie : 'Cuisinières et fours'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 5,
          idCategorie : 4,
          nomSousCategorie : 'Aspirateurs'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 6,
          idCategorie : 4,
          nomSousCategorie : 'Micro-ondes'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 7,
          idCategorie : 4,
          nomSousCategorie : 'Climatiseurs'
        });
        // --Electromenager

        // --Plein air sports
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 1,
          idCategorie : 5,
          nomSousCategorie : 'Equipement de camping'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 2,
          idCategorie : 5,
          nomSousCategorie : 'Matériel de randonnée'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 3,
          idCategorie : 5,
          nomSousCategorie : 'Articles de pêche'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 4,
          idCategorie : 5,
          nomSousCategorie : 'Matériel de sport (raquettes,balles,etc.)'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 5,
          idCategorie : 5,
          nomSousCategorie : 'Articles de sports nautiques (canot,kayak,etc.)'
        });
        // --Plein air sports 

        // --Mobilier
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 1,
          idCategorie : 6,
          nomSousCategorie : 'Canapés'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 2,
          idCategorie : 6,
          nomSousCategorie : 'Fauteuils'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 3,
          idCategorie : 6,
          nomSousCategorie : 'Tables'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 4,
          idCategorie : 6,
          nomSousCategorie : 'Chaises'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 5,
          idCategorie : 6,
          nomSousCategorie : 'Lits / matelas'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 6,
          idCategorie : 6,
          nomSousCategorie : 'Armoires et rangements'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 7,
          idCategorie : 6,
          nomSousCategorie : 'Bureau et chaise de bureau'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 8,
          idCategorie : 6,
          nomSousCategorie : 'Meubles de jardin'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 9,
          idCategorie : 6,
          nomSousCategorie : 'Meubles pour enfants'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 10,
          idCategorie : 6,
          nomSousCategorie : 'Meubles de salon'
        });
        // --Mobilier

        // --Divers
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 1,
          idCategorie : 7,
          nomSousCategorie : 'Vêtements'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 2,
          idCategorie : 7,
          nomSousCategorie : 'Art et collections'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 3,
          idCategorie : 7,
          nomSousCategorie : 'Instruments de musique'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 4,
          idCategorie : 7,
          nomSousCategorie : 'Cosmétique'
        });
        this.bdd.list('/sousCategorie').push({
          idSousCategorie : 5,
          idCategorie : 7,
          nomSousCategorie : 'Autre'
        });
        // --Divers 
      
    //.........SousCategorie

  }
  utilisateurExisteDansLocalStorage(): boolean {
    const utilisateur = localStorage.getItem('utilisateur');
    return utilisateur !== null;
  }
  utilisateurEstAdmin(): boolean {
    const utilisateur = localStorage.getItem('utilisateur');
    return utilisateur === '-NcDbrsib9wadoqfeYke';
  }
  deconnecter() {
    localStorage.removeItem('utilisateur');
  }

  validerAnnonce(keyAnnonce: string){
    const dateAujourdhui = new Date().toISOString();

    const donneesAnnonce = {
      annonceKey : keyAnnonce,
      dateValidation : dateAujourdhui
    };
    this.bdd.list('annonceValide').push(donneesAnnonce);
  }
  
}