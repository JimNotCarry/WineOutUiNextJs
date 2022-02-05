import React, { useState } from 'react';
import Image from 'next/image';
import plus from '@/public/images/plus.png';

const UploadImage = () => {
  const [imageUrl, setImageUrl] = useState(String);
  const [ImgTrigger, setImgTrigger] = useState(false);

  console.log(ImgTrigger);

  const PreviewImg = (e: any) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setImageUrl(file);
  };

  return (
    <>
      <div className={'image-uploader ' + (imageUrl ? 'hide' : '')}>
        <label className="file-upload" htmlFor="file-upload">
          <div className="file-icon">
            <Image className="file-icon" alt="plus-icon" src={plus} />
          </div>
          <input
            id="file-upload"
            name="image"
            type="file"
            onChange={e => PreviewImg(e)}
          />
        </label>
      </div>
      <div
        className={'image-preview ' + (imageUrl ? '' : 'hide')}
        onClick={() => setImgTrigger(!ImgTrigger)}
      >
        <img src={imageUrl} className="image" alt="preview-image" />
      </div>
      <div
        className={'image-enlarged ' + (ImgTrigger ? '' : 'hide')}
        onClick={() => setImgTrigger(!ImgTrigger)}
      >
        <img
          src={imageUrl}
          className={'image ' + (ImgTrigger ? 'active' : '')}
          alt="enlarged-preview-image"
        />
      </div>
      {/* <div className={'image-uploader' + (imageUrl) ? 'hide' : ''}>
                <label className='file-upload' htmlFor='file-upload'>
                    <img className='file-icon' src={plus}/>
                </label>
                <input id='file-upload' name='image' type='file' onChange={(e) => PreviewImg(e)}/>
        </div> */}
      {/* <div className={'image-preview' + (imageUrl) ? '' : 'hide'}>
                <img src={imageUrl}/>
        </div> */}
    </>
  );
};

export default UploadImage;
