import "./App.css";

import react, {useState} from 'react';
const questions= [{
  question: 'What is React?',
  "options": [
    "A JavaScript framework for building user interfaces.",
    "A programming language.",
    "A database management system.",
    "A server-side scripting language."
  ],

  "correctOptionIndex": 0
},
{
"question": "What is JSX?",
    "options": [
      "A file format used for storing React components.",
      "A programming language for building user interfaces.",
      "JavaScript XML, a syntax extension for JavaScript.",
      "A styling language for React applications."
    ],
    "correctOptionIndex": 2
  },

  {

    "question": "What is the purpose of state in React?",
    "options": [
      "To store and manage data within a component.",
      "To handle component rendering and lifecycle.",
      "To define the structure of a React component.",
      "To manage routing and navigation in React applications."
    ],
    "correctOptionIndex": 0
  }
]

const examApp = ()=>{
  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [selectedOption,setSelectedOption] = useState(Null);
  const [marks,setMarks] = useState(0);
  
  const handleOptionClick = (optionIndex)=>{
    setSelectedOption(optionIndex);
    if(optionIndex === questions[currentQuestion].currentAnswer){
      setMarks(marks+1)
    }
  }
  const handleNextQuestion = ()=>{
    if(currentQuestion < questions.length -1){
      setCurrentQuestion(currentQuestion+1);
      setSelectedOption(null);
    }
  }
  const handleEndExam = ()=>{
    alert(`your score is ${marks} out of ${questions.length}`);
  }
  const renderQuestion = ()=>{
    const currentQuestionData = questions[currentQuestion];
    return( 
      <div className = "question">
        <h3>{currentQuestionData.question}</h3>
        <div className="options">
          {
            currentQuestionData.options.map((option,index)=>(
              <div 
              key = {index}
              className = {`option ${selectedOption === index ? `selectd` : ''}`}
              onClick = {()=> handleOptionClick(index)}
           >
            {option}
             </div>

            )) }

        </div>
      </div>
    )
  }
 
  return(
    <div className = "exam-container">
      <h3>Online Exam</h3>
      {renderQuestion()}
      <div className = "button">
        <button onClick = {handleNextQuestion}>Next Question</button>
        <button onClick = {handleEndQuestion}>End Question</button>

      </div>
      <div className = "marks">Marks:{marks}</div>
    
    </div>
  )

}


function App() {
  return <div className="App">{/* import Booklet component here */}</div>;
}

export default examApp;
