import React from "react";
import { css } from "../../styled-system/css";
import { circle, flex } from "../../styled-system/patterns";
import { ITalk } from "../types";
import Image from "./Image";

export interface SlideTalkProps {
  talk: ITalk;
}
export default function SlideTalk(props: SlideTalkProps) {
  const { talk } = props;
  const description = React.useMemo(() => {
    const paragraphs = talk.description.split("\n\n");

    return paragraphs.map((paragraph, index) => (
      <p
        key={index}
        className={css({ fontSize: "16", textAlign: "left", mb: "2" })}
      >
        {paragraph}
      </p>
    ));
  }, [talk.description]);

  return (
    <div
      className={flex({
        direction: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        p: "8",
        grow: 1,
      })}
    >
      <h1
        className={css({
          fontSize: "24",
          alignSelf: "center",
          fontWeight: "bold",
          textAlign: "center",
          color: "{colors.textSecondary}",
          mb: "8",
        })}
      >
        {talk.title}
      </h1>
      {description}
      <div
        className={flex({
          direction: "row",
          justifyContent: "center",
          alignItems: "center",
          pt: "8",
          py: "3",
        })}
      >
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
        <p
          className={css({
            fontSize: "16",
            ml: "4",
            color: "{colors.textSecondary}",
          })}
        >
          <span
            className={css({
              fontWeight: "bold",
            })}
          >
            {talk.speaker.name}
          </span>
          <br />
          <span className={css({ fontStyle: "italic" })}>
            {talk.speaker.title}
          </span>
        </p>
      </div>
    </div>
  );
}
