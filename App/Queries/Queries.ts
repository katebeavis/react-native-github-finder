import gql from 'graphql-tag';

export const UserQuery = gql`
  query UserQuery($username: String!) {
    user(login: $username) {
      avatarUrl
      bio
      company
      email
      name
      location
      login
      websiteUrl
    }
  }
`;
