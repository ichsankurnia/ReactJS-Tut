import React from "react";
import axios from "axios";
import { Markup } from 'interweave';

class Testttt extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios.get(`http://ciherang.goes2nobel.com/node/mygrapari/menu/${2}`).then(res => {
            this.setState({
              data: res.data.data
          })
        }) 
    }

    render(){
        return(
            <div>
                <li>{this.state.data.menu}</li>
                <p><Markup content={this.state.data.desc1} /></p>
            </div>
        )
    }
}

export default Testttt