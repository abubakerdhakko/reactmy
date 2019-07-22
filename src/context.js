import React , {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        default:
        return state;
    }
} 

export class Provider extends Component{

    state = {
        contacts : [
          {
              id: 1,
              name: 'Talha Yusuf',
              email: 'talha.yusuf@miranz.net',
              phone: '03346055656'
          },
          {
              id: 2,
              name: 'Arslan Imran',
              email: 'arslan.imran@miranz.net',
              phone: '03346055454'
          },
          {
              id: 3,
              name: 'Rizwan Khan',
              email: 'rizwan.khan@miranz.net',
              phone: '03346055353'
          }  
        ],
        
        dispatch: action => this.setState(state => reducer(state,action))
    }

    render() { 
        return(
            <Context.Provider value = {this.state}>
                {this.props.children}    
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;


