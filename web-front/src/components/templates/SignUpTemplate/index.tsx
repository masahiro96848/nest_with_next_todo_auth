import Link from 'next/link'
import { NAVIGATION_LIST } from '@/constants/navigations'
import { useAuthContext } from '@/contexts/AuthContext'
import { InputForm } from '@/components/atoms/InputForm'
import { CommonButton } from '@/components/atoms/CommonButton'
import { useSignUpTemplate } from './useSignUpTemplate'

export const SignUpTemplate = () => {
    const { signIn } = useAuthContext()
    const [
        { name, email, password, passwordConfirm },
        { handleChangeName, handleChangeEmail, handleChangePassword, handleChangePasswordConfirm, handleSignUp },
    ] = useSignUpTemplate({ signIn })

    return (
        <div className="container">
            <h1 className="title">SignUp</h1>
            <form className="from" onSubmit={handleSignUp}>
                <div className="area">
                    <InputForm type="text" value={name} placeholder="name" onChange={handleChangeName} />
                </div>
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
                    <InputForm
                        type="password"
                        value={passwordConfirm}
                        placeholder="password confirm"
                        onChange={handleChangePasswordConfirm}
                    />
                </div>
                <div className="area">
                    <CommonButton type="submit" title="signup" />
                </div>
                <div className="link">
                    <Link href={NAVIGATION_LIST.SIGNIN}>&lt;&lt; to signin page</Link>
                </div>
            </form>
        </div>
    )
}
