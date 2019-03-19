import gql from 'graphql-tag';

export default gql`
  mutation Register($email: String!, $password: String!, $bio: String!) {
    userSignUp(email: $email, password: $password, bio: $bio) {
      token
    }
  }
`;
