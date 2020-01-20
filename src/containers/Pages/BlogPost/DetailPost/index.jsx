import React, { Fragment } from 'react';
import Axios from 'axios';

class DetailPost extends React.Component {
    state = {
        title : "",
        body : "",
        img : ""
    }

    componentDidMount() {
        console.log(this.props);
        let id = this.props.match.params.postId;
        Axios.get(`http://localhost:3004/posts/${id}`).then(res => {
            this.setState({
                title : res.data.title,
                body : res.data.body,
                img : res.data.img
            })
        })
    }
    
    render(){
        return(
            <Fragment>
                <h3>{this.state.title}</h3>
                <p>{this.state.body}</p>
                <img src={this.state.img} alt="" style={{width:'50%'}} />
            </Fragment>
        )
    }
}

export default DetailPost;