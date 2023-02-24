import { useContext, createContext, ReactNode } from 'react'
import { useTodo } from '@/hooks/useTodo'
import { TodoType } from '@/interfaces/Todo'

type Props = {
    children: ReactNode
}

interface ContextInterface {
    originTodoList: Array<TodoType>
    addTodo: (title: string, content: string) => void
    updateTodo: (id: number, title: string, content: string) => void
    handleDeleteTodo: (targetId: number, targetTitle: string) => void
}

const TodoContext = createContext({} as ContextInterface)

export const TodoProvider = ({ children }: Props) => {
    const { originTodoList, addTodo, updateTodo, handleDeleteTodo } = useTodo()

    return (
        <TodoContext.Provider
            value={{
                originTodoList,
                addTodo,
                updateTodo,
                handleDeleteTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => useContext(TodoContext)
