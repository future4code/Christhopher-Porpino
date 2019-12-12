import React from 'react';
// import styled from 'styled-components';
// import axios from 'axios';

class SelectOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Atividades que podem ajudar a desenvolver algumas áreas da sua vida</h2>
                </div>
                
                <div>
                    <label>
                        Escolha qual área quer melhorar: 
                    </label>
                <select>
                    <option>Educação</option> 
                    <option>Relacionamentos</option>
                    <option>Profissional</option>
                    <option>Social</option>
                    <option>Habilidades Pessoais</option> {/*ex: cooking, */}
                     <option>Cultura</option> {/*ex: music, */}
                </select>

                <button>Descobrir</button>

                </div>
            </div>
        )
    }
}


export default SelectOptions