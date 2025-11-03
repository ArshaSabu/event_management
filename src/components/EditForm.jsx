import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { updateEventAPI } from "../service/allAPI";

function EditForm({ initialData = {}, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    destination: "",
    date: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        phone: initialData.phone || "",
        eventType: initialData.eventType || "",
        destination: initialData.destination || "",
        date: initialData.date
          ? new Date(initialData.date).toISOString().split("T")[0]
          : "",
      });
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEventAPI(initialData.id, formData);
      onSubmit(formData); // Notify parent to refresh and close form
    } catch (err) {
      console.error("Error updating event:", err);
    }
  };

  return (
    <Card className="p-4 shadow-sm border-0 mx-auto" style={{ maxWidth: "500px" }}>
      <h4 className="text-primary mb-4 text-center">Edit Event</h4>
      <Form onSubmit={handleSubmit}>
        <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </Form.Group>
        
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </Form.Group>
        
                <Form.Group className="mb-3">
                  <Form.Label>Event Type</Form.Label>
                  <Form.Select
                    required
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  >
                    <option value="">-- Select Event Type --</option>
                    <option value="Wedding Celebration">Wedding Celebration</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Cultural Event">Cultural Event</option>
                    <option value="Engagement Party">Engagement Party</option>
                    <option value="Fashion Show">Fashion Show</option>
                    <option value="Baby Shower">Baby Shower</option>
                  </Form.Select>
                </Form.Group>
        
                <Form.Group className="mb-3">
                  <Form.Label>Choose Destination</Form.Label>
                  <Form.Select
                    required
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  >
                    <option value="">-- Select Destination --</option>
                    <option value="Beach Resort">Beach Resort</option>
                    <option value="Luxury Banquet Hall">Luxury Banquet Hall</option>
                    <option value="Garden Venue">Garden Venue</option>
                    <option value="Mountain View Resort">Mountain View Resort</option>
                    <option value="Private Villa">Private Villa</option>
                    <option value="Royal Palace">Royal Palace</option>
                    <option value="Cruise Ship Deck">Cruise Ship Deck</option>
                    <option value="Riverside Pavilion">Riverside Pavilion</option>
                    <option value="City Convention Center">City Convention Center</option>
                  </Form.Select>
                </Form.Group>
        
                {/* ✅ Added Event Date Field */}
                <Form.Group className="mb-4">
                  <Form.Label>Event Date</Form.Label>
                  <Form.Control
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </Form.Group>
        
              </Form>

        <Button variant="primary" type="submit" className="w-100">
          Update
        </Button>
        <Button
          variant="secondary"
          className="w-100 mt-2"
          onClick={() => onSubmit(null)}
        >
          Cancel
        </Button>
      </Form>
    </Card>
  );
}

export default EditForm;
