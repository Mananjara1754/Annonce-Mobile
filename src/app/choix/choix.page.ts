import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-choix',
  templateUrl: './choix.page.html',
  styleUrls: ['./choix.page.scss'],
})
export class ChoixPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToSecondPage(value: number) {
    this.router.navigate(['/annonceform'], {
      queryParams: { value: value }
    });
  }

}
