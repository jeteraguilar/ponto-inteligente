import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AdminComponent, AtualizacaoComponent, CadastroComponent, ListagemComponent } from './components';
import { AdminGuard } from './services';

export const AdminRoutes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
    canActivate: [ AdminGuard ],
		children: [
		  {
			path: '',
			component: ListagemComponent
		  },
		  {
			path: 'cadastro',
			component: CadastroComponent
		  },
		  {
			path: 'atualizacao/:lancamentoId',
			component: AtualizacaoComponent
		  }
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(AdminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}
