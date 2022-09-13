import { Component, OnInit } from '@angular/core';
import { Serie } from '../models/serie';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class SerieService {
  private _series: Serie[] = [];

  constructor() {
    this._series.push(
      new Serie(
        'Shadowhunters',
        'Ed Decter',
        55,
        'ficção',
        'Clary Fray acabou de se inscrever na Academia de Artes do Brooklyn. Em seu aniversário de 18 anos, ela descobriu que faz parte de um mundo completamente diferente, o dos caçadores de sombras, humanos nascidos com sangue de anjo que protegem o mundo dos humanos dos demônios. Naquela noite, a mãe de Clary, Jocelyn, é sequestrada por um grupo de Caçadores de Sombras malvados chamado O Ciclo. O líder deles é o ex-marido de Jocelyn, Valentine Morgenstern. Com a mãe desaparecida, Clary se volta para Luke, uma pessoa em quem confia, apenas para ser aparentemente traída. Clary junta-se com um grupo de Caçadores de Sombras para salvar sua mãe e descobre poderes que ela nunca soube possuir. Clary é jogada no mundo da caça aos demônios com o misterioso, narcisista e atraente Jace, e também seu amigo leal e nerd, Simon. Agora, vivendo entre fadas, guerreiros, feiticeiros, vampiros e lobisomens, Clary começa uma jornada de auto-descoberta ao saber mais sobre seu passado e o que seu futuro pode aguentar',
        3,
        'netflix'
      )
    );
  }

  public get series(): Serie[] {
    return this._series;
  }

  public inserir(serie: Serie) {
    this._series.push(serie);
  }

  public editar(
    serie: Serie,
    nome: string,
    autor: string,
    episodio: number,
    genero: string,
    sinopse: string,
    temporada: number
  ): boolean {
    for (let i = 0; i < this._series.length; i++) {
      if (this._series[i].id == serie.id) {
        (this._series[i].nome = nome),
          (this._series[i].autor = autor),
          (this._series[i].episodio = episodio),
          (this._series[i].genero = genero),
          (this._series[i].sinopse = sinopse),
          (this._series[i].temporada = temporada);
        return true;
      }
    }
    return false;
  }

  public excluir(serie: Serie): boolean {
    for (let i = 0; i < this._series.length; i++) {
      if (this._series[i].id == serie.id) {
        this._series.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}
