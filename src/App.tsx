import React from 'react';
import "./App.css"

const App = () => {
    return (
        <div>
            <Header />
            < Technologies />

        </div>
    );

}

const Technologies =() => {
    return (
        <div className="App">
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    )
}
const Header = () => {
    return (
        <div>
        <a>Home</a>
        <a>News Feed</a>
        <a>Messages</a>
        </div>
    );
}


export default App;
