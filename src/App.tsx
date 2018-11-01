import React, { Component } from 'react';
import { Spring, config, Transition } from 'react-spring'
import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';

const Box = styled.div`
  position: absolute;
  border-radius: 10%;
  border: 1px solid grey;
  width: 100px;
  height: 100px;
`;

const MovingBox = styled(Box)`
  background-color: red;
  opacity: 0.4;
  z-index: 1;

  &:hover:after {
      content: 'click me'
    }
  }
`;

const Instruction = styled.label`
  padding-bottom: 50px;
`;

interface State {
  from: number;
  to: number;
}

class App extends Component<{}, State> {

  state: State = {
    from: 0,
    to: 0
  };

  handleOnClick = (event: React.MouseEvent) => {
    const {from, to} = this.state;
    if (to == 0) {
      this.setState({from: 0, to: 400});
    } else {
      this.setState({from: 400, to: 0});
    }
  };

  render() {
    const {from, to} = this.state;
    return (
      <div className="App">
        <header className="App-header">
        <Instruction>
          Click on the div to let it move from one box to another.
        </Instruction>
          <div
            style={{
              position: "relative",
              width: "500px"
            }}
          >
            <Box style={{left: 0}} />

            
            <Spring from={{ left: from }} to={{ left: to }} config={config.slow}>
              {(props) => {
                return (
                  <MovingBox
                    style={{...props}}
                    onClick={this.handleOnClick}
                  />
                )
              }}
            </Spring>
            
            <Box style={{left: 400}} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
