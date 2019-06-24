import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Form = styled.form`
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 0.2rem;
  display: flex;
  margin: 1rem;
  max-width: 600px;
  padding: 1rem;
  width: 100%;
`;
const InputField = styled.input`
  background-color: #ffffff;
  border: none;
  border-bottom: 1px solid #263238;
  color: #b0bec5;
  flex-grow: 5;
  font-size: 1.6rem;

  &:hover {
    color: #78909c;
  }
  &:focus {
    color: #263238;
  }
`;
const SubmitButton = styled.button`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: #263238;
  border: none;
  border-radius: 0 0.2rem 0.2rem 0;
  color: #ffffff;
  flex-grow: 0;
  font-size: 1.6rem;
  margin-left: 1rem;

  &:hover {
    background-color: #37474f;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
    };
  }
  addTodo = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: '' });
  };
  handleInput = (event) => {
    this.setState({ newTodo: event.target.value });
  };
  render() {
    return (
      <Form onSubmit={(event) => event.preventDefault()}>
        <InputField
          type='text'
          value={this.state.newTodo}
          placeholder='add new todo here...'
          onChange={this.handleInput}
        />
        <SubmitButton onClick={this.addTodo}>
          <FontAwesomeIcon icon={['fas', 'plus']} />
          Submit Task
        </SubmitButton>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.TodoList,
    newTodo: state.newTodo,
  };
};

export default connect(
  mapStateToProps,
  { addTodo },
)(TodoForm);
