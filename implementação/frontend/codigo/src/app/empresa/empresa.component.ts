import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpresaService } from '../services/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {

  empresas: any;
  router: Router;

  constructor(private empresaService: EmpresaService, router: Router) { this.router = router;}
  

  ngOnInit(): void {
    this.empresaService.getAll().subscribe(
      result => {
        this.empresas = result;
      }
    );
    
  }
  Adicionar(): void{
    this.router.navigate(['/empresa/criar']);
  }
  Excluir(empresa): void {

    this.empresaService.remove(empresa).subscribe(result => location.reload());
    
  }


}
