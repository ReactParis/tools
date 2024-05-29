import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";
import { ICommunityEvent } from "../types";

export interface SlideCommunityTalkProps {
  events: ICommunityEvent[];
}

export function SlideCommunityEvents(props: SlideCommunityTalkProps) {
  const { events } = props;
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
          Upcoming Community Events
        </h1>
      </div>
      <div
        className={flex({
          direction: "column",
          justifyContent: "center",
          grow: 1,
        })}
      >
        {events.map((event) => (
          <div
            key={event.title}
            className={flex({
              direction: "row",
              py: "3",
            })}
          >
            <p
              className={css({
                fontSize: "16",
                textAlign: "left",
              })}
            >
              <span
                className={css({
                  opacity: 0.9,
                })}
              >
                {event.date}
              </span>
              <br />
              <span
                className={css({
                  fontVariant: "small-caps",
                  fontWeight: "bold",
                })}
              >
                {event.title}
              </span>
              <br />
              <span className={css({ color: "{colors.tertiary}" })}>
                by {event.groupName}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
