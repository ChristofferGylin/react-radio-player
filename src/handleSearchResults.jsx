const handleSearchResults = (data, index, callback) => {

    return (

        <li onClick={() => {
            callback(data.liveaudio.url)
        }}>
            <div className="border-r">
                <img src="data.image" alt="Channel Logo" />
            </div>
            <div>
                <h2>{data.name}</h2>
                <p>{data.tagline}</p>
            </div>
        </li>

    )

}

export default handleSearchResults;