import React, { Component } from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm';
class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state={
            boxes: []
        };
        this.create=this.create.bind(this);
    }

    remove(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        });
    }

    create(newbox) {
        this.setState({
            boxes: [...this.state.boxes,newbox]
        });
      
    }

    render() {
        const boxes= this.state.boxes.map(box => (
            <Box key={box.id} height={box.height}  width={box.width}
            color={box.color}  remove={() =>this.remove(box.id)}
             />
        ))
        return(
            <div>
                <h1>Box List!!</h1>
                <NewBoxForm createBox={this.create} />
                {boxes}

            </div>
        )
    }
}

export default BoxList;