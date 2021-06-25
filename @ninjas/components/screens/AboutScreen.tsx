import React from "react";
import Image from "next/image";
import { Button } from "@ninjas/components/commons/Button";
import Text from "../foundation/Text";
import { Box } from "../foundation/Layout/Box";
import { Grid } from "../foundation/Layout/Grid";

const aboutScreen = () => {
  return (
    <Box display="flex" flexDirection="column" flex="1">
      <Grid.Row
        marginBottom={{ xs: 0, md: "100px" }}
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
              Sobre nós
            </Text>

            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: "center",
                md: "center",
              }}
              fontFamily="Montserrat"
            >
              Em nossa empresa nós entendemos a importancia da beleza do seu
              espaço.
            </Text>
            <Grid.Container
              paddingLeft={{ lg: 0 }}
              display="flex"
              justifyContent={{ xs: "center", lg: "left" }}
            />
          </Grid.Container>
        </Grid.Col>
      </Grid.Row>
      {/*  */}
      <Grid.Row
        marginBottom={{ xs: 0, md: "50px" }}
        width="100%"
        margin="0"
        // background="#5a5b546a"
      >
        {/*  */}
        <Grid.Col
          value={{ xs: 12, md: 3 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: "50px" }}
          backgroundImage="url(/images/about_column1.jpg)"
          backgroundPosition="center"
          height="600px"
        />
        {/*  */}
        <Grid.Col
          value={{ xs: 12, md: 2 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: "50px" }}
          height="600px"
          backgroundImage="url(/images/about_column2.jpg)"
          backgroundPosition="center"
        />
        {/*  */}
        <Grid.Col
          value={{ xs: 12, md: 2 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: "50px" }}
          height="600px"
          backgroundImage="url(/images/about_column3.jpg  )"
          backgroundPosition="center"
        />
        <Grid.Col
          value={{ xs: 12, md: 5 }}
          offset={{ xs: 0, md: 0 }}
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: "100px" }}
          height={{ lg: "600px" }}
          display="flex"
          justifyContent="flex-center"
        >
          <Grid.Container
            paddingTop={{ lg: "100px" }}
            // width={{ lg: "300px" }}
            // display="flex"
            // justifyContent="center"
          >
            <Text
              variant="titleXS"
              tag="h2"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              fontFamily="Montserrat"
            >
              Nossa Visão
            </Text>
            <Text
              variant="paragraph2"
              tag="h3"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              fontFamily="Montserrat"
            >
              Na Empresa, nós entendemos a importancia das cores e decoração. Um
              ambiente com cores certas muda o modo de como você se sente e isso
              se aplica tanto a sua casa quanto a sua empresa. Um ambiente
              decorado da maneira correta traz beleza e estilo para o seu dia a
              dia. Se voce pensa em vender ou alugar sua casa ou área comercial,
              uma boa decoração irá fazer a diferenca. Converse conosco!
            </Text>
          </Grid.Container>
        </Grid.Col>
        {/*  */}
        {/*  */}
      </Grid.Row>
      <Grid.Row
        marginBottom={{ xs: 0, md: "50px" }}
        width="100%"
        margin="0"
        paddingLeft={{ lg: "100px" }}
        paddingRight={{ lg: "100px" }}
        // background="#5a5b546a"
      >
        <Grid.Col
          value={{ xs: 12, md: 12 }}
          offset={{ xs: 0, md: 0 }}
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: "100px" }}
          marginBottom={{ lg: "50px" }}
          display="flex"
          justifyContent="flex-center"
        >
          <Grid.Container
            paddingTop={{ lg: "100px" }}
            // width={{ lg: "300px" }}
            // display="flex"
            // justifyContent="center"
          >
            <Text
              variant="titleXS"
              tag="h2"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "center",
              }}
              fontFamily="Montserrat"
            >
              Conheça nossa Equipe
            </Text>
          </Grid.Container>
        </Grid.Col>
        {/*  */}
        <Grid.Col
          value={{ xs: 12, md: 4 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: "50px" }}
          backgroundImage="url(/images/about_professional.jpg)"
          backgroundPosition="center"
          height="600px"
        >
          <Grid.Container
            background={{ xs: "#929292c7" }}
            marginBottom="10px"
            paddingTop={{ lg: "20px" }}
            width={{ lg: "300px" }}
            height={{ lg: "200px" }}
            display="block"
            justifyContent="center"
          >
            <Text
              variant="titleXS"
              tag="h2"
              color="tertiary.main"
              textAlign={{
                xs: "center",
                md: "center",
              }}
              fontFamily="Montserrat"
            >
              Alice Braga
            </Text>
            <Text
              variant="paragraph1"
              tag="h3"
              color="tertiary.main"
              textAlign={{
                xs: "center",
                md: "center",
              }}
              fontFamily="Montserrat"
            >
              Profissional de Design formada pela Universinade Federal
            </Text>
          </Grid.Container>
        </Grid.Col>
        {/*  */}
        <Grid.Col
          value={{ xs: 12, md: 4 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: "50px" }}
          height="600px"
          backgroundImage="url(/images/about_professional2.jpg)"
          backgroundPosition="center"
        >
          <Grid.Container
            background={{ xs: "#929292c7" }}
            marginBottom="10px"
            paddingTop={{ lg: "20px" }}
            width={{ lg: "300px" }}
            height={{ lg: "200px" }}
            display="block"
            justifyContent="center"
          >
            <Text
              variant="titleXS"
              tag="h2"
              color="tertiary.main"
              textAlign={{
                xs: "center",
                md: "center",
              }}
              fontFamily="Montserrat"
            >
              Aline Castro
            </Text>
            <Text
              variant="paragraph1"
              tag="h3"
              color="tertiary.main"
              textAlign={{
                xs: "center",
                md: "center",
              }}
              fontFamily="Montserrat"
            >
              Profissional de Design formada pela Escola Profissional de design
              de interiores
            </Text>
          </Grid.Container>
        </Grid.Col>
        {/*  */}
        <Grid.Col
          value={{ xs: 12, md: 4 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: "50px" }}
          height="600px"
          backgroundImage="url(/images/about_professional3.png)"
          backgroundPosition="center"
        >
          <Grid.Container
            background={{ xs: "#929292c7" }}
            marginBottom="10px"
            paddingTop={{ lg: "20px" }}
            width={{ lg: "300px" }}
            height={{ lg: "200px" }}
            display="block"
            justifyContent="center"
          >
            <Text
              variant="titleXS"
              tag="h2"
              color="tertiary.main"
              textAlign={{
                xs: "center",
                md: "center",
              }}
              fontFamily="Montserrat"
            >
              Carla Garcia
            </Text>
            <Text
              variant="paragraph1"
              tag="h3"
              color="tertiary.main"
              textAlign={{
                xs: "center",
                md: "center",
              }}
              fontFamily="Montserrat"
            >
              Profissional de Design formada pela Faculdade de Design Estácio
            </Text>
          </Grid.Container>
        </Grid.Col>
        <Grid.Container
          display="flex"
          justifyContent="center"
          marginTop={{ xs: "20px", lg: "20px" }}
          marginBottom={{ xs: "20px", lg: "20px" }}
        >
          <Button tag="link" href="/contato" variant="primary.main">
            Fale conosco
          </Button>
        </Grid.Container>

        {/*  */}
        {/*  */}
      </Grid.Row>
    </Box>
  );
};

export default aboutScreen;
