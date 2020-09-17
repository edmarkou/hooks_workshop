import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [input, setInputValue] = useState('');
  const [debouncedInput, setDebouncedInput] = useState(input);
  const [results, setResults] = useState([]);
  const onInputChange = e => setInputValue(e.target.value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedInput(input);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [input]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedInput
        }
      });
      setResults(data.query.search);
    };
    if (debouncedInput) search();
  }, [debouncedInput]);

  const renderedResults = results.map((result) => (
    <div className="item" key={result.pageid}>
      <div className="right floated content">
        <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
      </div>
      <div className="content">
        <div className="header">
          {result.title}
        </div>
        <span dangerouslySetInnerHTML={{__html: result.snippet}}/>
      </div>
    </div>
  ));

  return (
      <div className="">
        <div className="ui form">
          <div className="field">
            <label>Enter Search Term</label>
            <input className="input" value={input} onChange={onInputChange}/>
          </div>
        </div>
        <div className="ui celled list">
          {renderedResults}
        </div>
      </div>
  );
}

export default Search;