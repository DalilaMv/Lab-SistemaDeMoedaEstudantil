import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  linhas;
  constructor(public dialogRef: MatDialogRef<ExtratoComponent>, public pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoaService.getExtrato().subscribe(
      result => {
        this.linhas =  result;
      }
    );
    console.log(this.linhas)
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
