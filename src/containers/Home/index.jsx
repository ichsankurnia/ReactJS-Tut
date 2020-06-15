import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";

import BlogPost from '../Pages/BlogPost';
import DetailPost from '../Pages/BlogPost/DetailPost';
import Counter from '../Pages/Counter';
import LifeCycleComp from '../Pages/LifeCycleComp';
import Test from '../Pages/Test';
import TestForm from '../Pages/Test/TestForm';
import YouTube from '../Pages/YouTube';
import HomeToken from "../Pages/Token/HomeToken";
import Login from "../Pages/Token/Login";
import Balance from "../Pages/Token/Balance";
import DetailBalance from "../Pages/Token/DetailBalance";
import Testt from '../Pages/Token/Testt';
import Params from '../Pages/Token/Params';

import "./index.css";

class Home extends Component{
    state = {
        showComponent: true
    }
    /* show component 10s kemudian unmount/hilangkan*/
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             showComponent: false
    //         })
    //     }, 10000);
    // }

    render(){
        return(
            <BrowserRouter basename="/reacttut">
                <Fragment>
                    {/* <p>Counter</p>
                    <hr style={{backgroundColor:'black', height:'2px'}} />
                    <Counter /> */}
                    {/* <p>Life Cycle Component</p>
                    <hr style={{backgroundColor:'black', height:'2px'}} />
                    {
                        this.state.showComponent?
                            <LifeCycleComp />: null
                    } */}
                    {/* <p>Blog Post</p> */}
                    {/* <hr style={{backgroundColor:'black', height:'2px'}} /> */}
                    {/* <BlogPost /> */}
                    {/* <Test /> */}
                    <div className="navigation">
                        <Link to="/" >Blog Post</Link>
                        <Link to="/counter" >Counter</Link>
                        <Link to="/lifecycle" >LifeCycle</Link>
                        <Link to="/test" >Test</Link>
                        <Link to="/youtube" >YouTube</Link>
                        <Link to="/hometoken" >Token</Link>
                        <Link to="/testt">Testt</Link>
                        <Link to="/form">Form</Link>
                    </div>
                    <hr style={{backgroundColor:'black', height:'2px'}} />

                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:postId" exact component={DetailPost} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/lifecycle" component={LifeCycleComp} />
                    <Route path="/test" component={Test} />
                    <Route path="/youtube" component={YouTube} />
                    <Route path="/login" component={Login} />
                    <Route path="/balance" component={Balance} />
                    <Route path="/hometoken" component={HomeToken} />
                    <Route path="/detail-balance/:menu" component={DetailBalance} />
                    <Route path="/testt" component={Testt} />
                    <Route path="/params" component={Params} />
                    <Route path="/form" component={TestForm} />
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home;

// NOTE
/*

Kalau nge build aplikasi kalau homepage nya gini "homepage": "https://ciherang.goes2nobel.com/reacttut"
kalau pake browserrouter yg kaya harus ditambahin basenamenya <BrowserRouter basename="/reacttut"> jadi kaya gini, path belakang nya harus sesuai


*/