import React from 'react';
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Layout from "../../components/Layout"
import Helmet from "react-helmet"
import BTGCover from "../../images/btg-cover.png";

class EventsListTemplate extends React.Component {

  render () {

    const { data } = this.props
    const { edges: events } = data.allMarkdownRemark

    return (
      <Layout>
        <Helmet>
          <title>Members | CMUBTG</title>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:image" content={BTGCover}></meta>
        </Helmet>
        <Container>
          <Row className="pt-1 mt-5">
            <Col>
              <h1 className="display-3 text-black font-weight-boldest">Events</h1>
            </Col>
          </Row>
        </Container>

        <p>{events}</p>

      </Layout>
    )
  }

}

EventList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function EventList() {
  return (
    <StaticQuery
      query={graphql`
        query EventListQuery {
          allMarkdownRemark(
            sort: {order: DESC, fields: [frontmatter___title]}
            filter: {frontmatter: {templateKey: {eq: "event"}}}
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  photo {
                    childImageSharp {
                      gatsbyImageData(width: 200, quality: 100, layout: CONSTRAINED)
                    }
                  }                  
                }
              }
            }
          }
        }              
      `}
      render={(data, count) => <EventsListTemplate data={data} count={count} />}
    />
  )
}