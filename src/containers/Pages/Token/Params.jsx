import React from "react";
import { Variable } from "./Variabels";

export default class Params extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            lang: "",
            slug: "",
            desc1: "",
            desc2: "",
        }
    }

    componentDidMount() {
        const {state} = this.props.location
        let params = state
        const variable = new Variable(params.lang, params.slug).getDescEKTP()
        console.log(params);

        this.setState({lang: params.lang, slug: params.slug, desc1: variable.desc1, desc2: variable.desc2})
    }

    render(){
        return(
            <div>
                <h2>Params Page</h2>
                <p>Language: {this.state.lang}</p>
                <p>Slugify: {this.state.slug}</p>
                <p>{this.state.desc1}</p>
                <p>{this.state.desc2}</p>
                <button onClick={() => this.props.history.goBack()}>Back</button>
            </div>
        )
    }
}