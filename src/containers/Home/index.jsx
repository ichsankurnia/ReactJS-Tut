import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";

import Counter from "./../Counter";
import LifeCycleComp from '../LifeCycleComp';
import BlogPost from '../BlogPost';
import Test from '../Test';
import YouTube from "../YouTube";
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
            <BrowserRouter>
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
                    </div>
                    <hr style={{backgroundColor:'black', height:'2px'}} />

                    <Route path="/" exact component={BlogPost} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/lifecycle" component={LifeCycleComp} />
                    <Route path="/test" component={Test} />
                    <Route path="/youtube" component={YouTube} />
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home;