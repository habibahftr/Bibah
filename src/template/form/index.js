import React, { Component } from 'react';
import "../style.css"

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:"",
            name:"",
            username:"",
            address:"",
            company:"",
         }
    }

    setValue =el =>{
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    handleSubmit=(event)=>{
        this.setState({
            id:"",
            name:"",
            username:"",
            address:"",
            company:"",
        })
        event.preventDefault()
    }
    
    render() { 
        if("name" in this.props.edit){
            this.setState({
                id: this.props.edit.id,
                name: this.props.edit.name,
                username: this.props.edit.username,
                address: this.props.edit.address.city,
                company: this.props.edit.company.name,
            })
            this.props.reset();
        }
        const{id, name, username, address, company}=this.state
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>ID : </label><input type="text" name="id" value={id} onChange={this.setValue}></input><br/>
                    <label>Name : </label><input type="text" name="name" value={name} onChange={this.setValue}></input><br/>
                    <label>Username : </label><input type="text" name="username" value={username} onChange={this.setValue}></input><br/>
                    <label>Address : </label><input type="text" name="address" value={address} onChange={this.setValue}></input><br/>
                    <label>Company : </label><input type="text" name="company" value={company} onChange={this.setValue}></input><br/>
                    <button onClick={()=> this.props.save({id, name, username, address, company})} type="submit" value="Submit">Update</button>

                </form>

            </div>
         );
    }
}
 
export default Form;