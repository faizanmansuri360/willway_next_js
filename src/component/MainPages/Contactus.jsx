import { FaAddressBook } from 'react-icons/fa';
import contact from '../../../public/assets/contact.jpg';

const Contactus = () => {
    return (
        <>
            <div className="glue-page bookmark flex-font">
                <div className="section-title flex-font">
                    <h2 className="glue-headline glue-headline--headline-2 section-title__title flex-font" >Contact Us
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
                                    src="/assets/contact.jpg"
                                    width="640" />
                            </picture>
                        </figure>

                    </div>
                    <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--span-12-md section-breaker__content">
                        <section className="section">
                            <div className="container">
                                <div className="row justify-content-between">

                                    <div className="col-lg-12">
                                        <div className="d-flex mb-60">
                                            {/* <FaAddressBook className='contact-icon' /> */}
                                            <div className="d-grid">
                                                <div>
                                                    <h4>UK Address :</h4>
                                                    <p className="text-gray">34–35 Holborn Business Center Hatton Garden, Holborn, London EC1N 8DX, United Kingdom</p>
                                                </div>
                                                <div>
                                                    <h4>CN Address :</h4>
                                                    <p className="text-gray">5 Yipeng Industrail Park, Guansheng 2nd Rd, Luhu Community, Guanhu Street, Longhua District, Shenzhen City, Guangdong, China.</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="d-flex mb-60">
                                            <i className="ti-mobile contact-icon"></i>
                                            <div>
                                                <h4>Call Us Now</h4>
                                                <p className="text-gray mb-0">+86 158 1749 7863</p>
                                            </div>
                                        </div>
                                        <div className="d-flex mb-60">
                                            <i className="ti-email contact-icon"></i>
                                            <div>
                                                <h4>Write Us Now</h4>
                                                <p className="text-gray mb-0">sales@willwaybiotech.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactus