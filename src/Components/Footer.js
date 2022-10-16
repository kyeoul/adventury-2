import React, { useRef, useState, useEffect } from 'react';


function Footer() {

    'use strict';

    const [input, setInput] = useState('');

    function changeInputHandler(event){
        setInput(event.target.value)
    }

    function clicked() {
        console.log("hi")
    }
    const engageDigitalClickToCallConfiguration = {
      domain: 'rtc.engagedigital.ai',
      callToNum: '902122',
      callType: 'video',
      consoleLog: true,
      joinWithVideoMuted: false,
    };

    const [remoteStream, _setRemoteStream] = useState(null);
    const remoteStreamRefApp = useRef(remoteStream);
    const [localStream, _setLocalStream] = useState(null);
    const [session, setSession] = useState(null);
    const [info, setInfo] = useState(null);
    const [callButtonStatus, setcallButtonStatus] = useState(false);
    const [engageDigital, setEngageDigital] = useState(null);
    const localStreamRefApp = useRef(localStream);
    const remoteStreamRef = useRef(null);
    const localStreamRef = useRef(null);
    let isEngageDigitalSdkLoaded = false;
    let engageDigitalClient;
    let engageDigitalSession;
  
    function connectToEngageDigital() {
      const engageDomain = engageDigitalClickToCallConfiguration.domain;
  
      if (isEngageDigitalSdkLoaded) {
        const userIdentity = Math.random().toString(36).substr(2, 7);
  
        const config = {
          log: {
            console: { enable: engageDigitalClickToCallConfiguration.consoleLog },
          },
          needRegistration: false,
        };
  
        engageDigitalClient = new window.EngageDigital.EngageDigitalClient(userIdentity, engageDomain, config);
        setEngageDigital(engageDigitalClient);
        registerForEngageDigitalClientEvents();
      } else {
        //Only load for the first time
        loadEngageDigitalSDK(engageDomain);
      }
    }
  
    function registerForEngageDigitalClientEvents() {
      /**
       * The Ready event is emitted when the SDK is initialized successfully and is ready
       * for operation. Once this event is received connect() API can be invoked.
       */
      engageDigitalClient.addEventHandler('ready', () => {
        engageDigitalClient.connect();
      });
  
      engageDigitalClient.addEventHandler('connecting', () => {
        updateStatus('Connecting to Engage Digital...');
      });
  
      /*
       * This event is being called when connectivity is established for the first time.
       */
      engageDigitalClient.addEventHandler('connected', () => {
        updateStatus('Connected to Engage Digital');
        setcallButtonStatus(true);
        console.log('Your Sip Identity : ' + engageDigitalClient.getUri().toString());
      });
  
      /*
       * This event is emitted when the Connection with the engage domain is lost
       */
      engageDigitalClient.addEventHandler('disconnected', () => {
        updateStatus('Disconnected from Engage Digital');
      });
  
      /*
       * This event is emitted when the sdk tries to re-connect when the already established connection is lost
       */
      engageDigitalClient.addEventHandler('reconnecting', () => {
        updateStatus('Re-connecting to Engage Digital');
      });
  
      /**
       * Fired when the connection is re-established
       */
      engageDigitalClient.addEventHandler('reconnected', () => {
        updateStatus('Re-connected to Engage Digital');
      });
  
      engageDigitalClient.addEventHandler('failed', (error) => {
        updateStatus(JSON.stringify(error));
      });
  
      engageDigitalClient.addEventHandler('errorinfo', ({ errorMessage }) => {
        updateStatus(errorMessage);
      });
  
      /**
       * For an incoming/outgoing call this event will be triggered.
       * This event will carry an instance of EngageDigitalSession, on that call related events can be registered.
       * If the new session is for an incoming call EngageDigitalSession's acceptCall() API can be invoked to accept the call.
       */
      engageDigitalClient.addEventHandler('newRTCSession', onNewEngageSession);
    }
  
    function loadEngageDigitalSDK(engageDomain) {
      updateStatus('Loading Engage Digital sdk...');
  
      const sdkScriptElement = document.createElement('script');
  
      sdkScriptElement.type = 'text/javascript';
      sdkScriptElement.async = false;
      sdkScriptElement.src = `https://${engageDomain}/engageDigital.js`;
  
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(sdkScriptElement, firstScriptTag);
  
      sdkScriptElement.addEventListener('load', () => {
        isEngageDigitalSdkLoaded = true;
        updateStatus('Engage Digital sdk is loaded');
        connectToEngageDigital();
      });
  
      sdkScriptElement.addEventListener('error', () => {
        updateStatus(`Failed to load ${sdkScriptElement.src}. Is the given domain proper?`);
      });
    }
  
    function makeCall() {
      const callToNum = engageDigitalClickToCallConfiguration.callToNum;
      try {
        if (engageDigital) {
          engageDigital.makeCall(callToNum, {
            mediaConstraints: {
              audio: true,
              video: engageDigitalClickToCallConfiguration.callType === 'video' ? true : false,
            },
            joinWithVideoMuted: engageDigitalClickToCallConfiguration.joinWithVideoMuted,
          });
        }
      } catch (error) {
        updateStatus('Call: Provide valid phone number');
        console.log('Error in make call : ' + error);
      }
    }
  
    function disconnectCall() {
      if (session) {
        session.disconnectCall();
        setSession(null);
      }
    }
  
    function onNewEngageSession(session) {
      console.log('Got newRTCSession event direction is %s', session.getDirection());
  
      engageDigitalSession = session;
      setSession(session);
  
      /**
       * Can play some media file indicates call is ringing state
       */
      engageDigitalSession.addEventHandler('ringing', () => {
        updateStatus('Call: Ringing');
      });
  
      engageDigitalSession.addEventHandler('connecting', () => {
        updateStatus('Call: connecting');
      });
      /**
       * Call is connected, can use this event to update the status of call in UI
       */
      engageDigitalSession.addEventHandler('connected', () => {
        updateStatus('Call: Connected');
      });
  
      /**
       * Call is disconnected by the client, can use this event to update the status of call in UI
       */
      engageDigitalSession.addEventHandler('disconnected', () => {
        updateStatus('Call: Disconnected');
  
        setSession(null);
      });
  
      /**
       * Call is disconnected by the remote user, can use this event to update the status of call in UI
       */
      engageDigitalSession.addEventHandler('peerdisconnected', () => {
        updateStatus('Call: Remote party disconnected');
  
        setSession(null);
      });
  
      /**
       * Call is failed
       */
      engageDigitalSession.addEventHandler('failed', () => {
        //Close the dialog if its an incoming call and user has not accepted the call.
        //var $confirm = $("#incomingCallDialog");
        //$confirm.modal("hide");
        setSession(null);
        updateStatus('Call: Failed');
      });
  
      /**
       * On this event attach your local stream to the local video element
       */
      engageDigitalSession.addEventHandler('localstream', ({ stream }) => {
        updateStatus('Call: Got Local video');
        if (localStreamRefApp.current) {
          setLocalStreamHandler(stream);
        } else {
          setLocalStream(stream);
        }
      });
  
      engageDigitalSession.addEventHandler('localvideoadded', ({ stream }) => {});
  
      engageDigitalSession.addEventHandler('localvideoremoved', ({ stream }) => {});
  
      /**
       * On this event attach remote party's stream to the remote video element
       */
      engageDigitalSession.addEventHandler('remotestream', ({ stream }) => {
        updateStatus('Call: Got Remote video');
        const remoteStreamRef = document.getElementById('remoteStream');
        if (remoteStreamRef) {
          if (remoteStreamRef.srcObject !== null) {
            if (stream.getVideoTracks().length > 0) {
              stream.getVideoTracks()[0].enabled = false;
            }
            remoteStreamRef.onloadedmetadata = function () {
              const tracks = stream.getVideoTracks();
  
              for (let i = 0; i < tracks.length; ++i) {
                tracks[i].enabled = true;
              }
            };
  
            remoteStreamRef.srcObject = null;
            remoteStreamRef.srcObject = stream;
          } else {
            setRemoteStream(stream);
          }
        } else {
          setRemoteStream(stream);
        }
      });
  
      engageDigitalSession.addEventHandler('remotevideoadded', ({ stream }) => {
        console.log('Got remotevideoadded event');
      });
  
      engageDigitalSession.addEventHandler('remotevideoremoved', ({ stream }) => {
        console.log('Got remotevideoremoved event');
      });
  
      /**
       * Its an Incoming call, need to invoke acceptCall API on EngageDigitalSession.
       */
      if (engageDigitalSession.getDirection() === 'incoming') {
        handleIncomingCall();
      }
    }
  
    function setLocalStreamHandler(stream) {
      const localStreamRef = document.getElementById('localStream');
      if (localStreamRef) {
        localStreamRef.srcObject = null;
        localStreamRef.srcObject = stream;
      } else {
        setLocalStream(stream);
      }
    }
  
    function setLocalStream(data) {
      localStreamRefApp.current = data;
      _setLocalStream(data);
    }
  
    function setRemoteStream(data) {
      remoteStreamRefApp.current = data;
      _setRemoteStream(data);
    }
  
    function updateStatus(status) {
      console.log(status);
      setInfo(status);
    }
  
    function handleIncomingCall() {
      updateStatus('Incoming call....');
    }
  
    useEffect(() => {
      if (localStreamRef && localStreamRef.current) {
        localStreamRef.current.srcObject = null;
        localStreamRef.current.srcObject = localStream;
      }
    }, [localStream]);
  
    useEffect(() => {
      if (remoteStreamRef && remoteStreamRef.current) {
        if (remoteStream) {
          if (remoteStream.getVideoTracks().length > 0) {
            console.log('remoteStream.getVideoTracks()', remoteStream.getVideoTracks());
            remoteStream.getVideoTracks()[0].enabled = false;
          }
          remoteStreamRef.current.onloadedmetadata = function () {
            const tracks = remoteStream.getVideoTracks();
  
            for (let i = 0; i < tracks.length; ++i) {
              tracks[i].enabled = true;
            }
          };
        }
        remoteStreamRef.current.srcObject = null;
        remoteStreamRef.current.srcObject = remoteStream;
      }
    }, [remoteStream]);
  
    useEffect(() => {
      connectToEngageDigital();
      //eslint-disable-next-line
    }, []);
    
    return (
      
        <div className="bg-gray-700 mt-16 p-8 w-full flex flex-col justify-center items-center text-white">
               <script src="src/Components/engage-digital-click-to-call-config.js"></script>
            <script src="src/Components/engage-digital-click-to-call.js"></script>

            <div className="flex flex-row justify-around items-center w-2/6">
                Privacy Policy
                <div className="dot"/>
                <button><a href="tel:7179877047">Call Us</a></button>
                <div className="dot"/>
                Help
                <div className="dot"/>
                Terms & Conditions
            </div>

            <div className="mt-8 text-xl">
                Contact Us:
            </div>

            {/* <div className=''>
                
            <a href="tel:2245395343">Voice Call</a>
            <a href="tel:2245395343">Video Call</a>
            </div> */}

<div>
            {session?._sessionState !== 'connected' || session === null ? (
              <button
                disabled={callButtonStatus === false}
                className="Call"
                onClick={() => makeCall()}
                color="primary"
                variant="contained"
                size="small"
              >
                Call
              </button>
            ) : (
              <button
                className="End Call"
                onClick={() => disconnectCall()}
                color="secondary"
                variant="contained"
                size="small"
              >
                EndCall
              </button>
            )}
          </div>

          <p>Local Video</p>
              <video
                ref={localStreamRef}
                id="localStream"
                style={{width: 300, height: 225, backgroundColor: "#FFFFFF"}}
                autoPlay
                loop
                muted
                playsInline
              ></video>

<p>Remote Video</p>
              <video
                ref={remoteStreamRef}
                id="remoteStream"
                style={{width: 300, height: 225, backgroundColor: "#FFFFFF"}}
                autoPlay
                loop
                playsInline
              ></video>

           

            
            {/* <div className="text-black mt-8">
                <textarea type="text" value={input} onChange={changeInputHandler} className="w-96 h-24"></textarea>
            </div> */}
       
      
            
        </div>

            
    )

}

export default Footer