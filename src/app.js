import React from 'react';
import ReactDOM from 'react-dom'
import Session from './components/Session';

function App() {
    {
        return (
            <div className="App">
                <Session />
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'))