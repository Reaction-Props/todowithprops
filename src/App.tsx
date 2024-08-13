import './App.css'
import {Todo} from "./types/todo.ts";
import {useState} from "react";
import {TodoList} from "./components/TodoList.tsx";
import {TodoInput} from "./components/TodoInput.tsx";
import {Header} from "./components/Header.tsx";

function App() {

    const [todos, setTodos] = useState<Todo[]>([
        {id: 1, text: "Learn React", completed: false},
        {id: 2, text: "Learn TypeScript", completed: false},
        {id: 3, text: "Learn Vite", completed: false}
    ]);


    const addTodo = (text: string) => {
        const newTodos = [...todos, {id: todos.length + 1, text, completed: false}];
        setTodos(newTodos);
    }

    const deleteTodo = (id: number) => {
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
    }


    return (
        <div className="App">
            <Header/>
            <h1>Todo</h1>
            <TodoInput addTodo={addTodo}/>
            <TodoList todo={todos} deleteTodo={deleteTodo}/>
        </div>
    )
}

export default App
