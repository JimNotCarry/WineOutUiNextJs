import { wine } from '@/redux/diary/types';
import { useSelector } from 'react-redux';
import { State } from '@/redux/index';

export const getSettings = () => {
  return `
    {
        user(username: "DEFAULTUSERNAMEVALUE") {
            diarySettings {
                rating,
                tannins,
                acidity,
                body,
                comments
            }
        }
    }
    `;
};

export const test = () => {
  return 'Hej';
};

export const getUserinfo = `{
    GetAllUsers {
        username
        diaryPost {
            winename
            vintage
            percentage
            producer
            region
            district
            grape
            occasionDate
            tastingNotes {
                body
            }
        }
        roles {
            name
        }
    }}`;

export const getUsername = `
        {
            GetUser(username: "DEFAULTUSERNAMEVALUE") {
                username,
            }
        }
`;

export const testquery = `
{
    GetAllUsers {
        username
    }
}
`;

export const DIARYPOST = `
mutation DiaryPost($username: String, $diary: DiaryInput) {
    DiaryPost(username: "DEFAULTUSERNAMEVALUE", diary: $post) {
        username
    }
}`;

// export const PostDiary = () => {
//   return `{
//         mutation
//           DiaryPost(username: "DEFAULTUSERNAMEVALUE", diary: {
//               winename: ${state.wine}
//               vintage: ${state.vintage}
//               producer: ${state.producer}
//               percentage: ${state.percentage}
//               region: ${state.region}
//               district: ${state.district}
//               grape: ${state.grape}
//               occasionDate: "2022-03-19"
//               tastingNotes: {
//                   body: ${state.notes.body}
//               }
//           }) {
//               username
//           }
// }`;
// };
