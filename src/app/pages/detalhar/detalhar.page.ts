import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Serie } from 'src/app/models/serie';
import { SerieService } from 'src/app/services/services.page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  serie: Serie;
  nome: string;
  autor: string;
  episodio: number;
  genero: string;
  sinopse: string;
  data_lancamento: string;
  temporada: number;
  plataforma: string;
  edicao: boolean = true;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private serieService: SerieService
  ) {}

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.serie = nav.extras.state.objeto;
    this.data_lancamento = new Date().toISOString();
    this.nome = this.serie.nome;
    this.autor = this.serie.autor;
    this.genero = this.serie.genero;
    this.episodio = this.serie.episodio;
    this.sinopse = this.sinopse;
    this.temporada = this.temporada;
    this.plataforma = this.serie.plataforma;
  }

  alterarEdicao() {
    if (this.edicao == true) {
      this.edicao = false;
    } else {
      this.edicao = true;
    }
  }

  editar() {
    this.data_lancamento = this.data_lancamento.split('T')[0];
    if (
      this.validar(this.nome) &&
      this.validar(this.autor) &&
      this.validar(this.genero) &&
      this.validar(this.data_lancamento) &&
      this.validar(this.episodio) &&
      this.validar(this.plataforma) &&
      this.validar(this.sinopse) &&
      this.validar(this.temporada)
    ) {
      if (
        this.serieService.editar(
          this.serie,
          this.nome,
          this.autor,
          this.episodio,
          this.genero,
          this.sinopse,
          this.data_lancamento,
          this.temporada
        )
      ) {
        this.presentAlert('Catalogo', 'Sucesso', 'Dados do Catalogo Editado!');
        this.router.navigate(['/home']);
      } else {
        this.presentAlert('Catalogo', 'Erro', 'Produto Não Encontrado!');
      }
    } else {
      this.presentAlert(
        'Catalogo',
        'Erro',
        'Todos os campos são Obrigatórios!'
      );
    }
  }

  excluir() {
    this.presentAlertConfirm(
      'Catalogo',
      'Excluir Produto',
      'Você realmente deseja excluir o produto?',
      this.excluirContato()
    );
  }

  private excluirContato() {
    if (this.serieService.excluir(this.serie)) {
      this.presentAlert('Catalogo', 'Excluir', 'Exclusão Realizada');
      this.router.navigate(['/home']);
    } else {
      this.presentAlert('Catalogo', 'Excluir', 'Produto Não Encontrado!');
    }
  }

  private validar(campo: any): boolean {
    if (!campo) {
      return false;
    }
    return true;
  }

  async presentAlert(header: string, subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async presentAlertConfirm(
    header: string,
    subHeader: string,
    message: string,
    acao: any
  ) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {},
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (acao) => {
            acao;
          },
        },
      ],
    });
    await alert.present();
  }
}
