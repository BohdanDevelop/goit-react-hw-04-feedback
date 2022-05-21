import style from "./ContactsForm.module.scss";
import PropTypes from "prop-types";
const ContactsForm = ({name, number, filter, handleChange, handleSubmit, handleFilter})=>{
    return (
        <form onSubmit={handleSubmit} >
<div className={style.inputDiv}>
  

  
  <label className={style.label} >Name
        <input className={style.input}
        
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
        </label>
        <label className={style.label} >Number
        <input className={style.input}
    
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
        </label>
        <label className={style.label}>Filter
        <input  className={style.input}
        id="#filter"
        type="text"
        onChange={handleFilter}
        value={filter}
        />
        </label>
        </div>
        <button className={style.submit}  type="submit">add contact</button>
                </form>
    )
}
ContactsForm.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired,
}

export default ContactsForm;