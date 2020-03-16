import React from "react";
import { Variable, GetSetter } from "./Variabels";

export default class Params extends React.Component {
    constructor(props){
        super(props)
        const {state} = this.props.location
        let params = state
        this.state = {
            lang: params.lang,
            slug: params.slug,
            desc1: "",
            desc2: "",
            phoneNumber: "",
        }
        this.variable = new Variable(this.state.lang, this.state.slug).getDescEKTP()
    }

    componentDidMount() {
        this.setState({lang: this.state.lang, slug: this.state.slug, desc1: this.variable.desc1, desc2: this.variable.desc2, phoneNumber: GetSetter.phoneNumber})
    }

    render(){
        return(
            <div>
                <h2>Params Page</h2>
                <p>Language: {this.state.lang}</p>
                <p>Slugify: {this.state.slug}</p>
                <p>Phone Number: {this.state.phoneNumber}</p>
                <p>{this.state.desc1}</p>
                <p>{this.state.desc2}</p>
                <button onClick={() => this.props.history.goBack()}>Back</button>
            </div>
        )
    }
}