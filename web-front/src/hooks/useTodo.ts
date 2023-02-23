import { useState, useCallback } from 'react'
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from '../constants/data'
import { TodoType } from '../interfaces/Todo'

export const useTodo = () => {
    const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST)
    const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID)

    // Todoの新規登録処理
    const addTodo = useCallback(
        (title: string, content: string) => {
            const nextUniqueId = uniqueId + 1
            const newTodo = [
                ...originTodoList,
                {
                    id: nextUniqueId,
                    title: title,
                    content: content,
                },
            ]
            // todoListを更新
            setOriginTodoList(newTodo)
            // 採番IDを更新
            setUniqueId(nextUniqueId)
        },
        [originTodoList, uniqueId]
    )

    /**
     * Todoを更新する処理
     */
    const updateTodo = useCallback(
        (id: number, title: string, content: string) => {
            const updatedTodoList = originTodoList.map((todo) => {
                if (id === todo.id) {
                    return {
                        id: todo.id,
                        title: title,
                        content: content,
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
                const newTodoList = originTodoList.filter(
                    (todo) => todo.id !== targetId
                )

                setOriginTodoList(newTodoList)
            }
        },
        [originTodoList]
    )

    return {
        originTodoList,
        addTodo,
        updateTodo,
        handleDeleteTodo,
    }
}
