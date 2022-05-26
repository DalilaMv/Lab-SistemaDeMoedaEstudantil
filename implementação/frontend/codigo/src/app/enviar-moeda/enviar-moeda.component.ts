import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-enviar-moeda',
  templateUrl: './enviar-moeda.component.html',
  styleUrls: ['./enviar-moeda.component.scss']
})
export class EnviarMoedaComponent implements OnInit {
  EnvioForm = new FormGroup({
    aluno: new FormControl(null),
    moeda: new FormControl(null),
  });
  alunos: any;
  alunoSaldo;
  professorSaldo;
  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoaService.getAll().subscribe(
      result => {
        this.alunos = result;
      }
    );
    this.pessoaService.getSaldo().subscribe(
      result => {
        this.professorSaldo = result;
      }
    );
  }
  EnviaMoeda(): void{
    
    const aluno = this.alunos.find(aluno => aluno.id == Number(this.EnvioForm.value.aluno));
    this.alunoSaldo = aluno.pessoa__saldo + this.EnvioForm.value.moeda;
    this.professorSaldo = this.professorSaldo - this.EnvioForm.value.moeda;
    this.pessoaService.updateSaldo(aluno.id, 'aluno', this.alunoSaldo, this.professorSaldo ).subscribe()
    this.pessoaService.updateExtrato(aluno.id, 'aluno', this.EnvioForm.value.moeda).subscribe();
  }

}
