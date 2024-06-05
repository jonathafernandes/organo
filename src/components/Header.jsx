import logo from '../assets/logoipsum-296.svg';

const Header = () => {

    const handleSmoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className='flex items-center gap-10 flex-col sm:flex-row sm:justify-around m-5'>
            <div className='flex items-center gap-2'>
                <img src={logo} alt="Organo" />
                <span className='text-xl font-bold'>Organo</span>
            </div>
            <a href='#footer' onClick={handleSmoothScroll} className='border-solid border-2 border-blue-500 bg-blue-600 rounded p-2 font-medium hover:bg-blue-500 cursor-pointer'>
                Saiba mais
            </a>
        </header>
    );
}

export default Header;