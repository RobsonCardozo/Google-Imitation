const form = document.getElementById('search-form');
const input = document.getElementById('search-input');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const query = input.value.trim();
  if (query !== '') {
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.location.href = url;
  }
});
