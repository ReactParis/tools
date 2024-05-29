import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";

export function SlideContact() {
  const linkHost = "https://github.com/ReactParis";
  const linkTalk = "https://github.com/ReactParis/talks";

  return (
    <div
      className={flex({
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
        p: "8",
        grow: 1,
      })}
    >
      <h1
        className={css({
          fontSize: "24",
          fontWeight: "bold",
          textAlign: "center",
          color: "{colors.tertiary}",
        })}
      >
        Contact
      </h1>
      <div
        className={flex({
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
          grow: 1,
          gap: "32px", // Added space between elements
        })}
      >
        <p
          className={css({
            fontSize: "20px", // Made the font size bigger
            textAlign: "center",
            margin: "16px 0", // Added more space around the paragraph
          })}
        >
          Vous souhaitez hoster un meetup ?<br />
          <a href={linkHost} target="_blank" rel="noopener">
            {linkHost}
          </a>
          <br />
          <span className={css({ display: "block", my: "2" })}>
            {" "}
            ou proposer un talk ?
          </span>
          <br />
          <a href={linkTalk} target="_blank" rel="noopener">
            {linkTalk}
          </a>
        </p>
      </div>
    </div>
  );
}
