import { z } from "zod";
import { useState } from "react";
import Editor from "@monaco-editor/react";
import { defaultEvent } from "../utils/storage";
import React from "react";

interface EventFormProps {
  initialEvent?: any;
  onSubmit: (event: any) => void;
  onCancel: () => void;
}

const defaultEventTemplate = {
  id: "",
  name: "React Paris Meetup #X",
  eventDetails: {
    title: "React Paris Meetup #X",
    date: "DD Month YYYY HHh",
    host: "Company Name",
    address: "Full Address",
  },
  communityMeetups: [
    {
      groupName: "Community Group Name",
      title: "Event Title",
      date: "DD Month YYYY",
      location: "Location Name",
    },
  ],
  talks: [
    {
      title: "Talk Title",
      description: "Talk Description",
      speaker: {
        name: "Speaker Name",
        title: "Speaker Title",
        profilePicture: "https://...",
      },
    },
  ],
};

const EventSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  eventDetails: z.object({
    title: z.string(),
    date: z.string(),
    host: z.string(),
    address: z.string(),
  }),
  communityMeetups: z.array(
    z.object({
      groupName: z.string(),
      title: z.string(),
      date: z.string(),
      location: z.string(),
    }),
  ),
  talks: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      speaker: z.object({
        name: z.string(),
        title: z.string(),
        profilePicture: z.string(),
      }),
    }),
  ),
});

export function EventForm({
  initialEvent = defaultEventTemplate,
  onSubmit,
  onCancel,
}: EventFormProps) {
  const [error, setError] = useState("");
  const [editorContent, setEditorContent] = useState(() => {
    const event = initialEvent || defaultEventTemplate;
    return JSON.stringify(event, null, 2);
  });
  const safeJson = React.useMemo(() => {
    try {
      return JSON.parse(editorContent);
    } catch (err) {
      return {};
    }
  }, [editorContent]);

  const errorSchema = EventSchema.safeParse(safeJson);
  const humanReadableError = !errorSchema.success
    ? errorSchema.error.issues.map((issue) => issue.message)
    : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const parsedEvent = JSON.parse(editorContent);

      onSubmit({
        ...parsedEvent,
        id: parsedEvent.id || `event-${Date.now()}`,
      });
      setError("");
    } catch (err) {
      setError("Invalid JSON format");
    }
  };
  console.log(editorContent);

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div>
        <label className="block text-sm font-medium mb-1">Event JSON</label>
        <div className="border rounded h-[500px]">
          <Editor
            height="100%"
            defaultLanguage="json"
            value={editorContent}
            onChange={(value) => setEditorContent(value || JSON.stringify(defaultEventTemplate, null, 2))}
            options={{
              minimap: { enabled: false },
              formatOnPaste: true,
              formatOnType: true,
              automaticLayout: true,
            }}
          />
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        {humanReadableError && (
          <p className="text-red-500 text-sm mt-1">
            {humanReadableError.join("\n")}
          </p>
        )}
      </div>

      <div className="flex justify-between items-center">
        <div className="space-x-2">
          <button
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(editorContent);
            }}
            className="px-4 py-2 text-gray-600 border rounded hover:bg-gray-50"
          >
            Copy JSON
          </button>
        </div>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save Event
        </button>
      </div>
    </form>
  );
}
