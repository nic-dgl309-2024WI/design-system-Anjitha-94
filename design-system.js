function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}




function copyCode() {
  const textarea = document.createElement('textarea');
  const code = document.querySelector('pre code').innerText;
  textarea.value = code;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  // Optional: Display a confirmation
  alert('Code copied to clipboard!');
}

