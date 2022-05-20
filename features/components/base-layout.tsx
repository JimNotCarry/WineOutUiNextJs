import React from 'react';
import Image from 'next/image';
import grape from '@/public/images/grape.png';
import Footer from '@/components/diary/footer/diary-footer';

const Layout = ({ children }) => {
  return (
    <>
      <div className="container fill">
        <div className="base-background">
          <div className="square">
            <div className="grape">
              <Image src={grape} alt="grape" />
            </div>
          </div>
        </div>
        <div className="frame">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
