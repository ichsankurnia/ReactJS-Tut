import React from 'react';

const Post = (props) => {
    return(
        <div className="post">
            <div className="id">
                <p>{props.getData.id}</p>
            </div>
            <div className="img-thumb">
                <img src={props.getData.img} alt="img-thumb" />
            </div>
            <div className="contents">
                <div className="contents-body">
                    <p className="title" onClick={() => props.goDetailPost(props.getData.id)}>{props.getData.title}</p>
                    <p className="desc">{props.getData.body}</p>
                </div>
                <div className="contents-btn">
                    <button className="btn-edit" onClick={() => props.update(props.getData)}>Edit</button>
                    <button className="btn-delete" onClick={() => props.remove(props.getData.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}
Post.defaultProps = {
    id: '1',
    img: require('./../../assets/img/react-thumbnail.png'),
    title: 'Hello World',
    desc: 'ini Description'
}

export default Post;