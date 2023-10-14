import { useState, useEffect } from "react";
import { fetchdatafromApi } from "./utilities/api";
function App() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    apiTesting();
  }, []);
  const apiTesting = (res) => {
    fetchdatafromApi("/movie/popular").then((res) => {
      setResults(res.data.results);
    });
  };
  return (
    <div className="App">
      {results.map((r) => (
        <div
          className="bg-orange-400 text-white rounded m-1 px-5 py-3 text-center flex justify-between"
          key={r.id}
        >
          <div className="title">{r.title}</div>
          <div className="vote">{r.vote_average}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
