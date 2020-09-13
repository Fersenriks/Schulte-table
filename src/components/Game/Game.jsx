import React from 'react';

const Game = ({numberItems, selectItem, setSelectItem}) => {
    
    return (
        <ul>
            {numberItems.map( 
                n => <li
                    key = {numberItems.id} 
                    onClick={() => (n === selectItem) ? setSelectItem(selectItem + 1) : ''}>
                {n}</li> 
            )}
        </ul>
    );
}

export default Game;