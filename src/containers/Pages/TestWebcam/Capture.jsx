import React from 'react'
import Webcam from 'react-webcam';

const WebcamCapture = ({deviceId}) => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
  
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);
  
    return (
      <>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={{deviceId: deviceId}}
        />
        <button onClick={capture}>Capture photo</button>
        {imgSrc && (
          <img
            src={imgSrc} alt="test capture"
          />
        )}
      </>
    );
};

export default WebcamCapture

// const videoConstraints = {
//     width: 1280,
//     height: 720,
//     facingMode: "user"
//   };
   
//   const WebcamCapture = () => {
//     const webcamRef = React.useRef(null);
   
//     const capture = React.useCallback(
//       () => {
//         const imageSrc = webcamRef.current.getScreenshot();
//       },
//       [webcamRef]
//     );
   
//     return (
//       <>
//         <Webcam
//           audio={false}
//           height={720}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={1280}
//           videoConstraints={videoConstraints}
//         />
//         <button onClick={capture}>Capture photo</button>
//       </>
//     );
//   };