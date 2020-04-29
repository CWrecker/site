/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import { Box, Button, Grid, Image, jsx, Text } from "theme-ui"
import HeaderImage from "../components/Join/HeaderImage"
import { Helmet } from "react-helmet"
import HarvardLogo from "../../static/img/harvard.png"
import BerkeleyLogo from "../../static/img/berkeley.png"
import CmuLogo from "../../static/img/cmu.png"
import StanfordLogo from "../../static/img/stanford.png"
import ColumbiaLogo from "../../static/img/columbia.png"
import MitLogo from "../../static/img/mit.png"

const JoinPage = props => {
  const partnersData = props.data.partners.edges
  console.log("here")
  console.log(partnersData)
  return (
    <>
      <Helmet title="CVT | Join" />
      <HeaderImage />
      <Text
        sx={{
          variant: "styles.headerText",
        }}
      >
        Our mission.
      </Text>
      <Text sx={{ variant: "styles.bodyText" }}>
        We collaborate on data visualization and analytics projects, economic
        research, and policy writing to better inform and government entities on
        the impact of COVID-19, clear misconceptions, and show the good that is
        happening.
      </Text>

      <Text sx={{ variant: "styles.headerText" }}>
        Let’s accomplish things together.
      </Text>
      <Text sx={{ variant: "styles.subHeader" }}>
        Join our global organization comprised of students from institutions and
        more:
      </Text>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          py: [25, 35, 45],
        }}
      >
        <Grid width={["15%"]} gap={["2%"]}>
          <Image src={StanfordLogo} />
          <Image src={BerkeleyLogo} />
          <Image src={CmuLogo} />
          <Image src={HarvardLogo} />
          <Image src={MitLogo} />
          <Image src={ColumbiaLogo} />
        </Grid>
      </Box>

      <Text sx={{ variant: "styles.subHeader", py: 15 }}>
        We’re also partnered with these organizations:{" "}
      </Text>
      <Grid width={["25%"]} gap={["2%"]}>
        {partnersData.map(item => {
          const data = item.node.childMarkdownRemark.frontmatter

          return (
            <Box
              sx={{
                width: ["45%", "30%"],
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src={data.image}
                alt={data.name}
                sx={{
                  mb: 3,
                  objectFit: "contain",
                }}
              />
            </Box>
          )
        })}
      </Grid>
      <Text sx={{ variant: "styles.headerText" }}>Individuals</Text>
      <Text sx={{ variant: "styles.bodyText" }}>
        We're looking for driven and talented individuals to join our team
        remotely. Learn more about our teams here and our current, ongoing
        projects here.
      </Text>
      <Button
        as="a"
        href="http://bit.ly/CVT-apply"
        sx={{
          fontSize: [14, 18],
          px: 3,
          bg: "white",
          background: "gradient",
          borderRadius: "button",
          boxShadow: "base",
          flex: "1",
        }}
      >
        Join Us
      </Button>

      <Text sx={{ variant: "styles.headerText" }}>Organizations</Text>
      <Text sx={{ variant: "styles.bodyText" }}>
        We’re looking to form partnerships and project collaborations with
        organizations that either have data we can use or seek data. We welcome
        organizations who are willing to provide mentorship and resources to
        help us fulfill our mission.{" "}
      </Text>
      <Button
        as="a"
        href="mailto:coronavirusvisualizationteam@gmail.com"
        sx={{
          fontSize: [14, 18],
          px: 3,
          bg: "white",
          background: "gradient",
          borderRadius: "button",
          boxShadow: "base",
          flex: "1",
        }}
      >
        Join Us
      </Button>
    </>
  )
}
export default JoinPage
export const query = graphql`
  query {
    partners: allFile(filter: { sourceInstanceName: { eq: "partners" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
              image
            }
          }
        }
      }
    }
  }
`
