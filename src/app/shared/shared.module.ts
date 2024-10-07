import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MascaraDirective } from './directives/mascara.directive';
import { PtBrMatPaginatorIntl } from './';
import { TipoPipe } from './pipes/tipo.pipe';



@NgModule({
  declarations: [
    MascaraDirective,
    TipoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MascaraDirective
  ],
  providers: [
    PtBrMatPaginatorIntl
  ]
})
export class SharedModule { }
