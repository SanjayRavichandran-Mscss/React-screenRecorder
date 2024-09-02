import { useRef } from 'react';

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
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <video
        id="video"
        ref={videoElement}
        autoPlay
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          objectFit: 'cover',
        }}
      ></video>
      <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
        <button onClick={startCapture} style={{ backgroundColor: 'orange', color: 'white', marginRight: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Start Capture
        </button>
        <button onClick={stopCapture} style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Stop Capture
        </button>
      </div>
    </div>
  );
};

export default ScreenRecorder;
