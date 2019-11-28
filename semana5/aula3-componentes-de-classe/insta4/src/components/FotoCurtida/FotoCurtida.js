import React from 'react';
import './FotoCurtida.css';

class FotoCurtida extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fotoCurtida: false,
            urlIconeCurtir: "require('../../imgs/favorite-white.svg')"
            
        }
    }

    aoClicarEmCurtir = () => {
        if (this.state.fotoCurtida) {
            this.setState(
                {
                    fotoCurtida: false,
                    urlIconeCurtir: "require('../../imgs/favorite-white.svg')"
                }
            )
        } else {
            this.setState(
                {
                    fotoCurtida: true,
                    urlIconeCurtir: "require('../../imgs/favorite.svg')",
                }
            )
        }
    }

    render() {
        return (
            <div className="curtidas">
                <img id="curtir" onClick={this.aoClicarEmCurtir} src={this.state.urlIconeCurtir} />
            </div>
        )
    }
}

export default FotoCurtida