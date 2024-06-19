


import React from 'react';
import './Quiz.css';


class QuizApp extends React.Component {
  constructor(props) {
    super(props);

    const loginUser = JSON.parse(localStorage.getItem('loginUser'));
     const userName = loginUser?.username;


    this.state = {
      username: userName || '',

      questions: [

    {
      id: 1,
            question: 'Which of the following is used in React.js to increase performance?',
      options: [

            { id: 1, text: 'Virtual DOM' },{ id: 2, text: 'Original DOM' },
             { id: 3, text: 'Both A and B' },{ id: 4, text: 'None of the above' }
     ],
          answer: 'Virtual DOM',
  },


    {
          id: 2,
          question: 'Which of the following acts as the input of a class-based component?',
          options: [
           { id: 1, text: 'Class' }, 
           { id: 2, text: 'Factory' },
        { id: 3, text: 'Render' },
        { id: 4, text: 'Props' }
    ],
          answer: 'Props',
   },

        {
       id: 3,
          question: 'Which of the following keyword is used to create a class inheritance?',
          options: [
            { id: 1, text: 'Create' },
            { id: 2, text: 'Inherits' },
        { id: 3, text: 'Extends' },
        { id: 4, text: 'This' }
          ],
          answer: 'Extends',
    },

     {
          id: 4,
          question: 'A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?',
          options: [

            { id: 1, text: 'Constructor' },
            { id: 2, text: 'Class' },
            { id: 3, text: 'Object' },
            { id: 4, text: 'DataObject' }
      ],
          answer: 'Class',
        },

   {
          id: 5,
          question: 'What is the default port where webpack-server runs?',
            options: [

            { id: 1, text: '3000' },
            { id: 2, text: '8080' },{ id: 3, text: '3030' },
            { id: 4, text: '6060' }
   ],
          answer: '8080',
    },

    {
          id: 6,
              question: 'How many numbers of elements a valid react component can return?',
          options: [

            { id: 1, text: '1' },
            { id: 2, text: '2' },
            { id: 3, text: '4' },
            { id: 4, text: '5' }
 ],
          answer: '1',
    },
       
    {
           id: 7,
         question: 'What are the two ways to handle data in React?',
          options: [

            { id: 1, text: 'State & Props' },
            { id: 2, text: 'Services & Components' },
            { id: 3, text: 'State & Services' },
            { id: 4, text: 'State & Component' }
          ],

          answer: 'State & Props',
  },

        {
           id: 8,
              question: 'Does React.js create a VIRTUAL DOM in the memory?',
          options: [

            { id: 1, text: 'TRUE' },
            { id: 2, text: 'FALSE' },
            { id: 3, text: 'Can be true or false' },
            { id: 4, text: 'Cannot say' }
          ],


       answer: 'TRUE',
  },

    {
          id: 9,
         question: 'Which of the following is used to pass data to a component from outside in React.js?',
          options: [
            
            { id: 1, text: 'SetState' },
            { id: 2, text: 'Render with arguments' },
            { id: 3, text: 'Props' },
             { id: 4, text: 'PropTypes' }
    ],
       answer: 'Props',

    },

        {
          id: 10,
       question: 'Which of the following function is used to change the state of the React.js component?',
          options: [

              { id: 1, text: 'this.setState' },
            { id: 2, text: 'this.setChangeState' },
             { id: 3, text: 'this.State{}' },
            { id: 4, text: 'None of the above.' }
      ],
          answer: 'this.setState',

   },
      ],


      currentquestionid: 1,
      selectedOptionid: null,
        answers: [],
      score: 0,
         showscore: false,
      timeLeft: 60,
      visitedquestionids: [1],
           //  QuizComplete:false,

};


    this.timer = null;
    }


  componentDidMount() {
    this.startTimer();
}


