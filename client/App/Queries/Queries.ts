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
      repositories(
        first: 100
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
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
  query GetNotesQuery($username: String!) {
    notes(where: { username: $username }) {
      id
      content
    }
  }
`;
