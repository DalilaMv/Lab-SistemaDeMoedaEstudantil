import { Component, OnInit } from '@angular/core';
import { VantagemService } from '../services/vantagem.service';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.scss']
})
export class BeneficiosComponent implements OnInit {
  vantagens: any;
  saldo: string;
  constructor(private vantagemService: VantagemService) { }

  ngOnInit(): void {
    this.vantagemService.getAll().subscribe(resp => this.vantagens = resp );
    this.saldo = localStorage.getItem('saldo');

  }
  Comprar(vantagem): void{
    this.vantagemService.buyVantage(this.saldo, vantagem.empresa_id, vantagem.preco, vantagem.id);
  }

}
