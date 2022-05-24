import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  pessoas: any;
  router: Router;
  @Output() edit = new EventEmitter<any>();
  constructor(private pessoaService: PessoaService, router: Router) { this.router = router; }

  ngOnInit(): void {
    this.pessoaService.getAll().subscribe(
      result => {
        this.pessoas = result;
      }
    );
  }
  Adicionar(): void{
    this.router.navigate(['/pessoa/criar']);
  }
  Excluir(pessoa): void {
    console.log(pessoa);
    this.pessoaService.remove(pessoa).subscribe(result => location.reload());
  }
  Editar(): void{
    this.edit.emit(false);
  }

}
