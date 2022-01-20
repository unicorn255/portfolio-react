import React from 'react'

export default function Contact() {
    return (
        <>
        <section className="s-cta ss-dark">

        <div className="row heading-block heading-block--center" data-aos="fade-up">
            <div className="column large-full">
                <h2 className="section-desc">
                    Need a great reliable web hosting?
                </h2>
            </div>
        </div> 

        <div className="row cta-content" data-aos="fade-up">
            <div className="column large-full">
                <p>
                    We highly recommend <a href="https://www.visschers-fritzen.de/">Visschers-Fritzen</a>.
                    Powerful web and Wordpress hosting. Guaranteed.
                </p>

                <a href="https://www.visschers-fritzen.de/" className="btn full-width">Get Started</a>
            </div>
        </div> 
</section>
    
    <section id="contact" className="s-contact ss-dark target-section">

    <div className="row heading-block" data-aos="fade-up">
        <div className="column large-full">
            <h2 className="section-heading">Get In Touch</h2>
        </div>
    </div>

    <div className="row contact-main" data-aos="fade-up">
        <div className="column large-full">
            <p className="contact-email">
                <a href="mailto:#0">rainer.bahls@gmx.de</a>
            </p>

            <p className="section-desc">
                I'm happy to connect, listen and help. Let's work together and build
                something awesome. Let's turn your idea to an even greater product.
                <a href="mailto:rainer.bahls@gmx.de">Email Me</a>.
            </p>
        </div>
    </div>

    <div className="row contact-infos" data-aos="fade-up" data-aos-anchor=".contact-main">

        <div className="column large-5 medium-full contact-phone">
            <h4>Call Me</h4>
            <a href="tel:0162 9797627">+49 162 9797627</a>
        </div>

        <div className="column large-7 medium-full contact-social">
            <h4>Social</h4>
            <ul>
                <li><a href="https://www.facebook.com/rainer.bahls.3" title="Facebook">Facebook</a></li>
                <li><a href="https://www.xing.com/profile/Rainer_Bahls2/cv" title="Xing">Xing</a></li>
                <li><a href="https://www.instagram.com/rainerbahls" title="Instagram">Instagram</a></li>
            </ul>
        </div>

    </div>

</section>        
</>  
    )
}
