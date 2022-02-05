import React from 'react';
import Image from 'next/image';
import grape from '@/public/images/grape.png';

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <div className="base-background">
          <div className="square">
            <div className="grape">
              <Image src={grape} alt="winebottle" />
            </div>
          </div>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
