import React from 'react';
import styled from 'styled-components';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

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

const App = () => {
  return (
    <>
      <Header>
        <h1>TODO LIST REDUX</h1>
      </Header>
      <AppContainer>
        <TodoForm />
        <TodoList />
      </AppContainer>
    </>
  );
};

export default App;
