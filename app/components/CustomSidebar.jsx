import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function CustomSidebar({ children, isVisible }) {
    // Tailwind CSS classes for sliding from the right
    const sidebarClass = `${isVisible ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out w-80 sm:w-80 lg:w-96 h-screen bg-slate-300 z-50 fixed left-0 top-0`;

    return (
        <div className={sidebarClass}>
            {children}
            <ul className="flex flex-col list-none">
                <li className="pl-2 pt-3 flex flex-row">
                    <Link href="/">
                        <button className="hover:underline hover:text-white hover:decoration-2" >
                            <FontAwesomeIcon className="icon1 fill-white" style={{ height: "30px" }} icon={faHouse} />
                            <span className="text-2xl font-bold ml-3">
                                Home
                            </span>
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

