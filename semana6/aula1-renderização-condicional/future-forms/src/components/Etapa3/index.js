import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;   
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
`

class Etapa3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Form>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>

                <InputContainer>
                    <p>5. Por que você não terminou um curso de graduação?</p>
                    <input type="text"></input>
                </InputContainer>

                <InputContainer>
                    <p>6. Você fez algum curso complementar?</p>
                    <select>
                        <option value="Nenhum">
                            Nenhum
                        </option>
                        <option value="Curso técnico">
                            Curso técnico
                        </option>
                        <option value="Curso de inglês">
                            Curso de inglês
                        </option>
                        ></select>
                </InputContainer>

            </Form>
        )
    }
}

export default Etapa3;