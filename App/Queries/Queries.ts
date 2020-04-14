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
      repositories {
        totalCount
      }
    }
  }
`;
