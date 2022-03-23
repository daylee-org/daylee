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
  username: Scalars['String'];
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

export type MonthQueryVariables = Exact<{
  month: Scalars['Float'];
  year: Scalars['Float'];
}>;


export type MonthQuery = (
  { __typename?: 'Query' }
  & { month?: Maybe<(
    { __typename?: 'Month' }
    & { pomodoroWidget?: Maybe<(
      { __typename?: 'PomodoroWidget' }
      & Pick<PomodoroWidget, 'id' | 'round' | 'roundTarget' | 'goal' | 'goalTarget'>
    )> }
  )> }
);

export type UserSigninQueryVariables = Exact<{
  args: UserSigninInput;
}>;


export type UserSigninQuery = (
  { __typename?: 'Query' }
  & { userSignin: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  ) }
);

export type UserSignupMutationVariables = Exact<{
  args: UserSignupInput;
}>;


export type UserSignupMutation = (
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
    & Pick<User, 'id' | 'email' | 'username'>
  ) }
);

export type UserSignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type UserSignOutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'userSignout'>
);


export const MonthDocument = gql`
    query Month($month: Float!, $year: Float!) {
  month(monthNumber: $month, year: $year) {
    pomodoroWidget {
      id
      round
      roundTarget
      goal
      goalTarget
    }
  }
}
    `;

/**
 * __useMonthQuery__
 *
 * To run a query within a React component, call `useMonthQuery` and pass it any options that fit your needs.
 * When your component renders, `useMonthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMonthQuery({
 *   variables: {
 *      month: // value for 'month'
 *      year: // value for 'year'
 *   },
 * });
 */
export function useMonthQuery(baseOptions: Apollo.QueryHookOptions<MonthQuery, MonthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MonthQuery, MonthQueryVariables>(MonthDocument, options);
      }
export function useMonthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MonthQuery, MonthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MonthQuery, MonthQueryVariables>(MonthDocument, options);
        }
export type MonthQueryHookResult = ReturnType<typeof useMonthQuery>;
export type MonthLazyQueryHookResult = ReturnType<typeof useMonthLazyQuery>;
export type MonthQueryResult = Apollo.QueryResult<MonthQuery, MonthQueryVariables>;
export const UserSigninDocument = gql`
    query UserSignin($args: UserSigninInput!) {
  userSignin(args: $args) {
    id
    email
  }
}
    `;

/**
 * __useUserSigninQuery__
 *
 * To run a query within a React component, call `useUserSigninQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserSigninQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserSigninQuery({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useUserSigninQuery(baseOptions: Apollo.QueryHookOptions<UserSigninQuery, UserSigninQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserSigninQuery, UserSigninQueryVariables>(UserSigninDocument, options);
      }
export function useUserSigninLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserSigninQuery, UserSigninQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserSigninQuery, UserSigninQueryVariables>(UserSigninDocument, options);
        }
export type UserSigninQueryHookResult = ReturnType<typeof useUserSigninQuery>;
export type UserSigninLazyQueryHookResult = ReturnType<typeof useUserSigninLazyQuery>;
export type UserSigninQueryResult = Apollo.QueryResult<UserSigninQuery, UserSigninQueryVariables>;
export const UserSignupDocument = gql`
    mutation UserSignup($args: UserSignupInput!) {
  userSignup(args: $args) {
    id
    email
  }
}
    `;
export type UserSignupMutationFn = Apollo.MutationFunction<UserSignupMutation, UserSignupMutationVariables>;

/**
 * __useUserSignupMutation__
 *
 * To run a mutation, you first call `useUserSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSignupMutation, { data, loading, error }] = useUserSignupMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useUserSignupMutation(baseOptions?: Apollo.MutationHookOptions<UserSignupMutation, UserSignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserSignupMutation, UserSignupMutationVariables>(UserSignupDocument, options);
      }
export type UserSignupMutationHookResult = ReturnType<typeof useUserSignupMutation>;
export type UserSignupMutationResult = Apollo.MutationResult<UserSignupMutation>;
export type UserSignupMutationOptions = Apollo.BaseMutationOptions<UserSignupMutation, UserSignupMutationVariables>;
export const UserAccountDocument = gql`
    query UserAccount {
  userAccount {
    id
    email
    username
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
export const UserSignOutDocument = gql`
    mutation UserSignOut {
  userSignout
}
    `;
export type UserSignOutMutationFn = Apollo.MutationFunction<UserSignOutMutation, UserSignOutMutationVariables>;

/**
 * __useUserSignOutMutation__
 *
 * To run a mutation, you first call `useUserSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSignOutMutation, { data, loading, error }] = useUserSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useUserSignOutMutation(baseOptions?: Apollo.MutationHookOptions<UserSignOutMutation, UserSignOutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserSignOutMutation, UserSignOutMutationVariables>(UserSignOutDocument, options);
      }
export type UserSignOutMutationHookResult = ReturnType<typeof useUserSignOutMutation>;
export type UserSignOutMutationResult = Apollo.MutationResult<UserSignOutMutation>;
export type UserSignOutMutationOptions = Apollo.BaseMutationOptions<UserSignOutMutation, UserSignOutMutationVariables>;