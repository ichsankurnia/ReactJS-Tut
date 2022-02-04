import React, { Fragment, useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import WebcamCapture, { Capture } from './Capture'
import ShowAllCamera from './ShowAllCamera'

const TestWebcam = () => {
    const [option, setOption] = useState(0)
    const [deviceId, setDeviceId] = useState(0)

    useEffect(() => {

        async function fetchCamera(){
            try {
                const devices = await navigator.mediaDevices.enumerateDevices()
                const cameras = devices.filter((device) => device.kind === "videoinput")
                console.log(cameras)
                const pcCamera = cameras.filter((camera) => camera.label.includes('EasyCamera'))
                setDeviceId(pcCamera[0].deviceId)
            } catch (error) {
                console.log(error)
            }
        }

        fetchCamera()
    }, [])// if just [], useEffect will run only one time
    //if you pass a value to array, like this [data] then every time this value changes (useEffect re-RUN)

    return (
        <Fragment>
            <p>Press Any Button to Show Camera</p>
            <button onClick={() => setOption(1)}>Default Camera</button>
            <button onClick={() => setOption(2)}>Show All Camera</button>
            <button onClick={() => setOption(3)}>Capture (Hooks)</button>
            <button onClick={() => setOption(4)}>Capture (class)</button>
            {option === 1 && (
                <Webcam videoConstraints={{deviceId: deviceId}} />
                )}
            {option === 2 && (
                <ShowAllCamera />
                )}
            {option === 3 && (
                <WebcamCapture deviceId={deviceId} />
                )}
            { 
                option === 4 && <Capture deviceId={deviceId} />
            }
            <button onClick={() => setOption(0)}>Stop Camera</button>
        </Fragment>
    )
}

export default TestWebcam