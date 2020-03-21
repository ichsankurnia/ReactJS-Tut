import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";

import BlogPost from '../Pages/BlogPost';
import DetailPost from '../Pages/BlogPost/DetailPost';
import Counter from '../Pages/Counter';
import LifeCycleComp from '../Pages/LifeCycleComp';
import Test from '../Pages/Test';
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
                        <Link to="/hometoken" >Token</Link>
                        <Link to="/testt">Testt</Link>
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
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home;

// TODO Tomorow
/*
1 get menu dari api => routing => logic 
2 Handle Websocket => Munculin modal => kasih timeout => kembali ke page awal
3 log api ke agent
4 loader saat pembayaran
5 struk uang bersisa


kl pas websocket nya ngga konek flow nya reconect websocket > kirim lagi command yg sama (misal ba_recieve)
> jika web socket gagal hit api device monitoring BA error (1) > tampilkan modal > kembali kehalaman utama

kl ada respon code "0" baru lanjut masuk ke menu nya,
kl respon error dr web socket jgn lanjut, trus hit api device monitoring system error (1)
*/