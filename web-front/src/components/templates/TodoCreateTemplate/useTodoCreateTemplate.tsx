import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { NAVIGATION_PATH } from '../../../constants/navigations'
import { EventType } from '../../../interfaces/Event'

type Param = {
    addTodo: (title: string, content: string) => void
}

type StateType = {
    inputTitle: string
    inputContent: string
}

type ActionsType = {
    handleChangeTitle: EventType['onChangeInput']
    handleChangeContent: EventType['onChangeTextArea']
    handleCreateTodo: EventType['onSubmit']
}

export const useTodoCreateTemplate = ({ addTodo }: Param) => {
    const router = useRouter()

    const [inputTitle, setInputTitle] = useState('')
    const [inputContent, setInputContent] = useState('')

    const handleChangeTitle: EventType['onChangeInput'] = useCallback(
        (e) => setInputTitle(e.target.value),
        []
    )

    const handleChangeContent: EventType['onChangeTextArea'] = useCallback(
        (e) => setInputContent(e.target.value),
        []
    )

    const handleCreateTodo: EventType['onSubmit'] = useCallback(
        (e) => {
            e.preventDefault()
            if (inputTitle !== '' && inputContent !== '') {
                addTodo(inputTitle, inputContent)
                router.push(NAVIGATION_PATH.TOP)
            }
        },
        [addTodo, inputTitle, inputContent, router]
    )

    const states: StateType = { inputTitle, inputContent }

    const actions: ActionsType = {
        handleChangeTitle,
        handleChangeContent,
        handleCreateTodo,
    }

    return [states, actions] as const
}
