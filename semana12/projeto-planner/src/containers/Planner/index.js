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
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      day: ""
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { text, title } = this.state
    this.props.createPost(text, title)
    this.setState({ text: "", day: "" })
    console.log()
  }


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
            label="Nome da Tarefa"
            autoComplete="text"
            autoFocus
            component="h1"
            type="text"
            name="text"
          value={this.state.text}
          onChange={this.handleChange}
          />
        </form>

        {this.props.allTasks.map((task) =>
          <Week>
            <Day> Segunda
              <li>
                {console.log(task)}
                {task.text}
              </li>
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
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allTasks: state.tasks.allTasks,
  // selectIdTask: state.posts.selectIdTask,
})

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(getTasks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
