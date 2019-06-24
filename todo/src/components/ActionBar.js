import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { clearAll, clearCompleted } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ActionWrapper = styled.div`
  max-width: 600px;
  width: 100%;
`;
const ActionButton = styled.button`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: ${(props) => (props.warning ? '#B71C1C' : '#263238')};
  border: none;
  border-radius: 0 0.2rem 0.2rem 0;
  color: ${(props) => (props.warning ? '#212121' : '#ffffff')};
  flex-grow: 0;
  font-size: 1.6rem;
  margin: 1rem;
  padding: 1rem;

  &:hover {
    background-color: ${(props) => (props.warning ? '#C62828' : '#37474f')};
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

class ActionBar extends React.Component {
  handleClearAll = (event) => {
    event.preventDefault();
    this.props.clearAll();
  };
  handleClearCompleted = (event) => {
    event.preventDefault();
    this.props.clearCompleted();
  };
  render() {
    return (
      <ActionWrapper>
        <ActionButton warning onClick={this.handleClearAll}>
          <FontAwesomeIcon icon={['fas', 'ban']} />
          Clear All
        </ActionButton>
        <ActionButton onClick={this.handleClearCompleted}>
          <FontAwesomeIcon icon={['fas', 'trash-alt']} />
          Clear Completed
        </ActionButton>
      </ActionWrapper>
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
  { clearAll, clearCompleted },
)(ActionBar);
