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

export interface ContactInfo {
  title: string;
  hostText: string;
  hostLink: string;
  talkText: string;
  talkLink: string;
}

export interface IEventDetails {
  title: string;
  date: string;
  host: string;
  address: string;
  contact?: ContactInfo;
}

export interface ICommunityEvent {
  groupName: string;
  title: string;
  date: string;
}
