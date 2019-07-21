import React from 'react'

import Layout from '../components/Layout'

import { graphql } from 'gatsby'
import BlogRoll from '../components/BlogRoll';

const BlogIndexPage = ({ data, count, pageContext }) => {
  const { edges: posts } = data.allMarkdownRemark
  const { numPages, currentPage } = pageContext
  console.dir(pageContext)
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <div className="column is-10 is-offset-1">
              <BlogRoll
                posts={posts}
                numPages={numPages}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogIndexPage

export const blogIndexPageQuery = graphql`
      query BlogIndexPageQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          limit: $limit
          skip: $skip
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
`
