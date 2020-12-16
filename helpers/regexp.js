function httpValid(link) {
  const http = /^https?:\/\/(www\.)?[a-z0-9\-\.]+\.[a-z]{2,9}\/[a-z0-9\-\/\._~:\?#\[\]@!\$\&'\(\)\*\+\,\;\=]+$/i;
  return http.test(link);
}

module.exports = httpValid;