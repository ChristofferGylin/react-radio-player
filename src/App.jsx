import { useEffect, useState } from 'react'
import Header from './Header'
import SearchResult from './SearchResult';

function App() {

  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [url, setUrl] = useState('https://api.sr.se/api/v2/channels/?format=json&size=10&page=1')
  const [audioSrc, setAudioSrc] = useState('');

  const getSearchResults = async (url, callback) => {

    const response = await fetch(url);

    if (response.ok) {

      const data = await response.json();
      setSearchResult(data.channels);

    }
  }

  useEffect(() => {

    getSearchResults(url);

  }, []);


  return (
    <div className="App">
      <Header audioSrc={audioSrc} setSearchTerm={setSearchTerm} />
      <SearchResult setAudioSrc={setAudioSrc} data={searchResult} />
    </div>
  )
}

export default App
