import React from 'react';

// export class Square extends React.Component<any,any> {
//     render() {
//       return (
//         <button className="square" onClick = {()=>this.props.onClick()}>
//           {this.props.value}
//         </button>
//       );
//     }
//   }
export function Square(props:any){
    return (
    <button className="square" onClick={props.onClick}>{props.value}</button>
    );
  }
export default Square;  