import React from "react";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { getTasks } from '../../actions'

const Week = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue;
`

const Day = styled.ul`
  padding: 15px;
  background: yellow;
`

class Planner extends React.Component {
  componentDidMount() {
    this.props.getTasks()
    
  }

  render() {
    return (
      <div>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Nome de Usuário"
            autoComplete="username"
            autoFocus
            component="h1"
            type="text"
            name="username"
          // value={this.state.username}
          // onChange={this.handleChange}
          />
        </form>
        <Week>
          <Day> Segunda
            <li>Segundou</li>
          </Day>
          <Day>
            Terça
            <li>Terçou</li>
          </Day>
          <Day> Quarta
            <li>Quartou</li>
          </Day>
          <Day> Quinta
            <li>Quintou</li>
          </Day>
          <Day> Sexta
            <li>Sextou</li>
          </Day>
          <Day> Sábado
            <li>Sabadou</li>
          </Day>
          <Day> Domingo
            <li>Domingou</li>
          </Day>
        </Week>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   allTasks: state.posts.allTasks,
//   selectIdTask: state.posts.selectIdTask,
// })

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(getTasks()),
});

export default connect(null, mapDispatchToProps)(Planner);
