import { useMemo, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { NAVIGATION_PATH } from '../../../constants/navigations'
import { TodoType } from '../../../interfaces/Todo'
import { EventType } from '../../../interfaces/Event'

type Param = {
    originTodoList: Array<TodoType>
    updateTodo: (id: number, title: string, content: string) => void
}

type StateType = {
    todo: TodoType | undefined
    inputTitle: string
    inputContent: string
}

type ActionsType = {
    handleChangeTitle: EventType['onChangeInput']
    handleChangeContent: EventType['onChangeTextArea']
    handleUpdateTodo: EventType['onSubmit']
}

export const useTodoEditTemplate = ({ originTodoList, updateTodo }: Param) => {
    const router = useRouter()

    const todo = useMemo(
        () =>
            originTodoList.find(
                (todo) => String(todo.id) === router?.query?.id
            ),
        [router?.query?.id, originTodoList]
    )

    const [inputTitle, setInputTitle] = useState(todo?.title || '')
    const [inputContent, setInputContent] = useState(todo?.content || '')

    const handleChangeTitle: EventType['onChangeInput'] = useCallback(
        (e) => setInputTitle(e.target.value),
        []
    )

    const handleChangeContent: EventType['onChangeTextArea'] = useCallback(
        (e) => setInputContent(e.target.value),
        []
    )

    /**
     * Todoの更新処理
     */
    const handleUpdateTodo: EventType['onSubmit'] = useCallback(
        (e) => {
            e.preventDefault()
            if (!!todo?.id && inputTitle !== '' && inputContent !== '') {
                updateTodo(todo.id, inputTitle, inputContent)
                router.push(NAVIGATION_PATH.TOP)
            }
        },
        [router, todo?.id, inputTitle, inputContent, updateTodo]
    )

    const states: StateType = {
        todo,
        inputTitle,
        inputContent,
    }

    const actions: ActionsType = {
        handleChangeTitle,
        handleChangeContent,
        handleUpdateTodo,
    }

    return [states, actions] as const
}
