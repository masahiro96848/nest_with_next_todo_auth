import { AxiosResponse } from 'axios'
import globalAxios, { isAxiosError, ResponseType, IErrorResponse } from './config'
import { AuthResponseType } from '@/interfaces/User'

/**
 * ログインAPI
 */
export const signInApi = async (email: string, password: string) => {
    try {
        const { data }: AxiosResponse<AuthResponseType> = await globalAxios.post('auth/sign_in', {
            email,
            password,
        })
        const res: ResponseType<AuthResponseType> = {
            code: 200,
            data,
        }
        return res
    } catch (err) {
        const res: ResponseType = {
            code: 500,
            message: '',
        }
        if (isAxiosError(err)) {
            const axiosError = err as IErrorResponse
            res.code = axiosError.response.status
            res.message = axiosError.response.data.message
        }
        return res
    }
}

/**
 * 会員登録API
 */
export const signUpApi = async (name: string, email: string, password: string) => {
    try {
        const { data }: AxiosResponse<AuthResponseType> = await globalAxios.post('auth/sign_up', {
            name,
            email,
            password,
        })
        const res: ResponseType<AuthResponseType> = {
            code: 200,
            data,
        }
        return res
    } catch (err) {
        const res: ResponseType = {
            code: 500,
            message: '',
        }
        if (isAxiosError(err)) {
            const axiosError = err as IErrorResponse
            res.code = axiosError.response.status
            res.message = axiosError.response.data.message
        }
        return res
    }
}

/**
 * 認証チェックAPI
 */
export const authenticationApi = async () => {
    try {
        const { data }: AxiosResponse<AuthResponseType> = await globalAxios.post('/auth/authentication/')
        const res: ResponseType<AuthResponseType> = {
            code: 200,
            data,
        }
        return res
    } catch (err) {
        const res: ResponseType = {
            code: 500,
            message: '',
        }
        if (isAxiosError(err)) {
            const axiosError = err as IErrorResponse
            res.code = axiosError.response.status
            res.message = axiosError.response.data.message
        }
        return res
    }
}
