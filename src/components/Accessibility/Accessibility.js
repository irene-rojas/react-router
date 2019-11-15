import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Accessibility() {

    const [accessBody, setAccessBody] = useState([]);
    const [accessTitle, setAccessTitle] = useState("");

    useEffect(() => {
        axios.get(`https://dev-irene-react.pantheonsite.io/jsonapi/node/page/3d023c31-4c00-4669-bb8f-52b05286b1d6`)
        .then(res => {
            setAccessTitle(res.data.data.attributes.title);
            setAccessBody(res.data.data.attributes.body);
            // console.log(res.data.data.attributes.body);
        })
    }, []);

    function createMarkup() {
      return {__html: `${accessBody.value}`}
    }

    return (
        <div className="accessContentDiv">
            <h1 className="titleDiv accessTitleDiv">{accessTitle}</h1>
            <div dangerouslySetInnerHTML={createMarkup()} className="accessBodyDiv"></div>
        </div>
    )
}

export default Accessibility;