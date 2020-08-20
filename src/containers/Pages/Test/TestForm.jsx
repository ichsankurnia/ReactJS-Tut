import React from "react";
import axios from "axios";

export default class TestForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title: "", body: "", file: null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.file)

        // data.title = this.state.title
        // data.body = this.state.body
        // data.file = this.state.file
        const data = new FormData()
        
        data.append('title', this.state.title)
        data.append('body', this.state.body)
        data.append('file', this.state.file)

        console.log(data)

        axios.post('http://192.168.1.7:3006/api/post', data, {
            headers: {
                authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSIsInVzZXJuYW1lX3ZhciI6ImFkbWluIiwiZW1haWxfdmFyIjoibWFpbEBleGFtcGxlLmNvbSIsImlhdCI6MTU5MTg0ODMxMywiZXhwIjoxNTkyNDUzMTEzfQ.6r8iax6KFMJ7QXWJaqdaGudKgBqfMrPTJZXmGLqNvfw`,
              }
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    render(){
        return(
            // <form onSubmit={this.handleSubmit}>
            <div>
                <div>
                    <label>Title : </label>
                    <input type="text" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})} />
                </div>
                <div>
                    <label>Body : </label>
                    <textarea value={this.state.body} onChange={(e) => this.setState({body: e.target.value})} />
                </div>
                <div>
                    <label>Image : </label>
                    <input type="file" onChange={(e) => this.setState({file: e.target.files[0]})} />
                </div>
                <div>
                    {/* <input type="submit" value="Submit"/> */}
                    <button onClick={this.handleSubmit}>submit</button>
                </div>
            </div>
            // {/* </form> */}
        )
    }
}