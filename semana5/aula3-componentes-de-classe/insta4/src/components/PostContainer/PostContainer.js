import React from 'react';
import './PostContainer.css';
import FotoCurtida from '../FotoCurtida/FotoCurtida';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fotoCurtida: false,
            // imagemFotoCurtida: "src={require('../imgs/favorite-white.svg')}"
        }
    }

    render() {
        return (
            <div className="post-container">
                <div className="header-post">
                    <img id="profile" src="https://picsum.photos/id/947/80/80" />
                    <p>{this.props.usuario}</p>
                </div>

                <div className="post-image">
                    <img src="https://picsum.photos/id/947/300/250" />
                </div>

                <div className="footer-post">
                    <div className="curtidas">
                    <img id="curtir" src={require('../../imgs/favorite-white.svg')} />
                    <p>{ this.props.curtidas }</p>
                    {/* { FotoCurtida } */}
                    </div>

                    <div className="comentarios">
                    <img id="comentar" src={require('../../imgs/comment_icon.svg')} />
                    <p>{ this.props.comentarios }</p>
                    </div>
                </div>
            </div>
        )
    }
}



export default PostContainer;