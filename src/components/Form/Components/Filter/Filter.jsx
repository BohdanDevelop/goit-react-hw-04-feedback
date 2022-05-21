import style from "./Filter.module.scss";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const Filter = ({names, filter, onClick})=>{
    const markUp = names.filter(({name}) => name.toUpperCase().includes(filter.toUpperCase().trim())).map(({name, number}) =>{
        return  <li className={style.li} onClick={onClick} key={nanoid()}>
            <div>{name} : {number}</div>
            <button className={style.button} name={name} type="button">Delete</button>
        </li>
      })
    return (
        <ul>
        {markUp}
        </ul>
    )
}
Filter.propTypes = {
names: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
    }).isRequired),
onClick: PropTypes.func.isRequired,
filter: PropTypes.string.isRequired,
}
export default Filter;