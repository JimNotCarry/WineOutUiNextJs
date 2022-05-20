import styled from 'styled-components';
import bottle from '@/public/images/bottlejpg.jpg';
import winebottle from '@/public/images/winebottle.png';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@/redux/index';

export const Teaser = styled.section`
  height: 55vh;
  margin-bottom: 1rem;
`;

export const TeaserBackground = styled.div`
  position: relative;
  background-image: url(${winebottle.src});
  height: 100%;
  width: 100%;
  border-radius: 1rem;
  display: flex;
  align-items: flex-start;
`;

export const TeaserContent = styled.div`
  padding: 1rem;
  position: relative;
  width: 100%;
  height: 25vh;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(255, 255, 255, 0)
  );
  color: white;
  background-size: cover;
  border-radius: 1rem 1rem 0rem 0rem;
`;

export const Winename = styled.span`
  text-align: center;

  p {
    margin: 0;
  }

  /* .teaser-occasion,
  .teaser-vintage {
    display: inline-block;
  } */

  /* .teaser-occasion::after {
    content: '/';
  } */
`;

export const VintageAndDate = styled.span`
  h3 {
    display: inline-block;
  }
`;
