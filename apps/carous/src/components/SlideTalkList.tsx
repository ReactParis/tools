import { IEventDetails, ITalk } from "../types";
import Image from "./Image";

export interface SlideTalkListProps {
  talks: ITalk[];
  eventDetails: IEventDetails;
  info?: boolean;
}
export default function SlideTalkList(props: SlideTalkListProps) {
  const { eventDetails, info = true } = props;
  const title = eventDetails.title;
  return (
    <div className="flex flex-col p-8 grow">
      {info && (
        <div>
          <h1 className="text-2xl font-bold text-center text-primary">
            {title}
          </h1>
          {/* date */}
          <p className="text-base text-center text-secondary">
            {eventDetails.date}
            <br />
            <strong>{eventDetails.host}</strong>,&nbsp;
            <span>{eventDetails.address}</span>
          </p>
        </div>
      )}
      <div
        className="flex flex-col justify-center grow"
      >
        {props.talks.map((talk) => (
          <div
            key={talk.title}
            className="flex flex-row py-3"
          >
            {/* Speaker image */}
            <div className="flex-shrink-0 basis-20">
              <Image
                src={talk.speaker.profilePicture}
                alt={talk.speaker.name}
                className="w-20 h-20 rounded-full border-3 border-primary border-solid object-cover"
              />
            </div>

            <div
              className="grow-[5] flex flex-col pl-4 self-center text-left"
            >
              <div className="text-base font-bold text-primary">
                {talk.title}
              </div>
              <div
                className="text-sm"
              >
                <span className="italic text-text-tertiary">by</span>&nbsp;
                <span className="font-bold text-primary">
                  {talk.speaker.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
