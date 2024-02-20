import logo from '../assets/logoipsum-296.svg';

const Header = () => {
    return (
        <header className='flex items-center gap-10 flex-col sm:flex-row sm:justify-between m-5'>
            <div className='flex items-center gap-2'>
                <img src={logo} alt="Organo" />
                <span className='text-xl font-bold'>Organo</span>
            </div>
            <div className='flex gap-4'>
                <button
                    className='border-solid border-2 border-blue-500 bg-zinc-800 rounded p-2 font-medium hover:bg-blue-500'>Crie organizações</button>
                <button className='border-solid border-2 border-blue-500 bg-blue-600 rounded p-2 font-medium hover:bg-blue-500'>Adicione colaboradores</button>
            </div>
        </header>
    );
}

export default Header;