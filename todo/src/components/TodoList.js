import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  ${(props) => (props.completed ? 'display: flex; justify-content: space-between;' : '')}

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  p {
    position: relative;
    ::after {
      ${(props) =>
        props.completed
          ? `border-bottom: 2px solid #fafafa;
            content: '';
            left: 0;
            position: absolute;
            bottom: 55%;
            width: 95%;`
          : ``}
    }
  }
`;
const DeleteButton = styled.button`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: #eceff1;
  border: none;
  border-radius: 0 0.2rem 0.2rem 0;
  color: #263238;
  flex-grow: 0;
  font-size: 1.6rem;
  margin-left: 1rem;

  &:hover {
    background-color: #fafafa;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

class TodoList extends React.Component {
  handleToggle = (event, index) => {
    event.preventDefault();
    this.props.toggleTodo(index);
  };
  handleDelete = (event, index) => {
    event.stopPropagation();
    event.preventDefault();
    this.props.deleteTodo(index);
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
            {todo.completed ? (
              <FontAwesomeIcon icon={['fas', 'check-circle']} />
            ) : (
              <FontAwesomeIcon icon={['fas', 'circle']} />
            )}
            <p>{todo.value}</p>
            {todo.completed ? (
              <DeleteButton onClick={(event) => this.handleDelete(event, index)}>
                <FontAwesomeIcon icon={['fas', 'trash-alt']} />
              </DeleteButton>
            ) : (
              ''
            )}
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
  { toggleTodo, deleteTodo },
)(TodoList);
