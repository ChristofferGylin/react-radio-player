import { useEffect, useState } from 'react'
import Header from './Header'
import SearchResult from './SearchResult';

function App() {

  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [url, setUrl] = useState(`https://api.sr.se/api/v2/channels/?format=json&pagination=false`)
  const [audioSrc, setAudioSrc] = useState('');
  const [currentStation, setCurrentStation] = useState(null);

  const getSearchResults = async (url) => {

    const response = await fetch(url);

    if (response.ok) {

      const data = await response.json();
      setSearchResult(data.channels);

    }
  };


  useEffect(() => {

    getSearchResults(url);


  }, []);


  return (
    <div className="App">
      <Header audioSrc={audioSrc} currentStation={currentStation} setSearchTerm={setSearchTerm} />
      <SearchResult setAudioSrc={setAudioSrc} data={searchResult} searchTerm={searchTerm} setCurrentStation={setCurrentStation} />
    </div>
  )
}

export default App
