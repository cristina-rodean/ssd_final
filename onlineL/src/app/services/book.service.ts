import { Injectable } from '@angular/core';
import { Book } from '../shared/models/Book';
import { sample_books, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { BOOKS_BY_ID_URL, BOOKS_BY_SEARCH_URL, BOOKS_BY_TAG_URL, BOOKS_TAGS_URL, BOOKS_URL } from '../shared/constants/url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getAllBooksByTag(tag: any): Observable<Book[]> {
    throw new Error('Method not implemented.');
  }
  constructor(private http:HttpClient) { }

  getAll():Observable<Book[]>{
    return this.http.get<Book[]>(BOOKS_URL);
  }

  getAllBooksBySearchTerm(searchTerm:string){
    return this.http.get<Book[]>(BOOKS_BY_SEARCH_URL + searchTerm);  
  }

  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(BOOKS_TAGS_URL);
  }

  getAllBooksBytag(tag:string):Observable<Book[]>{
    return tag === "All"?
    this.getAll(): 
    this.http.get<Book[]>(BOOKS_BY_TAG_URL + tag);
  }

  getBookById(bookId:string):Observable<Book>{
    return this.http.get<Book>(BOOKS_BY_ID_URL + bookId);
  }
  

}