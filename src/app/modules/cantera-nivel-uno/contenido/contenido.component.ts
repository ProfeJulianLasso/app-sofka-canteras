import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('seman', this.route.snapshot.paramMap.get('semana'));
    console.log('contenido', this.route.snapshot.paramMap.get('contenido'));
  }
}
