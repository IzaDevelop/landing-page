import { Destaque, Equipe } from '../../assets';
import Layout from '../../components/layout';

export default function Home() {
    return (
        <Layout>
            <article className='bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white'>
                <section className='max-w-7xl mx-auto p-10 flex flex-wrap lg:flex-nowrap flex-auto justify-evenly items-center' id='home'>
                    <div>
                        <h1 className='text-3xl lg:text-5xl font-bold text-green-700'>Nós ajudamos você a crescer seu negócio</h1>
                        <p className='text-md md:text-lg font-light py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ut excepturi, impedit, eum in consequatur modi explicabo numquam facilis voluptates quam iusto dolorum. Aspernatur nesciunt asperiores perspiciatis, dolores odio minus?</p>
                        <button className='font-semibold py-3 px-10 text-white bg-green-600 hover:bg-green-500 rounded'>Vamos começar</button>
                    </div>
                    <figure className='flex flex-1 justify-center items-center pt-10'>
                        <img src={Destaque} alt="" className='max-w-sm xl:max-w-5xl p-5' />
                    </figure>
                </section>

                <section className='p-10 bg-gradient-to-r from-green-700 to-green-400' id='servicos'>
                    <div className='max-w-7xl mx-auto flex flex-wrap gap-5 justify-evenly items-center'>
                        <div className="max-w-sm p-6 bg-white border border-green-700 rounded-lg shadow dark:bg-neutral-950 dark:border-green-700">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight">Website Design</h5>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>

                        <div className="max-w-sm p-6 bg-white border border-green-700 rounded-lg shadow dark:bg-neutral-950 dark:border-green-700">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight">Web Development</h5>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>

                        <div className="max-w-sm p-6 bg-white border border-green-700 rounded-lg shadow dark:bg-neutral-950 dark:border-green-700">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight">Mobile APP Development</h5>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>

                        <div className="max-w-sm p-6 bg-white border border-green-700 rounded-lg shadow dark:bg-neutral-950 dark:border-green-700">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight">E-mail Marketing</h5>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>

                        <div className="max-w-sm p-6 bg-white border border-green-700 rounded-lg shadow dark:bg-neutral-950 dark:border-green-700">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight">SEO</h5>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>

                        <div className="max-w-sm p-6 bg-white border border-green-700 rounded-lg shadow dark:bg-neutral-950 dark:border-green-700">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight">Marketing</h5>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                </section>

                <section className='max-w-7xl mx-auto py-5 flex px-10 lg:px-0 flex-wrap-reverse lg:flex-nowrap flex-auto justify-evenly items-center' id='sobre'>
                    <figure className='flex flex-1 justify-center items-center pt-10'>
                        <img src={Equipe} alt="" className='max-w-sm xl:max-w-3xl' />
                    </figure>
                    <div>
                        <h1 className='text-3xl lg:text-5xl font-bold text-green-700'>Sobre nós</h1>
                        <p className='text-md md:text-lg pt-5 font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid sunt dolor, nihil ratione voluptatum adipisci recusandae blanditiis numquam libero ex rerum inventore rem iure reprehenderit, debitis placeat, nobis architecto. Nulla?</p>
                        <p className='text-md md:text-lg pt-2 pb-5 font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid sunt dolor, nihil ratione voluptatum adipisci recusandae blanditiis numquam libero ex rerum inventore rem iure reprehenderit, debitis placeat, nobis architecto. Nulla?</p>
                        <button className='font-semibold py-3 px-10 text-white bg-green-600 hover:bg-green-500 rounded'>Saber mais</button>
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
                                <input type="email" id="email" className=" border text-md rounded-lg block w-full p-2.5 dark:bg-neutral-900 placeholder-gray-400 dark:placeholder-gray-400" placeholder="nome@gmail.com" />
                            </div>

                            <div className='pb-5'>
                                <label htmlFor="message" className="block mb-2 text-md text-white">Mensagem</label>
                                <textarea id="message" className="block p-2.5 w-full text-md border rounded-lg dark:bg-neutral-900 placeholder-gray-400 dark:placeholder-gray-400 min-h-[150px]" placeholder="Escreva sua mensagem..."></textarea>
                            </div>

                            <div className='flex justify-end'>
                                <button className='font-semibold py-3 px-10 text-white bg-green-950 hover:bg-green-900 dark:hover:bg-green-900 rounded'>Enviar</button>
                            </div>
                        </form>
                    </div>
                </section>
            </article>
        </Layout>
    )
}