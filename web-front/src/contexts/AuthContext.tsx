import { useContext, createContext, ReactNode } from 'react'
import { UserType } from '@/interfaces/User'
import { useAuth } from '@/hooks/useAuth'

type Props = {
    children: ReactNode
}

interface ContextInterface {
    user: UserType | undefined
    isAuth: boolean
    signIn: (user: UserType) => Promise<void>
    signOut: () => Promise<void>
}

const AuthContext = createContext({} as ContextInterface)

export const AuthProvider = ({ children }: Props) => {
    const { user, isAuth, signIn, signOut } = useAuth()

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuth,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
