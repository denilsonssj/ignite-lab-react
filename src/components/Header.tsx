import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import { Logo } from '~/components/Logo';
import rocketIcon from '~/assets/logo-rocketseat.png';

interface RouteProps {
    label: string;
    url: string;
};

export function Header() {
    const location = useLocation();
    const routes: RouteProps[] = [
        { label: 'Vídeos', url: '/event/lesson' },
        { label: 'Challenges', url: '/event/challenges'},
    ];

    function isRouteActive(url: string) {
        return location.pathname.startsWith(url);
    }

    return (
        <header className="w-full py-4 flex items-center justify-evenly bg-gray-700 border-b border-gray-600">
            <Logo />
                <ul className="flex justify-self-stretch">
                   <li className="flex gap-2">
                       {routes.map(route => (
                        <Link
                            key={route.url}
                            to={route.url}
                            className={classNames("text-white-600 font-normal", {
                                "hover:text-white font-medium border-b-2 border-green-400 outline-offset-4": isRouteActive(route.url),
                            })}
                        >
                            {route.label}
                        </Link>
                       ))}
                   </li>
                </ul>
            <img src={rocketIcon} alt="Rocketseat" />
        </header>
    );
}