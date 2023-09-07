import { Destaque } from '../../assets';
import Layout from '../../components/layout';

export default function Home() {
    return (
        <Layout>
            <article className='bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white'>
                <section className='max-w-7xl mx-auto px-4 xl:px-0 pt-10 pb-5 flex flex-wrap lg:flex-nowrap flex-auto justify-evenly items-center' id='home'>
                    <div>
                        <h1 className='font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto text-green-700'>Códigos, Design e Estratégia em um só lugar</h1>
                        <p className='text-md md:text-lg py-5'>Trabalhamos incansavelmente para garantir que a sua presença online seja um investimento valioso e um fator-chave para o sucesso do seu negócio. Contate-nos hoje e descubra como podemos levar sua presença online para o próximo nível.</p>
                        <button className='font-semibold py-3 px-10 text-white bg-green-800 hover:bg-green-700 rounded'>Saber mais</button>
                    </div>
                    <figure className='flex flex-1 justify-center items-center pt-10'>
                        <img src={Destaque} alt="" className='max-w-[320px] xl:max-w-xl' />
                    </figure>
                </section>

                <section className="px-4 xl:px-0 py-5 mx-auto max-w-7xl" id='servicos'>
                    <div className="max-w-7xl pb-5 md:mx-auto sm:text-center lg:max-w-2xl">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider bg-green-700 text-white uppercase rounded-full bg-teal-accent-400">
                                Serviços
                            </p>
                        </div>
                        <h2 className="w-full mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
                            Somos seu parceiro digital para o sucesso
                        </h2>
                        <p className="text-md md:text-lg">
                            Num mundo cada vez mais conectado, uma forte presença online é essencial para qualquer empresa que pretenda destacar-se e crescer no competitivo cenário digital. Somos uma agência de serviços web dedicada a impulsionar sua presença online e aumentar seu sucesso digital.
                        </p>
                    </div>
                    <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="p-5 duration-300 transform bg-white dark:bg-neutral-950 border border-green-700 rounded shadow-sm hover:-translate-y-2">
                            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-800 text-white">
                                <svg
                                    className="w-10 h-10 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Website Design</h6>
                            <p className="text-sm">
                                Baseball ipsum dolor sit amet cellar rubber win hack tossed.
                                Slugging catcher slide bench league, left fielder nubber.
                            </p>
                        </div>
                        <div className="p-5 duration-300 transform bg-white dark:bg-neutral-950 border border-green-700 rounded shadow-sm hover:-translate-y-2">
                            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-800 text-white">
                                <svg
                                    className="w-10 h-10 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Web Development</h6>
                            <p className="text-sm">
                                We meet at one of those defining moments - a moment when our nation
                                is at war, our economy is in turmoil, and the American promise has
                                been threatened once more.
                            </p>
                        </div>
                        <div className="p-5 duration-300 transform bg-white dark:bg-neutral-950 border border-green-700 rounded shadow-sm hover:-translate-y-2">
                            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-800 text-white">
                                <svg
                                    className="w-10 h-10 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Mobile APP Development</h6>
                            <p className="text-sm">
                                Strategic high-level 30,000 ft view. Drill down re-inventing the
                                wheel at the end of the day but curate imagineer, or to be inspired
                                is to become creative.
                            </p>
                        </div>
                        <div className="p-5 duration-300 transform bg-white dark:bg-neutral-950 border border-green-700 rounded shadow-sm hover:-translate-y-2">
                            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-800 text-white">
                                <svg
                                    className="w-10 h-10 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">E-mail Marketing</h6>
                            <p className="text-sm">
                                Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et.
                                Vestibulum placerat purus ut nibh aliquam fringilla. Aenean et
                                tortor diam, id tempor elit.
                            </p>
                        </div>
                        <div className="p-5 duration-300 transform bg-white dark:bg-neutral-950 border border-green-700 rounded shadow-sm hover:-translate-y-2">
                            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-800 text-white">
                                <svg
                                    className="w-10 h-10 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">API Rest</h6>
                            <p className="text-sm">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
                                perspiciatis unde omnis.
                            </p>
                        </div>
                        <div className="p-5 duration-300 transform bg-white dark:bg-neutral-950 border border-green-700 rounded shadow-sm hover:-translate-y-2">
                            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-green-800 text-white">
                                <svg
                                    className="w-10 h-10 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">SEO</h6>
                            <p className="text-sm">
                                Flatland! Hypatia. Galaxies Orion's sword globular star cluster?
                                Light years quasar as a patch of light gathered by gravity Vangelis
                                radio telescope.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="relative w-full h-full">
                    <div className="absolute hidden w-full bg-green-500 dark:bg-green-700 lg:block h-96" />
                    <div className="relative px-4 xl:px-0 xl:py-14 mx-auto max-w-7xl">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
                                <span className="relative inline-block">
                                    <svg
                                        viewBox="0 0 52 24"
                                        fill="currentColor"
                                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                    >
                                        <defs>
                                            <pattern
                                                id="2c67e949-4a23-49f7-bf27-ca140852cf21"
                                                x="0"
                                                y="0"
                                                width=".135"
                                                height=".30"
                                            >
                                                <circle cx="1" cy="1" r=".7" />
                                            </pattern>
                                        </defs>
                                        <rect
                                            fill="url(#2c67e949-4a23-49f7-bf27-ca140852cf21)"
                                            width="52"
                                            height="24"
                                        />
                                    </svg>
                                    <span className="relative">Acessível</span>
                                </span>{' '}
                                para todos
                            </h2>
                            <p className="text-base md:text-lg">
                                Não importa o plano que você escolher, você pode ter certeza de que receberá atenção personalizada, experiência de classe mundial e resultados que superarão suas expectativas. Contate-nos hoje para iniciar sua jornada para o sucesso online!
                            </p>
                        </div>
                        <div className="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">
                            <div>
                                <div className="p-8 bg-neutral-700 dark:bg-neutral-950 rounded">
                                    <div className="mb-4 text-center">
                                        <p className="text-xl font-medium tracking-wide text-white">
                                            Plano Essencial
                                        </p>
                                        <div className="flex items-center justify-center">
                                            <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                                                $39
                                            </p>
                                            <p className="text-lg text-gray-500">/ mês</p>
                                        </div>
                                    </div>
                                    <ul className="mb-8 space-y-2">
                                        <li className="flex items-center">
                                            <div className="mr-3">
                                                <svg
                                                    className="w-4 h-4 text-teal-accent-400"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                >
                                                    <polyline
                                                        fill="none"
                                                        stroke="currentColor"
                                                        points="6,12 10,16 18,8"
                                                    />
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        fill="none"
                                                        r="11"
                                                        stroke="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="font-medium text-gray-300">10 deploys per day</p>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="mr-3">
                                                <svg
                                                    className="w-4 h-4 text-teal-accent-400"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                >
                                                    <polyline
                                                        fill="none"
                                                        stroke="currentColor"
                                                        points="6,12 10,16 18,8"
                                                    />
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        fill="none"
                                                        r="11"
                                                        stroke="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="font-medium text-gray-300">10 GB of storage</p>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="mr-3">
                                                <svg
                                                    className="w-4 h-4 text-teal-accent-400"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                >
                                                    <polyline
                                                        fill="none"
                                                        stroke="currentColor"
                                                        points="6,12 10,16 18,8"
                                                    />
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        fill="none"
                                                        r="11"
                                                        stroke="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="font-medium text-gray-300">3 domains</p>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="mr-3">
                                                <svg
                                                    className="w-4 h-4 text-teal-accent-400"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                >
                                                    <polyline
                                                        fill="none"
                                                        stroke="currentColor"
                                                        points="6,12 10,16 18,8"
                                                    />
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        fill="none"
                                                        r="11"
                                                        stroke="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="font-medium text-gray-300">SSL Certificates</p>
                                        </li>
                                    </ul>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md bg-green-800 hover:bg-green-700 focus:shadow-outline focus:outline-none"
                                    >
                                        Adquirir
                                    </button>
                                </div>
                                <div className="w-11/12 h-2 mx-auto bg-neutral-950 rounded-b opacity-75" />
                                <div className="w-10/12 h-2 mx-auto bg-neutral-950 rounded-b opacity-50" />
                                <div className="w-9/12 h-2 mx-auto bg-neutral-950 rounded-b opacity-25" />
                            </div>
                            <div>
                                <div className="p-8 bg-neutral-700 dark:bg-neutral-950 rounded">
                                    <div className="mb-4 text-center">
                                        <p className="text-xl font-medium tracking-wide text-white">
                                            Plano Pro
                                        </p>
                                        <div className="flex items-center justify-center">
                                            <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                                                $59
                                            </p>
                                            <p className="text-lg text-gray-500">/ mês</p>
                                        </div>
                                    </div>
                                    <ul className="mb-8 space-y-2">
                                        <li className="flex items-center">
                                            <div className="mr-3">
                                                <svg
                                                    className="w-4 h-4 text-teal-accent-400"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                >
                                                    <polyline
                                                        fill="none"
                                                        stroke="currentColor"
                                                        points="6,12 10,16 18,8"
                                                    />
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        fill="none"
                                                        r="11"
                                                        stroke="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="font-medium text-gray-300">100 deploys per day</p>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="mr-3">
                                                <svg
                                                    className="w-4 h-4 text-teal-accent-400"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                >
                                                    <polyline
                                                        fill="none"
                                                        stroke="currentColor"
                                                        points="6,12 10,16 18,8"
                                                    />
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        fill="none"
                                                        r="11"
                                                        stroke="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="font-medium text-gray-300">50 GB of storage</p>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="mr-3">
                                                <svg
                                                    className="w-4 h-4 text-teal-accent-400"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                >
                                                    <polyline
                                                        fill="none"
                                                        stroke="currentColor"
                                                        points="6,12 10,16 18,8"
                                                    />
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        fill="none"
                                                        r="11"
                                                        stroke="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="font-medium text-gray-300">Unlimited domains</p>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="mr-3">
                                                <svg
                                                    className="w-4 h-4 text-teal-accent-400"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                >
                                                    <polyline
                                                        fill="none"
                                                        stroke="currentColor"
                                                        points="6,12 10,16 18,8"
                                                    />
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        fill="none"
                                                        r="11"
                                                        stroke="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="font-medium text-gray-300">SSL Certificates</p>
                                        </li>
                                    </ul>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md bg-green-800 hover:bg-green-700 focus:shadow-outline focus:outline-none"
                                    >
                                        Adquirir
                                    </button>
                                </div>
                                <div className="w-11/12 h-2 mx-auto bg-neutral-950 rounded-b opacity-75" />
                                <div className="w-10/12 h-2 mx-auto bg-neutral-950 rounded-b opacity-50" />
                                <div className="w-9/12 h-2 mx-auto bg-neutral-950 rounded-b opacity-25" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-4 py-5 xl:px-0 pb-10 mx-auto max-w-7xl" id='sobre'>
                    <div className="mx-auto mb-10 lg:max-w-7xl sm:text-center">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
                            Sobre Nós
                        </h2>
                        <p className="text-base md:text-lg">
                            Fundada em 2020 por um grupo diversificado de visionários apaixonados. <br className='hidden xl:block' /> A Dream Agency surgiu com uma visão clara: transformar indústrias e comunidades através de soluções criativas e sustentáveis. <br className='hidden xl:block' /> Desde então, temos trabalhado incansavelmente para transformar essa visão em realidade.
                        </p>
                    </div>
                    <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-7xl">
                        <div className="grid sm:grid-cols-3">
                            <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                                <img
                                    className="absolute object-cover w-full h-full rounded"
                                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                    alt="Person"
                                />
                            </div>
                            <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                                <p className="text-lg font-bold">Oliver Aguilerra</p>
                                <p className="mb-4 text-xs">Product Manager</p>
                                <p className="mb-4 text-sm tracking-wide ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sint.
                                </p>
                                <div className="flex items-center space-x-3">
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-3">
                            <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                                <img
                                    className="absolute object-cover w-full h-full rounded"
                                    src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                    alt="Person"
                                />
                            </div>
                            <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                                <p className="text-lg font-bold">Marta Clermont</p>
                                <p className="mb-4 text-xs">Design Team Lead</p>
                                <p className="mb-4 text-sm tracking-wide">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sint.
                                </p>
                                <div className="flex items-center space-x-3">
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-3">
                            <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                                <img
                                    className="absolute object-cover w-full h-full rounded"
                                    src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                    alt="Person"
                                />
                            </div>
                            <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                                <p className="text-lg font-bold">Alice Melbourne</p>
                                <p className="mb-4 text-xs">Front-End Developer</p>
                                <p className="mb-4 text-sm tracking-wide">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sint.
                                </p>
                                <div className="flex items-center space-x-3">
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-3">
                            <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                                <img
                                    className="absolute object-cover w-full h-full rounded"
                                    src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                    alt="Person"
                                />
                            </div>
                            <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                                <p className="text-lg font-bold">John Doe</p>
                                <p className="mb-4 text-xs">Back-end Developer</p>
                                <p className="mb-4 text-sm tracking-wide">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sint.
                                </p>
                                <div className="flex items-center space-x-3">
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="/"
                                        className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='px-10 py-5 lg:px-0 xl:rounded-tr-full bg-gradient-to-r from-green-700 to-green-400' id='contato'>
                    <div className='max-w-7xl mx-auto'>
                        <div className='text-center pb-5 text-white'>
                            <h1 className='logo text-3xl md:text-5xl italic'>Dream Agency</h1>
                            <p className='text-md md:text-lg pt-2'>Entre em contato conosco pelo formulário abaixo</p>
                        </div>

                        <form className='mx-auto max-w-2xl'>
                            <div className='pb-5'>
                                <label htmlFor="email" className="block mb-2 text-md text-white">E-mail</label>
                                <input type="email" id="email" className="text-md rounded-lg block w-full p-2.5 dark:bg-neutral-950 placeholder-gray-400 dark:placeholder-gray-400" placeholder="nome@gmail.com" />
                            </div>

                            <div className='pb-5'>
                                <label htmlFor="message" className="block mb-2 text-md text-white">Mensagem</label>
                                <textarea id="message" className="block p-2.5 w-full text-md rounded-lg dark:bg-neutral-950 placeholder-gray-400 dark:placeholder-gray-400 min-h-[150px]" placeholder="Escreva sua mensagem..."></textarea>
                            </div>

                            <div className='flex justify-end'>
                                <button className='font-semibold py-3 px-10 text-white bg-green-800 hover:bg-green-700 rounded'>Enviar</button>
                            </div>
                        </form>
                    </div>
                </section>
            </article>
        </Layout>
    )
}