import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import CarouselCanvas from "./Carousel";
import SlideTalkList from "./SlideTalkList";
import SlideTalk from "./SlideTalk";
import { SlideCommunityEvents } from "./SlideCommunityEvents";
import { SlideContact } from "./SlideContact";
import { ITalk, IEventDetails, ICommunityEvent } from "../types";

interface SlidesPreviewProps {
  talks: ITalk[];
  eventDetails: IEventDetails;
  communityMeetups: ICommunityEvent[];
}

async function generatePDF(elements: HTMLElement[]) {
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: [1080, 1080],
  });

  for (const element of elements) {
    const canvas = await html2canvas(element, { scale: 4, useCORS: true });
    const imgData = canvas.toDataURL("image/png");

    pdf.addImage(
      imgData,
      "PNG",
      0,
      -1,
      element.offsetWidth * 2 + 2,
      element.offsetHeight * 2 + 2,
      undefined,
      "FAST",
    );

    if (element !== elements[elements.length - 1]) {
      pdf.addPage();
    }
  }
  pdf.save(`carousel.pdf`);
}

export function SlidesPreview({
  talks,
  eventDetails,
  communityMeetups,
}: SlidesPreviewProps) {
  const handleDownloadPDF = async () => {
    const elements = document.querySelectorAll(".carousel");
    await generatePDF(Array.from(elements) as HTMLElement[]);
  };

  return (
    <>
      <CarouselCanvas className="carousel">
        <SlideTalkList talks={talks} eventDetails={eventDetails} />
      </CarouselCanvas>
      {talks.map((talk) => (
        <CarouselCanvas key={talk.title} className="carousel">
          <SlideTalk talk={talk} />
        </CarouselCanvas>
      ))}
      <CarouselCanvas className="carousel">
        <SlideCommunityEvents events={communityMeetups} />
      </CarouselCanvas>
      {eventDetails.contact && (
        <CarouselCanvas className="carousel">
          <SlideContact contact={eventDetails.contact} />
        </CarouselCanvas>
      )}
      <button 
        type="button" 
        onClick={handleDownloadPDF}
        className="fixed bottom-4 right-4 bg-primary hover:bg-secondary text-background px-4 py-2 rounded-md shadow-lg transition-colors duration-200 flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        Download PDF
      </button>
    </>
  );
}
