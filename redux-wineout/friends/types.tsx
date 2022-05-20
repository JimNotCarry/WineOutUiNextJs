export type FriendState = {
  FriendRequest?: FriendRequest[];
  FriendList?: Friend[];
};

export type FriendRequest = {
  requester: string;
  firstname: string;
  lastname: string;
};

export type Friend = {
  friend: String;
};
