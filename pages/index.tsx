import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Spacer from "@ninjas/components/commons/Spacer";
import Text from "../@ninjas/components/foundation/Text";
import { Button } from "../@ninjas/components/commons/Button";
import { Grid } from "../@ninjas/components/foundation/Layout/Grid";
import { WebsitePageContext } from "../@ninjas/components/wrappers/WebsitePage";
import { Box } from "../@ninjas/components/foundation/Layout/Box";
import websitePageHOC from "../@ninjas/components/wrappers/WebsitePage/hoc";

function HomeScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);

  return (
    <Box display="flex" flexDirection="column" flex="1">
      <Grid.Row
        marginBottom={{ xs: 0, md: "100px" }}
        display={{ xs: "block", md: "flex" }}
        background="#7e9182"
        width="100%"
        margin="0"
      >
        <Grid.Col
          value={{ xs: 12, md: 6 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-center"
          height={{ xs: "900px" }}
          paddingLeft={{ xs: "30px", lg: "10px" }}
          justifyContent="center"
          flexDirection="column"
          background={{ xs: "url(/images/wallpaper_sofa.png)", md: "none" }}
          backgroundPosition={{ xs: "center", md: 0 }}
        >
          <Grid.Container
            width={{ xs: "400px", md: "400px" }}
            background={{ xs: "#b8b8b8d1", lg: "none" }}
            marginTop={{ xs: "500px", lg: "250px" }}
            marginBottom={{ xs: "300px", md: "10px" }}
            paddingTop={{ xs: "10px" }}
          >
            <Text
              variant="titleXL"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              marginTop="0"
              marginBottom={{ lg: "100px" }}
              fontFamily="Montserrat"
            >
              Trazendo cor e belezar para sua Vida!
            </Text>

            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              fontFamily="Montserrat"
            >
              Nossa missão? Transformar seus sonhos em realidade e tornar seu
              espaço uma grande obra de arte!
            </Text>
            <Grid.Container
              paddingLeft={{ lg: 0 }}
              display="flex"
              justifyContent={{ xs: "center", lg: "left" }}
              marginBottom={{ xs: "10px" }}
            >
              <Button
                tag="link"
                href="/sobre"
                variant="primary.main"
                margin={{
                  xs: "0, 1000px",
                  md: "initial",
                }}
              >
                Saiba mais
              </Button>
            </Grid.Container>
          </Grid.Container>
        </Grid.Col>
        <Grid.Col
          value={{
            xs: 0,
            md: 6,
          }}
          paddingTop={{ lg: "200px" }}
          display={{ xs: "none", lg: "flex" }}
          z-index="-1"
        >
          <Grid.Container
            width={{ lg: "700px" }}
            height={{ lg: "800px" }}
            backgroundImage="url(/images/wallpaper_sofa.png)"
          />
          {/* <Image
            src="/images/wallpaper_sofa.png"
            alt="Picture of the author"
            width={600}
            height={700}
          /> */}
        </Grid.Col>
      </Grid.Row>
      {/*  */}
      <Grid.Row
        marginBottom={{ xs: 0, md: "50px" }}
        width="100%"
        margin="0"
        // background="#5a5b546a"
      >
        <Grid.Col
          value={{ xs: 12, md: 3 }}
          offset={{ xs: 0, md: 0 }}
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: "50px" }}
          height={{ lg: "600px" }}
          display="flex"
          justifyContent="flex-center"
        >
          <Grid.Container
            paddingTop={{ lg: "300px" }}
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
              Nossos Serviços
            </Text>
          </Grid.Container>
        </Grid.Col>
        {/*  */}
        <Grid.Col
          value={{ xs: 12, md: 3 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: "50px" }}
          backgroundImage="url(/images/roller_color.png)"
          backgroundPosition="center"
          height="600px"
        >
          <Grid.Container
            background={{ xs: "#929292c7" }}
            marginBottom="100px"
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
              Pinturas
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
              Encontre a melhor paleta para seu espaço
            </Text>
            <Grid.Container
              display="flex"
              justifyContent="center"
              marginBottom={{ xs: "10px" }}
            >
              <Button tag="link" href="/servicos" variant="primary.main">
                Saiba mais
              </Button>
            </Grid.Container>
          </Grid.Container>
        </Grid.Col>
        {/*  */}
        <Grid.Col
          value={{ xs: 12, md: 3 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: "50px" }}
          height="600px"
          backgroundImage="url(/images/paint_bucket.png)"
          backgroundPosition="center"
        >
          <Grid.Container
            background={{ xs: "#929292c7" }}
            marginBottom="100px"
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
              Consultoria
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
              Tenha todo o suporte da nossa esquipe.
            </Text>
            <Grid.Container
              display="flex"
              justifyContent="center"
              marginBottom={{ xs: "10px" }}
            >
              <Button tag="link" href="/servicos" variant="primary.main">
                Saiba mais
              </Button>
            </Grid.Container>
          </Grid.Container>
        </Grid.Col>
        {/*  */}
        <Grid.Col
          value={{ xs: 12, md: 3 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: "50px" }}
          height="600px"
          backgroundImage="url(/images/sofa.png)"
          backgroundPosition="center"
        >
          <Grid.Container
            background={{ xs: "#929292c7" }}
            marginBottom="100px"
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
              Decore
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
              Preencha seus espaços com belos móveis
            </Text>
            <Grid.Container
              display="flex"
              justifyContent="center"
              marginBottom={{ xs: "10px" }}
            >
              <Button tag="link" href="/servicos" variant="primary.main">
                Saiba mais
              </Button>
            </Grid.Container>
          </Grid.Container>
        </Grid.Col>
        {/*  */}
        {/*  */}
      </Grid.Row>
      <Grid.Row
        marginBottom={{ xs: 0, md: "100px" }}
        minHeight={{ lg: "600px" }}
        width="100%"
        margin="0"
      >
        <Grid.Col
          value={{ xs: 0, md: 12 }}
          backgroundImage="url(/images/interior_light.jpg)"
          backgroundAttachment="fixed"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        />
      </Grid.Row>
      {/*  */}
      <Grid.Row
        marginBottom={{ xs: 0, md: "20px" }}
        width="100%"
        margin="0"
        paddingLeft={{ lg: "150px" }}
        paddingRight={{ lg: "150px" }}
      >
        <Grid.Col
          value={{ xs: 12, md: 12 }}
          offset={{ xs: 0, md: 0 }}
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: "50px" }}
          height={{ lg: "100px" }}
          display="flex"
          justifyContent="flex-center"
        >
          <Grid.Container
            paddingTop={{ lg: "10px" }}
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
              Entre em Contato
            </Text>
          </Grid.Container>
        </Grid.Col>
        {/*  */}
        <Grid.Col
          value={{ xs: 12, md: 3 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: 0 }}
          paddingRight={{ sm: "50px", lg: 0 }}
          height="300px"
        >
          <Grid.Container
            // background={{ xs: "#929292c7" }}
            marginBottom="100px"
            paddingTop={{ lg: "20px" }}
            width={{ lg: "300px" }}
            height={{ lg: "200px" }}
            display="block"
            justifyContent="center"
          >
            <Text
              variant="titleXS"
              color="secondary.main"
              tag="h2"
              textAlign={{
                xs: "center",
                md: "center",
              }}
              fontFamily="Montserrat"
              marginBottom="2px"
            >
              <Text
                variant="titleXS"
                color="primary.main"
                tag="h2"
                textAlign={{
                  xs: "center",
                  md: "center",
                }}
                fontFamily="Montserrat"
              >
                <FaWhatsapp />
              </Text>
              Whatsapp
            </Text>
            <Spacer />

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
              Fale direto com conosco
            </Text>
          </Grid.Container>
        </Grid.Col>
        {/*  */}
        <Grid.Col
          value={{ xs: 12, md: 3 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: 0 }}
          paddingRight={{ sm: "50px", lg: 0 }}
          height="300px"
        >
          <Grid.Container
            // background={{ xs: "#929292c7" }}
            marginBottom="100px"
            paddingTop={{ lg: "20px" }}
            width={{ lg: "300px" }}
            height={{ lg: "200px" }}
            display="block"
            justifyContent="center"
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
              marginBottom="2px"
            >
              <Text
                variant="titleXS"
                tag="h2"
                color="primary.main"
                textAlign={{
                  xs: "center",
                  md: "center",
                }}
                fontFamily="Montserrat"
              >
                <FaFacebook />
              </Text>
              Facebook
            </Text>
            <Spacer />

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
              Veja nossos todos nossos projetos
            </Text>
          </Grid.Container>
        </Grid.Col>
        {/*  */}
        <Grid.Col
          value={{ xs: 12, md: 3 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: "0" }}
          paddingRight={{ sm: "50px", lg: "0" }}
          height="300px"
        >
          <Grid.Container
            // background={{ xs: "#929292c7" }}
            marginBottom="100px"
            paddingTop={{ lg: "20px" }}
            width={{ lg: "300px" }}
            height={{ lg: "200px" }}
            display="block"
            justifyContent="center"
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
              marginBottom="2px"
            >
              <Text
                variant="titleXS"
                tag="h2"
                color="primary.main"
                textAlign={{
                  xs: "center",
                  md: "center",
                }}
                fontFamily="Montserrat"
              >
                <FiMail />
              </Text>
              Email
            </Text>
            <Spacer />

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
              Mande nos um email e nos conte sua idéia
            </Text>
          </Grid.Container>
        </Grid.Col>
        {/*  */}
        <Grid.Col
          value={{ xs: 12, md: 3 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: "0px" }}
          paddingRight={{ sm: "50px", lg: "50px" }}
          height="300px"
        >
          <Grid.Container
            // background={{ xs: "#929292c7" }}
            marginBottom="100px"
            paddingTop={{ lg: "20px" }}
            width={{ lg: "300px" }}
            height={{ lg: "200px" }}
            display="block"
            justifyContent="center"
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
              marginBottom="2px"
            >
              <Text
                variant="titleXS"
                tag="h2"
                color="primary.main"
                textAlign={{
                  xs: "center",
                  md: "center",
                }}
                fontFamily="Montserrat"
              >
                <FaInstagram />
              </Text>
              Instagram
            </Text>
            <Spacer />

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
              Veja nosso trabalho e a opinião dos clientes
            </Text>
          </Grid.Container>
        </Grid.Col>
        <Grid.Container
          display="flex"
          justifyContent="center"
          marginBottom={{ xs: "10px" }}
        >
          <Button
            tag="link"
            href="/contato"
            variant="primary.main"
            margin={{
              xs: "0, 1000px",
              md: "initial",
            }}
          >
            Saiba mais
          </Button>
        </Grid.Container>
        {/*  */}
      </Grid.Row>
      {/*  */}
      <Grid.Row
        marginBottom={{ xs: 0, md: 0 }}
        width="100%"
        margin="0"
        background="#ebebeb9e"
      >
        <Grid.Col
          value={{ xs: 12, md: 12 }}
          offset={{ xs: 0, md: 0 }}
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: "50px" }}
          height={{ lg: "150px" }}
          display="flex"
          justifyContent="flex-center"
        >
          <Grid.Container
            paddingTop={{ lg: "50px" }}
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
              Nossos projetos recentes
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
          backgroundImage="url(/images/room1.png)"
          backgroundPosition="center"
          height="600px"
        />
        {/*  */}
        <Grid.Col
          value={{ xs: 12, md: 4 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: "50px" }}
          height="600px"
          backgroundImage="url(/images/room2.jpg)"
          backgroundPosition="center"
        />
        {/*  */}
        <Grid.Col
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: "50px" }}
          height="600px"
          backgroundImage="url(/images/room3.jpg)"
          backgroundPosition="center"
        />
        <Grid.Col
          offset={{ xs: 0, md: 0 }}
          value={{ xs: 12, md: 8 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: "50px" }}
          height="500px"
          backgroundImage="url(/images/room4.jpg)"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        />
        <Grid.Col
          offset={{ xs: 0, md: 0 }}
          value={{ xs: 12, md: 4 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: "50px" }}
          height="500px"
          backgroundImage="url(/images/room2.jpg)"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        />
        {/*  */}
        {/*  */}
      </Grid.Row>
    </Box>
  );
}

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: "Home",
    },
    pageBoxProps: {
      // backgroundImage: "url(/images/bubbles.svg)",
      // backgroundRepeat: "no-repeat",
      // backgroundPosition: "bottom right",
    },
    menuProps: {
      display: true,
    },
  },
});
