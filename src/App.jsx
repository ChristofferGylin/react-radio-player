import { useEffect, useReducer } from 'react'
import Header from './Header'
import SearchResult from './SearchResult';
import { reducer, ACTION } from './reducer';

const url = `https://api.sr.se/api/v2/channels/?format=json&pagination=false`;

function App() {

  const [state, dispatch] = useReducer(reducer,
    {
      searchResult: [],
      searchTerm: '',
      currentStation: null
    })

  const getSearchResults = async (url) => {

    const response = await fetch(url);

    if (response.ok) {

      const data = await response.json();
      dispatch({ type: ACTION.SEARCH_RESULT, payload: data.channels });

    }
  };


  useEffect(() => {

    getSearchResults(url);


  }, []);


  return (
    <div className="App">
      <Header currentStation={state.currentStation} dispatch={dispatch} />
      <SearchResult dispatch={dispatch} state={state} />
    </div>
  )
}

export default App
