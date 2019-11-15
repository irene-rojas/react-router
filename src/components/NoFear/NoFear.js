import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./NoFear.css";

function NoFear() {

    const [noFearBody, setNoFearBody] = useState([]);
    const [noFearTitle, setNoFearTitle] = useState("");

    useEffect(() => {
        axios.get(`https://dev-irene-react.pantheonsite.io/jsonapi/node/page/63730352-7b79-465b-a66d-8ab542b802c9`)
        .then(res => {
            setNoFearTitle(res.data.data.attributes.title);
            setNoFearBody(res.data.data.attributes.body);
            // console.log(res.data.data.attributes.body);
        });
    }, []);
    
    function createMarkup() {
        return {__html: `${noFearBody.value}`}
    }

    return (
        <div className="noFearContentDiv">
            <div className="noFearDrupal">
                <h1 className="titleDiv noFearTitleDiv">{noFearTitle}</h1>
                <div dangerouslySetInnerHTML={createMarkup()} className="noFearBodyDiv"></div>
            </div>

        </div>
    )

}

export default NoFear;