import React, { Component } from 'react';
import { Spring, config, Transition } from 'react-spring'
import logo from './logo.svg';
import './App.css';

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
          <div
            style={{
              position: "relative",
              width: "500px"
            }}
          >
            <div
              id={"left"}
              style={{
                position: "absolute",
                left: 0,
                borderRadius: "10%",
                border: "1px solid grey",
                width: "100px",
                height: "100px"
              }}
            />

            
            <Spring from={{ left: from }} to={{ left: to }} config={config.slow}>
              {(props) => {
                return (
                  <div
                    id={"left"}
                    onClick={this.handleOnClick}
                    style={{
                      ...props,
                      position: "absolute",
                      backgroundColor: "red",
                      border: "1px solid grey",
                      borderRadius: "10%",
                      opacity: 0.4,
                      width: "100px",
                      height: "100px",
                      zIndex: 1
                    }}
                  />
                )
              }}
            </Spring>
            
            <div
              id={"right"}
              style={{
                position: "absolute",
                left: 400,
                borderRadius: "10%",
                border: "1px solid grey",
                width: "100px",
                height: "100px"
              }}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
