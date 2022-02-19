import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
};

/** An enumeration. */
export enum MnftBlockchain {
  /** ETHEREUM */
  A_0 = 'A_0',
  /** SOLANA */
  A_1 = 'A_1',
  /** TEZOS */
  A_2 = 'A_2',
  /** EVERSCALE */
  A_3 = 'A_3'
}

export type MnftInput = {
  address: Scalars['String'];
  blockchain?: InputMaybe<Scalars['Int']>;
  cost?: InputMaybe<Scalars['Int']>;
  costAd?: InputMaybe<Scalars['Int']>;
  creator?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastUpdate?: InputMaybe<Scalars['Date']>;
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  sponsor?: InputMaybe<Scalars['String']>;
  standart?: InputMaybe<Scalars['Int']>;
  symbol?: InputMaybe<Scalars['String']>;
};

/** An enumeration. */
export enum MnftStandart {
  /** ERC721 */
  A_721 = 'A_721',
  /** ERC1155 */
  A_1155 = 'A_1155'
}

export type MnftType = {
  __typename?: 'MNFTType';
  address: Scalars['String'];
  blockchain: MnftBlockchain;
  cost: Scalars['Int'];
  costAd: Scalars['Int'];
  creator: UserType;
  description?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  lastUpdate: Scalars['Date'];
  name: Scalars['String'];
  owner: UserType;
  sponsor: UserType;
  standart: MnftStandart;
  symbol?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMNFT?: Maybe<CreateMnft>;
  createOrUpdateUser?: Maybe<CreateOrUpdateUser>;
  createUser?: Maybe<CreateUser>;
  updateMNFT?: Maybe<UpdateMnft>;
  updateUser?: Maybe<UpdateUser>;
};


export type MutationCreateMnftArgs = {
  input?: InputMaybe<MnftInput>;
};


export type MutationCreateOrUpdateUserArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationUpdateMnftArgs = {
  address: Scalars['String'];
  input?: InputMaybe<MnftInput>;
};


export type MutationUpdateUserArgs = {
  address: Scalars['String'];
  input?: InputMaybe<UserInput>;
};

export type Query = {
  __typename?: 'Query';
  getAllMNFT?: Maybe<Array<Maybe<MnftType>>>;
  getAllUser?: Maybe<Array<Maybe<UserType>>>;
  getMNFT?: Maybe<MnftType>;
  getUser?: Maybe<UserType>;
};


export type QueryGetMnftArgs = {
  address?: InputMaybe<Scalars['String']>;
};


export type QueryGetUserArgs = {
  address?: InputMaybe<Scalars['String']>;
};

export type UserInput = {
  address: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UserType = {
  __typename?: 'UserType';
  address: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  mnftsCreator: Array<MnftType>;
  mnftsLord: Array<MnftType>;
  mnftsOwner: Array<MnftType>;
  name?: Maybe<Scalars['String']>;
};

export type CreateMnft = {
  __typename?: 'createMNFT';
  MNFT?: Maybe<MnftType>;
  ok?: Maybe<Scalars['Boolean']>;
};

export type CreateOrUpdateUser = {
  __typename?: 'createOrUpdateUser';
  ok?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserType>;
};

export type CreateUser = {
  __typename?: 'createUser';
  ok?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserType>;
};

export type UpdateMnft = {
  __typename?: 'updateMNFT';
  MNFT?: Maybe<MnftType>;
  ok?: Maybe<Scalars['Boolean']>;
};

export type UpdateUser = {
  __typename?: 'updateUser';
  ok?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserType>;
};

export type CreateMnftMutationVariables = Exact<{
  input?: InputMaybe<MnftInput>;
}>;


export type CreateMnftMutation = { __typename?: 'Mutation', createMNFT?: { __typename?: 'createMNFT', ok?: boolean | null } | null };

export type GetAllMnftQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMnftQuery = { __typename?: 'Query', getAllMNFT?: Array<{ __typename?: 'MNFTType', address: string, name: string, image: string, description?: string | null } | null> | null };

export type GetUserQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']>;
}>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'UserType', address: string, image?: string | null, name?: string | null, email?: string | null } | null };

export type CreateUserMutationVariables = Exact<{
  input: UserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'createUser', ok?: boolean | null, user?: { __typename?: 'UserType', address: string, image?: string | null, name?: string | null, email?: string | null } | null } | null };


export const CreateMnftDocument = `
    mutation CreateMNFT($input: MNFTInput) {
  createMNFT(input: $input) {
    ok
  }
}
    `;
export const useCreateMnftMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<CreateMnftMutation, TError, CreateMnftMutationVariables, TContext>
    ) =>
    useMutation<CreateMnftMutation, TError, CreateMnftMutationVariables, TContext>(
      ['CreateMNFT'],
      (variables?: CreateMnftMutationVariables) => fetcher<CreateMnftMutation, CreateMnftMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, CreateMnftDocument, variables)(),
      options
    );
export const GetAllMnftDocument = `
    query getAllMNFT {
  getAllMNFT {
    address
    name
    image
    description
  }
}
    `;
export const useGetAllMnftQuery = <
      TData = GetAllMnftQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: GetAllMnftQueryVariables,
      options?: UseQueryOptions<GetAllMnftQuery, TError, TData>
    ) =>
    useQuery<GetAllMnftQuery, TError, TData>(
      variables === undefined ? ['getAllMNFT'] : ['getAllMNFT', variables],
      fetcher<GetAllMnftQuery, GetAllMnftQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetAllMnftDocument, variables),
      options
    );
export const GetUserDocument = `
    query GetUser($address: String) {
  getUser(address: $address) {
    address
    image
    name
    email
  }
}
    `;
export const useGetUserQuery = <
      TData = GetUserQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: GetUserQueryVariables,
      options?: UseQueryOptions<GetUserQuery, TError, TData>
    ) =>
    useQuery<GetUserQuery, TError, TData>(
      variables === undefined ? ['GetUser'] : ['GetUser', variables],
      fetcher<GetUserQuery, GetUserQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetUserDocument, variables),
      options
    );
export const CreateUserDocument = `
    mutation CreateUser($input: UserInput!) {
  createUser(input: $input) {
    ok
    user {
      address
      image
      name
      email
    }
  }
}
    `;
export const useCreateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<CreateUserMutation, TError, CreateUserMutationVariables, TContext>
    ) =>
    useMutation<CreateUserMutation, TError, CreateUserMutationVariables, TContext>(
      ['CreateUser'],
      (variables?: CreateUserMutationVariables) => fetcher<CreateUserMutation, CreateUserMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, CreateUserDocument, variables)(),
      options
    );