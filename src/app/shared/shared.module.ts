import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MascaraDirective } from './directives/mascara.directive';
import { PtBrMatPaginatorIntl, TipoPipe } from './';

@NgModule({
  declarations: [
    MascaraDirective,
    TipoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MascaraDirective,
    TipoPipe
  ],
  providers: [
    PtBrMatPaginatorIntl
  ]
})
export class SharedModule { }
