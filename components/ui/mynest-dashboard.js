import { useState } from "react";

export default function MyNestDashboard() {
  const [events] = useState([
    { date: new Date(2025, 5, 25), title: "Soccer Practice", type: "activity" },
    { date: new Date(2025, 5, 26), title: "Pediatrician Appointment", type: "medical" },
    { date: new Date(2025, 5, 27), title: "Playdate with Sarah", type: "social" },
  ]);

  return (
    <div className="p-6 space-y-6 font-sans text-brown-700 bg-beige-50 min-h-screen">
      <h1 className="text-2xl font-bold">Welcome to MyNest</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 border rounded-xl shadow bg-white">
          <h2 className="font-semibold mb-2">Children</h2>
          <ul>
            <li>Bader Hussein – 6 years old</li>
            <li>Adam Hussein – 5 years old</li>
          </ul>
        </div>

        <div className="p-4 border rounded-xl shadow bg-white">
          <h2 className="font-semibold mb-2">Recent Activities</h2>
          <p>No recent activities</p>
        </div>

        <div className="p-4 border rounded-xl shadow bg-white">
          <h2 className="font-semibold mb-2">Upcoming Events</h2>
          <ul>
            {events.map((event, i) => (
              <li key={i} className="text-sm">
                {event.title} – {event.date.toDateString()}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex space-x-4 pt-4">
        <button className="bg-orange-300 px-4 py-2 rounded">Log Activity</button>
        <button className="bg-green-200 px-4 py-2 rounded">Add Event</button>
        <button className="bg-neutral-200 px-4 py-2 rounded">Upload Document</button>
      </div>
    </div>
  );
}