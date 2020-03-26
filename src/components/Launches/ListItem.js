import React from 'react';
import ViewLogo from '../../assets/view.svg';

const ListItem = ({ item, showDetails }) => {
  return (
    <div className="list__bitem">
      <div className="list__bitem--cell list__item--width30">
        <div>
          {item.mission_name} --- {item.flight_number}
        </div>
      </div>
      <div className="list__bitem--cell list__item--width25">
        {item.rocket.second_stage.payloads[0].nationality}
      </div>
      <div className="list__bitem--cell list__item--width25">
        {item.rocket.second_stage.payloads[0].manufacturer}{' '}
      </div>
      <div className="list__bitem--cell list__item--width15">
        {item.rocket.second_stage.payloads[0].payload_type}{' '}
      </div>
      <div className="list__bitem--cell list__bitem--cell-hidden list__item--width5">
        <div onClick={() => showDetails(item.flight_number)}>
          {' '}
          <img className="list__bitem--img" src={ViewLogo} alt="view more" />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
