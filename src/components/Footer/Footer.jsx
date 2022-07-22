import React from 'react';
import { footerData } from '../../data';
import { Container, FooterLinkItem, FooterLinks, Link, Wrapper } from './Footer.style';

const Footer = ({ bgColor }) => {
  return (
    <Wrapper bgColor={bgColor}>
      <Container>
        <div style={{ marginBottom: '1.6rem' }}>
          <Link href="#" style={{ fontSize: '1rem' }}>
            Questions? Contact us
          </Link>
        </div>
        <FooterLinks>
          {footerData.map((item) => (
            <FooterLinkItem key={item.id}>
              <Link href={item.link}>{item.name}</Link>
            </FooterLinkItem>
          ))}
        </FooterLinks>
      </Container>
    </Wrapper>
  );
};

export default Footer;
