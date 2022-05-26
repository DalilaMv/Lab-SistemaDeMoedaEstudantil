import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PessoaService } from 'src/app/services/pessoa.service';
import { ExtratoComponent } from '../../extrato/extrato.component';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.scss']
})
export class SaldoComponent implements OnInit {
  saldo;
  tipo = "professor";
  constructor(public dialog: MatDialog,public pessoaService: PessoaService) { }
  ngOnInit(): void {
    this.tipo = localStorage.getItem('tipo');
    this.pessoaService.getSaldo().subscribe(
      result => {
        this.saldo = result;
      }
    );
  }
  mostrarExtrato(): void{
    const dialogRef = this.dialog.open(ExtratoComponent, {
      width: '800px'
    });
  }

}
