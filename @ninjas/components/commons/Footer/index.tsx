import React from "react";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import Text from "../../foundation/Text";
import {
  DefaultFooterWrapperProps,
  FooterWrapper,
  LeftSide,
  RightSide,
  CentralSide,
} from "./styles/FooterWrapper";

const Footer: React.FC<DefaultFooterWrapperProps> = (props) => {
  return (
    <FooterWrapper {...props}>
      <LeftSide>
        <Text
          variant="paragraph1"
          tag="h3"
          color="secondary.main"
          textAlign={{
            xs: "center",
            md: "center",
          }}
          fontFamily="Montserrat"
        >
          © 2021 All Rights Reserved | Company Name
        </Text>
      </LeftSide>
      <CentralSide>
        <a href="https://www.alura.com.br/">
          <FiInstagram />
        </a>
        <a href="https://www.alura.com.br/">
          <FiTwitter />
        </a>
        <a href="https://www.alura.com.br/">
          <FiFacebook />
        </a>
      </CentralSide>
    </FooterWrapper>
  );
};

export default Footer;
