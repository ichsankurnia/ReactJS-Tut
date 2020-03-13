import React from "react";

export default class Params extends React.Component {
    state = {
        lang: "",
        slug: ""
    }

    componentDidMount() {
        const {state} = this.props.location
        let params = state
        console.log(params);

        this.setState({lang: params.lang, slug: params.slug})
    }

    render(){
        return(
            <div>
                <h2>Params Page</h2>
                <p>Language: {this.state.lang}</p>
                <p>Slugify: {this.state.slug}</p>
                <button onClick={() => this.props.history.goBack()}>Back</button>
            </div>
        )
    }
}