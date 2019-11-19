import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FedVTE() {

    const [fedVteBody, setFedVteBody] = useState([]);
    const [fedVteTitle, setFedVteTitle] = useState("");

    useEffect(() => {
        axios.get(`https://dev-irene-react.pantheonsite.io/jsonapi/node/page/dbf3da29-601f-4ef5-9f31-8bdac303f7c2`)
        .then(res => {
            setFedVteTitle(res.data.data.attributes.title);
            console.log(res.data.data.attributes.title);
            setFedVteTitle(res.data.data.attributes.body);
        })
    }, []);

    function createMarkup() {
        return {__html: `${fedVteBody.value}`}
      }

    return (
        <div className="fedVteContentDiv">
            <div className="fedVteDrupal">
                <h1 className="titleDiv">{fedVteTitle}</h1>
                <div dangerouslySetInnerHTML={createMarkup()} className="fedVteBodyDiv"></div>
            </div>

        </div>
    )
}


export default FedVTE;