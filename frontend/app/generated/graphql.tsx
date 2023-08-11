import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type CreateUserInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  passwordConfirm: Scalars['String'];
};


export type Mutation = {
  __typename?: 'Mutation';
  createSingleUser: UserDto;
};


export type MutationCreateSingleUserArgs = {
  input: CreateUserInput;
};

export type Query = {
  __typename?: 'Query';
  fetchUserList: Array<UserDto>;
};

export type UserDto = {
  __typename?: 'UserDto';
  _id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type CreateSingleUserMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  passwordConfirm: Scalars['String'];
}>;


export type CreateSingleUserMutation = { __typename?: 'Mutation', createSingleUser: { __typename?: 'UserDto', name: string, email: string } };

export type FetchUserListQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchUserListQuery = { __typename?: 'Query', fetchUserList: Array<{ __typename?: 'UserDto', name: string, email: string }> };


export const CreateSingleUserDocument = gql`
    mutation CreateSingleUser($name: String!, $email: String!, $password: String!, $passwordConfirm: String!) {
  createSingleUser(
    input: {name: $name, email: $email, password: $password, passwordConfirm: $passwordConfirm}
  ) {
    name
    email
  }
}
    `;

export function useCreateSingleUserMutation() {
  return Urql.useMutation<CreateSingleUserMutation, CreateSingleUserMutationVariables>(CreateSingleUserDocument);
};
export const FetchUserListDocument = gql`
    query FetchUserList {
  fetchUserList {
    name
    email
  }
}
    `;

export function useFetchUserListQuery(options: Omit<Urql.UseQueryArgs<FetchUserListQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FetchUserListQuery>({ query: FetchUserListDocument, ...options });
};