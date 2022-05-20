export type FriendState = {
  FriendRequest?: FriendRequest[];
  SendRequest?: Status;
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

export type Status = {
  status: String;
};
