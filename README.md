http://localhost:5000/graphql
<!--  -->
query ExampleQuery($getTodoId: ID) {
  welcome
  getTodos {
    id
    title
    date
  }
  getTodo(id: $getTodoId){
    id
    title
    date
  }
}


mutation($title: String, $details: String, $date: Date){
  addTodo (title: $title,details: $details,date: $date){
    id
    title
    details
    date
  }

}

mutation($deleteTodoId: ID){
  deleteTodo(id: $deleteTodoId)
}

mutation($updateTodoId: ID, $updateTodoTitle2: String, $updateTodoDetails2: String, $updateTodoDate2: Date){
  updateTodo(id: $updateTodoId,title: $updateTodoTitle2,details: $updateTodoDetails2,date: $updateTodoDate2){
    id
    title
    details
    date
  }
}


<!--  -->