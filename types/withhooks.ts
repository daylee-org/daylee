import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Goal = {
  __typename?: 'Goal';
  id: Scalars['String'];
  done: Scalars['String'];
  description: Scalars['String'];
};

export type GoalUpdateInput = {
  goalWidgetId: Scalars['String'];
  goalId?: Maybe<Scalars['String']>;
  done: Scalars['Boolean'];
  description: Scalars['String'];
};

export type GoalsWidget = {
  __typename?: 'GoalsWidget';
  id: Scalars['String'];
  title: Scalars['String'];
  goals?: Maybe<Array<Goal>>;
  goalsOrder?: Maybe<Array<Scalars['String']>>;
};

export type GoalsWidgetInput = {
  title: Scalars['String'];
};

/** Month object */
export type Month = {
  __typename?: 'Month';
  id: Scalars['String'];
  monthNumber: Scalars['Float'];
  year: Scalars['Float'];
  widgetsOrder: Array<Scalars['Float']>;
  weatherWidget?: Maybe<Weatherwidget>;
  pomodoroWidget?: Maybe<PomodoroWidget>;
  reviewWidget?: Maybe<ReviewWidget>;
};

export type Mutation = {
  __typename?: 'Mutation';
  userSignup?: Maybe<User>;
  userSignout?: Maybe<Scalars['Boolean']>;
  clear: Scalars['Boolean'];
  weatherWidgetUpdate: Weatherwidget;
  weatherWidgetDelete: Month;
  pomodoroWidgetUpdate: PomodoroWidget;
  pomodoroWidgetDelete: Month;
  reviewWidgetUpdate: ReviewWidget;
  reviewWidgetDelete: Month;
  goalsWidgetUpdate: GoalsWidget;
  goalsWidgetDelete: Month;
  goalsWidgetUpdateGoal: GoalsWidget;
  goalsWidgetDeleteGoal: GoalsWidget;
};


export type MutationUserSignupArgs = {
  args: UserSignupInput;
};


export type MutationWeatherWidgetUpdateArgs = {
  args: WeatherwidgetInput;
  monthNumber: Scalars['Float'];
  year: Scalars['Float'];
};


export type MutationWeatherWidgetDeleteArgs = {
  monthNumber: Scalars['Float'];
  year: Scalars['Float'];
};


export type MutationPomodoroWidgetUpdateArgs = {
  args: PomodoroWidgetInput;
  monthNumber: Scalars['Float'];
  year: Scalars['Float'];
};


export type MutationPomodoroWidgetDeleteArgs = {
  monthNumber: Scalars['Float'];
  year: Scalars['Float'];
};


export type MutationReviewWidgetUpdateArgs = {
  args: ReviewWidgetInput;
  monthNumber: Scalars['Float'];
  year: Scalars['Float'];
};


export type MutationReviewWidgetDeleteArgs = {
  monthNumber: Scalars['Float'];
  year: Scalars['Float'];
};


export type MutationGoalsWidgetUpdateArgs = {
  args: GoalsWidgetInput;
  monthNumber: Scalars['Float'];
  year: Scalars['Float'];
};


export type MutationGoalsWidgetDeleteArgs = {
  monthNumber: Scalars['Float'];
  year: Scalars['Float'];
};


export type MutationGoalsWidgetUpdateGoalArgs = {
  args: GoalUpdateInput;
};


export type MutationGoalsWidgetDeleteGoalArgs = {
  goalWidgetId: Scalars['String'];
  goalId: Scalars['String'];
};

export type PomodoroWidget = {
  __typename?: 'PomodoroWidget';
  id: Scalars['String'];
  round?: Maybe<Scalars['Float']>;
  roundTarget?: Maybe<Scalars['Float']>;
  goal?: Maybe<Scalars['Float']>;
  goalTarget?: Maybe<Scalars['Float']>;
};

export type PomodoroWidgetInput = {
  round: Scalars['Float'];
  roundTarget: Scalars['Float'];
  goal: Scalars['Float'];
  goalTarget: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  userSignin: User;
  userAccount: User;
  months: Array<Month>;
  month?: Maybe<Month>;
};


export type QueryUserSigninArgs = {
  args: UserSigninInput;
};


export type QueryMonthsArgs = {
  year: Scalars['Float'];
};


export type QueryMonthArgs = {
  monthNumber: Scalars['Float'];
  year: Scalars['Float'];
};

export type ReviewWidget = {
  __typename?: 'ReviewWidget';
  id: Scalars['String'];
  text?: Maybe<Scalars['String']>;
};

export type ReviewWidgetInput = {
  text: Scalars['String'];
};

/** User object */
export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  email: Scalars['String'];
};

export type UserSigninInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserSignupInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type Weatherwidget = {
  __typename?: 'Weatherwidget';
  id: Scalars['String'];
  location?: Maybe<Scalars['String']>;
};

export type WeatherwidgetInput = {
  location: Scalars['String'];
};

export type SigninQueryVariables = Exact<{
  args: UserSigninInput;
}>;


export type SigninQuery = (
  { __typename?: 'Query' }
  & { userSignin: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  ) }
);

export type SignupMutationVariables = Exact<{
  args: UserSignupInput;
}>;


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { userSignup?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  )> }
);

export type UserAccountQueryVariables = Exact<{ [key: string]: never; }>;


export type UserAccountQuery = (
  { __typename?: 'Query' }
  & { userAccount: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  ) }
);


export const SigninDocument = gql`
    query signin($args: UserSigninInput!) {
  userSignin(args: $args) {
    id
    email
  }
}
    `;

/**
 * __useSigninQuery__
 *
 * To run a query within a React component, call `useSigninQuery` and pass it any options that fit your needs.
 * When your component renders, `useSigninQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSigninQuery({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useSigninQuery(baseOptions: Apollo.QueryHookOptions<SigninQuery, SigninQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SigninQuery, SigninQueryVariables>(SigninDocument, options);
      }
export function useSigninLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SigninQuery, SigninQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SigninQuery, SigninQueryVariables>(SigninDocument, options);
        }
export type SigninQueryHookResult = ReturnType<typeof useSigninQuery>;
export type SigninLazyQueryHookResult = ReturnType<typeof useSigninLazyQuery>;
export type SigninQueryResult = Apollo.QueryResult<SigninQuery, SigninQueryVariables>;
export const SignupDocument = gql`
    mutation signup($args: UserSignupInput!) {
  userSignup(args: $args) {
    id
    email
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const UserAccountDocument = gql`
    query UserAccount {
  userAccount {
    id
    email
  }
}
    `;

/**
 * __useUserAccountQuery__
 *
 * To run a query within a React component, call `useUserAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserAccountQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserAccountQuery(baseOptions?: Apollo.QueryHookOptions<UserAccountQuery, UserAccountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserAccountQuery, UserAccountQueryVariables>(UserAccountDocument, options);
      }
export function useUserAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserAccountQuery, UserAccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserAccountQuery, UserAccountQueryVariables>(UserAccountDocument, options);
        }
export type UserAccountQueryHookResult = ReturnType<typeof useUserAccountQuery>;
export type UserAccountLazyQueryHookResult = ReturnType<typeof useUserAccountLazyQuery>;
export type UserAccountQueryResult = Apollo.QueryResult<UserAccountQuery, UserAccountQueryVariables>;