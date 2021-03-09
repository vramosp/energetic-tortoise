import React, { useRef, useEffect } from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';
import { graphql } from 'gatsby';

import { Layout, ReviewForm } from '../components/index';
import { withPrefix, htmlToReact } from '../utils';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default function Post(props) {

    // const typeform = useRef(null);
    console.log('props',props)

    // useEffect(() => {
    //     (async () => {
    //         const { makeWidget } = await import("@typeform/embed");
    //         if (typeform.current) {
    //             makeWidget(typeform.current, `https://picsoung.typeform.com/to/SL09LYJ3#product_name=${props.pageContext.frontmatter.title}&product_id=xxxxx`, {});
    //         }
    //     })();
    // }, [props.pageContext.frontmatter.title]);
    return (
        <Layout {...props}>
            <section className="post">
                {_.get(props, 'pageContext.frontmatter.content_img_path', null) && (
                    <img className="header-image" src={withPrefix(_.get(props, 'pageContext.frontmatter.content_img_path', null))} alt={_.get(props, 'pageContext.frontmatter.content_img_alt', null)} />
                )}
                <header className="hero">
                    <div className="copy">
                        <h1>{_.get(props, 'pageContext.frontmatter.title', null)}</h1>
                        {_.get(props, 'pageContext.frontmatter.subtitle', null) && (
                            <h3>{htmlToReact(_.get(props, 'pageContext.frontmatter.subtitle', null))}</h3>
                        )}
                        <h3 className="publish-date">{moment(_.get(props, 'pageContext.frontmatter.date', null)).strftime('%A, %B %e, %Y')}</h3>
                    </div>
                </header>
                <div className="content">
                    {htmlToReact(_.get(props, 'pageContext.html', null))}
                </div>
                {/* <div ref={typeform} style={{ height: '100vh', width: '100%' }}></div> */}
                <div>
                    <h2>Reviews</h2>
                    {_.get(props, 'pageContext.frontmatter.review', null) && _.get(props, 'pageContext.frontmatter.review', null).map(({ name, rating, message }, index) => (
                        <div key={index}>
                            <h3>{name}</h3>
                            <p>{rating}</p>
                            <p>{message}</p>
                        </div>
                    ))}
                </div>

                <div>
                    <h2>Leave a review</h2>
                    <a href={`https://picsoung.typeform.com/to/SL09LYJ3#product_name=${props.pageContext.frontmatter.title}`}> Review</a>
                </div>
                <ReviewForm prod/>
            </section>
        </Layout>
    );
    // }
}
