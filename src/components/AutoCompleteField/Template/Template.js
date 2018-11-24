import React from 'react';

const NO_RESULTS_FOUND_CLASS_NAME = 'widget__no-result-found';

const Template = ({ airportName, notResults }) => (
  <div className={`${notResults && NO_RESULTS_FOUND_CLASS_NAME} widget__airport'`}>
    <div>{airportName}</div>
  </div>
);

export default Template;
