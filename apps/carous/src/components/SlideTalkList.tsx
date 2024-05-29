import { IEventDetails, ITalk } from "../types";
import { css } from "../../styled-system/css";
import { circle, flex } from "../../styled-system/patterns";
import Image from "./Image";

export interface SlideTalkListProps {
  talks: ITalk[];
  eventDetails: IEventDetails;
}
export default function SlideTalkList(props: SlideTalkListProps) {
  const { eventDetails } = props;
  const { title } = eventDetails;
  return (
    <div className={flex({ direction: "column", p: "8", grow: 1 })}>
      <div>
        <h1
          className={css({
            fontSize: "24",
            fontWeight: "bold",
            textAlign: "center",
            color: "{colors.tertiary}",
          })}
        >
          {title}
        </h1>
        {/* date */}
        <p className={css({ fontSize: "16", textAlign: "center" })}>
          {eventDetails.date}
          <br />
          <strong>{eventDetails.host}</strong>,&nbsp;
          <span>{eventDetails.address}</span>
        </p>
      </div>
      <div
        className={flex({
          direction: "column",
          justifyContent: "center",
          grow: 1,
        })}
      >
        {props.talks.map((talk) => (
          <div
            key={talk.title}
            className={flex({
              direction: "row",
              py: "3",
            })}
          >
            {/* Speaker image */}
            <div className={flex({ shrink: 0, basis: "20" })}>
              <Image
                src={talk.speaker.profilePicture}
                alt={talk.speaker.name}
                className={circle({
                  size: "20",
                  borderWidth: "3",
                  borderColor: "secondary",
                  borderStyle: "solid",
                })}
              />
            </div>

            <div
              className={flex({
                grow: 5,
                direction: "column",
                pl: "4",
                alignSelf: "center",
                textAlign: "left",
              })}
            >
              <div className={css({ fontSize: "16", fontWeight: "bold" })}>
                {talk.title}
              </div>
              <div
                className={css({
                  fontSize: "14",
                  color: "{colors.textSecondary}",
                })}
              >
                <span className={css({ fontStyle: "italic" })}>by</span>&nbsp;
                <span className={css({ fontWeight: "bold" })}>
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
