import { ICommunityEvent, IEventDetails, ITalk } from "../types";

export interface IEvent {
  id: string;
  name: string;
  eventDetails: IEventDetails;
  communityMeetups: ICommunityEvent[];
  talks: ITalk[];
}

export interface EventFormProps {
  initialEvent?: IEvent;
  onSubmit: (event: IEvent) => void;
  onCancel: () => void;
}

