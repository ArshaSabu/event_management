import React from "react";

function About() {
  const heroStyle = {
    position: "relative",
    height: "60vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    padding: "40px",
    borderRadius: "10px",
    color: "white",
  };

  const sectionStyle = (reverse = false, bg = "white") => ({
    display: "flex",
    flexDirection: reverse ? "row-reverse" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: bg,
    padding: "60px 10%",
    gap: "40px",
    flexWrap: "wrap",
  });

  const textStyle = {
    fontFamily: "Poppins, sans-serif",
    lineHeight: "1.8",
    fontSize: "1rem",
    color: "#333",
  };

  const titleStyle = {
    color: "#a67c00",
    fontWeight: "bold",
    marginBottom: "15px",
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "450px",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
  };

  const serviceListStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
    marginTop: "30px",
  };

  const serviceCardStyle = {
    width: "300px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    padding: "20px",
    textAlign: "center",
    transition: "transform 0.3s ease",
  };

  const teamSectionStyle = {
    backgroundColor: "#faf7f2",
    padding: "60px 10%",
    textAlign: "center",
  };

  const teamGridStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "40px",
    marginTop: "40px",
  };

  const teamCardStyle = {
    width: "220px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    padding: "20px",
    transition: "transform 0.3s ease",
  };

  const profileImgStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* ---------- Hero Section ---------- */}
      <div style={heroStyle}>
        <div style={overlayStyle}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
            About Our Event Management
          </h1>
          <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
            Creating unforgettable experiences that celebrate your moments of joy.
          </p>
        </div>
      </div>

      {/* ---------- Who We Are ---------- */}
      <div style={sectionStyle(false)}>
        <div style={{ flex: 1 }}>
          <h2 style={titleStyle}>Who We Are</h2>
          <p style={textStyle}>
            We are a passionate team of event planners dedicated to making your
            celebrations truly special. From weddings and birthdays to corporate
            gatherings, our mission is to craft experiences that reflect your
            vision, style, and personality.
          </p>
          <p style={textStyle}>
            With years of experience and a strong network of trusted vendors, we
            handle everything from concept to completion — so you can enjoy your
            event stress-free.
          </p>
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce"
            alt="Event Planning"
            style={imageStyle}
          />
        </div>
      </div>

      {/* ---------- What We Do ---------- */}
      <div style={{ padding: "60px 10%", backgroundColor: "#faf7f2" }}>
        <h2 style={{ ...titleStyle, textAlign: "center" }}>What We Do</h2>
        <div style={serviceListStyle}>
          {[
            {
              img: "https://www.oyorooms.com/blog/wp-content/uploads/2018/02/middle-aiwi.jpg",
              title: "Weddings & Receptions",
              text: "From intimate ceremonies to grand celebrations, we bring your wedding dreams to life with style and perfection.",
            },
            {
              img: "https://i.pinimg.com/736x/5b/e7/35/5be735a3514c4e5524debab9dc9da2d9.jpg",
              title: "Corporate Events",
              text: "Conferences, product launches, and team outings — all executed flawlessly with attention to detail and professionalism.",
            },
            {
              img: "https://media.istockphoto.com/id/909225328/photo/holiday-celebration-at-party.jpg?s=612x612&w=0&k=20&c=qtclslr3-cnushTqFdvB-IVfqCZKHRmHU7D4hCBHByw=",
              title: "Birthday & Private Parties",
              text: "Whether it’s a milestone birthday or an anniversary, we ensure every detail makes your event fun and memorable.",
            },
          ].map((service, index) => (
            <div
              key={index}
              style={serviceCardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <img
                src={service.img}
                alt={service.title}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  marginBottom: "15px",
                }}
              />
              <h3 style={{ ...titleStyle, marginBottom: "10px" }}>
                {service.title}
              </h3>
              <p style={textStyle}>{service.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Our Mission ---------- */}
      <div style={sectionStyle(true)}>
        <div style={{ flex: 1 }}>
          <h2 style={titleStyle}>Our Mission</h2>
          <p style={textStyle}>
            To redefine celebrations by creating unforgettable experiences that
            bring people together. We strive to turn every vision into a reality
            with creativity, precision, and passion — ensuring every event we
            manage reflects joy, beauty, and excellence.
          </p>
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <img
            src="https://florexcareevents.com/wp-content/uploads/2019/09/florexcare-mission-and-vision-1024x512.jpg"
            alt="Team Collaboration"
            style={imageStyle}
          />
        </div>
      </div>

      {/* ---------- Our Team Section ---------- */}
      <div style={teamSectionStyle}>
        <h2 style={{ ...titleStyle, textAlign: "center" }}>Our Team / The People Behind</h2>
        <p style={{ ...textStyle, maxWidth: "800px", margin: "20px auto" }}>
          Our creative planners, designers, and coordinators work together to make
          every event extraordinary. Meet the people who make the magic happen!
        </p>

        <div style={teamGridStyle}>
          {[
            {
              name: "Arjun Mehta",
              role: "Event Coordinator",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Priya Sharma",
              role: "Creative Designer",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Rahul Verma",
              role: "Logistics Manager",
              img: "https://randomuser.me/api/portraits/men/76.jpg",
            },
            {
              name: "Sneha Kapoor",
              role: "Client Relations",
              img: "https://randomuser.me/api/portraits/women/68.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              style={teamCardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <img src={member.img} alt={member.name} style={profileImgStyle} />
              <h4 style={{ color: "#a67c00", marginBottom: "5px" }}>{member.name}</h4>
              <p style={{ color: "#777", fontSize: "0.95rem" }}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
