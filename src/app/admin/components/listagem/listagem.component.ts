import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';

import { HttpUtilService, Lancamento, LancamentoService, Funcionario, Tipo } from '../../../shared';
import { MatTableDataSource } from '@angular/material/table';

  @Component({
    selector: 'app-listagem',
    templateUrl: './listagem.component.html',
    styleUrls: ['./listagem.component.css']
  })
  export class ListagemComponent implements OnInit {

    dataSource!: MatTableDataSource<Lancamento>;
    colunas: string[] = ['data', 'tipo', 'localizacao', 'acao'];
    funcionarioId!: string;
    totalLancamentos!: number;

    private pagina!: number;
    private ordem!: string;
    private direcao!: string;

    constructor(
      private lancamentoService: LancamentoService,
      private httpUtil: HttpUtilService,
      private snackBar: MatSnackBar,
      private fb: FormBuilder) { }

    ngOnInit() {
      this.pagina = 0;
      this.ordemPadrao();
      this.exibirLancamentos();
    }

    ordemPadrao() {
      this.ordem = 'data';
      this.direcao = 'DESC';
    }

    exibirLancamentos() {
      this.funcionarioId = '2';

      this.lancamentoService.listarLancamentosPorFuncionario(
          this.funcionarioId, this.pagina, this.ordem, this.direcao)
        .subscribe(
          data => {
            this.totalLancamentos = data['data'].totalElements;
            const lancamentos = data['data'].content as Lancamento[];
            this.dataSource = new MatTableDataSource<Lancamento>(lancamentos);
          },
          err => {
            const msg: string = "Erro obtendo lançamentos.";
            this.snackBar.open(msg, "Erro", { duration: 5000 });
          }
        );
    }

    remover(lancamentoId: string) {
      alert(lancamentoId);
    }

    paginar(pageEvent: PageEvent) {
      this.pagina = pageEvent.pageIndex;
      this.exibirLancamentos();
    }

    ordenar(sort: Sort) {
      if (sort.direction == '') {
        this.ordemPadrao();
      } else {
        this.ordem = sort.active;
        this.direcao = sort.direction.toUpperCase();
      }
      this.exibirLancamentos();
    }

  }
