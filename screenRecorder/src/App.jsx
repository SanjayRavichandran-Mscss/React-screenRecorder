import  { useRef } from 'react';

const ScreenRecorder = () => {
  const videoElement = useRef(null);

  const displayMediaOptions = {
    video: {
      cursor: 'always',
    },
    audio: false,
  };

  const startCapture = async () => {
    try {
      videoElement.current.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    } catch (err) {
      console.error("Error: " + err);
    }
  };

  const stopCapture = () => {
    let tracks = videoElement.current.srcObject.getTracks();
    tracks.forEach(track => track.stop());
    videoElement.current.srcObject = null;
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Screen Capture Application using Screen Capture API</h1>
      <button onClick={startCapture}>Start Capture</button>
      <button onClick={stopCapture}>Stop Capture</button>
      <video id="video" ref={videoElement} autoPlay style={{ border: '2px solid #8b8585', width: '98%', maxWidth: '860px' }}></video>
    </div>
  );
};

export default ScreenRecorder;
