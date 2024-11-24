# React Paris Meetup Carousel

A React application for creating and displaying meetup event carousels for React Paris events.

## Installation

1. Clone the repository and navigate to the project directory:

```bash
git clone <repository-url>
cd <repository-name>/apps/carous
```

2. Install dependencies using pnpm:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

## Usage

### Creating a New Carousel

1. Click "Add Event" in the sidebar
2. Either:
   - Manually enter event details in JSON format
   - Click "Generate with ChatGPT" to get help creating an event
3. Click "Save Event" when done

### Customizing Themes

1. Open `src/themes/config.ts`
2. Add or modify theme configurations
3. Update theme name in `ThemeSwitcher` component

Example theme configuration:

```typescript
export const themes = {
  myNewTheme: {
    background: "#ffffff",
    primary: "#007bff",
    secondary: "#6c757d",
    text: "#000000",
  },
};
```

### Event JSON Structure

Events follow this structure:

```json
{
  "id": "unique-id",
  "name": "Event Name",
  "eventDetails": {
    "title": "Event Title",
    "date": "Event Date",
    "host": "Host Name",
    "address": "Event Address"
  },
  "communityMeetups": [
    {
      "groupName": "Community Name",
      "title": "Meetup Title",
      "date": "Meetup Date",
      "location": "Location"
    }
  ],
  "talks": [
    {
      "title": "Talk Title",
      "description": "Talk Description",
      "speaker": {
        "name": "Speaker Name",
        "title": "Speaker Title",
        "profilePicture": "URL to photo"
      }
    }
  ]
}
```

## Development

- Built with React + Vite
- Uses TypeScript for type safety
- Styled with Tailwind CSS
- Monaco Editor for JSON editing
