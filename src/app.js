import React from 'react';
import ReactDOM from 'react-dom';

// const template = (
//     <div>
//         <p>
//             testing
//         </p>
//     </div>
// );

const template = React.createElement('p', {}, 'testing 123');
ReactDOM.render(template, document.getElementById('app'));