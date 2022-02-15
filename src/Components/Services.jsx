import React from 'react'
import bildA from '../images/david-monje-Oa87HmW6vds-unsplash.jpg'
import bildB from '../images/silas-baisch-2wuN3vMx2mo-unsplash.jpg'
import bildC from '../images/john-arano-wEnGMip9qBw-unsplash.jpg'
import Certificate from './Certificate'
export default function Services() {
    return (
        <section id="services" className="s-about target-section">
            <div className="row services-list block-large-1-3 block-medium-1-2 block-tab-full">

                <div className="column item-service" data-aos="fade-up">
                    <div className="item-service__content">
                        <h4 className="item-title">Brand Identity</h4>
                        <p>
                            Die Strahlkraft einer Marke entfaltet sich in ihrer charakteristischen Gestalt - im
                            Design.
                            Mein Ziel: Unverwechselbare Erscheinungsbilder zu kreieren, die nachhaltig
                            Aufmerksamkeit erzeugen.
                        </p>
                    </div>
                </div>

                <div className="column item-service" data-aos="fade-up">
                    <div className="item-service__content">
                        <h4 className="item-title">Illustration</h4>
                        <p>
                            <br/>
                            <br/>
                            <br/>
                            Gute Illustrationen vermitteln jede Botschaft auf den ersten Blick. Ihr Außenauftritt
                            wird unverwechselbar!
                        </p>
                    </div>
                </div>

                <div className="column item-service" data-aos="fade-up">
                    <div className="item-service__content">
                        <h4 className="item-title">Web Design</h4>
                        <p>
                            Ob ineinandergreifende Corporate Design Systeme oder visuelle Konzepte
                            ihr Design ist bei mir in guten Händen.
                        </p>
                    </div>
                </div>

                <div className="column item-service" data-aos="fade-up">
                    <div className="item-service__content">
                        <h4 className="item-title">Product Strategy</h4>
                        <p>
                            Damit ihre Kunden sie gut finden erstelle ich Webseiten für moderne Suchmaschinen (SEO)
                        </p>
                    </div>
                </div>

                <div className="column item-service" data-aos="fade-up">
                    <div className="item-service__content">
                        <h4 className="item-title">UI/UX Design</h4>
                        <p>
                            Die Eckpunkte für erfolgreiche Produktstrategien sind Markt- und Zielgruppenanalyse,
                            Alleinstellungsmerkmale, Leistungsversprechen und Unternehmensziele. Sowohl user
                            interface als auch
                            user experiance finden bei mir durch Statusanalyse, Wettbewerbsanalyse, Nutzer-Analyse,
                            Content-Analyse
                            und Marken/CD- Analyse statt.

                        </p>
                    </div>
                </div>

                <div className="column item-service" data-aos="fade-up">
                    <div className="item-service__content wheel">
                        <div className="mobile">
                        <div><img className="img-mobile" src={bildA} alt="mobile1"></img></div>
                        <div><img className="img-mobile" src={bildB}alt="mobile2"></img></div>
                        <div><img className="img-mobile" src={bildC}alt="mobile3"></img></div>
                    </div>
                        <h4 className="item-title">Mobiles Design</h4>
                        <p>
                            Der Schlüssel zum Erfolg mit mobilem Design und responsive Homepages.
                        </p>
                    </div>
                </div>

            </div> 
            <Certificate />
    </section>
    )
}
