

var allowedDomains = ['direct-link.net/1062040/download-addon-minecraft', 'linkvertise.com', 'direct-link.net'];
var currentDomain = window.location.hostname;

if (allowedDomains.includes(currentDomain)) {
  document.getElementById("downloadContent").style.display = "flex";
} else {
  document.getElementById("downloadContent").style.display = "none";
  var paragraph = document.createElement("pr");
  pr.textContent ="Use Linkvertise Or Directlink For Download";
  var bodyElement = document.body;
  bodyElement.appendChild(pr);
}