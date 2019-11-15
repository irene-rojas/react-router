import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./FOIAPolicy.css"

function FOIAPolicy() {

    const [foiaBody, setFoiaBody] = useState([]);
    const [foiaTitle, setFoiaTitle] = useState("");

    useEffect(() => {
        axios.get(`https://dev-irene-react.pantheonsite.io/jsonapi/node/page/c2dd11bf-0e87-4eda-8b2d-9af3a8998b6f`)
        .then(res => {
          setFoiaTitle(res.data.data.attributes.title);
          // console.log(res.data.data.attributes);
          setFoiaBody(res.data.data.attributes.body);
        });
      }, []);

      function createMarkup() {
        return {__html: `${foiaBody.value}`}
      }

    return (
        <div className="foiaContentDiv">
          <div className="foiaDrupal">
            <h1 className="titleDiv foiaTitleDiv">{foiaTitle}</h1>
            <div dangerouslySetInnerHTML={createMarkup()} className="foiaBodyDiv"></div>
          </div>
        </div>
    )

}

export default FOIAPolicy;