

var allowedDomains = ['https://doadfies.vercel.app/', 'direct-link.net/1062040/download-addon-minecraft', 'linkvertise.com', 'direct-link.net'];
var currentDomain = window.location.hostname;

if (allowedDomains.includes(currentDomain)) {
  document.getElementById("downloadContent").style.display = "flex";
  document.getElementById("mainContent").style.display = "none";
} else {
  document.getElementById("downloadContent").style.display = "none";
  document.getElementById("mainContent").style.display = "flex";
}
