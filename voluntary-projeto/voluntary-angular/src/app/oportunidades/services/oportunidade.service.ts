import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Oportunidade } from '../model/oportunidade';



@Injectable({
  providedIn: 'root'
})
export class OportunidadeService {

 baseUrl = `${environment.baseUrl}oportunidade`;

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Oportunidade[]> {
    return this.httpClient.get<Oportunidade[]>(`${this.baseUrl}/lista`)
  }

  public detail(id: number): Observable<Oportunidade> {
    return this.httpClient.get<Oportunidade>(`${this.baseUrl}/detail/${id}`);
  }

  public detailName(nome: string): Observable<Oportunidade> {
    return this.httpClient.get<Oportunidade>(`${this.baseUrl}/detailname/${nome}`);
  }

  public save(oportunidade: Oportunidade): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/create`, oportunidade);
  }

  public update(id: number, oportunidade: Oportunidade): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}/update/${id}`, oportunidade);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/delete/${id}`);
  }
}
