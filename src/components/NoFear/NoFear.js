import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
            <h1>{noFearTitle}</h1>
            <div dangerouslySetInnerHTML={createMarkup()} className="noFearBodyDiv"></div>
        </div>
    )

}

// const NoFear = () => {
//     return (
//         <div>
//             <h1>No Fear Act Policy</h1>
//             <br/>
//             <p>Section 202(a) of the Notification and Federal Employee Antidiscrimination and Retaliation (No FEAR) Act, Pub. L. 107-74, Title I, General Provisions, Section 101(1), requires each federal agency to provide written notification of the rights and protections available to federal employees, former federal employees, and applicants for federal employment under federal antidiscrimination and whistleblower laws listed in the No FEAR Act. In support of this requirement, Secretary Napolitano issued a memo to all Department employees (PDF - 2 pages, 805 KB) reiterating the Department’s commitment to the No FEAR Act of 2002. In addition, the Secretary issued a new anti-discrimination policy statement.</p>
//             <br/>
//             <p>5 CFR 724.202 requires federal agencies to publish this notification in the Federal Register. This Federal Register publication specifically provides notice to the general public that individuals seeking to pursue an Equal Employment Opportunity (EEO) complaint must contact a Department of Homeland Security EEO counselor within 45 calendar days of the alleged discriminatory action, or, in the case of a personnel action, within 45 calendar days of the effective date of the action.</p>
//         </div>
//     );
// }

export default NoFear;