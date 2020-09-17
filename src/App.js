import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import Route from './components/Route';
import Search from './components/Search';
import Translate from './components/Translate';

const items = [
  { title: 'title', content: 'content' },
  { title: 'title', content: 'content' },
  { title: 'title', content: 'content' },
  { title: 'title', content: 'content' },
];

const options = [
  { label: 'Color red', value: 'red' },
  { label: 'Color yellow', value: 'yellow' },
  { label: 'Color green', value: 'green' },
  { label: 'Color blue', value: 'blue' },
  { label: 'Color black', value: 'black' }
];

const App = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown label={"Select a Color"} options={options} selected={selected} setSelected={setSelected}/>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
