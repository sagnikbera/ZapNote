import { v4 as uuidv4 } from 'uuid';

export const noteReducer = (state ,{type , payload}) => {
    switch (type) {
        case 'TITLE':
            return {
                ...state,
                title: payload
            }
         case 'TEXT':
            return {
                ...state,
                text: payload
            } 
        case 'ADD_NOTE':
            return {
                ...state,
                notes : [...state.notes , 
                    {
                        text: state.text,
                        title: state.title,
                        id: uuidv4()
                    }
                ]
            }  
        case 'CLEAR_INPUT':
            return{
                ...state ,
                title: "",
                text: ""
            }     
    
        default:
            return state;
    }
}
