import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div
          className="primary-content"
          dangerouslySetInnerHTML={{
            __html: data.site.siteMetadata.home.description,
          }}
        />
        <Link to="/contact" className="button -primary">
          <span>Get in touch</span>
          <span> &rarr;</span>
        </Link>
        <a
          href="https://zaki-afada.netlify.app/"
          rel="noopener noreferrer"
          target="_blank"
          className="button -primary"
          aria-label="See my work"
        >
          See my work &rarr;
        </a>
        <a
          href="https://github.com/zakiafada32"
          rel="noopener noreferrer"
          target="_blank"
          className="button -primary"
          aria-label="Github"
        >
          Github account &rarr;
        </a>
      </div>
    )}
  />
);
