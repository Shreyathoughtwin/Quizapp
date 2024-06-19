import React,{useState} from 'react';
import Square from './Square';
import Button from './Button';
// import './button.css'
import Card from './card';


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
    

      const [isXNext, setIsXNext] = useState(true);
  

const handleClick = (index) => {

  if(calculateWinner(getBoardArray()) || getBoardArray()[index]){
    return;

}
  
  
    switch (index){
      case 0:
        setSquare0(isXNext ? 'X':'O');
        break;

        case 1:
          setSquare1(isXNext ? 'X':'O');
          break;

          case 2:
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

              case 6:
                setSquare6(isXNext ? 'X':'O');
                break;

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
   



const renderSquare = (index)=>{
  const boardArray = getBoardArray();

  return <Square value={ boardArray[index]} onClick={() => handleClick(index)}/>
         
  
 
};

const calculateWinner = (squares) => {
  const checkLine = (a,b,c) => {
  
    if(squares[a]&& squares[a]===squares[b]&& squares[a]===squares[c]){
  
  
  return squares[a];
}
  return null;
  
  };
  
  for(let i=0;i<3;i++){
    const result = checkLine(i*3,i*3+1,i*3+2);
    if(result) return result;
  
  }
    for(let i=0;i<3;i++){
      const result = checkLine(i,i+3,i+6);
      if(result) return result;
    }
  
      const  result1 = checkLine(0,4,8);
      if(result1) return result1;
  
  
      const  result2 = checkLine(2,4,6);
      if(result2) return result2;
    
      return null;
  
  
  };

 const winner = calculateWinner(getBoardArray());
 let status;
 
 if(winner){
  status=`Winner:${winner}`;
 } else{
  status=`Next player: ${isXNext ?'X':'O'}`
 ;
 
 
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


 </div>

</Card>

 );
};


// const calculateWinner = (squares) => {
// const checkLine = (a,b,c) => {

//   if(squares[a]&& squares[a]===squares[b]&& squares[a]===squares[c]){


// return squares[a];
// }
// return null;

// };

// for(let i=0;i<3;i++){
//   const result = checkLine(i*3,i*3+1,i*3+2);
//   if(result) return result;

// }
//   for(let i=0;i<3;i++){
//     const result = checkLine(i,i+3,i+6);
//     if(result) return result;
//   }

//     const  result1 = checkLine(0,4,8);
//     if(result1) return result1;


//     const  result2 = checkLine(2,4,6);
//     if(result2) return result2;
  
//     return null;


// };
// }

export default Board;


