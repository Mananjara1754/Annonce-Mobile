import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Component({
  selector: 'app-actif',
  templateUrl: './actif.page.html',
  styleUrls: ['./actif.page.scss'],
})
export class ActifPage implements OnInit {
  annonce:any;
  constructor(public bdd:AngularFireDatabase) {
    this.getAllAnnonce();
  }

  ngOnInit() {
  }
  getAllAnnonce() {
    const annoncesValidesRef = this.bdd.list('confirme');
    annoncesValidesRef.snapshotChanges().subscribe(annoncesValidesSnapshots => {
      this.annonce = annoncesValidesSnapshots.map(annonceValideSnapshot => {
        const annonceKey = annonceValideSnapshot.key;
        const annonceValideData = annonceValideSnapshot.payload.val();
        return { key: annonceKey, data: annonceValideData };
      });
      console.log('Actif :', this.annonce);
    });
  }
  desapprouverAnnonce(annonce: any) {
    const confirmeRef = this.bdd.object(`attente/${annonce.key}`);
    confirmeRef.set(annonce.data).then(() => {
      console.log('Annonce approuvée et déplacée dans /confirme');
  
      // Supprimez l'annonce de l'emplacement d'origine
      const annonceRef = this.bdd.object(`confirme/${annonce.key}`);
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
