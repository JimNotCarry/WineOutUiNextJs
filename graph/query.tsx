export const getSettings = () => {
  return `
    {
        user(username: "USERNAMEVALUE") {
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

export const getUserinfo = () => {
  return `
        {
            user(username: "USERNAMEVALUE") {
                username,
                firstname,
                lastname,
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

export const getUsername = () => {
  return `
        {
            user(username: "USERNAMEVALUE") {
                username,
            }
        }
        `;
};
