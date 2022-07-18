import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { takeLast } from 'rxjs';
import { Todo } from '../models/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  todo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  todoList: Todo[] = [
    {
      id: 1,
      name: 'Aprender Angular',
      isDone: false,
      readonly: true
    },
    {
      id: 2,
      name: 'Terminar o desafio',
      isDone: false,
      readonly: true
    },
    {
      id: 3,
      name: 'Jantar com a minha mãe',
      isDone: false,
      readonly: true
    },
    {
      id: 4,
      name: 'Fazer o curso da Santander',
      isDone: false,
      readonly: true
    }
  ]

  addTodo() {
    if(!this.validation(this.todo)){
      alert("É obrigatório inserir o nome de alguma task para entrar na lista! Digite novamente...")
      this.todo = ''
      return
    } else alert("Task adicionada! Agora assinale se já assistiu ou não!");
    
    this.todoList.push({
      id: new Date().getTime(),
      name: this.todo,
      isDone: false,
      readonly: true
    })
    this.todo = '';
    console.log(this.todoList);
  }

  deleteTodo(todo: Todo, id: number) {
    const resultado: boolean = confirm("Certeza que você quer deletar o item?")
    const name: number = this.todoList.findIndex(item => item.id === id)
    if(resultado == true){
      alert("A task " + this.todoList[name].name + " será removida")
      const index: number = this.todoList.indexOf(todo);
      this.todoList.splice(index, 1)
    } else {
      alert("Você desistiu de excluir o item " + this.todoList[name].name + " da lista!");
    }
    console.log(this.todoList)
  }

  // editTodo(id: number){
  //   const index: number = this.todoList.findIndex(item => item.id === id)
  //   this.todoList[index].readonly =! this.todoList[index].readonly
  // }

  validation(str: string) {
    return /[a-zA-Z1-9]/.test(str);
}
}
