import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import '../index.css';


export default function Classification() {
    return (
        <div>

            <Container>

                <Row>
                    <Col xs={12} md={8}>
                        <h4>What is classification?</h4>
                        <p>
                            Classification is the process of giving age ratings and content advice to films and other audiovisual content to help children and families choose what’s right for them and avoid what’s not.

                            Recommendations are made by our Compliance Officers based on the BBFC’s published Guidelines. These are the result of extensive consultation with people right across the UK, research, and the BBFC’s more than 100 years of experience. They reflect people’s views on film, DVD, Blu-ray, video on demand (VoD) regulation and are regularly updated.
            </p>
                    </Col>

                    <Col xs={12} md={8}>
                        <h4>The process</h4>
                        <p>Films for cinema release are usually seen by at least two of our Compliance Officers, and in most cases, their age rating recommendation is approved by the Compliance Manager or the Head of Compliance.

                        If Compliance Officers are in any doubt, if a film is on the borderline between two categories, or if important policy issues are involved, it may be seen by other members of the BBFC, up to and including the Chief Executive, the President and Vice Presidents. Occasionally, we may also call for expert advice about the legal acceptability of film content or its potential for harm.

                        DVDs and VoD films and series are normally seen by one Compliance Officer, but opinions from other Officers, the Compliance Manager, the Head of Compliance and Board of Classification may be required for more difficult content.
            </p>
                    </Col>

                    <Col xs={12} md={8}>
                        <h4>The issues</h4>
                        <p>Compliance Officers look at issues such as bad language, dangerous behaviour, discrimination, drugs, horror, nudity, sex, violence and sexual violence, when making recommendations.
                        They also consider context, tone and impact - how it makes the audience feel - and even the release format - for example, as DVDs, Blu-rays and VoD content are generally watched at home,
             there is a higher risk of under-age viewing.</p>
                        <p>All classification decisions are based on the BBFC’s published and regularly updated Guidelines.
                        The Guidelines are the product of extensive public consultation, research and the accumulated experience of the BBFC over many years.
                        They reflect current views on film, DVD and video game regulation.</p>
                        <h4> Click the images below to find out more...</h4>
                    </Col>
                </Row>
                <Row>

                    <Col xs={6} md={4} style={{ color: "white" }}>
                        <p>
                            <a href="https://www.bbfc.co.uk/about-classification/u">
                                <img class="media-image" height="45" width="50" src="/U_RGB.png" /></a>
                            <br />Suitable for all</p>
                    </Col>

                    <Col xs={6} md={4} style={{ color: "white" }}>
                        <p><a href="https://www.bbfc.co.uk/about-classification/pg">
                            <img class="media-image" height="45" width="50" typeof="foaf:Image" src="/PG_RGB.png" /></a>
                            <br />Parental guidance</p>
                    </Col>

                    <Col xs={6} md={4} style={{ color: "white" }}>
                        <p><a href="https://www.bbfc.co.uk/about-classification/12a-and-12">
                            <img alt="" class="media-image" height="50" width="50" typeof="foaf:Image" src="/12A_RGB.png" /></a>
                            <br />Cinema release suitable for 12 years and over</p>
                    </Col>
                    <Col xs={6} md={4} style={{ color: "white" }}>
                        <p><a color="black" href="/about-classification/12a-and-12">
                            <img alt="" class="media-image" height="50" width="50" typeof="foaf:Image" src="/12_RGB.png" /></a>
                            <br />Video release suitable for 12 years and over</p>
                    </Col>

                    <Col xs={6} md={4} style={{ color: "white" }}>
                        <p><a href="https://www.bbfc.co.uk/about-classification/15">
                            <img alt="" class="media-image" height="50" width="50" typeof="foaf:Image" src="/15_RGB.png" /></a>
                            <br />Suitable only for 15 years and over</p>
                    </Col>

                    <Col xs={6} md={4} style={{ color: "white" }}>
                        <p><a href="https://www.bbfc.co.uk/about-classification/18">
                            <img alt="" class="media-image" height="50" width="50" typeof="foaf:Image" src="/18_RGB.png" /></a>
                            <br />Suitable only for adults</p>
                    </Col>

                    <Col xs={6} md={4} style={{ color: "white" }}>
                        <p><a href="https://www.bbfc.co.uk/about-classification/r18">
                            <img alt="" class="media-image" height="50" width="50" typeof="foaf:Image" src="/R18.png" /></a>
                            <br />Adults works for licensed premises only</p>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}