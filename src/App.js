import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import NavBar from './components/NavBar';

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
              <Route exact path="/Calculator" element={<Calculator />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
