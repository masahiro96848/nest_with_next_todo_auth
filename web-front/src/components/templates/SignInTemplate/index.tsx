import Link from 'next/link'
import { NAVIGATION_LIST } from '@/constants/navigations'
import { useAuthContext } from '@/contexts/AuthContext'
import { InputForm } from '@/components/atoms/InputForm'
import { CommonButton } from '@/components/atoms/CommonButton'
import { useSignInTemplate } from './useSignInTemplate'

export const SignInTemplate = () => {
    const { signIn } = useAuthContext()
    const [{ email, password }, { handleChangeEmail, handleChangePassword, handleLogin }] = useSignInTemplate({
        signIn,
    })

    return (
        <div className="container">
            <h1 className="title">Login</h1>
            <form className="" onSubmit={handleLogin}>
                <div className="area">
                    <InputForm type="email" value={email} placeholder="email" onChange={handleChangeEmail} />
                </div>
                <div className="area">
                    <InputForm
                        type="password"
                        value={password}
                        placeholder="password"
                        onChange={handleChangePassword}
                    />
                </div>
                <div className="area">
                    <CommonButton type="submit" title="login" />
                </div>
                <div className="link">
                    <Link href={NAVIGATION_LIST.SIGNUP}>&lt;&lt; to signup page</Link>
                </div>
            </form>
        </div>
    )
}
