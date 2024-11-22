import { ICommunityEvent } from "../types";

export interface SlideCommunityTalkProps {
  events: ICommunityEvent[];
}

export function SlideCommunityEvents(props: SlideCommunityTalkProps) {
  const { events } = props;
  return (
    <div className="flex flex-col p-8 grow">
      <div>
        <h1 className="text-2xl font-bold text-center text-primary">
          Upcoming Community Events
        </h1>
      </div>
      <div className="flex flex-col justify-center grow">
        {events.map((event) => (
          <div
            key={event.title}
            className="flex flex-row py-3"
          >
            <p className="text-base text-left">
              <span className="text-secondary">
                {event.date}
              </span>
              <br />
              <span className="font-bold font-[small-caps]">
                {event.title}
              </span>
              <br />
              <span className="text-text-tertiary">
                by {event.groupName}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
