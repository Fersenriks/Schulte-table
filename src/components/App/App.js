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

        {/*нужно реализовать таймер времени, который запускается при нажатии на
        1й элемент и останавливается при нажатии на последний (30й)*/}

        {/*нужно реализовать таблицу лучших результатов с автоматической сортировкой*/}

        {/*написать небольшое модальное окно, которое будет уведомлять о завершении игры, а также
        возможности продолжения с помощью кнопки "продолжить"*/}

        {/*добавить возможность сбросить все результаты*/}

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
