import React from "react";
import FormEmail from "@patterns/FormEmail";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Text from "../foundation/Text";
import { Box } from "../foundation/Layout/Box";
import { Grid } from "../foundation/Layout/Grid";

const contactScreen = () => {
  return (
    <Box display="flex" flexDirection="column" flex="1">
      <Grid.Row
        marginBottom={{ xs: "50px", md: "100px" }}
        display={{ xs: "block", md: "flex" }}
        background="#d5a18e"
        width="100%"
        margin="0"
      >
        <Grid.Col
          value={{ xs: 12, md: 12 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-center"
          height={{ xs: "500px" }}
          paddingLeft={{ xs: "30px", lg: "10px" }}
          justifyContent="center"
          flexDirection="column"
          background={{ xs: "url(/images/wallpaper_sofa.png)", md: "none" }}
          backgroundPosition={{ xs: "center", md: 0 }}
        >
          <Grid.Container
            width={{ xs: "400px", md: "400px" }}
            background={{ xs: "#b8b8b8d1", lg: "none" }}
            marginTop={{ xs: "500px", lg: "50px" }}
            marginBottom={{ xs: "300px", md: "10px" }}
            paddingTop={{ xs: "10px" }}
          >
            <Text
              variant="titleXL"
              tag="h1"
              color="tertiary.light"
              textAlign={{
                xs: "center",
                md: "center",
              }}
              marginTop="0"
              marginBottom={{ lg: "100px" }}
              fontFamily="Montserrat"
            >
              Contato
            </Text>

            <Grid.Container
              paddingLeft={{ lg: 0 }}
              display="flex"
              justifyContent={{ xs: "center", lg: "left" }}
            />
          </Grid.Container>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row
        marginBottom={{ xs: 0, md: "100px" }}
        display={{ xs: "block", md: "flex" }}
        width="100%"
        margin="0"
      >
        <Grid.Col value={{ xs: 12, md: 6 }} paddingLeft={{ lg: "300px" }}>
          <Grid.Container marginTop={{ lg: "90px" }}>
            <Text
              variant="paragraph1"
              tag="h1"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              marginTop="0"
              marginBottom={{ lg: "50px" }}
              fontFamily="Montserrat"
            >
              <FiMapPin /> Rua 04, n° 333, Fortaleza - CE, 61621120
            </Text>
            <Text
              variant="paragraph1"
              tag="h1"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              marginTop="0"
              marginBottom={{ lg: "50px" }}
              fontFamily="Montserrat"
            >
              <FiMail /> mail.gmail.com
            </Text>
            <Text
              variant="paragraph1"
              tag="h1"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              marginTop="0"
              marginBottom={{ lg: "50px" }}
              fontFamily="Montserrat"
            >
              <FiPhone /> 33-333-3333
            </Text>
          </Grid.Container>
        </Grid.Col>
        <Grid.Col
          value={{ xs: 12, md: 6 }}
          paddingLeft={{ lg: "10px" }}
          borderLeft={{ lg: "2px solid #de654e " }}
        >
          <Grid.Container width={{ lg: "600px" }}>
            <Text
              variant="paragraph1"
              tag="h1"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              marginTop="0"
              marginBottom={{ xs: "20px", lg: "50px" }}
              fontFamily="Montserrat"
            >
              Preencha com seus dados e entraremos em contato
            </Text>
          </Grid.Container>
          <Grid.Container width={{ xs: "400px", lg: "600px" }}>
            <FormEmail />
          </Grid.Container>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row width="100%" margin="0">
        <Grid.Col
          value={{ xs: 12, md: 12 }}
          height={{ xs: "auto", md: "auto" }}
        >
          <Text
            variant="title"
            tag="h2"
            color="secondary.main"
            textAlign={{ xs: "center", md: "center" }}
            fontFamily="Montserrat"
          >
            ONDE ESTAMOS?
          </Text>
        </Grid.Col>
        <Grid.Col
          value={{ xs: 12, md: 12 }}
          flex={1}
          height={{ xs: "500px", md: "auto" }}
          paddingLeft="0"
          paddingRight="0"
          paddingTop="0"
          paddingBottom="0"
        >
          <Text
            variant="paragraph1"
            tag="h1"
            color="tertiary.main"
            textAlign={{ xs: "center", md: "center" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5135058747205!2d-46.63597375856927!3d-23.549993992877596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMyJzYwLjAiUyA0NsKwMzgnMDQuMSJX!5e0!3m2!1spt-BR!2sbr!4v1624554375890!5m2!1spt-BR!2sbr"
              width="100%"
              height="500px"
              style={{ border: 0 }}
              loading="lazy"
              title="map"
            />
          </Text>
        </Grid.Col>
      </Grid.Row>
    </Box>
  );
};

export default contactScreen;
