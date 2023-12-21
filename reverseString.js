// write a function that sanitizes HTML
// and returns a string that is safe
// to render to the DOM
// and does not contain any HTML tags
// or HTML attributes

function sanitizeHTML(str) {
  return str.replace(/<[^>]*>/g, '');}