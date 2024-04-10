import * as React from 'react';
import { Html } from '@react-email/html';

export function EmailTemplate(props) {
  const { Subject, From, Message } = props;

  return (
    <Html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{Subject}</title>
      </head>  
      <body>
        <div style={{padding: "20px", fontFamily: "Arial"}} className="container">
          <div className="header">
            <p>From: {From}</p>
            <h1 style={{backgroundColor: "#d6d6d6", borderRadius: "30px", padding: "20px"}}>{Subject}</h1>
          </div>
          <div style={{backgroundColor: "#d6d6d6", padding: "20px"}} className="message">
            <p>{Message}</p>
          </div>
        </div>
      </body>
    </Html>
  );
}

export default EmailTemplate;
