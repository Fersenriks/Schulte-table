import React from 'react';

import numberItems from '../../numberItems'

import Game from '../Game/Game'
import Find from '../Find/Find'

import './App.css';

function App() {

  const [selectItem, setSelectItem] = React.useState(1);

  return (
    <div className="App">
      <div className="info">
        <Find selectItem={selectItem}/>
        <span className="info-time">Time: 00:00</span>
      </div>
      <Game 
        numberItems={numberItems}
        selectItem={selectItem}
        setSelectItem={setSelectItem}
      />
    </div>
  );
}

export default App;
