import { useState } from "react";
import {
  AppShell,
  AppShellCanvas,
  AppShellSidebar,
} from "./components/AppShell";
import { SlidesPreview } from "./components/SlidesPreview";
import { SlidesProvider } from "./context";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { EventSidebar } from "./components/EventSidebar";

function App() {
  const [currentEvent, setCurrentEvent] = useState<any>(null);

  return (
    <SlidesProvider>
      <AppShell>
        <ThemeSwitcher />
        <AppShellSidebar>
          <EventSidebar onEventSelect={setCurrentEvent} />
        </AppShellSidebar>
        <AppShellCanvas>
          {currentEvent && (
            <SlidesPreview 
              talks={currentEvent.talks}
              eventDetails={currentEvent.eventDetails}
              communityMeetups={currentEvent.communityMeetups}
            />
          )}
        </AppShellCanvas>
      </AppShell>
    </SlidesProvider>
  );
}

export default App;
