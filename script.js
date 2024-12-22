fetch('content/header.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('site-title').textContent = data.site_title;
  })
  .catch(error => console.error('Error loading content:', error));