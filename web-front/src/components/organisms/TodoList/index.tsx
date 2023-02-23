import { useTodoList } from './useTodoList'
import { TodoType } from '../../../interfaces/Todo'

type Props = {
    todoList: Array<TodoType>
    handleDeleteTodo: (targetId: number, targetTitle: string) => void
}

export const TodoList = ({ todoList, handleDeleteTodo }: Props) => {
    const [{ handleMoveDetailPage, handleMoveEditPage }] = useTodoList()

    return (
        <ul className="list-row">
            {todoList.map((todo) => (
                <li key={todo.id} className="list">
                    <span className="">{todo.title}</span>
                    <button
                        onClick={() => handleMoveDetailPage(todo.id)}
                        className="fa fa-file fa-lg"
                    >
                        詳細
                    </button>
                    <button
                        onClick={() => handleMoveEditPage(todo.id)}
                        className="fa fa-pen-square fa-lg"
                    >
                        編集
                    </button>
                    <button
                        onClick={() => handleDeleteTodo(todo.id, todo.title)}
                        className="fa fa-trash fa-lg"
                        aria-hidden="true"
                    >
                        削除
                    </button>
                </li>
            ))}
        </ul>
    )
}
