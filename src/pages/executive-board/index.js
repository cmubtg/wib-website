import React from 'react';
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Layout from "../../components/Layout"
import Helmet from "react-helmet"
import BTGCover from "../../images/btg-cover.png";
import MemberDisplay from "../../components/MemberDisplay"
import { getImage } from 'gatsby-plugin-image';
import "../../css/styles2.css";

function RoleContainer(props) {
  return (
    <Row className="pt-1 mt-5">
      {Array.from(props.members).map(({ node:member }) => (
        <MemberDisplay
          title = {member.frontmatter.title}
          role = {member.frontmatter.role}
          degree = {member.frontmatter.degree}
          major = {member.frontmatter.major}
          year = {member.frontmatter.year}
          photo = {getImage(member.frontmatter.photo)}
          slug = {member.fields.slug}
          linkedIn = {member.frontmatter.linkedIn}
        ></MemberDisplay>
      ))}
    </Row>
  )
}


function get_roles(members) {
  var roles = {
              "Board Member":[]
            }
  members.forEach(
    function(member,index) {
      roles["Board Member"].push(member);
    }
  )
  return Object.entries(roles)
}

function get_options(roles) {
  var ops = []
  roles.forEach((r) => {
    ops.push({ "label":r[0],"value":r })
  })
  return ops
}

class MemberListTemplate extends React.Component {

  constructor(props) {
    super(props)
    const { data } = this.props
    const { edges: members } = data.allMarkdownRemark
    const roles = get_roles(members)
    const ops = get_options(roles)
    this.state = {
      roles:[ops[0]],
      options:ops
    }
  }

  setRoles(input) {
    this.setState({roles:input})
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>Executive Board | CMUBTG</title>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:image" content={BTGCover}></meta>
        </Helmet>
        <Container className="mt-md-1 pt-md-4">
          <Row className="pt-1 mt-5">
            <Col>
              <h1 className="tall-underline">MEET THE BOARD</h1>
            </Col>
          </Row>

          {/* <button className="coffee-chats">SIGN UP FOR COFFEE CHATS</button> */}

                

        <Container className="mt-2">
            {this.state.roles.map((r) => (
              <RoleContainer
                role = {r["value"][0]}
                members = {r["value"][1]}
              />
            ))}
        </Container>
      </Container>


      </Layout>       
    );
  }
}

MemberList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function MemberList() {
  return (
    <StaticQuery
      query={graphql`
        query MemberListQuery {
          allMarkdownRemark(
            sort: {order: DESC, fields: [frontmatter___title]}
            filter: {frontmatter: {templateKey: {eq: "member"}}}
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  linkedIn
                  year
                  degree
                  major
                  role
                  photo {
                    childImageSharp {
                      gatsbyImageData(
                        width: 250
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                }
              }
            }
          }
        }              
      `}
      render={(data, count) => <MemberListTemplate data={data} count={count} />}
    />
  )
}