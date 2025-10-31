import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function Home() {
  return (
    
    <>
    <div className="mt-5 position-relative text-center">
        <img
          src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnQlMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
          alt="Event Planning"
          className="img-fluid w-100"
          style={{ height: '700px', objectFit: 'cover' }}
        />

        <div className="position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-50 text-white p-4 rounded">
          <h1 className="mb-3">
            Partner with <span className="text-warning">AmoraEvents</span> Event Management in Kerala
          </h1>
          <p className="lead mb-0">Kerala's #1 Exclusive Event Company</p>
        </div>
      </div>


      <div className='row m-5'>
        <div className='col-6 p-2 text-black ms-5 mt-5 '>
            <h2 className="text-warning">Destination Wedding Planners</h2>
            <p>Celebrations such as weddings can be very overwhelming, especially when you have to plan events with guests attending from different parts of the world. If you are clueless about where to begin and the right steps to take, our professional team of experienced wedding planners will assist you every step of the way. Our award-winning team in the UAE has been in the wedding planning business for over a decade which also includes destination wedding planning. Vivaah Celebrations is one of the most renowned and prestigious wedding planners in the UAE. The highly experienced team of wedding planners is skilled and trained to handle all aspects of the wedding in a seamless and efficient manner.</p>
            <p>Whether you choose to host an intimate wedding celebration or a large destination wedding in Dubai, our team of professional wedding planners work tirelessly to deliver your memorable wedding celebration.</p>
        </div>
        <div className='col-4 p-2 m-5'>
            <img src='https://media.istockphoto.com/id/2166246204/photo/wedding-planner-woman-is-working-on-floral-decorations-for-a-wedding-event.webp?a=1&b=1&s=612x612&w=0&k=20&c=ojmrPh9yZyRpkaKHu4kygR6pGWTOYszH7mhQDE8THWY='></img>
        </div>
      </div>


      <div>
        <h2 className='text-center text-warning'>Top Event Planning Services </h2>

        <div className='m-4'>
             <div className="d-flex flex-wrap justify-content-center">
      {/* Wedding */}
      <div className="position-relative m-4">
        <img
          src="https://www.chennaieventmanagementservice.com/assets/images/service-details/wedding-eventsssss.webp"
          alt="Wedding Event"
          style={{ width: '400px', height: 'auto' }}
          className="img-fluid"
        />
        <div className="position-absolute  bottom-0 start-50 translate-middle text-black bg-white bg-opacity-50 px-3 py-2 rounded">
          <h5 className="mb-0">Wedding Events</h5>
        </div>
      </div>

      {/* Birthday */}
      <div className="position-relative m-4">
        <img
          src="https://www.chennaieventmanagementservice.com/assets/images/service-details/birthday-evntssssss.webp"
          alt="Birthday Event"
          style={{ width: '400px', height: 'auto' }}
          className="img-fluid"
        />
        <div className="position-absolute bottom-0  start-50 translate-middle text-black bg-white bg-opacity-50 px-3  rounded">
          <h5 className="mb-0">Birthday Celebrations</h5>
        </div>
      </div>

      {/* Engagement */}
      <div className="position-relative m-4">
        <img
          src="https://www.chennaieventmanagementservice.com/assets/images/service-details/engagement-ebventsss.webp"
          alt="Engagement Event"
          style={{ width: '400px', height: 'auto' }}
          className="img-fluid"
        />
        <div className="position-absolute bottom-0  start-50 translate-middle text-black bg-white bg-opacity-50 px-3  rounded">
          <h5 className="mb-0">Engagement Ceremonies</h5>
        </div>
      </div>
    </div>
        </div>
      </div>

      <div className='mt-5'>
        <h2 className='text-center text-warning'>Event Management Company in Kerala</h2>
        <p style={{paddingLeft:"250px", paddingRight:"250px"}} className='text-black m-5'>Have you ever dreamed of planning the perfect event that will be remembered forever? Look no further than AmoraEvents Events, the top-notch event management company in Kerala, India, that has everything you need to make your occasion an unforgettable experience.We make everything from corporate event planning and personal celebrations to even small customized event packages absolutely memorable! Contact us today to learn more about our services and how we can help you organize the top event management in Kerala.</p>
      </div>


      <div>
        <img style={{height:"300px", width:"100%"}} src='https://motopress.com/wp-content/uploads/2024/07/Best-Wedding-Website-Examples.jpg'></img>
      </div>


      <div className='mb-5'>
        <h2 className='text-center text-warning m-5 mb-0'>Testimonials</h2>
        <p className='text-center text-black'>What Our Customers Are Saying About Us</p>
        <div className='d-flex'>
            <div className='border border-black text-black rounded p-3 m-5' style={{width:"400px"}} >
                <p>"AmoraEvents turned our dream wedding into reality. From decor to coordination, everything was flawless. Our guests still talk about how magical it felt!" — Neha & Arjun, Kochi</p>
                <p><FontAwesomeIcon icon={faStar} className='text-warning' /> <FontAwesomeIcon icon={faStar} className='text-warning' /><FontAwesomeIcon icon={faStar} className='text-warning' /> <FontAwesomeIcon icon={faStar} className='text-warning' /><FontAwesomeIcon icon={faStar} className='text-warning' /></p>
            </div>

            <div className='border border-black text-black rounded p-3 m-5' style={{width:"400px"}} >
                <p>"My daughter's 10th birthday was a blast! The theme, games, and setup were beyond what we imagined. Thank you for making it so special!" — Anjali Menon, Thrissur</p>
                <p><FontAwesomeIcon icon={faStar} className='text-warning' /> <FontAwesomeIcon icon={faStar} className='text-warning' /><FontAwesomeIcon icon={faStar} className='text-warning' /> <FontAwesomeIcon icon={faStar} className='text-warning' /><FontAwesomeIcon icon={faStar} className='text-warning' /></p>

            </div>

            <div className='border border-black text-black rounded p-3 m-5' style={{width:"400px"}} >
                <p>"The engagement decor was elegant and exactly what we envisioned. The team was patient and full of ideas!" — Meera & Vishnu, Ernakulam</p>
                 <p><FontAwesomeIcon icon={faStar} className='text-warning' /> <FontAwesomeIcon icon={faStar} className='text-warning' /><FontAwesomeIcon icon={faStar} className='text-warning' /> <FontAwesomeIcon icon={faStar} className='text-warning' /><FontAwesomeIcon icon={faStar} className='text-warning' /></p>

            </div>

        </div>
      </div>


      <div>

      </div>
    </>
  )
}

export default Home