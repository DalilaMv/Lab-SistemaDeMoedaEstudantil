import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresa.service';


@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.scss']
})
export class FormEmpresaComponent implements OnInit {

  instituicoes: any;
  empresa: any;
  constructor(private empresaService: EmpresaService) { }
  EmpresaForm = new FormGroup({
    user: new FormControl(null),
    senha: new FormControl(null),
    nome: new FormControl(null),
    cnpj: new FormControl(null),
    email: new FormControl(null)
  });
  ngOnInit(): void {

  }
  Enviar(): void{
    this.empresa = {
      usuario: this.EmpresaForm.value.user,
      senha: this.EmpresaForm.value.senha,
      nome: this.EmpresaForm.value.nome,
      cnpj: this.EmpresaForm.value.cnpj,
      email: this.EmpresaForm.value.email
    };
    this.empresaService.create(this.empresa).subscribe();
  }
}
