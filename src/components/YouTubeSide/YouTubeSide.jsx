import React from 'react';
import "./YouTubeSide.css";

const Comp = (props) => {
    return (
        <div className="comp-side">
            <img src={props.icon} alt="" />
            <p>{props.title}</p>
        </div>
    )
}
Comp.defaultProps={
    icon: require('./../../assets/img/user.png'),
    title: "Home Page"
}


const YouTubeSide = () => {
    return (
        <div className="main-side">
            <div className="side-1">
                <Comp />
                <Comp title="Trending" />
                <Comp title="Subscription"/>
                <div style={{marginTop:8}} className="break-line"></div>
            </div>
            <div className="side-1">
                <Comp title="Collection" />
                <Comp title="History" />
                <Comp title="Watch Later"/>
                <Comp title="Like Video" />
                <Comp title="More" />
            </div>
            <div className="break-line"></div>
            <div className="side-1">
                <p className="header">SUBSCRIPTION</p>
                <Comp title="Kelas Terbuka" />
                <Comp title="Web Programming UNPASS" />
                <Comp title="Jess No Limit"/>
                <Comp title="Show 3 more" />
            </div>
            <div className="break-line"></div>
            <div className="side-1">
                <p className="header">MORE FROM YOUTUBE</p>
                <Comp title="YouTube Premium" />
                <Comp title="The Game" />
                <Comp title="Live"/>
            </div>
            <div className="break-line"></div>
            <div className="side-1">
                <Comp title="Settings" />
                <Comp title="Report History" />
                <Comp title="Help"/>
                <Comp title="Send Feedback" />
            </div>
            <div className="break-line"></div>
            <div className="foot">
                <p>About Press Copyright Contact Us Creators Advertise Developer</p>
                <p>Privacy & Policy</p>
                <p style={{marginTop:-10, marginBottom:25}}>Test New Feature</p>
                <p style={{fontWeight:'400'}}>&copy; 2019 Google, LLC</p>
            </div>
        </div>
    )
}

export default YouTubeSide;