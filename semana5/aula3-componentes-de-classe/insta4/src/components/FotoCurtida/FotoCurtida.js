import React from 'react';

class FotoCurtida extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fotoCurtida: true
        }
    }

    render() {
        return (
            <div>
                <img id="curtir" src={require('../../imgs/favorite-white.svg')} />
                <p>{this.props.curtidas}</p>
            </div>
        )
    }
}

export default FotoCurtida