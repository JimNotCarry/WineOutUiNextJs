import React, { useRef, useState } from 'react';
import Confirm from '@/public/images/confirm.png';
import Cross from '@/public/images/cross.png';
import Social from '@/public/images/social.png';
import Hamburger from '@/public/images/hamburger.png';
import { useEffect } from 'react';
import Circle from '@/public/images/circle-256.png';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { State } from '@/redux/index';

const Footer = props => {
  const [state, setState] = useState(false);
  const router = useRouter();

  const test = useSelector((state: State) => state.wine);

  const node: any = useRef();

  const handleClick = e => {
    if (!node.current.contains(e.target)) {
      setState(false);
    }
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div className="footer">
      <div
        className="col-2 social-background"
        ref={node}
        onClick={() => setState(!state)}
      >
        <button
          type="button"
          className={'social-icon ' + (state ? 'active' : '')}
        >
          <Image src={Hamburger} alt="social-button"></Image>
        </button>
      </div>
      <div className="menu-buttons">
        <button
          className={'menu-item num1 ' + (state ? 'active' : '')}
          type="button"
        >
          <div className="cross-icon">
            <Image src={Cross} alt="cancel-button"></Image>
          </div>
        </button>
        <button
          type="button"
          className={'menu-item num2 ' + (state ? 'active' : '')}
          onClick={() => router.push(props.routing)}
        >
          <div className="social-icon">
            <Image
              alt="social-button"
              src={props.data.src.src}
              width={props.data.width}
              height={props.data.height}
            ></Image>
          </div>
        </button>
        <button
          className={'menu-item num3 ' + (state ? 'active' : '')}
          type="submit"
        >
          POST
        </button>
      </div>
    </div>
  );
};

export default Footer;
