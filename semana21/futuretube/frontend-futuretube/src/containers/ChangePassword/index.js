// import React, { useState } from 'react';
// import styled from 'styled-components';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import LogoImg from "../../img/logo-futuretube.png";
// import { Header } from "../Header";

// // import { ActionButton } from '../../components/ActionButton';
// // import { connect } from 'react-redux';
// // import { push } from 'connected-react-router';
// // import { routes } from '../Router/index';
// // import { goBack } from 'connected-react-router';
// // import { HeaderNav } from '../../components/HeaderNav';
// // import { signUp } from '../../actions/users'
// // import LogoImg from "../../img/logo-futuretube.png";

// const Root = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `

// const Banner = styled.div`
//   width: 40%;
//   display: flex;
//   justify-content: center;
//   margin-top: 78px;
//   margin-bottom: 60px;
//   img {
//     width: 100%
//   }
// `

// const FormContainer = styled.form`
//     width: 90%;
//     display: flex;
//     flex-direction: column;
// `

// function ChangePassword(props) {
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [confirm, setConfirm] = useState("")

//     const handleSubmit = (ev) => {
//         ev.preventDefault()
//         props.signUp({ name, email, password })
//     }

//     return (
//         <Root>
//             <Header
//             // onClick={() => props.goBack() }
//             />

//             <Banner>
//                 <img src={LogoImg} />
//             </Banner>
//             <Typography variant="h6" >
//                 Trocar senha
//             </Typography>

//             <FormContainer
//                 autoComplete="off"
//                 onSubmit={handleSubmit}
//             >
//                 <TextField
//                     name="password"
//                     type="password"
//                     label="Nova senha"
//                     placeholder="Mínimo 6 caracteres"
//                     value={password}
//                     onChange={(event) => setPassword(event.target.value)}
//                     margin="normal"
//                     variant="outlined"
//                     required
//                     pattern={props.pattern}
//                 />

//                 <TextField
//                     name="confirm"
//                     type="password"
//                     label="Confirmar"
//                     placeholder="Confirme a senha anterior"
//                     value={confirm}
//                     onChange={(event) => setConfirm(event.target.value)}
//                     margin="normal"
//                     variant="outlined"
//                     required
//                     pattern={props.pattern}
//                 />

//                 <Button
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     color="primary"
//                 >
//                     Trocar senha
//                 </Button>

//             </FormContainer>
//         </Root>
//     )
// }

// // const mapDispatchToProps = dispatch => ({
// //     goBack: () => dispatch(goBack()),
// //     signUp: (user) => dispatch(signUp(user))
// // })

// // export default connect(null, mapDispatchToProps)(ChangePassword)

// export default ChangePassword;