import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RepaymentDTO {
  id?: number;
  creditId: number;
  amount: number;
  date: string; // ISO date
}

@Injectable({ providedIn: 'root' })
export class RepaymentService {
  private apiUrl = 'http://localhost:8081/api/repayments';

  constructor(private http: HttpClient) {}

  getAll(): Observable<RepaymentDTO[]> {
    return this.http.get<RepaymentDTO[]>(this.apiUrl);
  }

  create(rep: RepaymentDTO): Observable<RepaymentDTO> {
    return this.http.post<RepaymentDTO>(this.apiUrl, rep);
  }
}
