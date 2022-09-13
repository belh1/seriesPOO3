import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SerieService } from '../../services/services.page';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  data: string;
  form_cadastrar: FormGroup;
  isSubmitted: boolean = false;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private serieService: SerieService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.data = new Date().toISOString();
    this.form_cadastrar = this.formBuilder.group({
      nome: ["", [Validators.required]],
      autor: ["", [Validators.required]],
      episodio: ["", [Validators.required]],
      genero: ["", [Validators.required]],
      sinopse: ["", [Validators.required]],
      temporada: ["", [Validators.required]],
      plataforma: ["", [Validators.required]],
    });
  }

  get errorControl() {
    return this.form_cadastrar.controls;
  }

  submitForm() : boolean {
    this.isSubmitted = true;
    if (!this.form_cadastrar.valid) {
      this.presentAlert('Catalogo', 'Erro', 'Todos os campos sao obrigatórios');
      return false;
    } else {
      this.cadastrar();
    }
  }

  private cadastrar() {
    this.serieService.inserir(this.form_cadastrar.value);
    this.presentAlert('Catalogo', 'Sucesso', 'Dados validos!');
    this.router.navigate(['/home']);
  }

  async presentAlert(header: string, subHeader: string, massage: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: massage,
      buttons: ['OK'],
    });

    await alert.present();
  }
  irParaHome(){
    this.router.navigate(["/home"]);
  }

}
