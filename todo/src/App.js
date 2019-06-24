import React from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { connect } from 'react-redux';
import { pullDataset, LOCAL_STORAGE } from './actions';
import {
  faBackspace,
  faBan,
  faCheckCircle,
  faCircle,
  faPlus,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import ActionBar from './components/ActionBar';

library.add(
  faBackspace,
  faBan,
  faCheckCircle,
  faCircle,
  faPlus,
  faTrashAlt,
  // more icons can go here as needed
);

const AppContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
const Header = styled.header`
  background-color: #263238;
  color: #eceff1;
  width: 100%;
  padding: 1.5rem 0 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  h1 {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
  }
`;

class App extends React.Component {
  componentDidMount() {
    if (!localStorage.getItem(LOCAL_STORAGE)) {
      localStorage.setItem(LOCAL_STORAGE, JSON.stringify([]));
    } else {
      const localDataset = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
      this.props.pullDataset(localDataset);
    }
  }
  render() {
    return (
      <>
        <Header>
          <h1>TODO LIST REDUX</h1>
        </Header>
        <AppContainer>
          <TodoForm />
          <TodoList />
          <ActionBar />
        </AppContainer>
      </>
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
  { pullDataset },
)(App);
