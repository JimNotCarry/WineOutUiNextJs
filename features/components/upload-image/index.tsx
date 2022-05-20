import React, { useState } from 'react';
import Image from 'next/image';
import plus from '@/public/images/plus.png';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@/redux/index';
import winebottle from '@/public/images/winebottle.png';
import { getImage, SetImages } from '@/redux/diary/reducer';
import { ImagesUpload } from '@/redux/diary/types';
import axios from 'axios';

const UploadImage = props => {
  const dispatch = useDispatch();

  //const imageid = props.id;

  const image = useSelector((state: State) => state.wine.Images.main);

  const [ImgTrigger, setImgTrigger] = useState(false);

  const [ImgPreview, setImgPreview] = useState(true);

  const PreviewImg = (e: any) => {
    //const data = [...imageUrl];
    const file = e.target.files;

    dispatch(
      SetImages({
        main: {
          url: URL.createObjectURL(file[0]),
          file: file[0],
        },
      })
    );

    // const formdata = new FormData();

    // formdata.append('file', file[0]);

    // axios.post('http://localhost:8080/api/images/postImages', formdata, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });

    // console.log(file);

    // const data: ImagesUpload = {
    //   url: file,
    // };

    //dispatch(SetImages(data));
  };

  // const GetImage = () => {
  //   axios.get('http://localhost:8080/api/images/getFile').then(res => {
  //     setImageUrl('data:image/png;base64,' + res.data);
  //   });
  // };

  return (
    <>
      <div className={'image-uploader ' + (image.url ? 'hide' : '')}>
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
        className={'image-preview ' + (image.url ? '' : 'hide')}
        onClick={() => setImgTrigger(!ImgTrigger)}
      >
        <img src={image.url} className="image" alt="preview-image" />
      </div>
      <div
        className={'image-enlarged ' + (ImgTrigger ? '' : 'hide')}
        onClick={() => setImgTrigger(!ImgTrigger)}
      >
        <img
          src={image.url}
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
