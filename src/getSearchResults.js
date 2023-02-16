const getSearchResults = async (url, callback) => {

    console.log('getSearchResults')

    const response = await fetch(url);

    if (response.ok) {

        const data = await response.json();
        console.log(data);
        callback(data);

    }
}

export default getSearchResults;