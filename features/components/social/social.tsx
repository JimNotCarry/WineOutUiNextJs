import heart from '@/public/images/heart.png';
import Image from 'next/image';
import UploadImage from '../upload-image';

const Social = () => {
  return (
    <>
      <div className="top-social">
        <div className="row">
          <label>
            location
            <input type="text"></input>
          </label>
          <label>
            company
            <textarea></textarea>
          </label>
        </div>
      </div>
      <div className="bottom-social">
        <div className="icon-section">
          <Image src={heart} alt="heart-icon"></Image>
        </div>
        <div className="images-section">
          <div className="row top">
            <div className="uploader-section col-4">
              <UploadImage id={0} />
            </div>
            <div className="uploader-section col-4">
              <UploadImage id={1} />
            </div>
          </div>
          <div className="row bottom">
            <div className="uploader-section col-4">
              <UploadImage id={2} />
            </div>
            <div className="uploader-section col-4">
              <UploadImage id={3} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Social;
