import React from "react";

function Footer() {
  function sendEmail() {
    window.location = "mailto:info@eat-project.com";
  }
  return (
    <footer>
      <ul>
        <li onClick={sendEmail}>Contact</li>
        <li>About</li>
        <li>Privacy</li>
        <li>Cookies</li>
      </ul>
      <span>Copyright © {new Date().getFullYear()}, Eat-project</span>
    </footer>
  );
}

export default Footer;
