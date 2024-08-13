import {useState} from "react";

type TodoInputProps = {
    addTodo: (text: string) => void
}

export const TodoInput = ({addTodo}: TodoInputProps) => {

    const [inputvalue, setinputvalue] = useState('');

    const submitTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        addTodo(inputvalue)
        setinputvalue('')
    }

    return (
        <div>
            <form onSubmit={submitTodo}>
                <input type="text" value={inputvalue} onChange={(event) => setinputvalue(event.target.value)}/>
                <button type="submit">add</button>
            </form>
        </div>
    )
}
