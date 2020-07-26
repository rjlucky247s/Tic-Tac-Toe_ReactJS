import React from 'react';

export default function Board(props:any) {  
      return (
        <div> 
          <div className="board-row">
            {renderSquare(0,props)}
            {renderSquare(1,props)}
            {renderSquare(2,props)}
          </div>
          <div className="board-row">
          {renderSquare(3,props)}
          {renderSquare(4,props)}
          {renderSquare(5,props)}
          </div>
          <div className="board-row">
          {renderSquare(6,props)}
          {renderSquare(7,props)} 
          {renderSquare(8,props)}
          </div>
        </div>
      );
  }
  function renderSquare(i:number, props:any) {
    return <Square value= {props.squares[i]} onClick={()=>props.onClick(i)}/>;
  }

  function Square(props:any){
    return (
    <button className="square" onClick={props.onClick}>{props.value}</button>
    );
  }