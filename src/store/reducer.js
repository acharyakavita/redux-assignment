const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'PERSON_ADD') {
        const newPerson = {
            id: Math.random(),
            name: action.name,
            age: action.age
        }
        return {
            ...state,
            persons: state.persons.concat(newPerson)
        }
    }
    if (action.type === 'PERSON_DELETE') {
        const newArray = [...state.persons]
        newArray.splice(action.id, 1)
        return {
            ...state,
            persons: newArray
        }
    }
    return state;
}


export default reducer;