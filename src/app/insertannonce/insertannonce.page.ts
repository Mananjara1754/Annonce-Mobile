import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-insertannonce',
  templateUrl: './insertannonce.page.html',
  styleUrls: ['./insertannonce.page.scss'],
})

export class InsertannoncePage implements OnInit {
  annonceForm: FormGroup;
  annonce: any; // Utilisez l'interface Annonce

  constructor(private formBuilder: FormBuilder,private bdd: AngularFireDatabase) {
    this.annonceForm = this.formBuilder.group({
      nom: ['', Validators.required],
      categorie: ['', Validators.required],
      prix: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  ngOnInit() {
  }
  onSubmit() {
    if (this.annonceForm.valid) {
      this.annonce = {
        nom : this.annonceForm.value.nom,
        categorie : this.annonceForm.value.categorie,
        prix : this.annonceForm.value.prix,
        description :this.annonceForm.value.description
      };
      // Obtenez une référence au nœud "annonces"
      //Enregistrez l'objet Annonce dans Firebase Realtime Database
      const newAnnonceRef = this.bdd.list('annonce').push(this.annonce);
      // Récupérez la clé générée
      const nouvelleCle = newAnnonceRef.key;
  
      alert(nouvelleCle);
  
      this.annonceForm.reset();
    }
  }
  

}
