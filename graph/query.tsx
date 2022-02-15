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

export const getUserinfo = (): any => {
  return `{
            UserData: GetUser(username: "DEFAULTUSERNAMEVALUE") {
                firstname,
            }
        }`;
};

export const getUsername = () => {
  return `
        {
            user(username: "DEFAULTUSERNAMEVALUE") {
                username,
            }
        }
        `;
};
