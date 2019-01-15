import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import {connect} from 'react-redux';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return{
        prs:state.persons
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        personAddedHandler:(name,age)=>dispatch({type:'PERSON_ADD',name:name,age:age}),
        personDeletedHandler:(id)=>dispatch({type:'PERSON_DELETE',value:id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Persons);