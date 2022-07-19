/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import {
  Answer,
  Content,
  ContentSubTitle,
  ContentTitle,
  Error,
  Jumbotron,
  Overlay,
  QAItem,
  QAList,
  QATitle,
  Question,
  QuestionContainer,
  QuestionSection,
  SubcribeBox,
  Wrapper
} from './WelcomePage.style';
import { useNavigate } from 'react-router-dom';
import BriefSection from '../../components/BriefSection/BriefSection';
import { briefData } from '../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { questionData } from '../../data';
import { Footer, Navbar, Button } from '../../components';

const WelcomePage = () => {
  const emailRef = useRef();
  const [questionRefs, setQuestionRefs] = useState([]);

  const [animate, setAnimate] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useClickOutside(emailRef, () => {
    if (emailRef.current.value === '') {
      setAnimate(false);
    }
  });

  const validateEmail = (value) => {
    if (value === '') {
      setError('Email is required');
    } else if (value.includes('@')) {
      const emailTail = value.substring(value.lastIndexOf('@') + 1);
      if (emailTail !== 'gmail.com') {
        setError('Please enter valid email!');
      } else {
        setError('');
      }
    } else {
      setError('');
    }
  };

  const handleShowAnswer = (index) => {
    if (questionRefs[index].current.classList.contains('show')) {
      questionRefs[index].current.classList.remove('show');
      questionRefs[index].current.classList.add('close');
    } else if (questionRefs[index].current.classList.contains('close')) {
      questionRefs[index].current.classList.remove('close');
      questionRefs[index].current.classList.add('show');
    }
  };

  const handleSignUp = () => {
    setTimeout(setLoading(true), 3000);
    if (email !== '' && error === '') {
      navigate('/signup');
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    setQuestionRefs((questionRefs) =>
      Array(questionData.length)
        .fill()
        .map((_, index) => {
          return questionRefs[index] || React.createRef();
        })
    );
  }, [questionData.length]);

  return (
    <>
      <Wrapper>
        <Navbar button={[{ name: 'Sign In', callBack: () => navigate('/login') }]} />
        <Jumbotron>
          <Overlay />
          <Content>
            <ContentTitle>Unlimited movies, TV shows, and more.</ContentTitle>
            <ContentSubTitle>Watch anywhere. Cancel anytime.</ContentSubTitle>
            <ContentSubTitle>
              Ready to watch? Enter your email to create or restart your membership.
            </ContentSubTitle>
            <SubcribeBox animate={animate}>
              <section>
                <input
                  type="text"
                  name="email"
                  id="emailTop"
                  ref={emailRef}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                  }}
                  onClick={() => {
                    setAnimate(true);
                  }}
                />
                <label htmlFor="emailTop">Email address</label>
              </section>
              <Button loading={loading} onClick={handleSignUp}>
                Get Started
              </Button>
            </SubcribeBox>
            <Error>{error}</Error>
          </Content>
        </Jumbotron>
        {briefData.map((item, index) => (
          <BriefSection key={index} {...item} />
        ))}
        <QuestionSection>
          <QuestionContainer>
            <QATitle>Frequently Asked Questions</QATitle>
            <QAList>
              {questionData.map((item, index) => {
                return (
                  <QAItem
                    key={index}
                    onClick={() => handleShowAnswer(index)}
                    ref={questionRefs[index]}
                    className="close">
                    <Question>
                      <span>{item.title}</span>
                      <FontAwesomeIcon icon={faPlus} />
                    </Question>
                    <Answer test={21}>
                      <span>{item.description}</span>
                    </Answer>
                  </QAItem>
                );
              })}
            </QAList>
          </QuestionContainer>
        </QuestionSection>

        <Footer />
      </Wrapper>
    </>
  );
};

export default WelcomePage;
