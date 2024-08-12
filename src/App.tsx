
import './App.css'
import {TodoList} from "./components/TodoList.tsx";
import {Todo} from "./types/todo.ts";

function App() {

    const todo: Todo[] = [
        {id: 1, text: "Learn React", completed: false},
        {id: 2, text: "Learn TypeScript", completed: false},
        {id: 3, text: "Learn Vite", completed: false},
    ]

    return (
        <>
            <h1>Todo</h1>
            <TodoList todo={todo}/>
            <todoItem/>
        </>
    )
}

export default App
