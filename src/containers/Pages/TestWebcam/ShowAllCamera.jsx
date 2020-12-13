import React, { Fragment } from 'react'
import Webcam from 'react-webcam';

// const ShowAllCamera = () => {
//     const [deviceId, setDeviceId] = React.useState({});
//     const [devices, setDevices] = React.useState([]);
   
//     const handleDevices = React.useCallback(
//       mediaDevices =>
//         setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
//       [setDevices]
//     );
   
//     React.useEffect(
//       () => {
//         navigator.mediaDevices.enumerateDevices().then(handleDevices);
//       },
//       [handleDevices]
//     );
   
//     return (
//       <>
//         {devices.map((device, key) => (
//             <div key={key}>
//               <Webcam audio={false} videoConstraints={{ deviceId: device.deviceId }} />
//               {device.label} {`Device ${key + 1}`}
//             </div>
   
//           ))}
//       </>
//     );
// };


class ShowAllCamera extends React.Component {
    state = {
        listDevices: null,
        listCameras: null,
        cameraId: null
    }
    
    async componentDidMount(){
        const devices = await this.handleGetAllDevice()
        this.setState({listDevices: devices})
        this.setState({listCameras: devices.filter((device) => device.kind === "videoinput")})
    }
    
    handleGetAllDevice = async () => {
        const allDevice = await navigator.mediaDevices.enumerateDevices()
        return allDevice
    }
    
    render(){
        return (
            <Fragment>
                <h1>All Devices</h1>
                {this.state.listDevices && this.state.listDevices.map((device, key) => {
                    return (
                        <div key={key}>
                            {/* {key} */}
                            <p>kind : {device.kind} || deviceId : {device.deviceId} || groupId : {device.groupId} || label : {device.label}</p>
                            <br></br>
                        </div>
                    )
                })}
                <br></br>
                <h1>All Cameras</h1>
                <button onClick={() => this.setState({cameraId: 0})}>Show All</button>
                <br></br><br></br>
                {this.state.listCameras && this.state.listCameras.map((camera, key) => (
                        <div key={key}>
                            <p>ID : {camera.deviceId} || Label : {camera.label} </p>
                            <button onClick={() => this.setState({cameraId: camera.deviceId})}>Show Only {camera.label}</button>
                        </div>
                    ))
                }
                {this.state.cameraId !== null?
                    this.state.cameraId === 0?
                        this.state.listCameras.map((camera, key) => (
                            <Webcam key={key} audio={false} videoConstraints={{deviceId: camera.deviceId}} />
                        ))
                    :
                    <Webcam audio={false} videoConstraints={{deviceId: this.state.cameraId}} />
                : null
            }
            </Fragment>
        )
    }
}

export default ShowAllCamera