import { FC } from 'react';
import Link from 'next/link';

type Props = {
    title: string;
    linkPath: string;
};

export const NavigationLink = ({ title, linkPath }: Props) => {
    return (
        <li className="nav-list">
            <Link className="nav-link" href={linkPath}>
                {title}
            </Link>
        </li>
    );
};
