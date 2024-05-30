import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  annonceKey: any;
  annonce: any;
  constructor(private route: ActivatedRoute,public bdd:AngularFireDatabase) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.annonceKey = params['key'];
      const annonceRef = this.bdd.object(`confirme/${this.annonceKey}`);
      annonceRef.snapshotChanges().subscribe(annonceSnapshot => {
        const annonceData = annonceSnapshot.payload.val();
        if (annonceData !== null) {
          this.annonce = { key: this.annonceKey, data: annonceData };
          console.log('AnnonceByKey :', this.annonce);
        } else {
          console.log('Annonce not found');
        }
      });
    });
  }
}
