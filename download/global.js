

var allowedDomains = ['doadfies.vercel.app/download/main.html', 'linkgenie.me/s/KOryH', 'sub2unlock.com', 'linkgenie.me', 'direct-link.net/1062040/download-addon-minecraft', 'linkvertise.com', 'direct-link.net'];
var notallowedDomains = ['doadfies.vercel.app'];
var currentDomain = window.location.hostname;

if (allowedDomains.includes(currentDomain)) {
  document.getElementById("downloadContent").style.display = "flex";
} else if (notallowedDomains.includes(currentDomain)){
  document.getElementById("downloadContent").style.display = "none";
  var pr = document.createElement("pr");
  pr.textContent ="Use Linkvertise Or Directlink For Download";
  var bodyElement = document.body;
  bodyElement.appendChild(pr);
}
