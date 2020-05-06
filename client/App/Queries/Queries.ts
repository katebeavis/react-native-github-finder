import gql from 'graphql-tag';

export const UserQuery = gql`
  query UserQuery($username: String!) {
    user(login: $username) {
      avatarUrl
      name
      login
      company
      location
      following {
        totalCount
      }
      followers {
        totalCount
      }
      email
      bio
      repositories(first: 10, orderBy: { field: UPDATED_AT, direction: DESC }) {
        totalCount
        nodes {
          name
          description
          stargazers {
            totalCount
          }
          url
        }
      }
    }
  }
`;

export const GetNotesQuery = gql`
  query GetNotesQuery {
    notes {
      id
      content
    }
  }
`;
