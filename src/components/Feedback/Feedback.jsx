
import Statistics from "./Components/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions";
import {Component} from "react";
import "./Feedback.module.scss";

class Feedback extends Component {
state = {
    good: 0,
    neutral: 0,
    bad: 0,
}



onButtonClick = (type)=>{
   
    this.setState(prevState => {
      return  {[type] : prevState[type] + 1}
    })
    this.countTotalFeedback()
}

countTotalFeedback = ()=>{
    
    
        const totalElements = Object.keys(this.state);
       
        const sum = totalElements.reduce((acc, currentValue)=> acc + this.state[currentValue] , 0)
        
        return sum;
    }
countPositiveFeedbackPercentage = ()=>{
    const sum = Math.round((this.state.good / this.countTotalFeedback())*100);
    return sum;
}

render(){
    const {good, neutral, bad} = this.state;
    return (
     <div>
         <h1>Please leave feedback</h1>
         <FeedbackOptions onLeaveFeedback={this.onButtonClick}/>
         <h2>Statistics</h2>
         
       {(good || neutral || bad) ? <Statistics 
         good={good} 
         neutral={neutral} 
         bad={bad} 
         countTotalFeedback={this.countTotalFeedback} 
         countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
         /> :  <h2>No feedback given</h2>
         }
        
     </div>
    )
}
}

export default Feedback;