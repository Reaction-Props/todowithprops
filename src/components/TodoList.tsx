import {Todo} from "../types/todo.ts";
import {TodoItem} from "./TodoItem.tsx";

export type TodoListProps = {
    todo: Todo[],
    deleteTodo: (id: number) => void

}

export const TodoList = ({todo, deleteTodo}: TodoListProps) => {
    return (
        <div>
            {todo.map((todo) => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
            ))}
        </div>
    )
}
