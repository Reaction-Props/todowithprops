import {Todo} from "../types/todo.ts";

type TodoItemProps = {
    todo: Todo
}

export const TodoItem = ({todo}: TodoItemProps) => {
    return (
        <h3>{todo.text}</h3>
    )
}
