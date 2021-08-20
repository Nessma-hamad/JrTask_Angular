import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CandidateAnswer } from '../Models/CandidateAnswer';

@Injectable({
  providedIn: 'root'
})
export class CandidateAnswerService {

  _url="http://localhost:32784/api/CandidateAnswers"
  constructor(private http:HttpClient) { }

  addNewCandidateAnswer(candidateAnswer:CandidateAnswer):Observable<CandidateAnswer>
  {
    return this.http.post<CandidateAnswer>(this._url,candidateAnswer).pipe(
      catchError(
        error=>
        {
          return throwError(error);
        }
      )
    )
  }

 

  
  
   
}
