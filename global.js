

var allowedDomains = ['direct-link.net/1062040/download-addon-minecraft', 'linkvertise.com', 'direct-link.net'];
var currentDomain = window.location.hostname;

if (allowedDomains.includes(currentDomain)) {
  document.getElementById("downloadContent").style.display = "flex";
  document.getElementById("mainContent").style.display = "none";
}
