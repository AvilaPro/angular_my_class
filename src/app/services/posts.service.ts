import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewPost } from '../interfaces/newPost';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPost(): Observable<any>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }

  createPost(newPost: Post): Observable<any>{
    return this.http.post('https://jsonplaceholder.typicode.com/posts', newPost);
  }

  updatePost(postId: number, post: NewPost): Observable<any>{
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, post);
  }

  deletePost(postId: number): Observable<any>{
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  }
}
