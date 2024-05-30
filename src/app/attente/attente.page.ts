import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Component({
  selector: 'app-attente',
  templateUrl: './attente.page.html',
  styleUrls: ['./attente.page.scss'],
})
export class AttentePage implements OnInit {
  annonce:any;
  constructor(public bdd:AngularFireDatabase) {
    this.getAllAnnonce();
  }

  ngOnInit() {
  }
  getAllAnnonce() {
    const annoncesValidesRef = this.bdd.list('attente');
    annoncesValidesRef.snapshotChanges().subscribe(annoncesValidesSnapshots => {
      this.annonce = annoncesValidesSnapshots.map(annonceValideSnapshot => {
        const annonceKey = annonceValideSnapshot.key;
        const annonceValideData = annonceValideSnapshot.payload.val();
        return { key: annonceKey, data: annonceValideData };
      });
      console.log('AnnonceTest :', this.annonce);
    });
  }
  // approuverAnnonce(annonce: any) {
  //   const confirmeRef = this.bdd.object(`confirme/${annonce.key}`);
  //   confirmeRef.set(annonce.data).then(() => {
  //     console.log('Annonce approuvée et copiée dans /confirme');
  //     // Vous pouvez ici supprimer l'annonce de l'emplacement actuel si nécessaire
  //   }).catch(error => {
  //     console.error('Erreur lors de l\'approbation :', error);
  //   });
  // }
  approuverAnnonce(annonce: any) {
    const confirmeRef = this.bdd.object(`confirme/${annonce.key}`);
    confirmeRef.set(annonce.data).then(() => {
      console.log('Annonce approuvée et déplacée dans /confirme');
  
      // Supprimez l'annonce de l'emplacement d'origine
      const annonceRef = this.bdd.object(`attente/${annonce.key}`);
      annonceRef.remove().then(() => {
        console.log('Annonce supprimée de l\'emplacement d\'origine');
      }).catch(error => {
        console.error('Erreur lors de la suppression de l\'annonce d\'origine :', error);
      });
    }).catch(error => {
      console.error('Erreur lors de l\'approbation :', error);
    });
  }
  
}
