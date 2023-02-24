import { AxiosResponse } from 'axios'
import { globalAxios, isAxiosError } from '@/api/config'
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
