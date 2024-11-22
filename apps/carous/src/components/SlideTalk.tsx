import React from "react";
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
        className="text-base text-left mb-2 text-text-tertiary"
      >
        {paragraph}
      </p>
    ));
  }, [talk.description]);

  return (
    <div className="flex flex-col justify-center items-start p-8 grow">
      <h1 className="text-2xl self-center font-bold text-center text-primary mb-8">
        {talk.title}
      </h1>
      {description}
      <div className="flex flex-row justify-center items-center pt-8 py-3">
        <div className="flex-shrink-0 basis-20">
          <Image
            src={talk.speaker.profilePicture}
            alt={talk.speaker.name}
            className="w-20 h-20 rounded-full border-3 border-primary border-solid object-cover"
          />
        </div>
        <p
          className="text-base ml-4 text-text-tertiary"
        >
          <span className="font-bold"
          >
            {talk.speaker.name}
          </span>
          <br />
          <span className="italic">
            {talk.speaker.title}
          </span>
        </p>
      </div>
    </div>
  );
}
