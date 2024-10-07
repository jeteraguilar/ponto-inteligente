import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AtualizacaoComponent, CadastroComponent, ListagemComponent } from './components';

@NgModule({
  declarations: [
    ListagemComponent,
    CadastroComponent,
    AtualizacaoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
