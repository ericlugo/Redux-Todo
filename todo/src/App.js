import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  border: 1px solid red;
  padding: 1rem;
  text-align: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <AppContainer>Content Goes in Here</AppContainer>;
  }
}

export default App;
