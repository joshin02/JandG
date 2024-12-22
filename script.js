fetch('content/header.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('site-title').textContent = data.site_title;
    document.getElementById('phone-number').textContent = `Phone: ${data.phone_number}`;
    document.getElementById('hours').textContent = `Hours: ${data.hours}`;
  })
  .catch(error => console.error('Error loading content:', error));