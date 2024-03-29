import React, { Component, Fragment } from 'react';
import {BrowserRouter, HashRouter, Route, Link} from "react-router-dom";
// import { Offline, Online } from "react-detect-offline";

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
import TestKeyboard from '../Pages/Keyboard/Keyboard';
// import OfflinePage from '../Pages/Offline/offline';

import "./index.css";
import TestObject from '../Pages/Test/TestObject';
import TestPDF from '../Pages/PDF/TestPDF';
import TestWebcam from '../Pages/TestWebcam';
import TestViewImageRailink from '../Pages/Test/TestViewImageRailink';
import TestBufferImage from '../Pages/Test/TestBufferImage';

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
            <Fragment>
                {/* <Offline> */}
                    {/* <OfflinePage /> */}
                {/* </Offline> */}
                {/* <Online> */}
                    {/* <BrowserRouter basename="/reacttut"> */}
                    <HashRouter>
                    {/* <BrowserRouter basename="/ReactApp/exercise/"> */}
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
                                <Link to="/keyboard">Keyboard</Link>
                                <Link to="/test-object">TestObject</Link>
                                <Link to="/jspdf">TestPDF</Link>
                                <Link to="/webcam">Webcam</Link>
                                <Link to="/test-view-image-railink">Image Railink</Link>
                                <Link to="/test-buff-img">Buffer Image</Link>
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
                            <Route path="/keyboard" component={TestKeyboard} />
                            <Route path="/test-object" component={TestObject} />
                            <Route path="/jspdf" component={TestPDF} />
                            <Route path="/webcam" component={TestWebcam} />
                            <Route path="/test-view-image-railink" component={TestViewImageRailink} />
                            <Route path="/test-buff-img" component={TestBufferImage} />
                        </Fragment>
                    {/* </BrowserRouter> */}
                    </HashRouter>
                {/* </Online> */}
            </Fragment>
        )
    }
}

export default Home;

// NOTE
/*

Kalau nge build aplikasi kalau homepage nya gini "homepage": "https://ciherang.goes2nobel.com/reacttut"
kalau pake browserrouter yg kaya harus ditambahin basenamenya <BrowserRouter basename="/reacttut"> jadi kaya gini, path belakang nya harus sesuai


*/