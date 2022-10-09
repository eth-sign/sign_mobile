import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
import { Label } from 'semantic-ui-react'
import Helmet from 'react-helmet'
import "./App.css";
import Fab from '@mui/material/Fab';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import Buttons from './components/Buttons'
import FoundView from './components/FoundView'
import NotFoundView from './components/NotFoundView'

let classifier;

function App() {
  const [result, setResult] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalNot, setShowModalNot] = useState(false);

  const [labelText, setLabelText] = useState();
  
  
  const videoRef = useRef();
  const textName=useRef();

  navigator.permissions.query({ name: 'camera' })
  .then((permissionObj) => {
    console.log(permissionObj.state);
    //permission = permissionObj.state;
  })
  .catch((error) => {
    console.log('Got error :', error);
  });


  const constraints = 
    {video:{ facingMode: "environment",width: 1280,
    height: 720, }, audio: false }
  ;

  useEffect(() => {
    classifier = ml5.imageClassifier("./assets/model.json", () => {
      console.log("loaded")

      navigator.mediaDevices
        .getUserMedia(constraints)

        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setLoaded(true);
        }); 

    });
  }, []);

  const closeModals=()=>{

    setShow(false)
    setShowModal(false)
    setShowModalNot(false)

  }

  const handleClick = (e) => {
    
    if (classifier && loaded) {
      classifier.classify(videoRef.current, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        setResult(results);
        console.log(results[0])
        
        
        if(results[0].confidence>=0.75&&results[0].label==="square"){
          setShowModal(true)
          setShow(false)
          setLabelText(results[0].label);
        }else if(results[0].confidence>=0.75&&results[0].label==="circle"){
          setShowModalNot(true)
          setShow(false)
          setLabelText(results[0].label);
        }else
          setLabelText("NA");
        

      });
    }

  }
  
  return (
    <div >
   
   <Helmet>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
  </Helmet>
    <video onClick={closeModals} style={{
          width: "100%",
          height:"100%"

        }}
         ref={videoRef} />
      
     
   <Label>
    <Label.Detail>{labelText}</Label.Detail>
   
  </Label>
  <Fab onClose={() => setShow(false)} onClick={()=>setShow(true)} style={{
         position: 'absolute',
         bottom: 28,
         left: 28,
        }} color="primary" aria-label="search">
  <LocationSearchingIcon />
  <Buttons handleClick={handleClick} show={show}/>
  <FoundView showModal={showModal}/>
  <NotFoundView showModalNot={showModalNot}/>
</Fab>
  
</div>
  );
}

export default App;
