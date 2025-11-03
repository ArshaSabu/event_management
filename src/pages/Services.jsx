import React, { useEffect, useState, useContext } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import ServiceCard from "../components/ServiceCard";
import EventForm from "../components/EventForm";
import { getAllEventsAPI, deleteEventAPI } from "../service/allAPI";
import { FaChartBar } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import EditForm from "../components/EditForm";


function Services() {
  const [editingEventData, setEditingEventData] = useState(null);


  const { currentUser } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [showForm, setShowForm] = useState(false);

  const role = currentUser?.role;

  useEffect(() => {
    fetchAllEvents();
  }, []);

  const fetchAllEvents = async () => {
    try {
      const response = await getAllEventsAPI();
      const bookedEvents = response.data.filter(
        (ev) => ev.name && ev.phone && ev.eventType
      );
      setEvents(bookedEvents);
      setFilteredEvents(bookedEvents);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  const handleDelete = async (eventId) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      await deleteEventAPI(eventId);
      fetchAllEvents();
    }
  };

  const handleFilter = (e) => {
    const value = e.target.value.toLowerCase();
    setFilterText(value);
    const filtered = events.filter(
      (event) =>
        event.name.toLowerCase().includes(value) ||
        event.eventType.toLowerCase().includes(value) ||
        (event.date && event.date.toLowerCase().includes(value)) // ✅ filter by date
    );
    setFilteredEvents(filtered);
  };

  return (

    <div className="container my-5">
      <h1
        style={{
          textAlign: "center",
          color: "#a67c00",
          fontSize: "2.5rem",
          paddingTop:"20px",
          fontWeight: "bold",
          marginTop: "20px",
          marginBottom:"20px"
        }}
      >
        Our Services
      </h1>      <ServiceCard />

      {role === "admin" ? (
        <div
          className="mt-5 p-4 rounded shadow-sm"
          style={{ backgroundColor: "#fff8f8" }}
        >
          <h4 className="text-center text-dark mb-3 d-flex justify-content-center align-items-center gap-2">
            <FaChartBar className="text-danger" />
            Admin Dashboard
          </h4>

          <p className="text-center text-muted">
            <strong>Total Events:</strong> {events.length}
          </p>

          <div className="d-flex justify-content-center mb-4">
            <Form.Control
              type="text"
              placeholder="Filter by user, event type, or date..."
              value={filterText}
              onChange={handleFilter}
              className="w-50"
            />
          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center mt-4">
              <p className="text-muted">No booked events found yet.</p>
            </div>
          ) : (
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
              {filteredEvents.map((event) => (
                <Col key={event.id}>
                  <div
                    className="card border-0 shadow-sm h-100"
                    style={{ borderRadius: "15px" }}
                  >
                    <div className="card-body">
                      <h6 className="fw-bold text-dark mb-2">
                        {event.eventType}
                      </h6>
                      <p className="text-secondary small mb-1">
                        <strong>User:</strong> {event.name}
                      </p>
                      <p className="text-secondary small mb-1">
                        <strong>Phone:</strong> {event.phone}
                      </p>
                      <p className="text-secondary small mb-1">
                        <strong>Destination:</strong> {event.destination}
                      </p>
                      {/* ✅ Show Event Date */}
                      <p className="text-secondary small mb-1">
                        <strong>Date:</strong>{" "}
                        {event.date ? event.date : "Not specified"}
                      </p>
                    </div>

                    <div className="card-footer bg-transparent border-0 text-center pb-3 d-flex gap-2">
                      <Button
                         variant="outline-primary"
                         size="sm"
                        onClick={() => setEditingEventData(event)}
                         >
                          Edit
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDelete(event.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}

      {/* edit */}

{editingEventData && (
  <div className="mt-4">
    <EditForm
      initialData={editingEventData}
      onSubmit={(data) => {
        setEditingEventData(null);
        if (data) fetchAllEvents();
      }}
    />
  </div>
)}


        </div>
      ) : (
        <div className="text-center mt-5">
          {!showForm ? (
            <Button
              variant="danger"
              onClick={() => setShowForm(true)}
              className="px-4 py-2"
            >
              Book an Event
            </Button>
          ) : (
            <EventForm
              onSubmit={() => {
                alert("🎉 Event booked successfully!");
                setShowForm(false);
                fetchAllEvents();
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Services;
