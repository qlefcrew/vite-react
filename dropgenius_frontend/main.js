document.getElementById('subscribe-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  console.log(`Subscribed with: ${email}`);
  // Replace with actual API call if needed
  // fetch('XXXXXX', { method: 'POST', body: JSON.stringify({ email }) })
});

document.getElementById('upload-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const file = document.getElementById('track-file').files[0];
  const status = document.getElementById('upload-status');

  if (!file) {
    status.textContent = 'Please select a file.';
    return;
  }

  status.textContent = 'Uploading...';

  // Simulated delay — replace with actual upload API (e.g., fetch('XXXXXX', ...))
  setTimeout(() => {
    console.log('Uploaded:', file.name);
    status.textContent = 'Upload successful ✅';
  }, 1500);
});
