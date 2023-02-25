import { useAuthContext } from '@/contexts/AuthContext'
import { NavigationLink } from '../../atoms/NavigationLink'
import { NAVIGATION_PATH } from '../../../constants/navigations'
import { useNavigation } from './useNavigation'

export const Navigation = () => {
    const { signOut } = useAuthContext()
    const { handleLogout } = useNavigation({ signOut })

    return (
        <div className="header">
            <h1 className="title">Todo List</h1>
            <nav className="nav">
                <ul className="ul">
                    <NavigationLink title={'Top'} linkPath={NAVIGATION_PATH.TOP} />
                    <NavigationLink title={'Create'} linkPath={NAVIGATION_PATH.CREATE} />
                    <li className="li">
                        <button className="button" onClick={handleLogout}>
                            SignOut
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
