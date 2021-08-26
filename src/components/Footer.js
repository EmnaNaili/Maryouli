import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "-50px",
                   marginLeft: "400px" }}>
        Maryouli.tn
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Our Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Selling T-shirts</FooterLink>
            <FooterLink href="#">Customize T-Shirts</FooterLink>
          
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Emna.Naili@gmail.com</FooterLink>
            <FooterLink href="#">+216 93 570 188 </FooterLink>
            
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
           
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;