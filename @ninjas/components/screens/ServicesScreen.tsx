import React from "react";
import Spacer from "@ninjas/components/commons/Spacer";
import { Button } from "@ninjas/components/commons/Button";
import Text from "../foundation/Text";
import { Box } from "../foundation/Layout/Box";
import { Grid } from "../foundation/Layout/Grid";

const servicesScreeen = () => {
  return (
    <Box display="flex" flexDirection="column" flex="1">
      <Grid.Row
        marginBottom={{ xs: 0, md: "100px" }}
        display={{ xs: "block", md: "flex" }}
        background="#2c4251"
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
              Serviços
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
          value={{ xs: 12, md: 7 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: 0 }}
          height="700px"
          backgroundImage="url(/images/service_image.jpg)"
        >
          <Grid.Container
            backgroundColor="#293e4c"
            width={{ lg: "600px" }}
            height={{ lg: "400px" }}
            marginBottom={{ lg: "100px" }}
            marginRight={{ lg: "-400px" }}
            display="flex"
            alignItems="center"
          >
            <Grid.Container display="block">
              <Text
                variant="titleXS"
                tag="h2"
                color="tertiary.main"
                textAlign={{
                  xs: "center",
                  md: "left",
                }}
                fontFamily="Montserrat"
              >
                Interiores
              </Text>
              <Text
                variant="paragraph2"
                tag="h3"
                color="tertiary.main"
                textAlign={{
                  xs: "center",
                  md: "left",
                }}
                fontFamily="Montserrat"
              >
                Na Empresa, nós entendemos a importancia das cores e decoração.
                Um ambiente com cores certas muda o modo de como você se sente e
                isso se aplica tanto a sua casa quanto a sua empresa.
              </Text>
            </Grid.Container>
          </Grid.Container>
        </Grid.Col>

        {/*  */}
        {/*  */}
      </Grid.Row>
      <Grid.Row marginBottom={{ xs: 0, md: "50px" }} width="100%" margin="0">
        {/*  */}
        <Grid.Col
          value={{ xs: 12, md: 7 }}
          offset={{ xs: 0, md: 5 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: 0 }}
          height="700px"
          backgroundImage="url(/images/service_image2.jpg)"
        >
          <Grid.Container
            backgroundColor="#cf917f"
            width={{ lg: "600px" }}
            height={{ lg: "400px" }}
            marginBottom={{ lg: "100px" }}
            marginLeft={{ lg: "-400px" }}
            display="flex"
            alignItems="center"
          >
            <Grid.Container display="block">
              <Text
                variant="titleXS"
                tag="h2"
                color="tertiary.main"
                textAlign={{
                  xs: "center",
                  md: "left",
                }}
                fontFamily="Montserrat"
              >
                Exteriores
              </Text>
              <Text
                variant="paragraph2"
                tag="h3"
                color="tertiary.main"
                textAlign={{
                  xs: "center",
                  md: "left",
                }}
                fontFamily="Montserrat"
              >
                Na Empresa, nós entendemos a importancia das cores e decoração.
                Um ambiente com cores certas muda o modo de como você se sente e
                isso se aplica tanto a sua casa quanto a sua empresa.
              </Text>
            </Grid.Container>
          </Grid.Container>
        </Grid.Col>

        {/*  */}
        {/*  */}
      </Grid.Row>
      {/*  */}
      <Grid.Row marginBottom={{ xs: 0, md: "50px" }} width="100%" margin="0">
        {/*  */}
        <Grid.Col
          value={{ xs: 12, md: 7 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: 0 }}
          height="700px"
          backgroundImage="url(/images/service_image3.jpg)"
        >
          <Grid.Container
            backgroundColor="#7e9182"
            width={{ lg: "600px" }}
            height={{ lg: "400px" }}
            marginBottom={{ lg: "100px" }}
            marginRight={{ lg: "-400px" }}
            display="flex"
            alignItems="center"
          >
            <Grid.Container display="block">
              <Text
                variant="titleXS"
                tag="h2"
                color="tertiary.main"
                textAlign={{
                  xs: "center",
                  md: "left",
                }}
                fontFamily="Montserrat"
              >
                Ambiente Comerciais
              </Text>
              <Text
                variant="paragraph2"
                tag="h3"
                color="tertiary.main"
                textAlign={{
                  xs: "center",
                  md: "left",
                }}
                fontFamily="Montserrat"
              >
                Na Empresa, nós entendemos a importancia das cores e decoração.
                Um ambiente com cores certas muda o modo de como você se sente e
                isso se aplica tanto a sua casa quanto a sua empresa.
              </Text>
            </Grid.Container>
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
              Como trabalhamos?
            </Text>
          </Grid.Container>
        </Grid.Col>
        <Grid.Col
          value={{ xs: 12, md: 6 }}
          paddingLeft={{ lg: "200px" }}
          display="block"
        >
          <Grid.Container
            marginTop={{ lg: "90px" }}
            paddingLeft={{ lg: "150px" }}
          >
            <Text
              variant="paragraph1"
              tag="h1"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "justify",
              }}
              marginTop="0"
              marginBottom={{ lg: "50px" }}
              fontFamily="Montserrat"
            >
              1. Entre em contato
            </Text>
            <Text
              variant="paragraph1"
              tag="h1"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "justify",
              }}
              marginTop="0"
              marginBottom={{ lg: "50px" }}
              fontFamily="Montserrat"
            >
              2. Nos fale o que Você imagina
            </Text>
            <Text
              variant="paragraph1"
              tag="h1"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "justify",
              }}
              marginTop="0"
              marginBottom={{ lg: "50px" }}
              fontFamily="Montserrat"
            >
              3. Iremos preparar um projeto base
            </Text>
            <Text
              variant="paragraph1"
              tag="h1"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "justify",
              }}
              marginTop="0"
              marginBottom={{ lg: "50px" }}
              fontFamily="Montserrat"
            >
              4. Iniciaremos o projeto
            </Text>
            <Text
              variant="paragraph1"
              tag="h1"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "justify",
              }}
              marginTop="0"
              marginBottom={{ lg: "50px" }}
              fontFamily="Montserrat"
            >
              5. Tudo pronto!
            </Text>
          </Grid.Container>
        </Grid.Col>
        <Grid.Col
          value={{ xs: 12, md: 6 }}
          display="block"
          borderLeft={{ lg: "2px solid #de654e " }}
        >
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
              Entre em contato por telefone, email ou redes sociais
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
              Nos fale sobre suas idéias e seus projetos
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
              Vamos criar um plano inicial e revisaremos juntos todos os
              detalhes
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
              Quando todos os detalhes estiverem pronto vamos por a mão na massa{" "}
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
              Projeto terminado e você estará feliz com seu novo espaço.
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
      </Grid.Row>
    </Box>
  );
};

export default servicesScreeen;
