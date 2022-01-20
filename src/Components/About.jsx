import React from 'react'
import Lebenslauf from '../images/LebenslaufRainerBahlsV04.pdf';
export default function About() {
    return (
        <section id="about" className="s-about target-section">

        <div className="about-me">

            <div className="row heading-block" data-aos="fade-up">
                <div className="column large-full">
                    <h2 className="section-heading">About Me</h2>
                </div>
            </div>
            
            <div className="row about-me__content" data-aos="fade-up">
                <div className="column large-full about-me__text">
                    <p className="lead">
                        Nach meiner Ausbildung zum Kaufmann im Einzelhandel habe ich 7 Jahre als freiberuflicher
                        Verkaufsförderer und Fachberater in Berlin gearbeitet. Die wichtigsten Auftraggeber waren hier
                        Hewlett Packard, Beiersdorf (tesa) und Philips Consumer Electronics.
                        Zeitgleich absolvierte ich die Abendschule, um mein Studium zum Handelsfachwirt abzuschließen.
                    </p>

                    <p>
                        Wieder zurück in Ostfriesland begann ich bei der EWE AG, zuerst als Geschäftskundenberater der
                        EWE TEL
                        und im Anschluss als Kundenberater Energie & Telekommunikation für insgesamt 11 Jahre.
                        Meine Hauptaufgaben neben der professonellen Kundenberatung waren: Pflege des
                        Warenwirtschaftssystems
                        und Disposition, Kundenanlage und Verwaltung, Abschlagsanalyse und Berechnung,
                        Ratenplanerstellung
                        und Auswertung, Bearbeitung von Reklamations- und Beschwerdeanträgen. Alle Tätigkeiten wurden im
                        SAP ERP System durchgeführt.

                    </p>

                    <p>
                        Im Anschluss habe ich während der Erwerbslosigkeit mein Englisch enorm auf B2 verbessert und
                        eine Ausbildung zum SAP Berater absolviert. Die Schwerpunkte dieser Weiterbildung waren:
                        Prozesse im Vertrieb, Materialwirtschaft, Berechtigungskonzepte, Solution Management und
                        übergreifendes Customizing.

                    </p>

                    <p>
                        Nach 2-jähriger Tätigkeit als Fachberater und unter Berücksichtigung der lockdown Situation begann
                        ich die Weiterbildung als
                        Web- und Softwareentwicker im remote Unterricht. Programme der Retension werden unterstützt
                        durch html,css,scss,sass,javascript und React.
                        Der berufsbezogene Unterricht wird mit zusätzlichen Englischunterricht komplettiert.
                    </p>
                </div>
            </div>

            <div className="row about-me__buttons">
                <div className="column large-half tab-full" data-aos="fade-up">
                    
                    <a href="mailto:rainer.bahls@gmx.de?&subject=Ihr%20Portfolio&body=Sehr%20geehrter%20Herr%20Bahls" className="btn btn--stroke full-width">stell mich ein</a>
                </div>
                <div className="column large-half tab-full" data-aos="fade-up">
                <a href = {Lebenslauf} target = "_blank"className="btn btn--primary full-width">Download CV</a>
                    
                </div>
            </div>
        </div>
         </section>   
        
    )
}
