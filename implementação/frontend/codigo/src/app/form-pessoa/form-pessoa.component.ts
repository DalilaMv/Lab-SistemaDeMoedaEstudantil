import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-form-pessoa',
  templateUrl: './form-pessoa.component.html',
  styleUrls: ['./form-pessoa.component.scss']
})
export class FormPessoaComponent implements OnInit {
  instituicoes: any;
  pessoa: any;
  constructor(private pessoaService: PessoaService) { }
  PessoaForm = new FormGroup({
    user: new FormControl(null),
    senha: new FormControl(null),
    nome: new FormControl(null),
    cpf: new FormControl(null),
    rg: new FormControl(null),
    instituicao: new FormControl(null),
    curso: new FormControl(null)
  });
  ngOnInit(): void {
    this.pessoaService.getInstituicoes().subscribe(
      result => {
        this.instituicoes = result;
      }
    );
  }
  Enviar(): void{
    this.pessoa = {
      usuario: this.PessoaForm.value.user,
      senha: this.PessoaForm.value.senha,
      nome: this.PessoaForm.value.nome,
      rg: this.PessoaForm.value.rg,
      cpf: this.PessoaForm.value.cpf,
      instituicao: this.PessoaForm.value.instituicao,
      curso: this.PessoaForm.value.curso
    };
    this.pessoaService.create(this.pessoa).subscribe();
  }

}
