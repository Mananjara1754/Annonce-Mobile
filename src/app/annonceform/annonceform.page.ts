import { FileUploadService } from './../file-upload.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-annonceform',
  templateUrl: './annonceform.page.html',
  styleUrls: ['./annonceform.page.scss'],
})
export class AnnonceformPage implements OnInit {
  selectedOption: any;
  pricing: any[] = [];
  categorie: any[] = [];
  sousCategorie: any[] = [];
  selectedPricingPrice: any;
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
  verif:any;
  constructor(public bdd:AngularFireDatabase,private navCtrl: NavController,private fileUploadService: FileUploadService,private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.selectedOption = +params['value'];
      if (this.selectedOption == '0') {
        this.selectedPricingPrice = 0;
      }
      if (this.selectedOption == '50') {
        this.selectedPricingPrice = 10000;
      }
      if (this.selectedOption == '100') {
        this.selectedPricingPrice = 20000;
      }
      
    });
    this.getAllPricing();
    this.getAllCategorie();
    this.getAllSousCategorie();
  }
  onFileSelected(event: any) {
     this.selectedFile = event.target.files;
     this.verif = true;
     if(this.selectedOption == 0){
      if (this.selectedFile.length > 1) {
        this.verif = false;
      }
     }
     if(this.selectedOption == 50 || this.selectedOption == 100){
      if (this.selectedFile.length > 4) {
        this.verif = false;
      }
     }
  }
  uploadFile() {
    if (this.selectedFile) {
      const filesToUpload: File[] = this.selectedFile;
      this.fileUploadService.uploadFiles(filesToUpload, 'uploads', 'huuhu')
        .then(downloadUrls => {
          console.log('Files uploaded:', downloadUrls);
          this.downloadUrl = downloadUrls;
          // this.navCtrl.navigateForward('/confirmation', {
          //   queryParams: {
          //     downloadUrl: JSON.stringify(downloadUrls) , // Convertir en chaîne JSON
          //     selectedFile: JSON.stringify(this.selectedFile)  // Convertir en chaîne JSON
          //   }
          // });
        })
        .catch((error:any) => {
          console.error('Error uploading files:', error);
        });
    }
  }
  onSubmit() {
    this.navCtrl.navigateForward('/confirmation', {
      queryParams: {
            
        selectedOption: this.selectedOption ,
        selectCategorie: this.selectCategorie ,
        selectSousCategorie:this.selectSousCategorie ,
        //...Information 
        annonceTitre : this.annonceTitre ,
        venteLocation : this.venteLocation ,
        marque : this.marque ,
        modele : this.modele ,
        annee : this.annee ,
        boiteVitesse : this.boiteVitesse ,
        nbVitesse : this.nbVitesse ,
        carburant : this.carburant ,
        cylindre : this.cylindre ,
        kilometrage : this.kilometrage ,
        etatGeneral : this.etatGeneral ,
        nbPlace : this.nbPlace ,
        compatibilite : this.compatibilite ,
        materiauCadre : this.materiauCadre ,
        type : this.type ,
        superficieTerrain : this.superficieTerrain ,
        nbPiece : this.nbPiece ,
        nbBain : this.nbBain ,
        equipementAmenagement : this.equipementAmenagement ,
        proximite : this.proximite ,
        superficieHabitable : this.superficieHabitable ,
        nbEtage : this.nbEtage ,
        garageParking : this.garageParking ,
        autre : this.autre ,
        amenagementSpeciau : this.amenagementSpeciau ,
        service : this.service ,
        os : this.os ,
        stockage : this.stockage ,
        ram : this.ram ,
        photo : this.photo ,
        batterie : this.batterie ,
        processeur : this.processeur ,
        graph : this.graph ,
        port : this.port ,
        tailleEcran : this.tailleEcran ,
        resolution : this.resolution ,
        affichage : this.affichage ,
        tailleCapteur : this.tailleCapteur ,
        stabilisationImage : this.stabilisationImage ,
        vitesseObturation : this.vitesseObturation ,
        perfGraph : this.perfGraph ,
        capacite : this.capacite ,
        vitesseEssorage : this.vitesseEssorage ,
        sonore : this.sonore ,
        vitesse : this.vitesse ,
        nbPorte : this.nbPorte ,
        aspiration : this.aspiration ,
        reservoir : this.reservoir ,
        puissance : this.puissance ,
        refroidissement : this.refroidissement ,
        materiau : this.materiau ,
        dimension : this.dimension ,
        couleur : this.couleur ,
        titre : this.titre ,
        //Fanampiny
              
        stationnement :this.stationnement,
        mur :this.mur,
        electricite :  this.electricite,
        eau :  this.eau,
        jardin :  this.jardin,
        titreBorne  :this.titreBorne,
        borneTitre :  this.borneTitre,
        accesVoiture :  this.accesVoiture,
        //3
        bluetooth :  this.bluetooth,
        wifi :  this.wifi,
        empreinte :  this.empreinte,
        nfc :this.nfc,
        faciale :  this.faciale,
        gps :  this.gps,
        hdmi :  this.hdmi,
        smartTv :  this.smartTv,
        usb :  this.usb,
        //.......................
        description : this.description,
        province : this.province,
        ville : this.ville,
        prix : this.prix,
        telephone : this.telephone,
        email : this.email,
        typeVendeur : this.typeVendeur,
        jourDebut : this.jourDebut,
        jourFin : this.jourFin,
        heureDebut : this.heureDebut,
        heureFin : this.heureFin,
        downloadUrl: JSON.stringify(this.downloadUrl)
      }
    });
    // if (this.selectedOption!=0) {
    //   if (this.selectCategorie == 1) {
    //     console.log("Auto Moto");
    //     console.log('marque:', this.marque);
    //     console.log('modele:', this.modele);
    //     console.log('annee:', this.annee);
    //     console.log('boiteVitesse:', this.boiteVitesse);
    //     console.log('nbVitesse:', this.nbVitesse);
    //     console.log('carburant:', this.carburant);
    //     console.log('cylindre:', this.cylindre);
    //     console.log('kilometrage:', this.kilometrage);
    //     console.log('etatGeneral:', this.etatGeneral);
    //     console.log('nbPlace:', this.nbPlace);
    //     console.log('compatibilite:', this.compatibilite);
    //     console.log('materiauCadre:', this.materiauCadre);
    //     console.log('type:', this.type);
    //   }
    //   if (this.selectCategorie == 2) {
    //     console.log("Immobilier");
    //     console.log('equipementAmenagement:', this.equipementAmenagement);
    //     console.log('superficieTerrain:', this.superficieTerrain);
    //     console.log('nbPiece:', this.nbPiece);
    //     console.log('nbBain:', this.nbBain);
    //     console.log('proximite:', this.proximite);
    //     console.log('superficieHabitable:', this.superficieHabitable);
    //     console.log('nbEtage:', this.nbEtage);
    //     console.log('garageParking:', this.garageParking);
    //     console.log('autre:', this.autre);
    //     console.log('amenagementSpeciau:', this.amenagementSpeciau);
    //     console.log('service:', this.service);
    //   }
    //   if (this.selectCategorie == 3) {
    //     console.log("High Tech");
    //     console.log('marque:', this.marque);
    //     console.log('modele:', this.modele);
    //     console.log('os:', this.os);
    //     console.log('stockage:', this.stockage);
    //     console.log('ram:', this.ram);
    //     console.log('photo:', this.photo);
    //     console.log('batterie:', this.batterie);
    //     console.log('processeur:', this.processeur);
    //     console.log('graph:', this.graph);
    //     console.log('port:', this.port);
    //     console.log('tailleEcran:', this.tailleEcran);
    //     console.log('resolution:', this.resolution);
    //     console.log('affichage:', this.affichage);
    //     console.log('tailleCapteur:', this.tailleCapteur);
    //     console.log('stabilisationImage:', this.stabilisationImage);
    //     console.log('vitesseObturation:', this.vitesseObturation);
    //     console.log('perfGraph:', this.perfGraph);
    //   }
    //   if (this.selectCategorie == 4) {
    //     console.log("Electromenager");
    //     console.log('marque:', this.marque);
    //     console.log('etatGeneral:', this.etatGeneral);
    //     console.log('capacite:', this.capacite);
    //     console.log('vitesseEssorage:', this.vitesseEssorage);
    //     console.log('sonore:', this.sonore);
    //     console.log('vitesse:', this.vitesse);
    //     console.log('nbPorte:', this.nbPorte);
    //     console.log('aspiration:', this.aspiration);
    //     console.log('reservoir:', this.reservoir);
    //     console.log('puissance:', this.puissance);
    //     console.log('refroidissement:', this.refroidissement);
    //   }
    //   if (this.selectCategorie == 5) {
    //     console.log("5fdishfuif");
    //     console.log('marque:', this.marque);
    //     console.log('etatGeneral:', this.etatGeneral);

    //   }
    //   if (this.selectCategorie == 6) {
    //     console.log("Mobilier");
    //     console.log('etatGeneral:', this.etatGeneral);
    //     console.log('materiau:', this.materiau);
    //     console.log('dimension:', this.dimension);
    //     console.log('couleur:', this.couleur);
    //   }
    //   if (this.selectCategorie == 7) {
    //     console.log("Divers");
    //     console.log('titre:', this.titre);
    //     console.log('marque:', this.marque);
    //     console.log('etatGeneral:', this.etatGeneral);


    //   }
    // }
    // console.log('selectedOption:', this.selectedOption);
    // console.log('selectedPricingPrice:', this.selectedPricingPrice);
    // console.log('selectCategorie:', this.selectCategorie);
    // console.log('selectSousCategorie:', this.selectSousCategorie);

    // console.log('annonceTitre:', this.annonceTitre);
    // console.log('venteLocation:', this.venteLocation);
    
 

   
    // console.log('description:', this.description);
    // console.log('province:', this.province);
    // console.log('ville:', this.ville);
    // console.log('prix:', this.prix);
    // console.log('telephone:', this.telephone);
    // console.log('email:', this.email);
    // console.log('typeVendeur:', this.typeVendeur);
    // console.log('jourDebut:', this.jourDebut);
    // console.log('jourFin:', this.jourFin);
    // console.log('heureDebut:', this.heureDebut);
    // console.log('heureFin:', this.heureFin);
  }
  
  ngOnInit(){
  }

  getAllPricing(){
    const pricingRef = this.bdd.list('pricing');
    pricingRef.snapshotChanges().subscribe(annoncesSnapshots => {
      this.pricing = annoncesSnapshots.map(annonceSnapshot => {
        const pricingKey = annonceSnapshot.key;
        const pricingData = annonceSnapshot.payload.val();
        return { key: pricingKey, data: pricingData };
      });
    });
  }
  getAllCategorie(){
    const categRef = this.bdd.list('categorie');
    categRef.snapshotChanges().subscribe(annoncesSnapshots => {
      this.categorie = annoncesSnapshots.map(annonceSnapshot => {
        const categKey = annonceSnapshot.key;
        const categData = annonceSnapshot.payload.val();
        return { key: categKey, data: categData };
      });
    });
  }
  getAllSousCategorie(){
    const sousCategRef = this.bdd.list('sousCategorie');
    sousCategRef.snapshotChanges().subscribe(annoncesSnapshots => {
      this.sousCategorie = annoncesSnapshots.map(annonceSnapshot => {
        const sousCategKey = annonceSnapshot.key;
        const sousCategData = annonceSnapshot.payload.val();
        return { key: sousCategKey, data: sousCategData };
      });
    });
  }
 
  
}
