import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Candidate } from '../Models/Candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  _url="http://localhost:32784/api/Candidates"
  constructor(private http:HttpClient) { }

  addNewCandidate(candidate:Candidate):Observable<Candidate>
  {
    return this.http.post<Candidate>(this._url,candidate).pipe(
      catchError(
        error=>
        {
          return throwError(error);
        }
      )
    )
  }

  getAllCandidates():Observable<Candidate[]>
  {
    return this.http.get<Candidate[]>(this._url).pipe
    (
      catchError(
        error=>
        {
          return throwError(error);
        }
      )
    )
    
  }

  getCandidateById(id: number): Observable<Candidate> {
    let url = `http://localhost:32784/api/Candidates/${id}`;
    return this.http.get<Candidate>(url).pipe(catchError((err) => {
      return throwError(err.message || "Internal Server error contact site adminstarator");
    }));
  }
  updateCandidate(id: number, CandidateToUpdate: Candidate): Observable<Candidate>
   {
    
    let url = `http://localhost:32784/api/Candidates/${id}`;
    return this.http.put<Candidate>(url, CandidateToUpdate)
      .pipe(catchError((err) => {
        return throwError(err.message || "Internal Server error contact site adminstarator");
      }
      ));
   }
   deleteCandidate(id: number): Observable<any> {
    let url = `http://localhost:32784/api/Candidates/${id}`;
    return this.http.delete<any>(url).pipe(catchError((err) => {
      return throwError(err.message || "Internal Server error contact site adminstarator");
    }));
  }
}
