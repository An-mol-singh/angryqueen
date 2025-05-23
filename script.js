const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureBtn = document.getElementById('captureBtn');
const selfie = document.getElementById('selfie');
const report = document.getElementById('report');

// Access the device camera and stream to video element
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    console.error("Error accessing camera: ", err);
  });

captureBtn.addEventListener('click', () => {
  // Draw the video frame to the canvas
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);

  // Convert the canvas to a data URL and display the image
  const dataURL = canvas.toDataURL('image/png');
  selfie.src = dataURL;

  // Generate a simple anger report
  const angerLevel = Math.floor(Math.random() * 100) + 1; // Random anger level
  report.textContent = `Anger Level: ${angerLevel}%`;
});
