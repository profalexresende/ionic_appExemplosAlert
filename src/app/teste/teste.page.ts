
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {
nome: string;

constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.nome = this.activatedRoute.snapshot.paramMap.get('valor');
  }
}
