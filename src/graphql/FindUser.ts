import gql from 'graphql-tag';

export default gql`
  query FindUser($email: String!) {
    userFind(email: $email) {
      email
      bio
    }
  }
`;
