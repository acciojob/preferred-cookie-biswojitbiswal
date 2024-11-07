//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  // Utility function to set a cookie
  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
  }

  // Utility function to get a cookie value
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) return value;
    }
    return null;
  }

  // Apply preferences from cookies if they exist
  function applyPreferences() {
    const fontSize = getCookie("fontsize");
    const fontColor = getCookie("fontcolor");

    if (fontSize) document.body.style.fontSize = `${fontSize}px`;
    if (fontColor) document.body.style.color = fontColor;
  }

  // Save preferences on form submission
  document.getElementById("customizationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get font size and color values from inputs
    const fontSize = document.getElementById("fontsize").value;
    const fontColor = document.getElementById("fontcolor").value;

    // Save preferences in cookies for 30 days
    setCookie("fontsize", fontSize, 30);
    setCookie("fontcolor", fontColor, 30);

    // Apply preferences immediately
    document.body.style.fontSize = `${fontSize}px`;
    document.body.style.color = fontColor;
  });

  // Apply saved preferences when the page loads
  applyPreferences();
});
