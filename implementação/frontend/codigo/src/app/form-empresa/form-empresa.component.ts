import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpresaService } from '../empresa.service';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.scss']
})
export class FormEmpresaComponent implements OnInit {

  instituicoes: any;
  pessoa: any;
  constructor(private pessoaService: EmpresaService) { }
  PessoaForm = new FormGroup({
    user: new FormControl(null),
    senha: new FormControl(null),
    nome: new FormControl(null),
    cnpj: new FormControl(null),
  });
  ngOnInit(): void {
  }
  Enviar(): void{
    this.pessoa = {
      usuario: this.PessoaForm.value.user,
      senha: this.PessoaForm.value.senha,
      nome: this.PessoaForm.value.nome,
      cnpj: this.PessoaForm.value.cnpj,
    };
    this.pessoaService.create(this.pessoa).subscribe();
  }
}
