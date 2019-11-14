import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NICCSPolicy() {

    const [niccs, setNiccs] = useState([]);
    const [niccsBody, setNiccsBody] = useState("");
  
    useEffect(() => {
      axios.get(`https://dev-irene-react.pantheonsite.io/jsonapi/node/page/188ae9f2-cc8e-47aa-b1d3-f12d100aa3db`)
      .then(res => {
        setNiccs(res.data.data.attributes);
        // console.log(res.data.data.attributes);
        setNiccsBody(res.data.data.attributes.body);
        // console.log(res.data.data.attributes.body.value);
      });
    }, []);

    return (
        <div className="niccsContentDiv">
            <div className="niccsBodyDiv">
                {niccsBody.value}
            </div>
            
        </div>
    )


}

// const NICCSPolicy = (props) => {
//     return (

//         <div>
//             <h1>NICCS Policy</h1>
//             <br/>
//             <h2>What is the NICCS Education and Training Catalog?</h2>
//             <br/>
//             <p>The NICCS Education and Training Catalog is a repository of cybersecurity courses offered throughout the United States.</p>
//             <ul>
//                 <li>The Training Catalog is a resource containing course information on more than 3,000 cybersecurity-related courses. The Catalog can be searched using a variety of criteria including: keyword, proficiency level, delivery method, and Workforce Framework Specialty Area.</li>
//                 <li>NICCS provides summary course information and links to the training provider offering that course. All course materials are maintained by the organization or academic institution providing the training. This means when you access the link you will leave the Department of Homeland Security site. </li>
//                 <li>The Training Catalog is updated as new course materials are received, vetted and added to the Catalog. The Training Catalog can be accessed at https://niccs.us-cert.gov/training/search.</li>
//             </ul>
//             <p>For information on the Privacy Policy, please visit the DHS Privacy Policy.</p>
//         </div>
//     );
// }

export default NICCSPolicy;