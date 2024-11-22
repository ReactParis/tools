import { ContactInfo } from '../types';

interface SlideContactProps {
  contact: ContactInfo;
}

export function SlideContact({ contact }: SlideContactProps) {
  return (
    <div className="flex flex-col justify-center items-center p-8 grow">
      <h1 className="text-2xl font-bold text-center text-primary">
        {contact.title}
      </h1>
      <div className="flex flex-col justify-center items-center grow gap-8">
        <p className="text-xl text-center my-4">
          {contact.hostText}<br />
          <a href={contact.hostLink} target="_blank" rel="noopener" className="text-primary hover:text-secondary transition-colors">
            {contact.hostLink}
          </a>
          <br />
          <span className="block my-2">
            {contact.talkText}
          </span>
          <br />
          <a href={contact.talkLink} target="_blank" rel="noopener" className="text-primary hover:text-secondary transition-colors">
            {contact.talkLink}
          </a>
        </p>
      </div>
    </div>
  );
}
