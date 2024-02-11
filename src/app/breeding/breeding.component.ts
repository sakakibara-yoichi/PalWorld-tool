import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-breeding',
  standalone: true,
  imports: [],
  templateUrl: './breeding.component.html',
  styleUrl: './breeding.component.scss'
})
export class BreedingComponent implements OnInit {

  xlsxUrl = '/assets/beeding/breeding.xlsx';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {

  }



}
