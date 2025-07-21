function FindProxyForURL(url, host) {
  // Define the domains that should go through the proxy
  var proxyDomains = [
    "youtube.com", // YouTube base domain (and subdomains via shExpMatch below)
    "googleapis.com", // Google APIs base domain (and subdomains via shExpMatch below)
    "suggestqueries.google.com" // Google APIs base domain (and subdomains via shExpMatch below)
  ];

  // Loop through the proxy domains
  for (var i = 0; i < proxyDomains.length; i++) {
    if (shExpMatch(host, "*." + proxyDomains[i]) || shExpMatch(host, proxyDomains[i])) {
      return "PROXY 192.168.3.9:8080";
    }
  }

  // If none of the above domains match, go direct
  return "DIRECT";
}
