import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <NavBar />

        <div className="App">
          <div className="main-holder">
            <Routes>
              <Route path="Calculator" element={<Calculator />} />
            </Routes>
            <Routes>
              <Route path="Home" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="Quote" element={<Quote />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
