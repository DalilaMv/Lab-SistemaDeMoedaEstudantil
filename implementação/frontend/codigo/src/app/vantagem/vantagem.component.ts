import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VantagemService } from '../services/vantagem.service';

@Component({
  selector: 'app-vantagem',
  templateUrl: './vantagem.component.html',
  styleUrls: ['./vantagem.component.scss']
})
export class VantagemComponent implements OnInit {

  constructor(private vantagemService: VantagemService) { }
  VantagemForm = new FormGroup({
    imagem: new FormControl(null),
    descricao: new FormControl(null),
    nome: new FormControl(null),
  });
  ngOnInit(): void {
  }
  Cadastro(): void {
    console.log('oi');
    this.vantagemService.create(this.VantagemForm.value.nome, this.VantagemForm.value.descricao, 
    this.VantagemForm.value.imagem).subscribe();
  }
}
