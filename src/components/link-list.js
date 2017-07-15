import React, { Component } from 'react';
import {graphql, gql} from 'react-apollo';
import Link from './link';

class LinkList extends Component {
    
    render() {
        const { allLinksQuery } = this.props;

        if(allLinksQuery && allLinksQuery.loading) {
            return <div>Loading</div>
        }
        if(allLinksQuery && allLinksQuery.error) {
            return <div>Loading</div>
        }
        return (
            <div>
                {
                    allLinksQuery && allLinksQuery.allLinks.map(link => {
                        return <Link key={link.id} link={link} />
                    })
                }
            </div>
        )
    }
}

const ALL_LINKS_QUERY = gql`
    query AllLinksQuery {
        allLinks {
            id
            url
            createdAt
            description
        }
    }
`;

export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' })(LinkList);











































