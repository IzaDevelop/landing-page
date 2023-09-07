import { Logo } from '../../assets'
import { List, Moon, Sun } from "@phosphor-icons/react";
import { useAppContext } from "../../context/AppContext";

export default function Header() {
    const {
        menu,
        setMenu,
        theme,
        handleToggleTheme
    } = useAppContext();

    return (
        <header>
            <nav className="bg-neutral-50 dark:bg-neutral-950 md:border-b border-b-green-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
                    <a href="#" className="flex items-center">
                        <img src={Logo} alt="Logo Dream Agency" className='h-20' />
                    </a>
                    <button onClick={() => setMenu(!menu)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-green-700 dark:text-green-700  dark:focus:ring-green-700">
                        <List size={40} weight="bold" className="dark:text-white" />
                    </button>

                    <div onClick={() => setMenu(false)}
                        className={`md:block md:w-auto w-full bg-neutral-50 dark:bg-neutral-950 ${menu ? "visible absolute top-[90px] right-0" : "hidden"}`}
                    >
                        <ul className="font-normal text-xl flex flex-col p-4 md:p-0 border-b border-green-600 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-neutral-50 md:dark:bg-neutral-950 ">
                            <li>
                                <a href="#home" className="block py-2 pl-3 pr-4 text-gray-900 hover:text-green-600 dark:hover:text-green-600 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white">Home</a>
                            </li>
                            <li>
                                <a href="#servicos" className="block py-2 pl-3 pr-4 text-gray-900 hover:text-green-600 dark:hover:text-green-600 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white">Serviços</a>
                            </li>
                            <li>
                                <a href="#sobre" className="block py-2 pl-3 pr-4 text-gray-900 hover:text-green-600 dark:hover:text-green-600 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white">Sobre nós</a>
                            </li>
                            <li>
                                <a href="#contato" className="block py-2 pl-3 pr-4 text-gray-900 hover:text-green-600 dark:hover:text-green-600 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white">Contato</a>
                            </li>
                            <li>
                                {theme ? (
                                    <button
                                        type="button"
                                        onClick={handleToggleTheme}
                                        className="ps-2 lg:ps-0 pt-1 rounded focus:border-0 dark:text-white dark:hover:text-green-600"
                                    >
                                        <Sun size={23} />
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={handleToggleTheme}
                                        className="ps-2 lg:ps-0 pt-1 rounded focus:border-0 hover:text-green-600"
                                    >
                                        <Moon size={23} />
                                    </button>
                                )}

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header >
    )
}