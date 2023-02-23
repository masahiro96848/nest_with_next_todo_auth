import { TodoType } from '../interfaces/Todo'

export const INIT_TODO_LIST: Array<TodoType> = [
    {
        id: 1,
        title: 'Todo1',
        content: 'サンプルTodo1です',
    },
    {
        id: 2,
        title: 'Todo2',
        content: 'サンプルTodo2です',
    },
]

export const INIT_UNIQUE_ID = INIT_TODO_LIST.length
