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
  data: string;
  edicao: boolean = true;
  form_detalhar: FormGroup;
  isSubmitted: boolean = false;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private serieService: SerieService,
    private formBuilder: FormBuilder
  ) {}


  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.serie = nav.extras.state.objeto;
    this.data = new Date().toISOString();
    this.form_detalhar= this.formBuilder.group({
    nome: [this.serie.nome, [Validators.required]],
    autor: [this.serie.autor, [Validators.required]],
    episodio: [this.serie.episodio, [Validators.required]],
    genero: [this.serie.genero, [Validators.required]],
    sinopse: [this.serie.sinopse, [Validators.required]],
    temporada: [this.serie.temporada, [Validators.required]],
    plataforma: [this.serie.plataforma, [Validators.required]],
  }); 
}

  get errorControl() {
    return this.form_detalhar.controls;
  }

  submitForm() : boolean {
    this.isSubmitted = true;
    if (!this.form_detalhar.valid) {
      this.presentAlert('Catalogo', 'Erro', 'Todos os campos sao obrigatórios');
      return false;
    } else {
      this.editar();
    }
  }

  alterarEdicao() {
    if (this.edicao == true) {
      this.edicao = false;
    } else {
      this.edicao = true;
    }
  }

     editar(){
if(!this.form_detalhar.valid){
    this.presentAlert("Catalogo", "Sucesso", "Edição efetuado com Sucesso!");
    }else{
if(this.serieService.editar(
 this.form_detalhar.value.nome,
   this.form_detalhar.value.autor,
  this.form_detalhar.value.episodio,
  this.form_detalhar.value.genero,
  this.form_detalhar.value.sinopse,
  this.form_detalhar.value.temporada,
  this.form_detalhar.value.plataforma
)
){
this.router.navigate(['/home']);
this.presentAlert('Disciplina', 'Sucesso', 'A disciplina foi editada!');
}else{
 this.presentAlert("Catalogo", "ERRO", "produto nao encontrado!");

}}}



  excluir() {
    this.presentAlertConfirm(
      'Catalogo',
      'Excluir Produto',
      'Você realmente deseja excluir o produto?',
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

irParaHome(){




   this.router.navigate(["/home"]);


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







 async presentAlertConfirm(header: string, subHeader: string, message: string) {


   const alert = await this.alertController.create({


     header: header,


     subHeader: subHeader,


     message: message,


     buttons: [


       {


         text: 'Cancelar',


         role: 'cancel',


         handler: () => {


         },


       },


       {


         text: 'Confirmar',


         role: 'confirm',


         handler: () => {


           this.excluirContato();


         },


       },


     ],


   });


   await alert.present();


 }


}


 

