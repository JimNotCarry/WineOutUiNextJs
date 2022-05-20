import { DiaryType } from '@/redux/diary/types';
import Image from 'next/image';
import bottle from '@/public/images/bottlejpg.jpg';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@/redux/index';
import { getImage, SetTeaser } from '@/redux/diary/reducer';
import {
  Teaser,
  TeaserBackground,
  TeaserContent,
  VintageAndDate,
  Winename,
} from '../styles/styled/posts-styles';

export const Post = (post: { post: DiaryType }) => {
  const dispatch = useDispatch();
  const occasiondate = useSelector(
    (state: State) => state.wine.Teaser.Post.occasionDate
  );

  return (
    <>
      <Teaser
        onClick={async () => {
          dispatch(getImage(post.post.occasionDate.toString()));
          dispatch(SetTeaser(post.post));
        }}
      >
        <Link href="/diary" passHref>
          <TeaserBackground>
            <TeaserContent>
              <Winename>
                <p className="teaser-occasion">{post.post.occasionDate}</p>
                <h4 className="teaser-winename">{post.post.winename}</h4>
                <h4 className="teaser-vintage">{post.post.vintage}</h4>
              </Winename>
            </TeaserContent>
          </TeaserBackground>
        </Link>
      </Teaser>
    </>
  );
};
