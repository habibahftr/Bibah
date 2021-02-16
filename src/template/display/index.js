import React, { Component } from 'react';
import "../style.css";
import Form from "../form";

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            people:[],
            albums:[],
            photos:[],
            load : false,
            editPeople:{},
            act: 0,
            index: "",
         }
    }

    componentDidMount(){
        console.log("kesini")
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json =>{
                console.log("kesini")
                this.setState({
                    load: true,
                    people:json
                })
            })
            .catch(()=>{
                alert("Failed fetching data!")
            })

            fetch(`https://jsonplaceholder.typicode.com/albums`)
                    .then(response => response.json())
                    .then(json =>{
                        console.log("kesini")
                        this.setState({
                            albums:json
                        })
                    })
                    .catch(()=>{
                        alert("Failed fetching data!")
                    })
        
            fetch(`https://jsonplaceholder.typicode.com/photos`)
                 .then(response => response.json())
                 .then(json =>{
                    console.log("kesini")
                    this.setState({
                        photos:json
                    })
                  })
                 .catch(()=>{
                    alert("Failed fetching data!")
                 })

        
    }

    delClicked= (index)=>{
        let newPeople = this.state.people
        newPeople.splice(index,1)
        this.setState({
            people:newPeople
        })
        alert('Data delete successfully!')
    }

    save=(person)=>{
        const{id, name, username, address, company}=person
        let newPeople = this.state.people
        let idx= this.state.index
        newPeople[idx].id = id;
        newPeople[idx].name = name;
        newPeople[idx].username = username;
        newPeople[idx].address.city = address;
        newPeople[idx].company.name = company;
        this.setState({
            people: newPeople,
        })
        alert(`Update success`)
    }

    viewbutton=(idx)=>{
        this.setState({
            index: idx
        })
        let peopleNow = this.state.people
        let idPeople = peopleNow[idx].id

    }

    editbutton=(idx)=>{
        this.setState({
          act: 1,
          index: idx
        })
        console.log("update ", idx);
        let peopleNow = this.state.people[idx];
        // console(editPeople.hobby.length)
        this.setState({
          editPeople : peopleNow,
          act: 1,
          index: idx  
        })
      }
      
      reset =()=>{
        this.setState({
          editPeople:{}
        })
      }
      

    

    render() { 
        let { load, people} = this.state
        if(!load) {
            console.log(!load)
            return <div>Loading . . .</div>
        } else {
            console.log(load)
            console.log(people);
            return ( 
            <div>
                <div>
                    <Form save={this.save} edit={this.state.editPeople} reset={this.reset}></Form>
                </div>
            <div className="container1">
                <table>
                    <thead>
                        <tr>
                            <th className="tNumber">Id.</th>
                            <th className="tText">Name</th>
                            <th className="tText">Username</th>
                            <th className="tText">City</th>
                            <th className="tText">Company</th>
                            <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.people.map((item,idx) => (
                                <tr key={idx}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.address.city}</td>
                                    <td>{item.company.name}</td>
                                    <td className = "tdAction">
                                        <button className = "button" type = "button" onClick={() => this.delClicked(idx)} > Delete </button> 
                                        <button className = "button" type = "button" onClick={() => this.editbutton(idx)}> Update </button>
                                        <button className = "button" type = "button"> View </button>
                                    </td>
                                </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    foto
                </div>
            </div>
            </div>
         );
    }
}
}
 
export default Display;