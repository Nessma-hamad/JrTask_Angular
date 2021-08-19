import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Question } from '../Models/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  _url="http://localhost:32784/api/Questions"
  constructor(private http:HttpClient) { }

  addNewQuestion(question:Question):Observable<Question>
  {
    return this.http.post<Question>(this._url,question).pipe(
      catchError(
        error=>
        {
          return throwError(error);
        }
      )
    )
  }

  getAllQuestions():Observable<Question[]>
  {
    return this.http.get<Question[]>(this._url).pipe
    (
      catchError(
        error=>
        {
          return throwError(error);
        }
      )
    )
    
  }
  getJobPostionQuestionsById(jobPostionid: number): Observable<Question[]> {
    let url = `http://localhost:32784/JobPositionQuestions?JobPostionID=${jobPostionid}`;
    return this.http.get<Question[]>(url).pipe(catchError((err) => {
      return throwError(err.message || "Internal Server error contact site adminstarator");
    }));
  }
  getQuestionById(id: number): Observable<Question> {
    let url = `http://localhost:32784/api/Questions/${id}`;
    return this.http.get<Question>(url).pipe(catchError((err) => {
      return throwError(err.message || "Internal Server error contact site adminstarator");
    }));
  }
  updateQuestion(id: number, questionToUpdate: Question): Observable<Question>
   {
    
    let url = `http://localhost:32784/api/Questions/${id}`;
    return this.http.put<Question>(url, questionToUpdate)
      .pipe(catchError((err) => {
        return throwError(err.message || "Internal Server error contact site adminstarator");
      }
      ));
   }
   deleteQuestion(id: number): Observable<any> {
    let url = `http://localhost:32784/api/Questions/${id}`;
    return this.http.delete<any>(url).pipe(catchError((err) => {
      return throwError(err.message || "Internal Server error contact site adminstarator");
    }));
  }
}
