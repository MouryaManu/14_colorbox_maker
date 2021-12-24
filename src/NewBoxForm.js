import React, { Component } from 'react'
import uuid from "uuid/v4";

class NewBoxForm extends Component {
    constructor(props){
        super(props);
        this.state={
            height: "",
            width: "",
            color: ""
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }


    handleChange(evt) {
     
      this.setState({
          [evt.target.name]: evt.target.value
      });
    }

    
    handleSubmit(evt) {
        evt.preventDefault();
        const newbox= {...this.state, id: uuid()}
        this.props.createBox(newbox);
        this.setState({
            height: "",
            width: "",
            color: ""
        });
    }


    render() {
        return (
            <div>

              <h1>New Box Form!!</h1>
               
        <form onSubmit={this.handleSubmit}>
              <label htmlFor="height">Height:</label>
              <input type="text" id="height" value= {this.state.height} name="height" onChange={this.handleChange}></input>

              <label htmlFor="width">Width:</label>
              <input type="text" id="width" value= {this.state.width} name="width" onChange={this.handleChange}></input>

              <label htmlFor="color">Color:</label>
              <input type="text" id="color" value= {this.state.color} name="color" onChange={this.handleChange}></input>

              <button>Add this new Box!!</button>
      </form>

            </div>
        )
    }
}

export default NewBoxForm;