import React from 'react';

const PlanningApplicationDetails = ({ application }) => {
  if (!application) {
    return <div>No planning application selected</div>;
  }

  return (
    <div>
      <h3>{application.title}</h3>
      <p>{application.description}</p>
      <a href={application.link} target="_blank" rel="noopener noreferrer">View more details</a>
    </div>
  );
};

export default PlanningApplicationDetails;
