import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { VoluntarioForm } from './../model/voluntario-form';

@Injectable({
  providedIn: 'root'
})
export class VoluntarioService {

  baseUrl = `${environment.baseUrl}voluntario`;

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<VoluntarioForm[]> {
    return this.httpClient.get<VoluntarioForm[]>(`${this.baseUrl}/lista`);
  }

  public save(voluntarioForm: VoluntarioForm): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/create`, voluntarioForm);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/delete/${id}`)
  }
}
