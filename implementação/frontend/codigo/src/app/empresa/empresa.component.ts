import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {

  pessoas: any;
  router: Router;

  constructor(private pessoaService: EmpresaService, router: Router) { this.router = router;}
  

  ngOnInit(): void {
    this.pessoaService.getAll().subscribe(
      result => {
        this.pessoas = result;
      }
    );
    
  }
  Adicionar(): void{
    this.router.navigate(['/empresa/criar']);
  }
  Excluir(pessoa): void {
    console.log(pessoa);
    this.pessoaService.remove(pessoa).subscribe(result => location.reload());
    
  }


}
