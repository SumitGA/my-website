import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as moment from 'moment';

const Experience = () => {
  const [experience, setExperience] = useState({ experience: [] });

  useEffect(() => {
    const fetchExperience = async () => {
      const request = await axios({
        method: 'get',
        url: 'https://secret-shore-21192.herokuapp.com/api/experiences',
      });
      setExperience(request.data);
    };

    fetchExperience();
  }, []);

  const dateFormatter = (dateString) => {
    return moment(`${dateString}`).format('LL');
  };

  const renderExperience = (experienceLists) => {
    return (
      <section>
        { experienceLists.map((item) => {
          return (
            <div key={+new Date() + Math.random()} className="resume-item mb-4">
              <span className="date">
                <span className="icon-calendar" />
                {`${dateFormatter(item.startDate)} - ${dateFormatter(item.endDate)}`}
              </span>
              <h3>{item.designation}</h3>
              <p>
                {item.jobDescription}
              </p>
              <span className="school">{item.companyName}</span>
            </div>
          );
        })
        }
      </section>
    );
  };

  return (
    <div className="col-md-6">
      <h2 className="mb-5">Experience</h2>
      { Object.entries(experience).length > 0 && experience.data ?
        renderExperience(experience.data)
        : ''
      }
    </div>
  );
};

export default Experience;
