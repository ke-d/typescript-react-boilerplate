export type Maybe<T> = T | null;

/** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
export type DateTime = any;

// ====================================================
// Documents
// ====================================================

export namespace FindUser {
  export type Variables = {
    email: string;
  };

  export type Query = {
    __typename?: 'Query';

    userFind: UserFind;
  };

  export type UserFind = {
    __typename?: 'User';

    email: string;

    bio: Maybe<string>;
  };
}

export namespace Register {
  export type Variables = {
    email: string;
    password: string;
    bio: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    userSignUp: UserSignUp;
  };

  export type UserSignUp = {
    __typename?: 'Token';

    token: string;
  };
}

import * as ReactApollo from 'react-apollo';
import * as React from 'react';

import gql from 'graphql-tag';

// ====================================================
// Components
// ====================================================

export namespace FindUser {
  export const Document = gql`
    query FindUser($email: String!) {
      userFind(email: $email) {
        email
        bio
      }
    }
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.QueryProps<Query, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Query<Query, Variables>
          query={Document}
          {...(this as any)['props'] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.DataProps<Query, Variables>
  > &
    TChildProps;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Query,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Query, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
export namespace Register {
  export const Document = gql`
    mutation Register($email: String!, $password: String!, $bio: String!) {
      userSignUp(email: $email, password: $password, bio: $bio) {
        token
      }
    }
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.MutationProps<Mutation, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Mutation<Mutation, Variables>
          mutation={Document}
          {...(this as any)['props'] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.MutateProps<Mutation, Variables>
  > &
    TChildProps;
  export type MutationFn = ReactApollo.MutationFn<Mutation, Variables>;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Mutation,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Mutation, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}
