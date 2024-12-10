import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { Owner } from "../../interfaces/owner";
import { FormsModule } from '@angular/forms';
import { Post } from "../../interfaces/post";
import { NewPost } from "../../interfaces/newPost";
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  newPost: Post = {
    title: '',
    body: '',
    userId: 0,
  }

  updatePost: NewPost = {
    userId: 1,
    title: 'las maravillas de la programacion',
    body: 'la programacion es una herramienta poderosa para crear aplicaciones y sistemas',
    id: 2
  }

  postId: number = 10;
  postIdDelete: number = 5;

  constructor(private postService: PostsService){
    //Obtener todos los posts
    this.postService.getPost().subscribe(data => console.log('Todos los posts: ', data));
    //crear un post
    this.postService.createPost(this.newPost).subscribe(data => console.log('Post creado: ',data));
    //actualizar un post
    this.postService.updatePost(this.postId, this.updatePost).subscribe(data => console.log('Post actualizado: ', data));
    //eliminar un post
    this.postService.deletePost(this.postIdDelete).subscribe(data => console.log('Post eliminado!: ', data));
  }

  @Input() nombrePropietario: any= {
    nombre: '',
    telefono: '',
    mascotas: []
  }

  @Output() cambiarNombreDesdeDashboard = new EventEmitter<string>();

  metodoCambiarNombre(){
    this.cambiarNombreDesdeDashboard.emit(this.nombrePropietario.nombre);
  }

}
