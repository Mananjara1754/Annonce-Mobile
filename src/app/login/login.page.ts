import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private angularFireDatabase: AngularFireDatabase,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      nom: ['', Validators.required],
      mdp: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const nom = this.loginForm.value.nom;
      const mdp = this.loginForm.value.mdp;

      // Vérification dans la base de données
      const usersRef = this.angularFireDatabase.list('utilisateur');
      usersRef.snapshotChanges().subscribe(usersSnapshots => {
        const utilisateurTrouve = usersSnapshots.find(
          (userSnapshot:any) =>
            userSnapshot.payload.val().nom === nom &&
            userSnapshot.payload.val().mdp === mdp
        );

        if (utilisateurTrouve && utilisateurTrouve.key) {
          localStorage.setItem('utilisateur', utilisateurTrouve.key);
          this.router.navigate(['/accueil']);
        } else {
          // Affichage d'un message d'erreur
          this.loginForm.setErrors({ incorrect: true });
        }
      });
    }
  }
}