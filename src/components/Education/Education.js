import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import "./Education.css";
 
function Education() {

   const [eduBody, setEduBody] = useState([]);
   const [eduTitle, setEduTitle] = useState("");

   useEffect(() => {
      axios.get(`https://dev-irene-react.pantheonsite.io/jsonapi/node/page/83c680b1-b54a-45ca-833d-ac81934dcb08`)
      .then(res => {
        // console.log(res.data.data.attributes);
        setEduTitle(res.data.data.attributes.title);
        setEduBody(res.data.data.attributes.body.value);
      });
    }, []);

    function createMarkup() {
      return {__html: `${eduBody}`}
    }

  return (
      <div className="eduContentDiv">

        <h1 className="titleDiv eduTitleDiv">{eduTitle}</h1>

        <div dangerouslySetInnerHTML={createMarkup()} className="eduBodyDiv"></div>

      </div>
  )
}
 
export default Education;