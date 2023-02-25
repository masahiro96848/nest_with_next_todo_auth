import { AxiosResponse } from 'axios'
import globalAxios, { isAxiosError } from '@/api/config'
import { TodoType } from '@/interfaces/Todo'

/**
 * Todoリストの取得のAPI接続処理
 */
export const fetchTodoListApi = async () => {
    try {
        const { data }: AxiosResponse<Array<TodoType>> = await globalAxios.get('/todo')
        return data
    } catch (err) {
        if (isAxiosError(err)) {
            return err.code
        }
    }
}

/**
 * Todo新規登録のAPI接続処理
 */
export const createTodoApi = async (title: string, content: string) => {
    try {
        const { data }: AxiosResponse<TodoType> = await globalAxios.post('/todo', {
            title,
            content,
        })
        return data
    } catch (err) {
        if (isAxiosError(err)) {
            return err.code
        }
    }
}

/**
 * idに紐づく単一のTodo取得のAPI接続処理
 */
export const fetchTodoDetailApi = async (id: number) => {
    try {
        const { data }: AxiosResponse<TodoType> = await globalAxios.get(`/todo/${id}`)
        return data
    } catch (err) {
        if (isAxiosError(err)) {
            return err.code
        }
    }
}

/**
 * Todo更新のAPI接続処理
 */
export const updateTodoApi = async (id: number, title: string, content: string) => {
    try {
        const { data }: AxiosResponse<TodoType> = await globalAxios.patch(`/todo/${id}`, {
            title,
            content,
        })
        return data
    } catch (err) {
        if (isAxiosError(err)) {
            return err.code
        }
    }
}

/**
 * Todo削除のAPI接続処理
 */
export const deleteTodoApi = async (id: number) => {
    try {
        const { data }: AxiosResponse<TodoType> = await globalAxios.delete(`/todo/${id}`)
        return data
    } catch (err) {
        if (isAxiosError(err)) {
            return err.code
        }
    }
}
