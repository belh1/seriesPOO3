import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from 'src/app/models/serie';
import { SerieService } from 'src/app/services/services.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  series: Serie[];

  constructor(private router: Router, private serieService: SerieService) {
    this.series = this.serieService.series;
  }

  irParaCadastrar() {
    this.router.navigate(['/cadastrar']);
  }

  irParaDetalhar(serie: Serie) {
    this.router.navigateByUrl('/detalhar', { state: { Objeto: serie } });
  }
}
