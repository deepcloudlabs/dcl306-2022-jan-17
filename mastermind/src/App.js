import React from "react";

// Stateful Component
class App extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {
            secret : this.createSecret(3),
            level: 3,
            tries: 0,
            guess: 123,
            moves: [],
            counter: 60
        };
    }

    createSecret = (level) => {
        let numbers=[this.createDigit(1,9)];
        while (numbers.length < level){
            let digit = this.createDigit(0,9);
            if (!numbers.includes(digit))
                numbers.push(digit);
        }
        return numbers.reduce((number,digit) => 10*number+digit, 0);
    }

    createDigit = (min, max) => {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    render = () => {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Game Console</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label className="form-label" htmlFor="gamelevel">Game Level:</label>
                            <span id="gamelevel"
                                  className="badge alert-info">{this.state.level}</span>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="tries">Tries:</label>
                            <span id="tries"
                                  className="badge alert-primary">{this.state.tries}</span>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="counter">Counter:</label>
                            <span id="counter"
                                  className="badge alert-danger">{this.state.counter}</span>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="guess">Guess:</label>
                            <div className="input-group mb-3">
                            <input type="text"
                                   id="counter"
                                   value={this.state.guess}
                                  className="form-control"></input>
                                <div className="input-group-append">
                                    <button className="btn btn-success">Play</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
