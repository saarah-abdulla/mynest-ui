import { useEffect, useState } from "react";

export default function MyNestDashboard() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newEvent, setNewEvent] = useState({ title: "", date: "" });
  const [newChild, setNewChild] = useState({ name: "", age: "" });

  const API_URL = "https://mynest-backend.onrender.com";

  useEffect(() => {
    fetch(`${API_URL}/events`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        setLoading(false);
      });
  }, []);

  const handleAddEvent = async () => {
    try {
      await fetch(`${API_URL}/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      });
      setNewEvent({ title: "", date: "" });
      alert("Event added!");
    } catch (error) {
      console.error("Failed to add event:", error);
    }
  };

  const handleAddChild = async () => {
    try {
      await fetch(`${API_URL}/children`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newChild),
      });
      setNewChild({ name: "", age: "" });
      alert("Child added!");
    } catch (error) {
      console.error("Failed to add child:", error);
    }
  };

  return (
    <div className="p-6 space-y-6 font-sans text-gray-800 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold">Welcome to MyNest</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-xl shadow bg-white">
          <h2 className="font-semibold mb-2">Upcoming Events</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {events.map((event) => (
                <li key={event.id}>
                  {event.title} — {new Date(event.date).toDateString()}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="p-4 border rounded-xl shadow bg-white">
          <h2 className="font-semibold mb-2">Add New Event</h2>
          <input
            className="border p-2 mb-2 w-full"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          />
          <input
            className="border p-2 mb-2 w-full"
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          />
          <button
            onClick={handleAddEvent}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Event
          </button>
        </div>

        <div className="p-4 border rounded-xl shadow bg-white">
          <h2 className="font-semibold mb-2">Add Child Profile</h2>
          <input
            className="border p-2 mb-2 w-full"
            placeholder="Child Name"
            value={newChild.name}
            onChange={(e) => setNewChild({ ...newChild, name: e.target.value })}
          />
          <input
            className="border p-2 mb-2 w-full"
            placeholder="Age"
            value={newChild.age}
            onChange={(e) => setNewChild({ ...newChild, age: e.target.value })}
          />
          <button
            onClick={handleAddChild}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Child
          </button>
        </div>
      </div>
    </div>
  );
}
