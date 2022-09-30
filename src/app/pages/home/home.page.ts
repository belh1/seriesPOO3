import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from 'src/app/models/serie';
import { SerieFirebaseService } from 'src/app/service/serie-firebase.service';
import { SerieService } from 'src/app/services/services.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  series: Serie[];

  constructor(
    private router: Router,
    private serieFS: SerieFirebaseService) {
    this.carregarSerie();
  }
  carregarSerie(){
    this.serieFS.getSeries()
    .subscribe(res => {
      this.series = res.map(e=>{
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Serie
        } as Serie
      });
    });
  }

  irParaCadastrar() {
    this.router.navigate(['/cadastrar']);
  }

  irParaDetalhar(serie: Serie) {
    this.router.navigateByUrl('/detalhar', { state: { objeto: serie } });
  }
}
