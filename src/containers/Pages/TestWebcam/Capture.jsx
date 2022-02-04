import React from 'react'
import Webcam from 'react-webcam';

export class Capture extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			imgSrc: null,
			showSS: false,
			hidden: true
		}
		this.webcamRef = React.createRef()
	}

	screenshot = () => {
		setTimeout(() => {
			this.setState({hidden: false}, () => {
				const imgSS = this.webcamRef.current.getScreenshot()																			// akses function pada component webcam
				console.log(imgSS)
				this.setState({imgSrc: imgSS, showSS: true, hidden: true})
			})
		}, 2000);
	}

	render(){
		const videoConstraints = {
			width: 1280,
			height: 720,
			facingMode: "user",
			deviceId: this.props.deviceId
		};

		return(
			<>
			<Webcam audio={false}
			ref={this.webcamRef}
			width={480}
			screenshotFormat="image/jpeg"
			screenshotQuality={1}
			videoConstraints={videoConstraints}
			hidden={this.state.hidden}
			/>
			<button onClick={this.screenshot}>Capture</button>
			{
				this.state.imgSrc && <img src={this.state.imgSrc} alt="test screenshot" />
			}
			</>
		)
	}
}

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