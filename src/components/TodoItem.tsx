import {Todo} from "../types/todo.ts";
import {MdDeleteForever} from "react-icons/md";

type TodoItemProps = {
    todo: Todo,
    deleteTodo: (id: number) => void
}

export const TodoItem = ({todo, deleteTodo}: TodoItemProps) => {
    return (
        <>
            <h3>
                {todo.text}
                <button onClick={() => deleteTodo(todo.id)}>
                    <MdDeleteForever/>
                </button>
            </h3>
        </>

    )
}
