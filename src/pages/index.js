import React from 'react'
import Helmet from 'react-helmet'

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
                            <h2></h2>
                        </header>
                        <p>This is the paragraph</p>
                        <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>
                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <h1 id="megan-wilson"><strong>Megan Wilson</strong></h1>
                        <p><a href="mailto:&#109;&#x65;&#103;&#97;&#x6e;&#x40;&#109;&#x65;&#103;&#x61;&#x6e;&#108;&#121;&#110;&#110;&#119;&#105;&#108;&#115;&#x6f;&#x6e;&#x2e;&#x63;&#111;&#109;">&#109;&#x65;&#103;&#97;&#x6e;&#x40;&#109;&#x65;&#103;&#x61;&#x6e;&#108;&#121;&#110;&#110;&#119;&#105;&#108;&#115;&#x6f;&#x6e;&#x2e;&#x63;&#111;&#109;</a> | 512-790-4754 | Austin, Texas</p>
                        <hr>
                            <p>LinkedIn:     <a href="https://linkedin.com/in/megan-wilson-20414b41">https://linkedin.com/in/megan-wilson-20414b41</a> 
                            Github:        <a href="https://github.com/classic89">https://github.com/classic89</a> 
                            Website:     <a href="http://www.meganlynnwilson.com">http://www.meganlynnwilson.com</a></p>
                        <hr>
                        <p>Full Stack Developer with a background in cybersecurity, universal design, and teaching.
                        Experienced in unit testing and REST development in full stack agile enterprise
                        environments. Well versed in driving cross-functional collaboration across
                        varied organizational subcultures, and global teams. Passionate about enhancing
                        people&#39;s lives and has a creative perspective on difficult problems.</p>
                        <h2 id="technical-skills"><strong>TECHNICAL SKILLS</strong></h2>
                        <hr>
                        <p>Java, Python, SQL, Oracle, JavaScript, jQuery, AngularJS, GIT, Github, MySQL,
                        HTML, CSS, Bootstrap, APIs, JSON, REST, AJAX, the command line, computer science
                        fundamentals, writing tests, Intellij, Eclipse IDE, Rational, VSCode, Spring
                        MVC, Spring Boot, Django Rest/Angular, API design, Micro Architecture,
                        Subversion, ClearCase, Agile/Scrum methodology, Infor Certified Workbrain
                        Consultant</p>
                        <h2 id="applications-built"><strong>APPLICATIONS BUILT</strong></h2>
                        <hr>
                        <p><em>Home Page Resume</em> | <a href="http://www.meganlynnwilson.com">http://www.meganlynnwilson.com</a></p>
                        <ul>
                        <li><p>JavaScript Application written using React Native and GatsbyJS</p>
                        </li>
                        <li><p>Full CI/CD Pipeline including unit tests implemented myself</p>
                        </li>
                        <li><p>JQuery Database calls to build the resume and allow downloadable multiple
                        formats</p>
                        </li>
                        </ul>
                        <p><em>Bike Check</em></p>
                        <ul>
                        <li><p>Collaborated in a hackathon to create a bike checkout system for Recording
                        bike status and usage through an MFA service focusing on biometrics.</p>
                        </li>
                        <li><p>Built with a Raspberry pi and the Microsoft Azure platform</p>
                        </li>
                        <li><p>Setup the RFID detection device by writing the driver and helped create the
                        User Interface</p>
                        </li>
                        </ul>
                        <p><em>Built a 3D Printer</em></p>
                        <ul>
                        <li><p>Based on the RepRap Design and Printrbot</p>
                        </li>
                        <li><p>Had to rewrite a driver and slicing application using Python</p>
                        </li>
                        <li><p>Built using Arduino and Printrbot pieces</p>
                        </li>
                        </ul>
                        <h2 id="experience"><strong>EXPERIENCE</strong></h2>
                        <hr>
                        <p><strong>Technology Education and Literacy in Schools (TEALS) 07/2019 - 5/2020</strong></p>
                        <p><em>Computer Science Consultant at Smithville High School</em></p>
                        <ul>
                        <li><p>Microsoft Philanthropies program that connects classroom teachers with
                        tech-industry consultants to create sustainable Computer Science programs in
                        high Schools across the United States.</p>
                        </li>
                        <li><p>Consultant support teachers as they learn to teach Computer Science
                        independently over time.</p>
                        </li>
                        <li><p>Consultant lead the lessons for the class while the classroom teacher learns
                        the content alongside the students.</p>
                        </li>
                        <li><p>Consultants participate in two to three classes per week and meet regularly
                        with their team to track progress and plan upcoming lessons.</p>
                        </li>
                        </ul>
                        <p><strong>Walmart 10/2017 - 07/2019</strong></p>
                        <p><em>Software Engineer II &amp; III</em></p>
                        <ul>
                        <li><p>Manage small to medium-sized complex team projects to improve the testing
                        framework in Workbrain by helping teach and implement Junit tests and
                        Selenium tests</p>
                        </li>
                        <li><p>Troubleshoot business solutions for core systems such as Workbrain,
                        Pathways, and Hubble, which serve over 200M employees’ payroll, training,
                        and financial security daily</p>
                        </li>
                        <li><p>Implement continuous integration using a version of Jenkin called looper,
                        that was integrated with Cucumber for builds, unit tests, and delivery at a
                        global scale, ensuring a fluid customer experience</p>
                        </li>
                        <li><p>Continuous emphasis on ethics and integrity when testing code to ensure
                        universal design compliant with Walmart policy</p>
                        </li>
                        <li><p>Hubble -Internal application utilized by the legal department to track
                        fraudulent reporting and activity. The application is written in Python on
                        the back end and Angular on the front end. Help create a neural network
                        based on specifications from Data Scientists in Python that was trained on
                        paralegals to identify instances of fraud in emails with RESTful API
                        reporting engine that connected to a AngularJS frontend application for the
                        paralegals to interact and report with.</p>
                        </li>
                        <li><p>Workbrain- Springboot/Java application that helps manage employee activity
                        to ensure payroll amounts are correct. The Application was Highly customized
                        version of Infor’s Workbrain which had a long legacy of code that needed
                        updating by refactoring the architecture from a monolithic architecture to a
                        microarchitecture by breaking up customized function into more contained
                        APIs that would interface better with the HR software such as termination,
                        onboarding, training, etc.</p>
                        </li>
                        <li><p>Pathways – a training application for employees. Java stack using a spring
                        boot library and an Angular frontend. It needed APIs to connect with other
                        applications such as Workbrain. It also needed a mobile first UI/UX where
                        the employee could interact from their smartphone</p>
                        </li>
                        </ul>
                        <p><strong>Mitratech 4/2015 - 5/2017</strong></p>
                        <p><em>Software Engineer I &amp; II</em></p>
                        <ul>
                        <li><p>Modernized the presentation tier of the flagship Enterprise Legal Management
                        (ELM) product built on a Java stack</p>
                        </li>
                        <li><p>Using Bootstrap, a JS, CSS, HTML library, improved the product’s 508
                        compliance, internationalization and user experience</p>
                        </li>
                        <li><p>Utilized REST API calls to build adapters as part of the development of a
                        document management system, moving from an Oracle database to multiple cloud
                        integrations</p>
                        </li>
                        <li><p>Experienced in continuous integration processes, including usage of
                        Atlassian Bamboo for continuous builds and unit testing using Agile
                        development best practices</p>
                        </li>
                        </ul>
                        <p><strong>University of Denver 5/2012 - 12/2013</strong></p>
                        <p><em>Computer Science Tutor for the disabilities department</em> </p>
                        <ul>
                        <li><p>Created innovative programming methods using visual and kinesthetic
                        techniques for differently-abled students who were studying and learning
                        software programming</p>
                        </li>
                        <li><p>Installed and demonstrated software programs to make text more accessible to
                        individuals who are differently-abled</p>
                        </li>
                        <li><p>Worked with Audio Visual Calculator, WindowEyes, Touch Tactile Tablet, Touch
                        Tactile Pen, Dragon Naturally Speaking, Kurzweil 3000, Read and Write Gold,
                        Swell Graphics, Daisy Files, and mp3 of text-to-speech</p>
                        </li>
                        </ul>
                        <h2 id="volunteer-experience"><strong>VOLUNTEER EXPERIENCE</strong></h2>
                        <hr>
                        <p><strong>Austin Pets Alive (APA!) 10/2015 - 04/2016</strong></p>
                        <p><em>Volunteer Dog Walker</em></p>
                        <ul>
                        <li><p>Volunteers help get all of the dogs fed, watered and provide a fresh blanket</p>
                        </li>
                        <li><p>Volunteers are needed throughout the day for general support activities to
                        meet animals basic needs, such as laundry, poop fairying, and KONG stuffing.</p>
                        </li>
                        <li><p>Volunteers ensure APA! dogs get the walks, exercise and tender loving care
                        they need and deserve</p>
                        </li>
                        <li><p>Volunteers help guide attendees to their seats.</p>
                        </li>
                        </ul>
                        <p><strong>Apraxia Kids (CASANA) 06/2013 - 07/2013</strong></p>
                        <p><em>Volunteer Ambassador</em></p>
                        <ul>
                        <li><p>The conference addressed all aspects of speech, language, and learning for
                        children impacted by apraxia.</p>
                        </li>
                        <li><p>Volunteers helped sell merchandise</p>
                        </li>
                        <li><p>Volunteers talk about their experiences from having a family member
                        afflicted with apraxia.</p>
                        </li>
                        <li><p>Volunteers help guide attendees to their seats.</p>
                        </li>
                        </ul>
                        <h2 id="education"><strong>EDUCATION</strong></h2>
                        <hr>
                        <p><strong>University of Denver, Denver, CO</strong></p>
                        <p><em>Bachelor of Science (B.S.), Computer Science 2014</em></p>
                        <p><strong>Landmark College, Putney, VT</strong></p>
                        <p><em>Associates of Arts (A.A), Liberal Arts concentrating in Forensic Science 2011</em></p>

                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
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
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        2501 Wickersham Lane<br />
                                        Apt 1024<br />
                                        Austin, TX 78741<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        512-790-4754
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">classic@meganlynnwilson.org</a>
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
