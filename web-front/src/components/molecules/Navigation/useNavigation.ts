import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { NAVIGATION_LIST } from '@/constants/navigations'
import { EventType } from '@/interfaces/Event'

type Params = {
    signOut: () => Promise<void>
}

type ActionsType = {
    handleLogout: EventType['onSubmitButton']
}

export const useNavigation = ({ signOut }: Params) => {
    const router = useRouter()

    /**
     * ログアウト処理
     */
    const handleLogout: EventType['onSubmitButton'] = useCallback(
        (e) => {
            e.preventDefault()
            localStorage.removeItem('access_token')
            signOut()
            router.push(NAVIGATION_LIST.SIGNIN)
        },
        [signOut, router]
    )

    const actions: ActionsType = {
        handleLogout,
    }

    return actions
}
