"use client";
import HomeintroVideo from './HomeintroVideo';
import DentalSection from '@/page/DentalSection';
import PumpSection from '@/page/PumpSection';
import Commitment from '@/assets/Commitment.png';
import WaythesiaSection from '@/page/WaythesiaSection';
import { selectAllVideos } from '@/store/videoSlice';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import card1 from '@/assets/svg_1.png';
import card2 from '@/assets/svg_2.png';
import card3 from '@/assets/svg_3.png';

const Home = () => {
    const video = useSelector(selectAllVideos);
    const item1 = video.find((v) => v.id === 7);

    return (
        <>
            <main id="content" className="">
                <HomeintroVideo />
                <gdm-jumplinks className="glue-jumplinks jumplinks jumplinks--static" aria-label="Contents" role="navigation">

                    <ul className="glue-jumplinks__list">
                        <li className="glue-jumplinks__list-item">
                            <a className="glue-jumplinks__link" href="#Waythesia">Waythesia</a>
                        </li>
                        <li className="glue-jumplinks__list-item">
                            <a className="glue-jumplinks__link" href="#dental">Dental</a>
                        </li>
                        <li className="glue-jumplinks__list-item">
                            <a className="glue-jumplinks__link" href="#pumps">Pumps</a>
                        </li>
                        <li className="glue-jumplinks__list-item">
                            <a className="glue-jumplinks__link" href="#benchmarks">Performance</a>
                        </li>
                        <li className="glue-jumplinks__list-item">
                            <a className="glue-jumplinks__link" href="#safety-responsibility">Quality
                                &amp; Reliability</a>
                        </li>
                        <li className="glue-jumplinks__list-item">
                            <a className="glue-jumplinks__link" href="#Acknowledgements">About Willway</a>
                        </li>
                    </ul>

                </gdm-jumplinks>

                <div className="glue-page bookmark" id="Waythesia">
                    <WaythesiaSection />
                </div>

                <div className="glue-page bookmark" id="dental">
                    <DentalSection />
                </div>

                <div className="glue-page bookmark" id="pump">
                    <PumpSection />
                </div>

                <div className="glue-page bookmark" id="creators">
                    <div className="page-cover glue-grid page-cover--full">
                        <div
                            className="page-cover__content glue-grid__col glue-grid__col--span-12 glue-grid__col--span-12-md page-cover__content--centered page-cover__content--mono">

                            <h2 className="page-cover__title glue-headline glue-headline--headline-2">Our Commitment to Veterinary Excellence</h2>


                            <div className="page-cover__description">
                                <p data-block-key="l1g4j">Willway is dedicated to advancing animal healthcare through precision-engineered medical equipment. We partner with veterinary professionals to develop reliable, innovative solutions that enhance diagnostic accuracy, surgical outcomes, and overall patient care. Our focus is on providing tools that are intuitive, durable, and designed to meet the real-world demands of modern veterinary practice.</p>
                            </div>


                            <div className="button glue-button glue-button--high-emphasis" >
                                <span className="button__text">View Our Products</span>
                            </div>
                        </div>




                        <picture
                            className="picture page-cover__media page-cover__image glue-grid__col glue-grid__col--span-12 glue-grid__col--span-12-md">

                            <img alt="" className="picture__image" height="1080" role="presentation"
                                src={Commitment}
                                width="1296" />
                        </picture>


                    </div>


                </div>

                <div className="glue-page bookmark" id="capabilities">
                    <div className="section-title section-title--large">

                        <h2 className="glue-headline glue-headline--headline-2 section-title__title" >Advanced Veterinary Solutions from Willway</h2>
                        <div className="glue-headline glue-headline--headline-4 section-title__description" >
                            <p data-block-key="qhc5b">Delivering greater precision, reliability, and care for every patient</p>
                        </div>

                    </div>





                    <div className="section-title section-title--large">

                        <h2 className="glue-headline glue-headline--headline-2 section-title__title" >Precision-Engineered Veterinary Care
                        </h2>
                        <div className="glue-headline glue-headline--headline-4 section-title__description" >
                            <p data-block-key="qhc5b">Ensure optimal patient care by using Willway's advanced tools, designed for accuracy and reliability in every procedure.</p>
                        </div>

                    </div>


                    <div className="single-media single-media--large">
                        <div className="single-media__media">
                            {item1 && (
                                <div className="gdm-video-embed gdm-video-embed--muted" key={item1.id}>
                                    <ReactPlayer
                                        url={item1.video_url}
                                        playing
                                        className="gdm-video-embed__player"
                                        muted
                                        loop
                                        width="1920"
                                        height="1080"
                                        playsinline
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="glue-page bookmark" id="benchmarks" >
                        <div className="section-title">
                            <h2 className="glue-headline glue-headline--headline-2 section-title__title" >Proven Performance</h2>
                            <div className="glue-headline glue-headline--headline-4 section-title__description" >
                                <p data-block-key="hiv7b">Willway equipment delivers superior results in side-by-side comparisons, consistently preferred by veterinary professionals for reliability and performance.</p>
                            </div>
                            <div className="section-title__cta" ><div className="button glue-button glue-button--high-emphasis">
                                <span className="button__text">View Our Products</span>
                            </div></div>
                        </div>
                    </div>


                    <div className="glue-page bookmark" id="safety-responsibility">
                        <div className="section-title">
                            <h2 className="glue-headline glue-headline--headline-2 section-title__title" >Quality &amp; Reliability</h2>
                            <div className="glue-headline glue-headline--headline-4 section-title__description" >
                                <p data-block-key="uai4t">We build Willway equipment with responsibility and patient safety at the core. Our products undergo rigorous testing and quality checks by our engineers and veterinary experts to ensure they meet the highest standards before reaching your practice. It's crucial to introduce medical technologies in a responsible way. To achieve this, every Willway product is designed with built-in safety features, undergoes strict quality control, and is backed by comprehensive certifications to ensure reliable performance and patient well-being.</p>
                            </div>
                        </div>


                        <div className="section-title">
                            <h2 className="glue-headline glue-headline--headline-2 section-title__title" >Commitment to Advancement</h2>
                            <div className="glue-headline glue-headline--headline-4 section-title__description" >
                                <p data-block-key="qhc5b">While Willway products represent the forefront of veterinary technology, we view every innovation as a step in an ongoing journey. Our team is continuously refining device accuracy, user interface design, and integration capabilities based on real-world feedback from veterinary professionals. We are dedicated to constant evolution to better serve the advancing needs of animal healthcare.</p>
                            </div>
                        </div>


                        <div className="section-title">
                            <h2 className="glue-headline glue-headline--headline-2 section-title__title" >Empowering Veterinary Practices</h2>
                            <div className="glue-headline glue-headline--headline-4 section-title__description" >
                                <p data-block-key="qhc5b">Discover how clinics and hospitals are leveraging Willway equipment to enhance diagnostic and surgical care.</p>
                            </div>
                        </div>

                        <section className="willway-card-group">
                            <ul className="glue-grid glue-no-bullet willway-card-group__grid cards" >
                                <li className="glue-grid__col glue-grid__col--span-6-md glue-grid__col--span-4-lg glue-grid__col--span-4">
                                    <div className="glue-card card card--feature">
                                        <div className="glue-card__inner">
                                            <picture className="picture glue-card__asset">
                                                <img alt="" className="picture__image" height="540" loading="lazy" role="presentation"
                                                    src={card1} width="960" />
                                            </picture>
                                            <div className="glue-card__content">
                                                <p className="glue-headline glue-headline--headline-5">Advanced Anesthesia Solutions</p>
                                                <div className="glue-card__description">
                                                    <p data-block-key="zx4is">Willway anesthesia machines are trusted in modern animal hospitals, integrating ventilators and touchscreen monitoring to streamline surgical workflows and ensure patient safety.</p>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                    </div>
                                </li>

                                <li className="glue-grid__col glue-grid__col--span-6-md glue-grid__col--span-4-lg glue-grid__col--span-4">
                                    <div className="glue-card card card--feature" >
                                        <div className="glue-card__inner">
                                            <picture className="picture glue-card__asset">
                                                <img alt="" className="picture__image" height="540" loading="lazy" role="presentation"
                                                    src={card2} width="960" />
                                            </picture>
                                            <div className="glue-card__content">
                                                <p className="glue-headline glue-headline--headline-5">Precision Surgical Tools</p>
                                                <div className="glue-card__description">
                                                    <p data-block-key="zx4is">Veterinary surgeons rely on Willway's ultrasonic scalpels and electrosurgical units for minimal invasive procedures, reducing operation time and improving recovery.</p>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                    </div>
                                </li>

                                <li className="glue-grid__col glue-grid__col--span-6-md glue-grid__col--span-4-lg glue-grid__col--span-4 cards--offset-md">
                                    <div className="glue-card card card--feature" >
                                        <div className="glue-card__inner">
                                            <picture className="picture glue-card__asset">
                                                <img alt="" className="picture__image" loading="lazy"
                                                    src={card3} />
                                            </picture>
                                            <div className="glue-card__content">
                                                <p className="glue-headline glue-headline--headline-5">Comprehensive Diagnostic Systems</p>
                                                <div className="glue-card__description">
                                                    <p data-block-key="zx4is">From digital microscopy to biochemistry analyzers, Willway provides accurate and rapid diagnostic solutions that support effective treatment plans for a range of animals.</p>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home