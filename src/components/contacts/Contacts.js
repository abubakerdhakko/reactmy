import React, { Component } from 'react'
import Contact from './Contact'
import {Consumer} from '../../context'

class Contacts extends Component {
    
  
    render() {
    return(
        <Consumer>
            {value => {
                console.log(value);
                const { contacts } = value;
                return(
                    <React.Fragment>
                        {contacts.map(contact => (
                            <Contact
                            key = {contact.id} 
                            contact = {contact}
                            />
                        ))}
                    </React.Fragment>
                );
            }}
        </Consumer>
        // <h1>This is a test</h1>
    )

  }
}

export default Contacts;