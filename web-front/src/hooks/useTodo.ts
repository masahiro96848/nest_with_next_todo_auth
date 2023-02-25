import { useState, useCallback, useEffect } from 'react'
import { fetchTodoListApi, createTodoApi, updateTodoApi } from '@/api/todoApi'
import { TodoType } from '@/interfaces/Todo'

export const useTodo = () => {
    /** todoList */
    const [originTodoList, setOriginTodoList] = useState<Array<TodoType>>([])

    /** actions */
    const fetchTodoList = useCallback(async (): Promise<void> => {
        const data = await fetchTodoListApi()
        setOriginTodoList(typeof data === 'object' ? data : [])
    }, [])

    /**
     * Todo新規登録処理
     */
    const addTodo = useCallback(
        async (title: string, content: string) => {
            const todo = await createTodoApi(title, content)
            if (typeof todo !== 'object') return
            setOriginTodoList([
                ...originTodoList,
                {
                    id: todo.id,
                    title: todo.title,
                    content: todo.content,
                },
            ])
        },
        [originTodoList]
    )

    /**
     * Todoを更新する処理
     */
    const updateTodo = useCallback(
        async (id: number, title: string, content: string) => {
            const responseTodo = await updateTodoApi(id, title, content)
            if (typeof responseTodo !== 'object') return
            const updatedTodoList = originTodoList.map((todo) => {
                if (responseTodo.id === todo.id) {
                    return {
                        id: responseTodo.id,
                        title: responseTodo.title,
                        content: responseTodo.content,
                    }
                }
                return todo
            })
            setOriginTodoList(updatedTodoList)
        },
        [originTodoList]
    )

    /**
     * Todoを削除する処理
     */
    const handleDeleteTodo = useCallback(
        (targetId: number, targetTitle: string) => {
            if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
                const newTodoList = originTodoList.filter((todo) => todo.id !== targetId)

                setOriginTodoList(newTodoList)
            }
        },
        [originTodoList]
    )

    useEffect(() => {
        fetchTodoList()
    }, [fetchTodoList])

    return {
        originTodoList,
        addTodo,
        updateTodo,
        handleDeleteTodo,
    }
}
