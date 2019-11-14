import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FOIAPolicy() {

    const [foia, setFoia] = useState([]);

    useEffect(() => {
        axios.get(`https://dev-irene-react.pantheonsite.io/jsonapi/node/page/c2dd11bf-0e87-4eda-8b2d-9af3a8998b6f`)
        .then(res => {
          // setNiccs(res.data.data.attributes);
          // console.log(res.data.data.attributes);
          setFoia(res.data.data.attributes.body);
          // console.log(res.data.data.attributes.body.value);
        });
      }, []);

    return (
        <div className="foiaContentDiv">
            <div className="foiaBodyDiv">
                {foia.value}
            </div>
        </div>
    )


}

export default FOIAPolicy;