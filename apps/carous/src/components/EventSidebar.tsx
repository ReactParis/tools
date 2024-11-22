import { useState, useEffect } from "react";
import {
  getEvents,
  saveEvent,
  deleteEvent,
  generateChatGPTPrompt,
} from "../utils/storage";
import { EventForm } from "./EventForm";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

interface Event {
  id: string;
  name: string;
  eventDetails: any;
  communityMeetups: any[];
  talks: any[];
}

interface EventSidebarProps {
  onEventSelect: (event: Event) => void;
}

export function EventSidebar({ onEventSelect }: EventSidebarProps) {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEventId, setSelectedEventId] = useState<string>();
  const [isEditing, setIsEditing] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = () => {
    const loadedEvents = getEvents();
    setEvents(loadedEvents);
    if (loadedEvents.length > 0 && !selectedEventId) {
      setSelectedEventId(loadedEvents[0].id);
      onEventSelect(loadedEvents[0]);
    }
  };

  const handleAddEvent = () => {
    setEditingEvent(null);
    setIsEditing(true);
  };

  const handleEditEvent = (event: Event) => {
    setEditingEvent(event);
    setIsEditing(true);
  };

  const handleDeleteEvent = (eventId: string) => {
    if (confirm("Are you sure you want to delete this event?")) {
      const updatedEvents = deleteEvent(eventId);
      setEvents(updatedEvents);
      if (selectedEventId === eventId) {
        const nextEvent = updatedEvents[0];
        if (nextEvent) {
          setSelectedEventId(nextEvent.id);
          onEventSelect(nextEvent);
        } else {
          setSelectedEventId(undefined);
          onEventSelect(null as any);
        }
      }
    }
  };

  const handleSubmit = (event: Event) => {
    const updatedEvents = saveEvent(event);
    setEvents(updatedEvents);
    setIsEditing(false);
    setSelectedEventId(event.id);
    onEventSelect(event);
  };

  const handleCopyEvent = async (eventId: string) => {
    try {
      const event = events.find((e) => e.id === eventId);
      const updatedEvents = await saveEvent({
        ...event,
        id: `${event.id}-copy-${Date.now()}`,
        name: `Copy of ${event.name}`,
      });
      setEvents(updatedEvents);
    } catch (error) {
      console.error(error);
    }
  };

  if (isEditing) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">
          {editingEvent ? "Edit Event" : "Add New Event"}
        </h2>
        <EventForm
          initialEvent={editingEvent}
          onSubmit={handleSubmit}
          onCancel={() => setIsEditing(false)}
        />
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Events</h2>
        <div className="space-x-2">
          <button
            onClick={handleAddEvent}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Event
          </button>
          <button
            onClick={async () => {
              const prompt = generateChatGPTPrompt();
              await navigator.clipboard.writeText(prompt);
              window.open("https://chat.openai.com", "_blank");
              setEditingEvent(null);
              setIsEditing(true);
            }}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
            title="Start fresh with a new event from ChatGPT"
          >
            Generate with ChatGPT
          </button>
        </div>
      </div>
      <ul className="space-y-2">
        {events.map((event) => (
          <li
            key={event.id}
            className={`p-2 rounded flex justify-between items-center ${
              event.id === selectedEventId
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <span
              className="cursor-pointer flex-grow"
              onClick={() => {
                setSelectedEventId(event.id);
                onEventSelect(event);
              }}
            >
              {event.name}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEditEvent(event)}
                className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteEvent(event.id)}
                className="px-2 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
              >
                Delete
              </button>
              <button
                onClick={() => handleCopyEvent(event.id)}
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <DocumentDuplicateIcon className="-ml-0.5 mr-2 h-4 w-4" />
                Duplicate
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
