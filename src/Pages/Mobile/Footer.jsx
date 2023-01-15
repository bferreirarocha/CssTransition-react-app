import React from "react";

function Footer() {
  return (
    <footer>
      <ul>
        <li>Contact</li>
        <li>About</li>
        <li>
          {" "}
          <span>Copyright © {new Date().getFullYear()}, Eat-project</span>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
