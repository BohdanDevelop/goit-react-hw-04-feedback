import {Component} from "react";
import Contacts from "./Components/Contacts"
import ContactsForm from "./Components/ContactsForm"
import Filter from "./Components/Filter";

class Form extends Component {
    static  INITIAL_STATE = {
        
        name: '',
        number:'',
        filter: '',
      };
   
    state = {
        contacts: [
        {name: 'Rosie Simpson', number: '459-12-56'},
        {name: 'Hermione Kline', number: '443-89-12'},
        {name: 'Eden Clements', number: '645-17-79'},
        {name: 'Annie Copeland', number: '227-91-26'},],
        name: '',
        number: '',
        filter: '',
}
handleChange = evt => {
    const {value, name} = evt.target;
    this.setState({[name] : value})
  
}
handleFilter = evt => {
    const {value} = evt.target;
    this.setState({filter: value})
  
}

reset = ()=>{
    this.setState({...Form.INITIAL_STATE})
}

handleSubmit = evt =>{
   evt.preventDefault()
   const allTheName = this.state.contacts.map(elem => elem.name.toUpperCase());
    if(allTheName.includes(this.state.name.toUpperCase())){
        alert(`${this.state.name} is already in contacts`)
       
    }else{
        const newContacts = [...this.state.contacts,{
            name: this.state.name,
            number: this.state.number,
        }]
        this.setState({contacts : newContacts})
    
    }    
this.reset()
}

onDeleteClick = evt=>{
    
    if(evt.target.nodeName === "BUTTON"){
        const deleteName = evt.target.name.toLowerCase();
        const newContacts = this.state.contacts.filter(element => element.name.toLowerCase()!==deleteName)
        this.setState({
            contacts : newContacts,
        })

    }
}
    render() {
        const {name, contacts, number, filter} = this.state;
        return (<>
       
       <ContactsForm 
       name={name} 
       number={number} 
       filter={filter}
       handleChange={this.handleChange}
       handleSubmit={this.handleSubmit}
       handleFilter={this.handleFilter}

       />
{filter?<Filter onClick={this.onDeleteClick} names={contacts} filter={filter} />:
<Contacts names={contacts} onClick={this.onDeleteClick} />
}


        </>)
    }
}

export default Form;