  startTimer = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => {

        if (prevState.timeLeft > 0) {
          return { timeLeft: prevState.timeLeft - 1 };

   } else {
          this.nextQuestion();
          return { timeLeft: 60 };

  }
      });

    }, 1000);

  };


         handleOptionChange = (e) => {
          this.setState({ selectedOptionid: parseInt(e.target.value, 10) });

  };


      nextQuestion = () => {

    const { currentquestionid, questions, selectedOptionid, answers } = this.state;
      const currentquestion = questions.find(q => q.id === currentquestionid);

    if (selectedOptionid !== null) {

        const selectedOption = currentquestion.options.find((option) => option.id === selectedOptionid);
           const correct = selectedOption.text === currentquestion.answer;
             answers.push(correct);

    
}
    clearInterval(this.timer);

    const nextquestion = questions.find((q) => q.id === currentquestionid + 1);

    if (nextquestion) {
          this.setState((prevState) => {

          const nextid = prevState.currentquestionid + 1;
        const visitedquestionids = [...prevState.visitedquestionids];


        if (!visitedquestionids.includes(nextid)) {
           visitedquestionids.push(nextid);
}

    return {
  
           currentquestionid: nextid,
          selectedOptionid: null,
          timeLeft: 60,
            visitedquestionids,

        };

  }, this.startTimer);

 } else {


    this.showFinalScore();
    }


    };
  
  
     goPage = (questionid) => {

    clearInterval(this.timer);

    this.setState(
      (prevState) => {
        
          const visitedquestionids = [...prevState.visitedquestionids];
        if (!visitedquestionids.includes(questionid)) {
          visitedquestionids.push(questionid);

  }
      
  return {

          currentquestionid: questionid,
          selectedOptionid: null,
            timeLeft: 60,
          visitedquestionids,

  };
    },


      this.startTimer
);

  };

 
 
    showFinalScore = () => {
     clearInterval(this.timer);

     const score = this.state.answers.filter((answer) => answer).length;
    this.setState({ score, showscore: true });

};

  resetQuiz = () => {
    this.setState(
      {
        currentquestionid: 1,
        selectedOptionid: null,
        answers: [],
         score: 0,
          showscore: false,
        timeLeft: 60,
        visitedquestionids: [1],
},

      this.startTimer
);
  };

        handleCancel = () => {
    clearInterval(this.timer);
    this.setState({

         currentquestionid: 1,
      selectedOptionid: null,
      answers: [],
      score: 0,
      showscore: false,
      timeLeft: 60,
      visitedquestionids: [1],


});

    alert('Thank you for taking the quiz');
  };


renderPagination = () => {

    const { questions, visitedquestionids, currentquestionid } = this.state;

    return (

    <div>

        {questions.map((question) => (

           <button key={question.id}
            style={{backgroundColor: currentquestionid === question.id ? 'blue' : visitedquestionids.includes(question.id) ? 'green' : 'grey',
              color: 'white',
              margin: '2px',

      }}
            onClick={() => this.goPage(question.id)} > {question.id} </button>
        ))}

     </div>
    );

  };

  render() {

    const { questions, currentquestionid, selectedOptionid, showscore, score, timeLeft, username } = this.state;
    
    if (showscore) {

      return (

        <div>
          <h3>Quiz Completed</h3>
               <p style={{ color: score > 6 ? 'green' : 'red' }}>Your score: {score}/{questions.length}</p>
          <p>Username: {username}</p>

       <button onClick={this.resetQuiz}>Try Again</button>
       <br></br><br></br>

      <button onClick={this.handleCancel}>Cancel</button>


        </div>


      );

 }

    const currentquestion = questions.find(q => q.id === currentquestionid);

    return (

      <div className="quiz-container">

        <h3> QuizApp</h3>

        <p>Username: {username}</p>

          <div className="timer">Time Left: {timeLeft} seconds</div>
        <div className="question">

          <h4>{currentquestion.question}</h4>

          <div className="options">


   {currentquestion.options.map((option) => (
              <label key={option.id}>

                <input type="radio" value={option.id}checked={selectedOptionid === option.id}onChange={this.handleOptionChange}/>
        {option.text}
           </label>


     ))}

          </div>
        </div>

        <button onClick={this.nextQuestion} disabled={selectedOptionid === null}> Next</button>

        <button onClick={this.handleCancel}>Cancel</button>

   <div className="pagination">{this.renderPagination()}</div>
      </div>



);
  }
}
  
export default QuizApp;