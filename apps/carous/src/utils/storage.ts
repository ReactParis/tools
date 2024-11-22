const EVENTS_STORAGE_KEY = 'react-paris-events';

export const defaultEvent = {
  id: "",
  name: "",
  eventDetails: {
    title: "",
    date: "",
    host: "",
    address: ""
  },
  communityMeetups: [],
  talks: []
};

export function getEvents() {
  try {
    const eventsJson = localStorage.getItem(EVENTS_STORAGE_KEY);
    return eventsJson ? JSON.parse(eventsJson) : [];
  } catch (error) {
    console.error('Error loading events:', error);
    return [];
  }
}

export function saveEvent(event: any) {
  try {
    const events = getEvents();
    const existingEventIndex = events.findIndex((e: any) => e.id === event.id);
    
    if (existingEventIndex >= 0) {
      events[existingEventIndex] = event;
    } else {
      events.push(event);
    }
    
    localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(events));
    return events;
  } catch (error) {
    console.error('Error saving event:', error);
    throw error;
  }
}

export function generateChatGPTPrompt() {
  return `I need your help to create a tech meetup event. I'll need specific information from you to generate the event details in JSON format. Please answer these questions:

For the main event:
1. What is the name and number of your event series?
2. What date and time would you like to hold it? (Format needed: DD Month YYYY HHh)
3. Do you have a confirmed hosting company/venue?
4. What's the complete address for the venue?

For the talks (we need 2-3 talks):
For each talk, please provide:
1. Speaker's full name
2. Speaker's professional title/role
3. Talk title
4. Detailed talk description
5. Speaker's professional photo URL (if available)

For community meetups, I can help search for upcoming tech meetups in Paris (React, Node.js, Vue.js, TypeScript communities) to include in the event. Would you like me to:
a) Search for specific upcoming meetups (please specify which communities)
b) Use placeholder "TBD" entries
c) Skip this section

Once you provide these details, I'll generate a JSON in this exact format:

{
  "id": "unique-id",
  "name": "Event Series Name and Number",
  "eventDetails": {
    "title": "Full Event Title",
    "date": "Date and Time (Format: DD Month YYYY HHh)",
    "host": "Hosting Company or Organization",
    "address": "Complete Address with Street, Number, and Postal Code"
  },
  "communityMeetups": [
    {
      "groupName": "Name of Related Community Group",
      "title": "Title of Their Next Event",
      "date": "Date (Format: DD Month YYYY)",
      "location": "Location Name or TBD"
    }
  ],
  "talks": [
    {
      "title": "Title of the Talk",
      "description": "Detailed Description of the Talk Content",
      "speaker": {
        "name": "Full Name of Speaker",
        "title": "Professional Title or Role",
        "profilePicture": "URL to Speaker's Professional Photo"
      }
    }
  ]
}

Important notes:
- All dates must be in the future and use French format
- Speaker photos should be real URLs or left blank
- Only confirmed information will be included, using "TBD" for uncertain details
- All content should be technically focused and realistic

Please provide your responses to the questions above, and I'll help generate the complete event JSON.`;
}

export function deleteEvent(eventId: string) {
  try {
    const events = getEvents();
    const filteredEvents = events.filter((e: any) => e.id !== eventId);
    localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(filteredEvents));
    return filteredEvents;
  } catch (error) {
    console.error('Error deleting event:', error);
    throw error;
  }
}
