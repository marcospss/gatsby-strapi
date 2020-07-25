import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
      keywords: string;
    };
  };
}

interface Props {
  readonly description?: string;
  readonly keywords?: string;
  readonly title: string;
}

const SEO: React.FC<Props> = ({ description, keywords, title }) => (
  <StaticQuery
    query={graphql`
      query SeoQuery {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => {
      return (
        <Helmet
          htmlAttributes={{
            lang: `en`,
          }}
          title={title || data.site.siteMetadata.title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          link={[]}
          script={[]}
          meta={[
            {
              name: `description`,
              content: description || data.site.siteMetadata.description,
            },
            {
              name: `keywords`,
              content: keywords || data.site.siteMetadata.keywords,
            },
            {
              property: `og:title`,
              content: title || data.site.siteMetadata.title,
            },
            {
              property: `og:description`,
              content: description || data.site.siteMetadata.description,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content: data.site.siteMetadata.title,
            },
            {
              name: `twitter:title`,
              content: title || data.site.siteMetadata.title,
            },
            {
              name: `twitter:description`,
              content: description || data.site.siteMetadata.description,
            },
          ]}
        />
      );
    }}
  />
);

export default SEO;
