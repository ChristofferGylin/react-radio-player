import { AiFillPlayCircle } from 'react-icons/ai';
import filterSearchResults from './filterSearchResults';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SearchResult = (props) => {

    const { data, setAudioSrc, searchTerm, setCurrentStation } = props

    if (data.length === 0) {


        return (
            <div className="mt-60 sm:mt-44 mb-4 bg-slate-200 w-5/6 sm:w-4/5 lg:w-3/4 mx-auto rounded-lg h-screen">
                <Skeleton count={13} baseColor='rgb(203 213 225)' highlightColor='rgb(100 116 139)' height={70} />

            </div>
        )

    }

    let filterData = filterSearchResults(data, searchTerm);

    return (

        <div className="mt-60 sm:mt-44 mb-4 bg-slate-200 w-5/6 sm:w-4/5 lg:w-3/4 mx-auto rounded-lg">
            <ul className="m-8">

                {filterData.map((result, index) => {

                    return (

                        <li key={`searchResult${index}`}
                            className="grid grid-cols-5 gap-2 sm:gap-3 lg:gap-4 w-full py-4 sm:py-8 lg:py-8 xl:py-10 border-b last:border-b-0 border-slate-400 text-slate-700">
                            <div className={`col-span-1 pr-2 sm:pr-3 lg:pr-4`} style={{ borderRight: `1px solid #${result.color}` }}>
                                <img src={result.image} alt="Channel Logo" className="border-2 border-slate-400 hover:border-slate-500 hover:shadow hover:cursor-pointer rounded"
                                    onClick={() => {
                                        setAudioSrc(result.liveaudio.url);
                                        setCurrentStation(result);
                                    }} />
                            </div>
                            <div className="col-span-4 flex flex-col justify-between gap-2">
                                <h2 className="text-xl font-semibold">{result.name}</h2>
                                <p>{result.tagline}</p>
                                <AiFillPlayCircle className="text-5xl hover:text-slate-800 hover:cursor-pointer"
                                    onClick={() => {
                                        setAudioSrc(result.liveaudio.url);
                                        setCurrentStation(result);;
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