import React, { useState, useContext } from "react";
import UserContext from '../Common/UserContext'
import {Card, Button} from 'react-bootstrap';

/* returns the card template of a job opening */
function JobCard({title, salary, equity, id, companyName}) {
  const { hasAppliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  React.useEffect(function updateAppliedStatus() {
    console.debug("JobCard useEffect updateAppliedStatus", "id=", id);

    setApplied(hasAppliedToJob(id));
  }, [id, hasAppliedToJob]);

  /** Apply for a job */
  async function handleApply(evt) {
    if (hasAppliedToJob(id)) return;
    applyToJob(id);
    setApplied(true);
  }

  return (
    <Card className="mt-3">
      <Card.Body>
      <Card.Title>{title}</Card.Title>
      <h6>{companyName}</h6>
      <h7>Salary: {salary}</h7><br/>
      <h7>Equity: {equity}</h7><br/><br/>
      <Button 
              className="btn btn-sm btn-primary"
              onClick={handleApply}
              disabled={applied}>
            {applied ? "Applied" : "Apply"}</Button>
        </Card.Body>
    </Card>
  );
}

export default JobCard;
