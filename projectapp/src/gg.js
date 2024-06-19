import React,{useState} from 'react';
import Square from './Square';
import Button from './Button';
// import './button.css'
import Card from './card';
// const Board = () => {
//     const [board, setBoard] = useState(Array(9).fill(null));
//       const [isXNext, setIsXNext] = useState(true);
  
//     const handleClick = (index) => {
//       const newBoard = [...board];
  
//       if (newBoard[index] || calculateWinner(board)) return;
//       newBoard[index] = isXNext ? 'X' : 'O';
  
//         setBoard(newBoard);
//         setIsXNext(!isXNext);
  
//   };
  
//        const renderSquare = (index) => {
//    return (

//            <Button onClick={() => handleClick(index)}>{board[index]}</Button>
           
//   );
  
//   };
  
//        const winner = calculateWinner(board);
//         const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;
  
//     return (
  
//       <Card>
  
//     <div className="status">{status}</div>
  
//       <div className="board-row">
  
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
          
//       </div>
  
//           <div className="board-row">
//              {renderSquare(3)}
//              {renderSquare(4)}
//               {renderSquare(5)}
//  </div>
  
//         <div className="board-row">
//            {renderSquare(6)}
//           {renderSquare(7)}
//            {renderSquare(8)} 
  
// {/* 
//            <div className="board-row">
  
//   {renderSquare(0)}
//   {renderSquare(1)}
//   {renderSquare(2)} */}
//      </div>
  
// </Card>
  
//     );
  
// };
//        const calculateWinner = (squares) => {
//         const lines = [
  
//       [0, 1, 2],
//       [3, 4, 5],
//        [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//        [0, 4, 8],
//       [2, 4, 6],
  
// ];
//            for (let i = 0; i < lines.length; i++) {
//          const [a, b, c] = lines[i];
  
//            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         return squares[a];
// }
  
//   }
//     return null;

//     // const winner = calculateWinner(board);
//     // const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

//   };

//   export default Board;



// using loop:=>

  
  
  const Board = () => {
  
      const [Square0, setSquare0]=useState(null);
      const [Square1, setSquare1]=useState(null);
      const [Square2, setSquare2]=useState(null);
      const [Square3, setSquare3]=useState(null);
      const [Square4, setSquare4]=useState(null);
      const [Square5, setSquare5]=useState(null);
      const [Square6, setSquare6]=useState(null);
      const [Square7, setSquare7]=useState(null);
      const [Square8, setSquare8]=useState(null);
      const [Square9, setSquare9]=useState(null);
    
      // const [isXNext, setIsXNext] = useState(true);
      
    
    
    
    
    // const handleClick = (index) => {
      // if(calculateWinner(getBoardArray()) || getBoardArray()[index]){
      //   return;
      // }
      
     switch(index){
        case 0:
        // setSquare0(isXNext ? 'X':'O');
        break;


        case 1 :
        setSquare1(isXNext ? 'X':'O');
        break;

        case 2 :
        setSquare2(isXNext ? 'X':'O');
        break;


        case 3:
        setSquare3(isXNext ? 'X':'O');
        break;

        case 4:
        setSquare4(isXNext ? 'X':'O');
        break;


        case 5:
        setSquare5(isXNext ? 'X':'O');
        break;


        // case 6:
        //     setSquare6(isXNext ? 'X':'O');
        //     break;

            case 7:
                setSquare7(isXNext ? 'X':'O');
                break;

                case 8:
                setSquare8(isXNext ? 'X':'O');
                break;
     }


       
       setIsXNext(!isXNext);
    };
       const getBoardArray =()=>
        [
        Square0,Square1,Square2,
        Square3,Square4,Square5,
        Square6,Square7,Square8
       ];
       
    
    
    
    // const renderSquare = (index)=>{
      const boardArray = getBoardArray();
      return
    )
    };
      // const calculateWinner = (squares) => {
        // const checkLine = (a,b,c) => {
        
          
        
        
        return squares[a];
        }
        // return null;
        
        };
        
        // for(let i=0;i<3;i++){
          const result = checkLine(i*3,i*3+1,i*3+2);
          if(result) return result;
        
        }
          // for(let i=0;i<3;i++){
            const result = checkLine(i,i+3,i+6);
            if(result) return result;
          }
        
            const  result1 = checkLine(0,4,8);
            if(result1) ?return result1;
        
        
            // const  result2 = checkLine(2,4,6);
            // if(result2) return result2;
          
            return null;
        
        
        };

        const arrayChunk = (arr, n) => {
          const array = arr.slice();
          const chunks = [];
          while (array.length) chunks.push(array.splice(0, n));
          return chunks;
        };
     
        // const winner = calculateWinner(getBoardArray());
        let status;
//  if(winner){
//   status=`Winner:${winner}`;
//  } else{
//   status=`Next player: ${isXNext ?'X':'O'}`
//  ;
 
      }
  } 
          return (
            <Card>
        
          <div className="status">{status}</div>
        
            <div className="board-row">
        
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
                
            </div>
        
                <div className="board-row">
                   {renderSquare(3)}
                   {renderSquare(4)}
                    {renderSquare(5)}
       </div>
        
              <div className="board-row">
                 {renderSquare(6)}
                {renderSquare(7)}
                 {renderSquare(8)} 
        
      {/* 
                 <div className="board-row">
        
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)} */}
           </div>
        
      </Card>
        
          // );
        
      };
      
    
    export default Board;