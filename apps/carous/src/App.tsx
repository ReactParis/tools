import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {
  AppShell,
  AppShellCanvas,
  AppShellSidebar,
} from "./components/AppShell";
import CarouselCanvas from "./components/Carousel";
import SlideTalkList from "./components/SlideTalkList";
import SlideTalk from "./components/SlideTalk";
import { SlideCommunityEvents } from "./components/SlideCommunityEvents";
import { SlideContact } from "./components/SlideContact";
import { communityMeetups, eventDetails, talks } from "./data";

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

function App() {
  const handleDownloadPDF = async () => {
    const elements = document.querySelectorAll(".carousel");
    await generatePDF(Array.from(elements) as HTMLElement[]);
  };
  return (
    <AppShell>
      <AppShellSidebar>Test</AppShellSidebar>
      <AppShellCanvas>
        <CarouselCanvas className="carousel">
          <SlideTalkList talks={talks} eventDetails={eventDetails} />
        </CarouselCanvas>
        {talks.map((talk) => (
          <CarouselCanvas className="carousel">
            <SlideTalk talk={talk} />
          </CarouselCanvas>
        ))}
        <CarouselCanvas className="carousel">
          <SlideCommunityEvents events={communityMeetups} />
        </CarouselCanvas>
        <CarouselCanvas className="carousel">
          <SlideContact />
        </CarouselCanvas>
        <button type="button" onClick={handleDownloadPDF}>
          Download PDF
        </button>
      </AppShellCanvas>
    </AppShell>
  );
}

export default App;
