import Image from 'next/image';
import Login from './Login/index';
import grape from '@/public/images/grape.png';

export default function App() {
  return (
    <div className="container">
      <div className="base-background">
        <div className="square">
          <div className="grape">
            <Image src={grape} alt="winebottle" />
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
