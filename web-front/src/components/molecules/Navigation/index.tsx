import { NavigationLink } from '../../atoms/NavigationLink';
import { NAVIGATION_PATH } from '../../../constants/navigations';

export const Navigation = () => {
    return (
        <nav>
            <ul className="nav-ul">
                <NavigationLink title={'Top'} linkPath={NAVIGATION_PATH.TOP} />
                <NavigationLink title={'Create'} linkPath={NAVIGATION_PATH.CREATE} />
            </ul>
        </nav>
    );
};
