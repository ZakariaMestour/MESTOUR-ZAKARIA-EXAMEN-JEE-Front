import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CreditDTO {
  id?: number;
  amount: number;
  clientId: number;
}

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  private apiUrl = 'http://localhost:8081/api/credits';

  constructor(private http: HttpClient) {}

  getAll(): Observable<CreditDTO[]> {
    return this.http.get<CreditDTO[]>(this.apiUrl);
  }

  create(credit: CreditDTO): Observable<CreditDTO> {
    return this.http.post<CreditDTO>(this.apiUrl, credit);
  }
}
