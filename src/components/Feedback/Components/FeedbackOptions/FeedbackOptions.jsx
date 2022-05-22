import style from "./FeedbackOptions.module.scss";
import PropTypes from "prop-types";

const FeedbackOptions = ({onLeaveFeedback, options:{good, neutral, bad}})=>{
return (<div>
<button className={style.button} onClick={()=>onLeaveFeedback(good)} type="button">Good</button>
<button className={style.button} onClick={()=>onLeaveFeedback(neutral)} type="button">Neutral</button>
<button className={style.button} onClick={()=>onLeaveFeedback(bad)} type="button">Bad</button>
</div>)
}
FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;