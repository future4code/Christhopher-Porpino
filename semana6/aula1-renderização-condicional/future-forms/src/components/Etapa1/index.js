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

const Button = styled.button`
    margin: 20px;
`

class Etapa1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Form>

                <h3>ETAPA 1 - DADOS GERAIS</h3>

                <InputContainer>
                    <p>1. Qual seu nome?</p>
                    <input type="text"></input>
                </InputContainer>

                <InputContainer>
                    <p>2. Qual sua idade?</p>
                    <input type="number"></input>
                </InputContainer>

                <InputContainer>
                    <p>3. Qual seu e-mail?</p>
                    <input type="email"></input>
                </InputContainer>

                <InputContainer>
                    <p>4. Qual a sua escolaridade?</p>
                    <select>
                        <option value="Ensino médio incompleto">
                            Ensino médio incompleto
                        </option>
                        <option value="Ensino médio completo">
                            Ensino médio completo
                        </option>
                        <option value="Ensino superior incompleto">
                            Ensino superior incompleto
                        </option>
                        <option value="Ensino superior completo">
                            Ensino superior completo
                        </option>
                    </select>
                </InputContainer>

                {/* <Button>Próxima etapa</Button> */}

            </Form>
        )
    }

}

export default Etapa1