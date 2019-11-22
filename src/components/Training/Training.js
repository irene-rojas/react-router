import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Training.css";
 
function Training() {

   const [trainingBody, setTrainingBody] = useState([]);
   const [trainingTitle, setTrainingTitle] = useState("");

   useEffect(() => {
      axios.get(`https://dev-irene-react.pantheonsite.io/jsonapi/node/page/cd81c043-92ec-4f2e-926b-96a0bfcfeae7`)
      .then(res => {
        setTrainingTitle(res.data.data.attributes.title);
        // console.log(res.data.data.attributes);
        setTrainingBody(res.data.data.attributes.body);
      });
    }, []);

    function createMarkup() {
      return {__html: `${trainingBody.value}`}
    }

  return (
      <div className="trainingContentDiv">
        <div className="trainingDrupal">
          <h1 className="titleDiv trainingTitleDiv">{trainingTitle}</h1>
          <div dangerouslySetInnerHTML={createMarkup()} className="trainingBodyDiv"></div>
        </div>
      </div>
  )
}
 
export default Training;