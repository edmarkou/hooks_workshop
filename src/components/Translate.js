import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const languageOptions = [
  { label: 'Afrikaans', value: 'af' },
  { label: 'Arabic', value: 'ar' },
  { label: 'Hindi', value: 'hi' },
];

const Translate = () => {
  const [language, setLanguage] = useState(0);
  const [text, setText] = useState('hello');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input value={text} onChange={e => setText(e.target.value)}/>
        </div>
      </div>
      <Dropdown label={"Select a Language"} options={languageOptions} selected={language} setSelected={setLanguage}/>
      <hr/>
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={languageOptions[language]}/>
    </div>
  )
}

export default Translate;