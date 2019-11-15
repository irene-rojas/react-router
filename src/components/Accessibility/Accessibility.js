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
            <h1>{accessTitle}</h1>
            <div dangerouslySetInnerHTML={createMarkup()} className="accessBodyDiv"></div>
        </div>
    )
}


// const Accessibility = () => {
//     return (
//         <div className="accessDiv">
//             <h1>Accessibility</h1>
//             <br/>
//             <p>NICCS and the Department of Homel​and Security are committed to providing accessible Information and Communication Technology (ICT) to individuals with disabilities, including members of the public and federal employees, by meeting or exceeding the requirements of Section 508 of the Rehabilitation Act of 1973. In addition, the Department is also committed to ensuring accessibility of our buildings and facilities as required by the Architectural Barriers Act, 42 U.S.C. 4151 through 4157.</p>
//             <br/>
//             <p>Section 508 of the Rehabilitation Act of 1973, as amended (29 U.S.C. 794d)</p>
//             <br/>
//             <p>Section 508 of the Rehabilitation Act of 1973, as amended requires agencies, during the procurement, development, maintenance, or use of ICT, to ensure that individuals with disabilities have access to and use of ICT information and data comparable to the access and use afforded to individuals without disabilities (i.e., “ICT accessibility"), unless an undue burden would be imposed on the agency. More information on Section 508 and the technical standards can be found at www.section508.gov.</p>
//         </div>
//     )
// }

export default Accessibility;