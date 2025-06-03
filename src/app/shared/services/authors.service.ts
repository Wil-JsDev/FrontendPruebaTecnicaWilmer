import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { catchError, Observable, throwError } from 'rxjs';
import { IPaginatedAuthor } from '../interfaces/paginated.author.interfaces';
import { IAuthor } from '../interfaces/author.interface';

@Injectable({ providedIn: 'root' })
export class AuthorsService {

  private http = inject(HttpClient);
  envs = environment.API_URL;

  createAuthor(authorData: any): Observable<any> {
  return this.http.post(`${this.envs}/authors`, authorData)
    .pipe(
      catchError(error => {
        console.error('Error creating author:', error);
        return throwError(() => error);
      })
    );
}

getAuthors(page: number = 1, pageSize: number = 15): Observable<IPaginatedAuthor> {
  return this.http.get<IPaginatedAuthor>(`${this.envs}/authors?pageNumber=${page}&pageSize=${pageSize}`)
    .pipe(
      catchError(error => {
        console.error('Error fetching authors:', error);
        return throwError(() => error);
      })
    );
}

getAuthorById(id: number): Observable<IAuthor> {
  return this.http.get<IAuthor>(`${this.envs}/authors/${id}`)
    .pipe(
      catchError(error => {
        console.error(`Error fetching author with id ${id}:`, error);
        return throwError(() => error);
      })
    );
}

deleteAuthor(id: number): Observable<any> {
  return this.http.delete(`${this.envs}/authors/${id}`)
    .pipe(
      catchError(error => {
        console.error(`Error deleting author with id ${id}:`, error);
        return throwError(() => error);
      })
    );
}

getBooksByAuthorId(idBook: number): Observable<any> {
  return this.http.get(`${this.envs}/authors/books/${idBook}`)
    .pipe(
      catchError(error => {
        console.error(`Error fetching books for author with id ${idBook}:`, error);
        return throwError(() => error);
      })
    );
}

updateAuthor(id: number, authorData: FormData): Observable<any> {
  return this.http.put(`${this.envs}/authors/${id}`, authorData)
    .pipe(
      catchError(error => {
        console.error(`Error updating author with id ${id}:`, error);
        return throwError(() => error);
      })
    );
}

}
