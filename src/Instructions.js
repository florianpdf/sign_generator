import React from 'react';

class Instructions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Email Signature configurator</h1>
        <hr />
        <p>for Wild Code School Employees</p>

        <h3>Steps</h3>
        <ol>
          <li>Complete the form bellow with your data and see the result in the preview box.</li>
          <li>Use the "Copy Result" button for get signature in your clipboard.</li>
          <li><b>Gmail:</b> Go on your gmail <i>settings > signature section</i> then past the signature in the
            textarea and don't forget to click on save button at the bottom of the page.</li>
          <li><b>Hubspot:</b> Go on your hubspot <i>Profile & Preferences > Basic info > CRM Communication section</i>
            then click on Edit Signature button. After the modal has appeared, select HTML in the top right corner of
            the modal. To finish past the signature in the textarea and don't forget to click on save button.</li>
          <li><span role="img" aria-label="enjoy">🎉</span></li>
        </ol>
      </React.Fragment>
    )
  }
}

export default Instructions