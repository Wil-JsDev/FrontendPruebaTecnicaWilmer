import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { catchError, Observable, throwError } from "rxjs";
import { IPaginatedBooks } from "../interfaces/paginated.interfaces"
import { IBooks } from "../interfaces/books.interface";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private http = inject(HttpClient);
  envs = environment.API_URL;

 getBookPaginated(pageNumber: number = 1, pageSize: number = 15): Observable<IPaginatedBooks> {
  return this.http.get<IPaginatedBooks>(`${this.envs}/books?pageNumber=${pageNumber}&pageSize=${pageSize}`)
    .pipe(
      catchError(error => {
        console.error('Error fetching paginated books:', error);
        return throwError(() => error);
      })
    );
}

deleteBook(id: number): Observable<any> {
  return this.http.delete(`${this.envs}/books/${id}`)
    .pipe(
      catchError(error => {
        console.error(`Error deleting book with id ${id}:`, error);
        return throwError(() => error);
      })
    );
}

getBooksById(id: number): Observable<IBooks> {
  return this.http.get<IBooks>(`${this.envs}/books/${id}`)
    .pipe(
      catchError(error => {
        console.error(`Error fetching book with id ${id}:`, error);
        return throwError(() => error);
      })
    );
}

createBooks(booksData: FormData): Observable<any> {
  return this.http.post(`${this.envs}/books`, booksData)
    .pipe(
      catchError(error => {
        console.error('Error creating book:', error);
        return throwError(() => error);
      })
    );
}

updateBooks(id: number, booksData: FormData): Observable<any> {
  return this.http.put(`${this.envs}/books/${id}`, booksData)
    .pipe(
      catchError(error => {
        console.error(`Error updating book with id ${id}:`, error);
        return throwError(() => error);
      })
    );
}
}
