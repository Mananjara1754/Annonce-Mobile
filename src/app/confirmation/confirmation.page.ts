import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
// import { Observable } from 'rxjs';
// import { finalize, tap } from 'rxjs/operators';
// import {AngularFireStorage,AngularFireUploadTask} from '@angular/fire/compat/storage';
// import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/compat/firestore';
// export interface imgFile {
//   name: string;
//   filepath: string;
//   size: number;
// }
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {
  selectedOption: any;

  selectCategorie: any;
  selectSousCategorie:any;
  //...Information 
  annonceTitre : any;
  venteLocation : any;
  marque : any;
  modele : any;
  annee : any;
  boiteVitesse : any;
  nbVitesse : any;
  carburant : any;
  cylindre : any;
  kilometrage : any;
  etatGeneral : any;
  nbPlace : any;

  compatibilite : any;
  materiauCadre : any;
  type : any;
  superficieTerrain : any;
  nbPiece : any;
  nbBain : any;
  equipementAmenagement : any;
  proximite : any;
  superficieHabitable : any;
  nbEtage : any;
  garageParking : any;
  autre : any;
  amenagementSpeciau : any;
  service : any;
  os : any;
  stockage : any;
  ram : any;
  photo : any;
  batterie : any;
  processeur : any;
  graph : any;
  port : any;
  tailleEcran : any;
  resolution : any;
  affichage : any;
  tailleCapteur : any;
  stabilisationImage : any;
  vitesseObturation : any;
  perfGraph : any;
  capacite : any;
  vitesseEssorage : any;
  sonore : any;
  vitesse : any;
  nbPorte : any;
  aspiration : any;
  reservoir : any;
  puissance : any;
  refroidissement : any;
  materiau : any;
  dimension : any;
  couleur : any;
  titre : any;
   //...Vaovao
  // 2 
  stationnement:any;
  mur:any;
  electricite : any;
  eau : any;
  jardin : any;
  titreBorne :any;
  borneTitre : any;
  accesVoiture : any;
  //3
  bluetooth : any;
  wifi : any;
  empreinte : any;
  nfc:any;
  faciale : any;
  gps : any;
  hdmi : any;
  smartTv : any;
  usb : any;
  //...
  //............
  description : any;
  province : any;
  ville : any;
  prix : any;
  telephone : any;
  email : any;
  typeVendeur : any;
  jourDebut : any;
  jourFin : any;
  heureDebut : any;
  heureFin : any;
  selectedFile: any; //Les fichiers jpg selectionnee
  downloadUrl:any;
  //...Ref et prix payer
  reference : any;
  prixPayer : any;
  promo:any;
  //...Ref et prix payer
  annonce : any;
  constructor(private fileUploadService: FileUploadService,private route: ActivatedRoute,public bdd:AngularFireDatabase) {
    this.reference = Math.random().toString(36).substring(8);
  }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedOption= params['selectedOption'] ;

      this.selectCategorie= params['selectCategorie'] ;
      this.selectSousCategorie= params['selectSousCategorie'] ;
      //.........
       //...Vaovao
  // 2 
      this.stationnement = params['stationnement'] ;
      this.mur = params['mur'] ;
      this.electricite = params['electricite'] ;
      this.eau = params['eau'] ;
      this.jardin = params['jardin'] ;
      this.titreBorne = params['titreBorne'] ;
      this.borneTitre = params['borneTitre'] ;
      this.accesVoiture = params['accesVoiture'] ;
  // this.//3
      this.bluetooth = params['bluetooth'] ;
      this.wifi = params['wifi'] ;
      this.empreinte = params['empreinte'] ;
      this.nfc = params['nfc'] ;
      this.faciale = params['faciale'] ;
      this.gps = params['gps'] ;
      this.hdmi = params['hdmi'] ;
      this.smartTv = params['smartTv'] ;
      this.usb = params['usb'] ;
  //...
      //...Information 
      this.annonceTitre = params['annonceTitre'] ;
      this.venteLocation = params['venteLocation'] ;
      this.marque = params['marque'] ;
      this.modele = params['modele'] ;
      this.annee = params['annee'] ;
      this.boiteVitesse = params['boiteVitesse'] ;
      this.nbVitesse = params['nbVitesse'] ;
      this.carburant = params['carburant'] ;
      this.cylindre = params['cylindre'] ;
      this.kilometrage = params['kilometrage'] ;
      this.etatGeneral = params['etatGeneral'] ;
      this.nbPlace = params['nbPlace'] ;
    
      this.compatibilite = params['compatibilite'] ;
      this.materiauCadre = params['materiauCadre'] ;
      this.type = params['type'] ;
      this.superficieTerrain = params['superficieTerrain'] ;
      this.nbPiece = params['nbPiece'] ;
      this.nbBain = params['nbBain'] ;
      this.equipementAmenagement = params['equipementAmenagement'] ;
      this.proximite = params['proximite'] ;
      this.superficieHabitable = params['superficieHabitable'] ;
      this.nbEtage = params['nbEtage'] ;
      this.garageParking = params['garageParking'] ;
      this.autre = params['autre'] ;
      this.amenagementSpeciau = params['amenagementSpeciau'] ;
      this.service = params['service'] ;
      this.os = params['os'] ;
      this.stockage = params['stockage'] ;
      this.ram = params['ram'] ;
      this.photo = params['photo'] ;
      this.batterie = params['batterie'] ;
      this.processeur = params['processeur'] ;
      this.graph = params['graph'] ;
      this.port = params['port'] ;
      this.tailleEcran = params['tailleEcran'] ;
      this.resolution = params['resolution'] ;
      this.affichage = params['affichage'] ;
      this.tailleCapteur = params['tailleCapteur'] ;
      this.stabilisationImage = params['stabilisationImage'] ;
      this.vitesseObturation = params['vitesseObturation'] ;
      this.perfGraph = params['perfGraph'] ;
      this.capacite = params['capacite'] ;
      this.vitesseEssorage = params['vitesseEssorage'] ;
      this.sonore = params['sonore'] ;
      this.vitesse = params['vitesse'] ;
      this.nbPorte = params['nbPorte'] ;
      this.aspiration = params['aspiration'] ;
      this.reservoir = params['reservoir'] ;
      this.puissance = params['puissance'] ;
      this.refroidissement = params['refroidissement'] ;
      this.materiau = params['materiau'] ;
      this.dimension = params['dimension'] ;
      this.couleur = params['couleur'] ;
      this.titre = params['titre'] ;
      // ...//
      this.description = params['description'];
      this.province = params['province'];
      this.ville = params['ville'];
      this.prix = params['prix'];
      this.telephone = params['telephone'];
      this.email = params['email'];
      this.typeVendeur = params['typeVendeur'];
      this.jourDebut = params['jourDebut'];
      this.jourFin = params['jourFin'];
      this.heureDebut = params['heureDebut'];
      this.heureFin = params['heureFin'];
      this.selectedFile= params['selectedFile']; //Les fichiers jpg selectionnee
      const downloadUrlsJson1 = params['selectedFile'];
      if (downloadUrlsJson1) {
        this.selectedFile = JSON.parse(downloadUrlsJson1);
      }
      const downloadUrlsJson = params['downloadUrl'];
      if (downloadUrlsJson) {
        this.downloadUrl = JSON.parse(downloadUrlsJson);
      }
    });
  }
  onSubmit(){
  
console.log("Tafiditra");

    console.log('description:', this.description);
    console.log('province:', this.province);
    console.log('ville:', this.ville);
    console.log('prix:', this.prix);
    console.log('telephone:', this.telephone);
    console.log('email:', this.email);
    console.log('typeVendeur:', this.typeVendeur);
    console.log('jourDebut:', this.jourDebut);
    console.log('jourFin:', this.jourFin);
    console.log('heureDebut:', this.heureDebut);
    console.log('heureFin:', this.heureFin);
    console.log('down:',this.downloadUrl);

     if (this.selectedOption != 0) {
          if (this.selectCategorie == 1) {
            console.log("Auto Moto");
            console.log('marque:', this.marque);
            console.log('modele:', this.modele);
            console.log('annee:', this.annee);
            console.log('boiteVitesse:', this.boiteVitesse);
            console.log('nbVitesse:', this.nbVitesse);
            console.log('carburant:', this.carburant);
            console.log('cylindre:', this.cylindre);
            console.log('kilometrage:', this.kilometrage);
            console.log('etatGeneral:', this.etatGeneral);
            console.log('nbPlace:', this.nbPlace);
            console.log('compatibilite:', this.compatibilite);
            console.log('materiauCadre:', this.materiauCadre);
            console.log('type:', this.type);
            this.annonce = {
              marque : this.marque !== undefined ? this.marque : " ",
              modele : this.modele !== undefined ? this.modele : " ",
              annee : this.annee !== undefined ? this.annee : " ",
              boiteVitesse : this.boiteVitesse !== undefined ? this.boiteVitesse : " ",
              nbVitesse : this.nbVitesse !== undefined ? this.nbVitesse : " ",
              carburant : this.carburant !== undefined ? this.carburant : " ",
              cylindre : this.cylindre !== undefined ? this.cylindre : " ",
              kilometrage : this.kilometrage !== undefined ? this.kilometrage : " ",
              etatGeneral : this.etatGeneral !== undefined ? this.etatGeneral : " ",
              nbPlace : this.nbPlace !== undefined ? this.nbPlace : " ",
              compatibilite : this.compatibilite !== undefined ? this.compatibilite : " ",
              materiauCadre : this.materiauCadre !== undefined ? this.materiauCadre : " ",
              type : this.type !== undefined ? this.type : " ",
              //Fondamentale
              reference : this.reference !== undefined ? this.reference : " ",
              annonceTitre : this.annonceTitre !== undefined ? this.annonceTitre : " ",
              pricing : this.selectedOption !== undefined ? this.selectedOption : " ",
              categorie : this.selectCategorie !== undefined ? this.selectCategorie : " ",
              sousCategorie : this.selectSousCategorie !== undefined ? this.selectSousCategorie : " ",
              description : this.description !== undefined ? this.description : " ",
              province : this.province !== undefined ? this.province : " ",
              ville : this.ville !== undefined ? this.ville : " ",
              prix : this.prix !== undefined ? this.prix : " ",
              telephone : this.telephone !== undefined ? this.telephone : " ",
              email : this.email !== undefined ? this.email : " ",
              typeVendeur : this.typeVendeur !== undefined ? this.typeVendeur : " ",
              jourDebut : this.jourDebut !== undefined ? this.jourDebut : " ",
              jourFin : this.jourFin !== undefined ? this.jourFin : " ",
              heureDebut : this.heureDebut !== undefined ? this.heureDebut : " ",
              heureFin : this.heureFin !== undefined ? this.heureFin : " ",
              image : this.downloadUrl
              //Fondamentale
            }
          }
          if (this.selectCategorie == 2) {
            console.log("Immobilier");
            console.log('equipementAmenagement:', this.equipementAmenagement);
            console.log('superficieTerrain:', this.superficieTerrain);
            console.log('nbPiece:', this.nbPiece);
            console.log('nbBain:', this.nbBain);
            console.log('proximite:', this.proximite);
            console.log('superficieHabitable:', this.superficieHabitable);
            console.log('nbEtage:', this.nbEtage);
            console.log('garageParking:', this.garageParking);
            console.log('autre:', this.autre);
            console.log('amenagementSpeciau:', this.amenagementSpeciau);
            console.log('service:', this.service);
            this.annonce = {
              // 2 
              stationnement: this.stationnement !== undefined ? this.stationnement : " ",
              mur: this.mur !== undefined ? this.mur : " ",
              electricite :  this.electricite !== undefined ? this.electricite : " ",
              eau :  this.eau !== undefined ? this.eau : " ",
              jardin :  this.jardin !== undefined ? this.jardin : " ",
              titreBorne : this.titreBorne !== undefined ? this.titreBorne : " ",
              borneTitre :  this.borneTitre !== undefined ? this.borneTitre : " ",
              accesVoiture :  this.accesVoiture !== undefined ? this.accesVoiture : " ",
              //.......
              equipementAmenagement : this.equipementAmenagement !== undefined ? this.equipementAmenagement : " ",
              superficieTerrain : this.superficieTerrain !== undefined ? this.superficieTerrain : " ",
              nbPiece : this.nbPiece !== undefined ? this.nbPiece : " ",
              nbBain : this.nbBain !== undefined ? this.nbBain : " ",
              proximite : this.proximite !== undefined ? this.proximite : " ",
              superficieHabitable : this.superficieHabitable !== undefined ? this.superficieHabitable : " ",
              nbEtage : this.nbEtage !== undefined ? this.nbEtage : " ",
              garageParking : this.garageParking !== undefined ? this.garageParking : " ",
              autre : this.autre !== undefined ? this.autre : " ",
              amenagementSpeciau : this.amenagementSpeciau !== undefined ? this.amenagementSpeciau : " ",
              service : this.service !== undefined ? this.service : " ",
              //Fondamentale
              reference : this.reference !== undefined ? this.reference : " ",
              annonceTitre : this.annonceTitre !== undefined ? this.annonceTitre : " ",
              pricing : this.selectedOption !== undefined ? this.selectedOption : " ",
              categorie : this.selectCategorie !== undefined ? this.selectCategorie : " ",
              sousCategorie : this.selectSousCategorie !== undefined ? this.selectSousCategorie : " ",
              description : this.description !== undefined ? this.description : " ",
              province : this.province !== undefined ? this.province : " ",
              ville : this.ville !== undefined ? this.ville : " ",
              prix : this.prix !== undefined ? this.prix : " ",
              telephone : this.telephone !== undefined ? this.telephone : " ",
              email : this.email !== undefined ? this.email : " ",
              typeVendeur : this.typeVendeur !== undefined ? this.typeVendeur : " ",
              jourDebut : this.jourDebut !== undefined ? this.jourDebut : " ",
              jourFin : this.jourFin !== undefined ? this.jourFin : " ",
              heureDebut : this.heureDebut !== undefined ? this.heureDebut : " ",
              heureFin : this.heureFin !== undefined ? this.heureFin : " ",
              image : this.downloadUrl
              //Fondamentale
            }
          }
          if (this.selectCategorie == 3) {
            console.log("High Tech");
            console.log('marque:', this.marque);
            console.log('modele:', this.modele);
            console.log('os:', this.os);
            console.log('stockage:', this.stockage);
            console.log('ram:', this.ram);
            console.log('photo:', this.photo);
            console.log('batterie:', this.batterie);
            console.log('processeur:', this.processeur);
            console.log('graph:', this.graph);
            console.log('port:', this.port);
            console.log('tailleEcran:', this.tailleEcran);
            console.log('resolution:', this.resolution);
            console.log('affichage:', this.affichage);
            console.log('tailleCapteur:', this.tailleCapteur);
            console.log('stabilisationImage:', this.stabilisationImage);
            console.log('vitesseObturation:', this.vitesseObturation);
            console.log('perfGraph:', this.perfGraph);
            this.annonce = {
              //3
              bluetooth : this.bluetooth !== undefined ? this.bluetooth : " ",
              wifi : this.wifi !== undefined ? this.wifi : " ",
              empreinte : this.empreinte !== undefined ? this.empreinte : " ",
              nfc:this.nfc !== undefined ? this.nfc : " ",
              faciale : this.faciale !== undefined ? this.faciale : " ",
              gps : this.gps !== undefined ? this.gps : " ",
              hdmi : this.hdmi !== undefined ? this.hdmi : " ",
              smartTv : this.smartTv !== undefined ? this.smartTv : " ",
              usb : this.usb !== undefined ? this.usb : " ",
              //....
              marque : this.marque !== undefined ? this.marque : " ",
              modele : this.modele !== undefined ? this.modele : " ",
              os : this.os !== undefined ? this.stockage : " ",
              stockage : this.stockage !== undefined ? this.stockage : " ",
              ram : this.ram !== undefined ? this.ram : " ",
              photo : this.photo !== undefined ? this.photo : " ",
              batterie : this.batterie !== undefined ? this.batterie : " ",
              processeur : this.processeur !== undefined ? this.processeur : " ",
              graph : this.graph !== undefined ? this.graph : " ",
              port : this.port !== undefined ? this.port : " ",
              tailleEcran : this.tailleEcran !== undefined ? this.tailleEcran : " ",
              resolution : this.resolution !== undefined ? this.resolution : " ",
              affichage : this.affichage !== undefined ? this.affichage : " ",
              tailleCapteur : this.tailleCapteur !== undefined ? this.tailleCapteur : " ",
              stabilisationImage : this.stabilisationImage !== undefined ? this.stabilisationImage : " ",
              vitesseObturation : this.vitesseObturation !== undefined ? this.vitesseObturation : " ",
              perfGraph : this.perfGraph !== undefined ? this.perfGraph : " ",
              //Fondamentale
              reference : this.reference !== undefined ? this.reference : " ",
              annonceTitre : this.annonceTitre !== undefined ? this.annonceTitre : " ",
              pricing : this.selectedOption !== undefined ? this.selectedOption : " ",
              categorie : this.selectCategorie !== undefined ? this.selectCategorie : " ",
              sousCategorie : this.selectSousCategorie !== undefined ? this.selectSousCategorie : " ",
              description : this.description !== undefined ? this.description : " ",
              province : this.province !== undefined ? this.province : " ",
              ville : this.ville !== undefined ? this.ville : " ",
              prix : this.prix !== undefined ? this.prix : " ",
              telephone : this.telephone !== undefined ? this.telephone : " ",
              email : this.email !== undefined ? this.email : " ",
              typeVendeur : this.typeVendeur !== undefined ? this.typeVendeur : " ",
              jourDebut : this.jourDebut !== undefined ? this.jourDebut : " ",
              jourFin : this.jourFin !== undefined ? this.jourFin : " ",
              heureDebut : this.heureDebut !== undefined ? this.heureDebut : " ",
              heureFin : this.heureFin !== undefined ? this.heureFin : " ",
              image : this.downloadUrl
              //Fondamentale
            }
          }
          if (this.selectCategorie == 4) {
            console.log("Electromenager");
            console.log('marque:', this.marque);
            console.log('etatGeneral:', this.etatGeneral);
            console.log('capacite:', this.capacite);
            console.log('vitesseEssorage:', this.vitesseEssorage);
            console.log('sonore:', this.sonore);
            console.log('vitesse:', this.vitesse);
            console.log('nbPorte:', this.nbPorte);
            console.log('aspiration:', this.aspiration);
            console.log('reservoir:', this.reservoir);
            console.log('puissance:', this.puissance);
            console.log('refroidissement:', this.refroidissement);
            this.annonce = {
              marque : this.marque !== undefined ? this.marque : " ",
              etatGeneral : this.etatGeneral !== undefined ? this.etatGeneral : " ",
              capacite : this.capacite !== undefined ? this.capacite : " ",
              vitesseEssorage : this.vitesseEssorage !== undefined ? this.vitesseEssorage : " ",
              sonore : this.sonore !== undefined ? this.sonore : " ",
              vitesse : this.vitesse !== undefined ? this.vitesse : " ",
              nbPorte : this.nbPorte !== undefined ? this.nbPorte : " ",
              aspiration : this.aspiration !== undefined ? this.aspiration : " ",
              reservoir : this.reservoir !== undefined ? this.reservoir : " ",
              puissance : this.puissance !== undefined ? this.puissance : " ",
              refroidissement : this.refroidissement !== undefined ? this.refroidissement : " ",

              //Fondamentale
              reference : this.reference !== undefined ? this.reference : " ",
              annonceTitre : this.annonceTitre !== undefined ? this.annonceTitre : " ",
              pricing : this.selectedOption !== undefined ? this.selectedOption : " ",
              categorie : this.selectCategorie !== undefined ? this.selectCategorie : " ",
              sousCategorie : this.selectSousCategorie !== undefined ? this.selectSousCategorie : " ",
              description : this.description !== undefined ? this.description : " ",
              province : this.province !== undefined ? this.province : " ",
              ville : this.ville !== undefined ? this.ville : " ",
              prix : this.prix !== undefined ? this.prix : " ",
              telephone : this.telephone !== undefined ? this.telephone : " ",
              email : this.email !== undefined ? this.email : " ",
              typeVendeur : this.typeVendeur !== undefined ? this.typeVendeur : " ",
              jourDebut : this.jourDebut !== undefined ? this.jourDebut : " ",
              jourFin : this.jourFin !== undefined ? this.jourFin : " ",
              heureDebut : this.heureDebut !== undefined ? this.heureDebut : " ",
              heureFin : this.heureFin !== undefined ? this.heureFin : " ",
              image : this.downloadUrl
              //Fondamentale
            }
          }
          if (this.selectCategorie == 5) {
            console.log("5fdishfuif");
            console.log('marque:', this.marque);
            console.log('etatGeneral:', this.etatGeneral);
            this.annonce = {
              marque : this.marque !== undefined ? this.marque : " ",
              etatGeneral : this.etatGeneral !== undefined ? this.etatGeneral : " ",
              //Fondamentale
              reference : this.reference !== undefined ? this.reference : " ",
              annonceTitre : this.annonceTitre !== undefined ? this.annonceTitre : " ",
              pricing : this.selectedOption !== undefined ? this.selectedOption : " ",
              categorie : this.selectCategorie !== undefined ? this.selectCategorie : " ",
              sousCategorie : this.selectSousCategorie !== undefined ? this.selectSousCategorie : " ",
              description : this.description !== undefined ? this.description : " ",
              province : this.province !== undefined ? this.province : " ",
              ville : this.ville !== undefined ? this.ville : " ",
              prix : this.prix !== undefined ? this.prix : " ",
              telephone : this.telephone !== undefined ? this.telephone : " ",
              email : this.email !== undefined ? this.email : " ",
              typeVendeur : this.typeVendeur !== undefined ? this.typeVendeur : " ",
              jourDebut : this.jourDebut !== undefined ? this.jourDebut : " ",
              jourFin : this.jourFin !== undefined ? this.jourFin : " ",
              heureDebut : this.heureDebut !== undefined ? this.heureDebut : " ",
              heureFin : this.heureFin !== undefined ? this.heureFin : " ",
              image : this.downloadUrl
              //Fondamentale
            }

          }
          if (this.selectCategorie == 6) {
            console.log("Mobilier");
            console.log('etatGeneral:', this.etatGeneral);
            console.log('materiau:', this.materiau);
            console.log('dimension:', this.dimension);
            console.log('couleur:', this.couleur);
            this.annonce = {
              materiau : this.materiau !== undefined ? this.materiau : " ",
              etatGeneral : this.etatGeneral !== undefined ? this.etatGeneral : " ",
              dimension : this.dimension !== undefined ? this.dimension : " ",
              couleur : this.couleur !== undefined ? this.couleur : " ",
              //Fondamentale
              reference : this.reference !== undefined ? this.reference : " ",
              annonceTitre : this.annonceTitre !== undefined ? this.annonceTitre : " ",
              pricing : this.selectedOption !== undefined ? this.selectedOption : " ",
              categorie : this.selectCategorie !== undefined ? this.selectCategorie : " ",
              sousCategorie : this.selectSousCategorie !== undefined ? this.selectSousCategorie : " ",
              description : this.description !== undefined ? this.description : " ",
              province : this.province !== undefined ? this.province : " ",
              ville : this.ville !== undefined ? this.ville : " ",
              prix : this.prix !== undefined ? this.prix : " ",
              telephone : this.telephone !== undefined ? this.telephone : " ",
              email : this.email !== undefined ? this.email : " ",
              typeVendeur : this.typeVendeur !== undefined ? this.typeVendeur : " ",
              jourDebut : this.jourDebut !== undefined ? this.jourDebut : " ",
              jourFin : this.jourFin !== undefined ? this.jourFin : " ",
              heureDebut : this.heureDebut !== undefined ? this.heureDebut : " ",
              heureFin : this.heureFin !== undefined ? this.heureFin : " ",
              image : this.downloadUrl
              //Fondamentale
            }
          }
          if (this.selectCategorie == 7) {
            console.log("Divers");
            console.log('titre:', this.titre);
            console.log('marque:', this.marque);
            console.log('etatGeneral:', this.etatGeneral);
            this.annonce = {
              titre : this.titre !== undefined ? this.titre : " ",
              marque : this.marque !== undefined ? this.marque : " ",
              etatGeneral : this.etatGeneral !== undefined ? this.etatGeneral : " ",
              
              //Fondamentale
              reference : this.reference !== undefined ? this.reference : " ",
              annonceTitre : this.annonceTitre !== undefined ? this.annonceTitre : " ",
              pricing : this.selectedOption !== undefined ? this.selectedOption : " ",
              categorie : this.selectCategorie !== undefined ? this.selectCategorie : " ",
              sousCategorie : this.selectSousCategorie !== undefined ? this.selectSousCategorie : " ",
              description : this.description !== undefined ? this.description : " ",
              province : this.province !== undefined ? this.province : " ",
              ville : this.ville !== undefined ? this.ville : " ",
              prix : this.prix !== undefined ? this.prix : " ",
              telephone : this.telephone !== undefined ? this.telephone : " ",
              email : this.email !== undefined ? this.email : " ",
              typeVendeur : this.typeVendeur !== undefined ? this.typeVendeur : " ",
              jourDebut : this.jourDebut !== undefined ? this.jourDebut : " ",
              jourFin : this.jourFin !== undefined ? this.jourFin : " ",
              heureDebut : this.heureDebut !== undefined ? this.heureDebut : " ",
              heureFin : this.heureFin !== undefined ? this.heureFin : " ",
              image : this.downloadUrl
              //Fondamentale
            }
          }
    }else{
      this.annonce = {

        //Fondamentale
        reference : this.reference !== undefined ? this.reference : " ",
        annonceTitre : this.annonceTitre !== undefined ? this.annonceTitre : " ",
        pricing : this.selectedOption !== undefined ? this.selectedOption : " ",
        categorie : this.selectCategorie !== undefined ? this.selectCategorie : " ",
        sousCategorie : this.selectSousCategorie !== undefined ? this.selectSousCategorie : " ",
        description : this.description !== undefined ? this.description : " ",
        province : this.province !== undefined ? this.province : " ",
        ville : this.ville !== undefined ? this.ville : " ",
        prix : this.prix !== undefined ? this.prix : " ",
        telephone : this.telephone !== undefined ? this.telephone : " ",
        email : this.email !== undefined ? this.email : " ",
        typeVendeur : this.typeVendeur !== undefined ? this.typeVendeur : " ",
        jourDebut : this.jourDebut !== undefined ? this.jourDebut : " ",
        jourFin : this.jourFin !== undefined ? this.jourFin : " ",
        heureDebut : this.heureDebut !== undefined ? this.heureDebut : " ",
        heureFin : this.heureFin !== undefined ? this.heureFin : " ",
        image : this.downloadUrl
        //Fondamentale
      }
    }

    
    this.bdd.list('attente').push(this.annonce);
    console.log("succes lesy");
  }
  uploadFile() {
    if (this.selectedFile) {
      // this.fileUploadService.uploadFile(this.selectedFile, 'uploads').then(downloadUrl => {
      //   console.log('File uploaded:', downloadUrl);
      //   this.downloadUrl = downloadUrl; // Mettez à jour la variable downloadUrl pour afficher l'image
      // });
      const filesToUpload: File[] = this.selectedFile;

      this.fileUploadService.uploadFiles(filesToUpload, 'uploads', 'huuhu')
        .then(downloadUrls => {
          console.log('Files uploaded:', downloadUrls);
          // Mettez à jour votre interface utilisateur avec les URLs téléchargés
        })
        .catch(error => {
          console.error('Error uploading files:', error);
          // Gérez les erreurs ici
        });
    }
  }
  
}
// onFileSelected(event: any) {
  //   this.selectedFile = event.target.files;
  // }
 