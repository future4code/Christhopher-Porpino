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

// const Button = styled.button`
//     margin: 20px;
// `

class Etapa2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Form>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>

                <InputContainer>
                    <p>5. Qual curso?</p>
                    <input type="text"></input>
                </InputContainer>

                <InputContainer>
                    <p>6. Qual a unidade de ensino?</p>
                    <input type="text"></input>
                </InputContainer>

            </Form>
        )
    }
}

export default Etapa2;