import React, { useState } from 'react';
import './style.css'
import HomePage from './components/HomePage'
import Projects from './components/Projects'
function App() {
  const [tab, setTab] = useState('home')
  return (
    <div className="App">
      <nav>
        <ul id='nav'>
          <li class='nav-item' onClick={() => { setTab('home') }}> Home</li>
          <li class='nav-item' onClick={() => { setTab('projects') }}> Projects</li>
        </ul>
      </nav>
      <main class="my-container">
        {tab === 'home' ? <HomePage /> : <Projects />}
      </main>

    </div>
  );
}

export default App;
