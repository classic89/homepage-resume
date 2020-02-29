import React from 'react'
import Helmet from 'react-helmet'
import 

import Layout from '../components/layout'

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Megan Wilson"
        const siteDescription = "My Resume"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>A poet, a programmer, an acrobat, a skater, and a dog mom</h2>
                        </header>
                        <p>This is the paragraph</p>
                        <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>
                        <div class="row">
							<ul class="col-6 col-12-xsmall work-item">
								<a href="../images/01.jpg" class="image fit thumb"><img src="../images/01.jpg" alt="" /></a>
								<h3>Magna sed consequat tempus</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</ul>
							<ul class="col-6 col-12-xsmall work-item">
								<a href="../images/02.jpg" class="image fit thumb"><img src="../images/02.jpg" alt="" /></a>
								<h3>Ultricies lacinia interdum</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</ul>
							<ul class="col-6 col-12-xsmall work-item">
								<a href="../images/03.jpg" class="image fit thumb"><img src="../images/03.jpg" alt="" /></a>
								<h3>Tortor metus commodo</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</ul>
						</div>
                        <ul className="actions">
                            <li><a href="/blog/my-first-post" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <div className="row">
                            <div className="col-8 col-12-small">
                                <form method="post" action="#">
                                    <div className="row gtr-uniform gtr-50">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon solid fa-home"><span className="label">Address</span></h3>
                                        Austin, TX 78747<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon solid fa-mobile"><span className="label">Phone</span></h3>
                                        512-790-4754
                                    </li>
                                    <li>
                                        <h3 className="icon solid fa-envelope"><span className="label">Email</span></h3>
                                        <a href="#">megan@meganlynnwilson.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
