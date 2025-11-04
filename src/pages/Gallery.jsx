import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css";

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "https://eventsmanagementkerala.com/wp-content/uploads/2023/10/Event-management-company-in-Kerala-2.webp",
        "https://eventsmanagementkerala.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-08-26-at-7.41.09-PM.webp",
        "https://i.pinimg.com/1200x/c3/5e/cc/c35ecc1da6f9f988f81488a1e8d7c100.jpg",
        "https://i.pinimg.com/1200x/bc/60/a1/bc60a14aba9bfd8ca87acf336e50c7b9.jpg",
        "https://clubtranscend.in/wp-content/uploads/2025/01/Corporate-Event.jpg",
        "https://eventsmanagementkerala.com/wp-content/uploads/2023/07/wedding-dance-222.webp",
        "https://i.pinimg.com/736x/99/91/c2/9991c20d1b47768922bcf8bd0e3c3acf.jpg",
        "https://i.pinimg.com/1200x/c1/c1/7e/c1c17e03b101ad67b98da261401b4257.jpg",
        "https://www.thetamarindtree.in/wp-content/uploads/2024/09/SAL04106-1500x1000.jpg",
        "https://www.theweddingschool.in/wp-content/uploads/2022/08/blog-65-7-3-scaled.jpg",
        "https://renownedevents.in/cdn/shop/files/JunglethemeforFirstbirthdaycelebration.jpg?v=1740115549",
        "https://cdn0.weddingwire.in/article/1841/3_2/1280/jpg/71481-group-dance-video-hitched-and-clicked-lead.jpeg",
        "https://parksports.co.uk/media/images/Z-Events-Parties/_1200xAUTO_crop_center-center_none_ns/Park-Sports-Childrens-Parties-at-Hyde-Park-Party-Options.jpg",
        "https://salexy.in/images/img_in/700/b8/2d/b82d6d2618427df0c70a0536c71106f3.webp",
        "https://www.bestpartiesever.com/wp-content/uploads/dc3ac80641ce03d85fffcb9e0f96396a-ezgif.com-optiwebp.webp",
        "https://imgmediagumlet.lbb.in/media/2020/02/5e5378618037ba2c10cb029e_1582528609385.jpg",
        "https://fashinnovation.nyc/wp-content/uploads/2024/04/cultural-fashion-shows.jpeg",
        "https://m.media-amazon.com/images/I/71TwSYoTQ-L._AC_UF1000,1000_QL80_.jpg",
        "https://ariseevent.in/eec/uploads/featuredimage/1757153767_garba_night.jpg",
        "https://media.assettype.com/outlookindia/2025-08-30/iyibe948/Onam-In-Kerala?w=801&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0"
    ];

    return (
        <div className="gallery-page">
            {/* Full-width Hero */}
            <div className="gallery-hero">
                <div className="overlay"></div>
                <h1 className="gallery-hero-title">AmoraEvents Gallery</h1>
            </div>

            {/* Description */}
            <div className="container my-5">
                <p className="text-center text-muted mt-5 mb-5 gallery-desc">
                    At <span className="highlight">AmoraEvents</span>, we turn your dreams into unforgettable celebrations.
                    Our creative team designs each occasion with elegance, innovation, and a personal touch.
                    From intimate weddings to grand corporate events, we ensure every detail reflects your unique vision.
                    With flawless planning and stunning décor, we transform spaces into extraordinary experiences.
                    Let AmoraEvents make your special moments truly timeless. <br /><br />
                    We believe that every celebration is a story waiting to be told — filled with laughter, love, and lasting memories.
                    Whether you're hosting a traditional ceremony or a modern themed event, our passion lies in making your day perfect.
                    With AmoraEvents, you don't just plan an event — you create an experience that stays in hearts forever.
                </p>

                {/* Gallery Grid */}
                <div className="row g-4 justify-content-center">
                    {images.map((img, index) => (
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                            <div
                                className="gallery-item"
                                data-bs-toggle="modal"
                                data-bs-target="#imageModal"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img src={img} alt={`Event ${index + 1}`} className="img-fluid gallery-img" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="imageModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body text-center">
                            {selectedImage && (
                                <img src={selectedImage} alt="Full view" className="img-fluid rounded" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
