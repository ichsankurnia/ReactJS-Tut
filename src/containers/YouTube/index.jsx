import React from 'react';

import YouTubeComp from "./../../components/YouTubeComp/YouTubeComp";
import YouTubeNav from '../../components/YouTubeNav/YouTubeNav';
import YouTubeSide from '../../components/YouTubeSide/YouTubeSide';
import YouTubeHead from '../../components/YouTubeHead/YouTubeHead';
import YouTubePosts from '../../components/YouTubePosts/YouTubePosts';

class YouTube extends React.Component {
    breakLine = {
        width: 1200,
        height: 3,
        backgroundColor: 'grey'
    }

    title = {
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 30,
    }

    render() {
        return (
            <div>
                {/* <div style={{position:"fixed", top:50}}> */}
                <div>
                    <YouTubeNav />
                </div>
                <div style={{display:'flex'}}>
                    <YouTubeSide />
                    <div style={{marginLeft:30}}>
                        <YouTubeHead />
                        <p style={this.title}>Recommended</p>
                        <YouTubeComp />
                        <div style={this.breakLine}></div>
                        <p style={this.title}>The latest YouTube posts</p>
                        <YouTubePosts />
                        <p style={{paddingTop:25, paddingBottom:15, fontWeight:500, textAlign:'center'}}>More</p>
                        <div style={this.breakLine }></div>
                        <YouTubeComp />
                        <YouTubeComp />
                    </div>
                </div>
            </div>
        )
    }
}

export default YouTube;