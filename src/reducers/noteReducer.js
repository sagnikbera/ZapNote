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
                        id: uuidv4(),
                        isPinned: false,

                    }
                ]
            }  
        case 'CLEAR_INPUT':
            return{
                ...state ,
                title: "",
                text: ""
            }
        case 'PIN':
            return{
                ...state ,
                notes: state.notes.map(note => note.id === payload.id ? {...note , isPinned: !note.isPinned} : note)
            }         
        case 'UNPIN':
            return{
                ...state ,
                notes: state.notes.map(note => note.id === payload.id ? {...note , isPinned: !note.isPinned} : note)
            }         
        case 'ARCHIVE':
            return{
                ...state ,
                archive: [...state.archive , state.notes.find(({id}) => id === payload.id)], // add
                notes: state.notes.filter(({id})=> id !== payload.id) // remove
            }         
        case 'REMOVE_ARCHIVE':
            return{
                ...state ,
                notes : [...state.notes , state.archive.find(({id}))], // add first
                archive: state.archive.filter(({id})=> id !== payload.id), //remove then
            }         
    
        default:
            return state;
    }
}
