import React from 'react';
import formatDate from '../../utils/formatDate';
import {
  SocialBtnsContainer,
  SocialLogo,
  SocialButton
} from '../../UI/SocialMedia';
import WikiLogo from '../../assets/wikipedia.svg';
import MoreLogo from '../../assets/more.svg';

const Item = ({ list }) => {
  return (
    <div className="timeline__box" key={list.id}>
      <div className="timeline__date">
        <span className="timeline__day">{formatDate(list.event_date_utc)}</span>
      </div>
      <div className="timeline__post">
        <h2 className="timeline__title">{list.title}</h2>
        <div className="timeline__content">{list.details}</div>
        <div className="timeline__link">
          <SocialBtnsContainer>
            <SocialButton href={list.links.wikipedia}>
              <SocialLogo src={WikiLogo} />
            </SocialButton>
            <SocialButton href={list.links.article}>
              <SocialLogo src={MoreLogo} />
            </SocialButton>
          </SocialBtnsContainer>
        </div>
      </div>
    </div>
  );
};

export default Item;
