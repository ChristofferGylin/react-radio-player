import { useEffect, useState } from "react";

const Header = (props) => {

    const { setSearchTerm, currentStation } = props;
    const [search, setSearch] = useState('');

    let audioSrc = '';
    let imgSrc = './img/nopic.png';

    if (currentStation) {

        audioSrc = currentStation.liveaudio.url
        imgSrc = currentStation.image

    }

    const onSubmit = (e) => {

        setSearchTerm(search);
        e.preventDefault();

    }

    return (
        <header className='z-50 flex justify-center gap-4 items-center p-4 w-full fixed top-0 left-0 bg-slate-800 shadow-lg'>
            <div className="">
                <img src={imgSrc} alt="Channel Logo" className="hidden sm:block border-2 border-slate-300 rounded-lg grow-0 w-28" />
            </div>
            <div className="grid grid-cols-1 justify-center items-center w-full">
                <audio className='justify-self-center w-full my-2' autoPlay controls src={audioSrc}></audio>
                <form onSubmit={onSubmit} className='grid grid-cols-1 sm:grid-cols-4 w-full'>
                    <input placeholder='Sök...' type="text" className='rounded-full border border-slate-300 my-2 col-span-3 py-1 px-2'
                        onChange={(e) => {
                            setSearch(e.target.value);

                        }} />
                    <button type='submit' className='border border-slate-300  hover:bg-slate-700 hover:border-slate-100 hover:text-slate-100 rounded-full text-slate-300 my-2 ml-2 py-1 px-2' >Sök</button>
                </form>
            </div>

        </header>
    )

}

export default Header;