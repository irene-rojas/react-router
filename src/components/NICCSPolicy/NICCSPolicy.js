import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./NICCSPolicy.css";

function NICCSPolicy() {

    const [niccsTitle, setNiccsTitle] = useState([]);
    const [niccsBody, setNiccsBody] = useState("");
  
    useEffect(() => {
      axios.get(`https://dev-irene-react.pantheonsite.io/jsonapi/node/page/188ae9f2-cc8e-47aa-b1d3-f12d100aa3db`)
      .then(res => {
        setNiccsTitle(res.data.data.attributes.title);
        // console.log(res.data.data.attributes);
        setNiccsBody(res.data.data.attributes.body);
        // console.log(res.data.data.attributes.body.value);
      });
    }, []);

    function createMarkup() {
      return {__html: `${niccsBody.value}`}
    }

    return (
        <div className="niccsContentDiv">
          <div className="niccsPolicyDrupal">
            <h1 className="titleDiv niccsTitleDiv">{niccsTitle}</h1>
            <div dangerouslySetInnerHTML={createMarkup()} className="niccsBodyDiv"></div>
          </div>

        </div>
    )

}

export default NICCSPolicy;