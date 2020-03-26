import React from 'react';
import './launchdetail.scss';
import {
  SocialBtnsContainer,
  SocialLogo,
  SocialButton
} from '../../UI/SocialMedia';
import WikiLogo from '../../assets/wikipedia.svg';
import MoreLogo from '../../assets/more.svg';
import YoutubeLogo from '../../assets/youtube.svg';

const LaunchDetails = ({ data }) => {
  return (
    <>
      <div className="modalbody">
        <div className="modalbody__title">
          # {data.flight_number} {data.mission_name}
        </div>
        <div className="modalbody__subtitle">
          {' '}
          Launched in Year {data.launch_year}
        </div>
        <hr />
        <div className="modalbody__desc">{data.details}</div>
        <div className="modalbody__desc">
          {data.launch_success ? (
            <p className="textgreen">Mission was successful :)</p>
          ) : (
            <p className="textred">Mission Failed :(</p>
          )}
        </div>
        <div className="modalbody__subtitle">Rocket Details</div>
        <div className="row">
          <div className="row__title">Name</div>
          <div className="row__data">{data.rocket.rocket_name}</div>
        </div>
        {data.rocket.second_stage.payloads.map((payload, index) => {
          return (
            <div key={index}>
              <div className="row">
                <div className="row__title">Nationality</div>
                <div className="row__data">{payload.nationality}</div>
              </div>
              <div className="row">
                <div className="row__title">Manufacturer</div>
                <div className="row__data">{payload.manufacturer}</div>
              </div>
              <div className="row">
                <div className="row__title">Type</div>
                <div className="row__data">{payload.payload_type}</div>
              </div>
              <div className="row">
                <div className="row__title">Mass(in kgs)</div>
                <div className="row__data">{payload.payload_mass_kg}</div>
              </div>
              <div className="row">
                <div className="row__title">Customers</div>
                <div className="row__data">
                  {' '}
                  {payload.customers.map(customer => customer)}
                </div>
              </div>
            </div>
          );
        })}
        <div className="modalbody__subtitle">Launched at Site</div>
        <div className="modalbody__desc">{data.launch_site.site_name_long}</div>
        <div className="modalbody__link">
          <SocialBtnsContainer>
            <SocialButton href={data.links.video_link}>
              <SocialLogo src={YoutubeLogo} />
            </SocialButton>
            <SocialButton href={data.links.wikipedia}>
              <SocialLogo src={WikiLogo} />
            </SocialButton>
            <SocialButton href={data.links.article_link}>
              <SocialLogo src={MoreLogo} />
            </SocialButton>
          </SocialBtnsContainer>
        </div>
      </div>
    </>
  );
};

export default LaunchDetails;
