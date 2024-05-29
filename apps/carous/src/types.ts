export interface ISpeaker {
  name: string;
  profilePicture: string;
  title: string;
}

export interface ITalk {
  speaker: ISpeaker;
  title: string;
  description: string;
}

export interface IEventDetails {
  title: string;
  date: string;
  host: string;
  address: string;
}

export interface ICommunityEvent {
  groupName: string;
  title: string;
  date: string;
}
