import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JobPosition } from '../Models/JobPosition';

@Injectable({
  providedIn: 'root'
})
export class JobPositionService {
 
  _url="http://localhost:32784/api/JobPosition"
  constructor(private http:HttpClient) { }

  addNewJobPosition(jobPosition:JobPosition):Observable<JobPosition>
  {
    return this.http.post<JobPosition>(this._url,jobPosition).pipe(
      catchError(
        error=>
        {
          return throwError(error);
        }
      )
    )
  }

  getAllJobPosition():Observable<JobPosition[]>
  {
    return this.http.get<JobPosition[]>(this._url).pipe
    (
      catchError(
        error=>
        {
          return throwError(error);
        }
      )
    )
    
  }

  getJobPositionById(id: number): Observable<JobPosition> {
    let url = `http://localhost:32784/api/JobPosition/${id}`;
    return this.http.get<JobPosition>(url).pipe(catchError((err) => {
      return throwError(err.message || "Internal Server error contact site adminstarator");
    }));
  }
  updateJobPosition(id: number, jobPositionToUpdate: JobPosition): Observable<JobPosition>
   {
    
    let url = `http://localhost:32784/api/JobPosition/${id}`;
    return this.http.put<JobPosition>(url, jobPositionToUpdate)
      .pipe(catchError((err) => {
        return throwError(err.message || "Internal Server error contact site adminstarator");
      }
      ));
   }
   deleteJobPosition(id: number): Observable<any> {
    let url = `http://localhost:32784/api/JobPosition/${id}`;
    return this.http.delete<any>(url).pipe(catchError((err) => {
      return throwError(err.message || "Internal Server error contact site adminstarator");
    }));
  }
}
