import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

const ListContainer = styled.article`
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: #263238;
  max-width: 600px;
  width: 100%;
`;
const TodoItem = styled.section`
  background-color: ${(props) => (props.completed ? '#263238' : '#ffffff')};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: ${(props) => (props.completed ? '#fafafa' : '#263238')};
  font-size: 1.4rem;
  margin: 1rem;
  padding: 1rem;
  position: relative;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  &::after {
    ${(props) =>
      props.completed
        ? `border-bottom: 2px solid #fafafa;
          content: '';
          left: 1rem;
          position: absolute;
          top: 45%;
          width: 95%;`
        : ``}
  }
`;

class TodoList extends React.Component {
  handleToggle = (event, index) => {
    event.preventDefault();
    this.props.toggleTodo(index);
  };
  render() {
    return (
      <ListContainer>
        {this.props.todos.map((todo, index) => (
          <TodoItem
            key={index}
            onClick={(event) => this.handleToggle(event, index)}
            completed={todo.completed ? true : false}
          >
            {todo.value}
          </TodoItem>
        ))}
      </ListContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(
  mapStateToProps,
  { toggleTodo },
)(TodoList);
