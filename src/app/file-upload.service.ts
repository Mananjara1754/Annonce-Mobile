import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import { AngularFireDatabase } from '@angular/fire/compat/database';
// import {  Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private storage: AngularFireStorage,private db: AngularFireDatabase) {}
  
  uploadFiles(files: File[], path: string, annonceKey: string): Promise<string[]> {
    const allowedExtensions = ['png', 'jpg', 'jpeg', 'webp'];
    const uploadPromises = [];
    if (files.length > 4) {
      return Promise.reject('You can only upload up to 4 files at once.');
    }
    const uploadedUrls: string[] = [];
    for (const file of files) {
      const fileNameParts = file.name.split('.');
      const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();
  
      if (!allowedExtensions.includes(fileExtension)) {
        console.log(fileExtension);
        return Promise.reject('Unsupported file format');
      }
      const filePath = `${path}/${file.name}`;
      const storageRef = this.storage.ref(filePath);
  
      const uploadPromise = storageRef.put(file).then(() => {
        return storageRef.getDownloadURL().toPromise();
      });
      uploadPromises.push(uploadPromise);
    }
    return Promise.all(uploadPromises).then(downloadUrls => {
      for (const downloadUrl of downloadUrls) {
        uploadedUrls.push(downloadUrl);
      }
      // Enregistrez les informations dans la base de données
      // const databaseRef = this.db.list('images');
      // for (let i = 0; i < files.length; i++) {
      //   databaseRef.push({
      //     annonceKey: annonceKey,
      //     imageName: files[i].name,
      //     downloadUrl: downloadUrls[i]
      //   });
      // }
      return uploadedUrls;
    });
  }

  // saveFileUpload(files: File[],downloadUrl : any,annonceKey : any){
  //   const databaseRef = this.db.list('images');
  //   for (let i = 0; i < files.length; i++) {
  //       databaseRef.push({
  //         annonceKey: annonceKey,
  //         imageName: files[i].name,
  //         downloadUrl: downloadUrl[i]
  //       });
  //     }
  // }
  

  


  // uploadFile(file: File, path: string): Promise<string> {
  //   const filePath = `${path}/${new Date().getTime()}_${file.name}`;
  //   const storageRef = this.storage.ref(filePath);

  //   const allowedExtensions = ['.png', '.jpg', '.jpeg', '.webp'];
  //   const fileNameParts = file.name.split('.');
  //   const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();
    
  //   if (!allowedExtensions.includes(fileExtension)) {
  //     return Promise.reject('Unsupported file format');
  //   }
  //   return storageRef.put(file).then(() => {
  //     const downloadUrl = storageRef.getDownloadURL().toPromise();
  //     const imageName = file.name;
  //     // Enregistrez les informations dans Realtime Database
  //     const databaseRef = this.db.list('images');
  //     databaseRef.push({
  //       annonceKey: "test",
  //       imageName: imageName,
  //       downloadUrl: downloadUrl
  //     });
  
  //     return downloadUrl;
  //   });
  // }
}
