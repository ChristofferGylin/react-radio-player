import { useEffect, useState } from "react";

const Header = (props) => {

    const { audioSrc, setSearchTerm } = props;
    const [search, setSearch] = useState('');

    const onSubmit = (e) => {

        setSearchTerm(search);
        e.preventDefault();

    }

    return (
        <header className='grid grid-cols-1 justify-center items-center p-4 w-full fixed top-0 left-0 bg-slate-800 shadow-lg'>
            <audio className='justify-self-center w-full my-2' autoPlay controls src={audioSrc}></audio>
            <form onSubmit={onSubmit} className='grid grid-cols-1 sm:grid-cols-4 w-full'>
                <input placeholder='Search...' type="text" className='rounded-full border border-slate-300 my-2 col-span-3 py-1 px-2'
                    onChange={(e) => {
                        setSearch(e.target.value);

                    }} />
                <button type='submit' className='border border-slate-300  hover:bg-slate-700 hover:border-slate-100 hover:text-slate-100 rounded-full text-slate-300 my-2 ml-2 py-1 px-2' >Search</button>
            </form>
        </header>
    )

}

export default Header;