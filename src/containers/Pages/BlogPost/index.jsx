import React, { Component, Fragment } from 'react';
import axios from "axios";

import Post from "./../../../components/Post"

import "./BlogPost.css";

class BlogPost extends Component{
    state = {
        post : [],
        formAdd: {
            id: 1,
            userId: 11,
            title: "",
            body: "",
            img: "",
        },
        isUpdate: false,
        showForm: false
    }

    // Test Get request from my domain
    testGetRequest = () => {
        axios.get('http://ories.goes2nobel.com/dbpostgre/json.php')
        .then((res) => {
            console.log(res)
            console.log(res.data.data);
        })
    }

    componentDidMount = () => {
        // fetch('https://jsonplaceholder.typicode.com/photos')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // });
        this.getAllData();
        // this.testGetRequest();      // => http://ories.goes2nobel.com/dbpostgre/json.php
    }

    getAllData = () => {
        // axios.get('http://localhost:3004/posts')
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')   // order dari data yg paling lama
        .then((res)=> { 
            // console.log(res);   //res.data, res.status, res.headers, res.config, res.request
            this.setState({
                post: res.data
            })
        })
    }


    postDatatoAPI = (data) => {
        axios.post('http://localhost:3004/posts', data).then((res) => {
            console.log('Add new data', res);
            alert('Add new data successfully');
            this.getAllData();
        }, (err) => {
            console.log('Error: ', err);
        })
    }


    handleUpdate = (getData) => {
        console.log(getData);
        this.setState({
            showForm: true,
            formAdd : getData,
            isUpdate: true
        })
    }

    putDatatoAPI = (id, data) => {
        // console.log(data);
        axios.put(`http://localhost:3004/posts/${id}`, data).then((res) => {
            console.log('Update', res);
            alert('Update data successfully');
            this.getAllData();
        }, (err) => {
            console.log('Error: ', err);
        })
    }


    deleteData = (id) => {
        console.log("Delete data id: ", id);
        var conf = window.confirm('Are you sure to delete this data ?');
        if (conf === true) {
            axios.delete(`http://localhost:3004/posts/${id}`).then((res) => {
                console.log('Delete', res);
                this.getAllData();
            })
        }
    }


    handleCloseForm = () => {
        this.setState({
            formAdd: {
                id: 1,
                userId: 11,
                title: '',
                body: '',
                img: ''
            },
            isUpdate: false,
            showForm: false
        })
    }

    handleFormAddChange = (event) => {
        // console.log(event);      //event.target => input textarea button   || event.timeStamp dll
        var formAddNew = {
            ...this.state.formAdd
        }; //copy seluru obj ke formAddNew
        if (!this.state.isUpdate) {
            formAddNew['id'] = new Date().getTime();
        }
        formAddNew[event.target.name] = event.target.value
        this.setState({
            formAdd: formAddNew
        })
        // }, () => {
        //     console.log("value obj formAdd: ", this.state.formAdd)
        // })
    }


    handleSubmit = () => {
        console.log("Submit data: ", this.state.formAdd);
        if (this.state.formAdd.title !== "" || this.state.formAdd.body !== "" || this.state.formAdd.img !== "") {
            if (!this.state.isUpdate) {
                this.postDatatoAPI(this.state.formAdd);
            } else {
                this.putDatatoAPI(this.state.formAdd.id, this.state.formAdd);
            }
            this.setState({
                formAdd: {
                    id: 1,
                    userId: 11,
                    title: '',
                    body: '',
                    img: ''
                },
                isUpdate: false,
                showForm: false
            })
        } else {
            alert("Cannot add/update data with empty form");
        }
    }

    formModal = () => {
        return(            
            <div className="form">
                <button className="close-form" onClick={this.handleCloseForm}>X</button>
                <div className="form-add-section">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={this.state.formAdd.title} placeholder="add title..." onChange={this.handleFormAddChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" value={this.state.formAdd.body} col="30" rows="10" placeholder="add blog content..." onChange={this.handleFormAddChange} />
                    <label htmlFor="img">ThumbnailUrl</label>
                    <input type="text" name="img" value={this.state.formAdd.img} placeholder="https://ories.goes2nobel.com" onChange={this.handleFormAddChange}/>
                    <button className="btn-submit" onClick={this.handleSubmit}>Save</button>
                </div>
            </div>
        )
    }

    handleDetailPost = (id) => {
        console.log(id)
        this.props.history.push(`/detail-post/${id}`)
    }
    
    render(){
        // console.log(this.state.post); // {userId: 1, id: 1, title: "sunt aut facere ..
        return(
            <Fragment>
                <button className="btn-add" onClick={() => this.setState({showForm:true})}>Add Post</button>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} getData={post} update={this.handleUpdate} remove={this.deleteData} goDetailPost={this.handleDetailPost} />
                    })
                }
                {
                    this.state.showForm? <this.formModal /> : null
                }
            </Fragment>
        )
    }
}

export default BlogPost;



//#region get 10 data
/* 
this.state.post.map(post => {
    while (post.id < 10){   // tampikan hanya 10 data
        console.log(post.id);
        return <Post key={post.id} img={post.img} id={post.id} title={post.title} desc={post.body}/>
    }
    return null;
})
*/
//#endregion

/*
<div>
    <p>{props.getData.id}</p>
</div>
<div className="img-thumb">
    <img src={props.getData.img} alt="img-thumb" />
</div>
<div className="content">
    <p className="title">{props.getData.title}</p>
    <p className="desc">{props.getData.body}</p>
</div>

panggil props hanya data pada parrent class
<Post key={post.id} getData={post} /> => getData = post.id post.img post.title post.body
*/


/* cara manual
<div>
    <p>{props.id}</p>
</div>
<div className="img-thumb">
    <img src={props.img} alt="img-thumb" />
</div>
<div className="content">
    <p className="title">{props.title}</p>
    <p className="desc">{props.body}</p>
</div>

panggil masing2 props ex: id img title body
<Post key={post.id} img={post.img} id={post.id} title={post.title} body={post.body}/>
*/
