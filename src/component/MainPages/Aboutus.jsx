"use client";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Aboutus = () => {
    return (
        <>
            <div className="glue-page bookmark flex-font">
                <div className="section-title flex-font">
                    <h2 className="glue-headline glue-headline--headline-2 section-title__title flex-font" >WILLWAY
                    </h2>
                    <div className="glue-headline glue-headline--headline-4 section-title__description flex-font" >
                        <p>Transforming Innovation for Enriched Lives</p>
                    </div>
                </div>

            </div>


            <div className="glue-page bookmark flex-font">




                <div className="glue-grid section-breaker section-breaker--media-start section-breaker--media-1-up">
                    <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--span-12-md section-breaker__media">
                        <figure>
                            <picture className="picture section-breaker__image">
                                <img alt="" className="picture__image" height="640" loading="lazy"
                                    src="/assets/navbar.jpg"
                                    width="640" />
                            </picture>
                        </figure>



                    </div>
                    <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--span-12-md section-breaker__content">
                        <div className="section-breaker__rich-text gdm-rich-text">
                            <h2>WELCOME TO <strong>WILLWAY BIOTECH</strong></h2>
                            <p>Willway is a forward-driven veterinary equipment brand committed to reshaping the future of animal healthcare. Built on the foundation of precision, innovation, and compassion, we empower veterinary professionals with world-className solutions that deliver reliability and performance where it matters most — in the care of animals.
                                We proudly design and supply advanced veterinary equipment ranging from diagnostic tools and surgical systems to imaging, monitoring, and patient care solutions. Every Willway product is engineered with a single purpose: to support veterinarians in delivering safer, smarter, and more efficient care.
                                With a strong presence across Asia, the Middle East, and beyond, Willway is more than just equipment — it’s a partner in progress. From clinics to hospitals, from pets to livestock, we ensure that every heartbeat is protected by technology crafted with care..</p>

                        </div>
                    </div>
                </div>





                <div className="gdm-rich-text rich-text flex-font">
                    <h3>Our Mission</h3>
                    <p>Our mission is to support veterinarians in delivering safer, smarter, and more efficient care. We achieve this by designing and supplying advanced, reliable equipment that meets the highest standards of performance. From bustling city clinics to large animal hospitals, our products are engineered with a single purpose: to be a trusted partner in the vital work of healing and protecting animals.</p>
                </div>

                <Accordion className="glue-expansion-panel flex-font">
                    <AccordionSummary aria-controls="panel1-content" id="panel1-header"
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography className="glue-expansion-panel__header-text" component="span">Who We Are</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="gdm-rich-text flex-font">
                        <p>Founded on the principles of <strong>precision, innovation, and compassion</strong>, Willway Biotech has established itself as a key player across Asia, the Middle East, and beyond. We are more than just an equipment manufacturer; we are a partner in progress for the global veterinary community.</p>

                        <h4>Our Comprehensive Portfolio</h4>
                        <p>Our extensive product range is a testament to our commitment to comprehensive care, featuring:</p>
                        <ul>
                            <li><strong>Anesthesia & Patient Monitoring:</strong> High-end anesthesia machines, ventilators, and multi-parameter monitors.</li>
                            <li><strong>Surgical Solutions:</strong> Advanced ultrasonic scalpels, electrosurgical units, and specialized surgical furniture.</li>
                            <li><strong>Diagnostic Imaging:</strong> Portable dental X-ray machines and high-precision sensors.</li>
                            <li><strong>Point-of-Care Testing:</strong> Biochemistry analyzers, immunofluorescence analyzers, and digital microscopes.</li>
                            <li><strong>Critical Care Equipment:</strong> Infusion and syringe pumps with intelligent safety systems.</li>
                            <li><strong>Essential Tools:</strong> Laryngoscopes, bone drills, and shadowless surgical lamps.</li>
                        </ul>

                        <h4>Our Commitment to Innovation</h4>
                        <p>We relentlessly challenge the status quo. Our design philosophy is user-centric, dismantling traditional approaches that prioritize cost over usability. Through innovations in structural and circuit module design, we ensure our equipment, like the flagship <strong>WVA-100 Anesthesia Machine</strong>, offers intuitive operation, clear monitoring, and flexible installation to fit any clinical workflow.</p>

                        <h4>Our Global Footprint</h4>
                        <p>Headquartered in <strong>Shenzhen, China</strong>—a global hub for technology and innovation—our strategic location allows us to integrate cutting-edge manufacturing and R&D. This enables us to bring advanced, cost-effective solutions to the international market, ensuring that veterinary practices everywhere have access to the tools they need to excel.</p>

                        <h4>Our Promise</h4>
                        <p>At Willway, we understand that behind every procedure is a life worth saving. Our name is synonymous with:</p>
                        <ul>
                            <li><strong>Reliability:</strong> Equipment that performs where it matters most.</li>
                            <li><strong>Performance:</strong> Advanced features that enhance diagnostic accuracy and surgical outcomes.</li>
                            <li><strong>Compassion:</strong> Technology designed with the well-being of both the animal and the veterinarian in mind.</li>
                        </ul>
                        <p>We are committed to being your partner in progress, supporting you from routine check-ups to complex surgical interventions. Together, we are <strong>transforming innovation for enriched lives.</strong></p>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}

export default Aboutus