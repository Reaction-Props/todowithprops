import {Todo} from "../types/todo.ts";
import {TodoItem} from "./TodoItem.tsx";

export type TodoListProps = {
    todo: Todo[]
}

export const TodoList = ({todo}: TodoListProps) => {
    return (
        <div>
            {todo.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </div>
    )
}
