import React from 'react';
import { Container, LeftSide, RightSide, SubTitle, Title, Wrapper } from './BriefSection.style';

const BriefSection = ({ title, description, image, video, reverse }) => {
  return (
    <Wrapper>
      <Container reverse={reverse}>
        <LeftSide>
          <Title>{title}</Title>
          <SubTitle>{description}</SubTitle>
        </LeftSide>
        <RightSide>
          {image && <img src={image} />}
          {video && (
            <video autoPlay muted loop>
              <source src={video} />
            </video>
          )}
        </RightSide>
      </Container>
    </Wrapper>
  );
};

export default BriefSection;
