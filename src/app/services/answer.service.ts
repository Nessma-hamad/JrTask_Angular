import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Answer } from '../Models/Answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  _url="http://localhost:32784/api/Answers"
  constructor(private http:HttpClient) { }

  addNewanswer(answer:Answer):Observable<Answer>
  {
    return this.http.post<Answer>(this._url,answer).pipe(
      catchError(
        error=>
        {
          return throwError(error);
        }
      )
    )
  }

  getAllanswers():Observable<Answer[]>
  {
    return this.http.get<Answer[]>(this._url).pipe
    (
      catchError(
        error=>
        {
          return throwError(error);
        }
      )
    )
    
  }
  getQuestionanswersById(questionid: number): Observable<Answer[]> {
    let url = `http://localhost:32784/QuestionAnswes?QuestionID=${questionid}`;
    return this.http.get<Answer[]>(url).pipe(catchError((err) => {
      return throwError(err.message || "Internal Server error contact site adminstarator");
    }));
  }
  getanswerById(id: number): Observable<Answer> {
    let url = `http://localhost:32784/api/Answers${id}`;
    return this.http.get<Answer>(url).pipe(catchError((err) => {
      return throwError(err.message || "Internal Server error contact site adminstarator");
    }));
  }
  updateanswer(id: number, answerToUpdate: Answer): Observable<Answer>
   {
    
    let url = `http://localhost:32784/api/Answers/${id}`;
    return this.http.put<Answer>(url, answerToUpdate)
      .pipe(catchError((err) => {
        return throwError(err.message || "Internal Server error contact site adminstarator");
      }
      ));
   }
   deleteanswer(id: number): Observable<any> {
    let url = `http://localhost:32784/api/Answers/${id}`;
    return this.http.delete<any>(url).pipe(catchError((err) => {
      return throwError(err.message || "Internal Server error contact site adminstarator");
    }));
  }
}
