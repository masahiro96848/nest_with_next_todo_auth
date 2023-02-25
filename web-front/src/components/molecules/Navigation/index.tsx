import { useAuthContext } from '@/contexts/AuthContext'
import { NavigationLink } from '../../atoms/NavigationLink'
import { NAVIGATION_PATH } from '../../../constants/navigations'
import { useNavigation } from './useNavigation'

export const Navigation = () => {
    const { signOut } = useAuthContext()
    const { handleLogout } = useNavigation({ signOut })

    return (
        <div className="header-area">
            <h1 className="header-title">Todo List</h1>
            <nav className="header-nav">
                <ul className="header-ul">
                    <NavigationLink title={'Top'} linkPath={NAVIGATION_PATH.TOP} />
                    <NavigationLink title={'Create'} linkPath={NAVIGATION_PATH.CREATE} />
                    <li className="header-li">
                        <button className="header-button" onClick={handleLogout}>
                            SignOut
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
