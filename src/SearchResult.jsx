import { AiFillPlayCircle } from 'react-icons/ai';
import filterSearchResults from './filterSearchResults';

const SearchResult = (props) => {

    const { data, setAudioSrc, searchTerm } = props

    if (data.length === 0) {


        return (
            <div className="pt-52 sm:pt-40 pb-4 bg-red-200 w-5/6 sm:w-3/4 mx-auto h-screen">

            </div>
        )

    }

    let filterData = filterSearchResults(data, searchTerm);

    return (

        <div className="pt-52 sm:pt-40 pb-4 bg-slate-200 w-5/6 sm:w-3/4 mx-auto">
            <ul className="m-8">

                {filterData.map((result, index) => {

                    return (

                        <li key={`searchResult${index}`}
                            className="grid grid-cols-6 gap-4 w-full py-8 border-b last:border-b-0 border-slate-400 text-slate-700">
                            <div className="border-r col-span-1 ">
                                <img src={result.image} alt="Channel Logo" className="border-2 border-slate-400 hover:border-slate-500 hover:shadow hover:cursor-pointer rounded"
                                    onClick={() => {
                                        setAudioSrc(result.liveaudio.url)
                                    }} />
                            </div>
                            <div className="col-span-5 flex flex-col justify-between gap-2">
                                <h2 className="text-xl font-semibold">{result.name}</h2>
                                <p>{result.tagline}</p>
                                <AiFillPlayCircle className="text-4xl hover:text-slate-800 hover:cursor-pointer"
                                    onClick={() => {
                                        setAudioSrc(result.liveaudio.url)
                                    }} />
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SearchResult;