import React from "react";

function App() {
  return (
    <div>
      <nav class="nav">
        <input id="menu" type="checkbox" />
        <label for="menu">Menu</label>
        <ul class="menu">
          <li>
            <a href="#0">
              <span>About</span>
              <i class="fas fa-address-card" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#0">
              <span>Projects</span>
              <i class="fas fa-tasks" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#0">
              <span>Clients</span>
              <i class="fas fa-users" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#0">
              <span>Contact</span>
              <i class="fas fa-envelope-open-text" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>

      <p class="notification">Click on the Menu</p>
      <footer class="page-footer">
        <span>made by </span>
        <a href="/" target="_blank">
          <img width="24" height="24" src="/" alt="George Martsoukos logo" />
        </a>
      </footer>
    </div>
  );
}

export default App;
