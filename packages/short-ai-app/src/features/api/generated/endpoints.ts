/**
 * Generated by orval v6.11.1 🍺
 * Do not edit manually.
 * ShortAPi
 * OpenAPI spec version: 0.1.0
 */
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import { useMutation, useQuery } from '@tanstack/react-query'
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

import type {
  BodyLoginForAccessTokenTokenPost,
  BodyUploadFileTasksTaskIdUploadFilePost,
  DefaultHttpException,
  HTTPValidationError,
  TaskIn,
  TaskOut,
  Token,
  User,
  UserCreate
} from './models'

/**
 * @summary Get User
 */
export const getUserUsersGet = (options?: AxiosRequestConfig): Promise<AxiosResponse<unknown>> => {
  return axios.get(`/users`, options)
}

export const getGetUserUsersGetQueryKey = () => [`/users`]

export type GetUserUsersGetQueryResult = NonNullable<Awaited<ReturnType<typeof getUserUsersGet>>>
export type GetUserUsersGetQueryError = AxiosError<void>

export const useGetUserUsersGet = <
  TData = Awaited<ReturnType<typeof getUserUsersGet>>,
  TError = AxiosError<void>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getUserUsersGet>>, TError, TData>
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetUserUsersGetQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getUserUsersGet>>> = ({ signal }) =>
    getUserUsersGet({ signal, ...axiosOptions })

  const query = useQuery<Awaited<ReturnType<typeof getUserUsersGet>>, TError, TData>(
    queryKey,
    queryFn,
    queryOptions
  ) as UseQueryResult<TData, TError> & { queryKey: QueryKey }

  query.queryKey = queryKey

  return query
}

/**
 * @summary Create User
 */
export const createUserUsersPost = (
  userCreate: UserCreate,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<unknown>> => {
  return axios.post(`/users`, userCreate, options)
}

export type CreateUserUsersPostMutationResult = NonNullable<
  Awaited<ReturnType<typeof createUserUsersPost>>
>
export type CreateUserUsersPostMutationBody = UserCreate
export type CreateUserUsersPostMutationError = AxiosError<
  DefaultHttpException | void | HTTPValidationError
>

export const useCreateUserUsersPost = <
  TError = AxiosError<DefaultHttpException | void | HTTPValidationError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createUserUsersPost>>,
    TError,
    { data: UserCreate },
    TContext
  >
  axios?: AxiosRequestConfig
}) => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createUserUsersPost>>,
    { data: UserCreate }
  > = (props) => {
    const { data } = props ?? {}

    return createUserUsersPost(data, axiosOptions)
  }

  return useMutation<
    Awaited<ReturnType<typeof createUserUsersPost>>,
    TError,
    { data: UserCreate },
    TContext
  >(mutationFn, mutationOptions)
}

/**
 * @summary Delete User
 */
export const deleteUserUsersDelete = (
  options?: AxiosRequestConfig
): Promise<AxiosResponse<unknown>> => {
  return axios.delete(`/users`, options)
}

export type DeleteUserUsersDeleteMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteUserUsersDelete>>
>

export type DeleteUserUsersDeleteMutationError = AxiosError<void>

export const useDeleteUserUsersDelete = <
  TError = AxiosError<void>,
  TVariables = void,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteUserUsersDelete>>,
    TError,
    TVariables,
    TContext
  >
  axios?: AxiosRequestConfig
}) => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteUserUsersDelete>>,
    TVariables
  > = () => {
    return deleteUserUsersDelete(axiosOptions)
  }

  return useMutation<
    Awaited<ReturnType<typeof deleteUserUsersDelete>>,
    TError,
    TVariables,
    TContext
  >(mutationFn, mutationOptions)
}

/**
 * @summary Update User
 */
export const updateUserUsersPatch = (
  user: User,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<unknown>> => {
  return axios.patch(`/users`, user, options)
}

export type UpdateUserUsersPatchMutationResult = NonNullable<
  Awaited<ReturnType<typeof updateUserUsersPatch>>
>
export type UpdateUserUsersPatchMutationBody = User
export type UpdateUserUsersPatchMutationError = AxiosError<void | HTTPValidationError>

export const useUpdateUserUsersPatch = <
  TError = AxiosError<void | HTTPValidationError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateUserUsersPatch>>,
    TError,
    { data: User },
    TContext
  >
  axios?: AxiosRequestConfig
}) => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateUserUsersPatch>>,
    { data: User }
  > = (props) => {
    const { data } = props ?? {}

    return updateUserUsersPatch(data, axiosOptions)
  }

  return useMutation<
    Awaited<ReturnType<typeof updateUserUsersPatch>>,
    TError,
    { data: User },
    TContext
  >(mutationFn, mutationOptions)
}

/**
 * @summary Check Possibility Of Creating User
 */
export const checkPossibilityOfCreatingUserUsersCheckPost = (
  user: User,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<unknown>> => {
  return axios.post(`/users/check`, user, options)
}

export type CheckPossibilityOfCreatingUserUsersCheckPostMutationResult = NonNullable<
  Awaited<ReturnType<typeof checkPossibilityOfCreatingUserUsersCheckPost>>
>
export type CheckPossibilityOfCreatingUserUsersCheckPostMutationBody = User
export type CheckPossibilityOfCreatingUserUsersCheckPostMutationError =
  AxiosError<void | HTTPValidationError>

export const useCheckPossibilityOfCreatingUserUsersCheckPost = <
  TError = AxiosError<void | HTTPValidationError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof checkPossibilityOfCreatingUserUsersCheckPost>>,
    TError,
    { data: User },
    TContext
  >
  axios?: AxiosRequestConfig
}) => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof checkPossibilityOfCreatingUserUsersCheckPost>>,
    { data: User }
  > = (props) => {
    const { data } = props ?? {}

    return checkPossibilityOfCreatingUserUsersCheckPost(data, axiosOptions)
  }

  return useMutation<
    Awaited<ReturnType<typeof checkPossibilityOfCreatingUserUsersCheckPost>>,
    TError,
    { data: User },
    TContext
  >(mutationFn, mutationOptions)
}

/**
 * @summary Get Tasks
 */
export const getTasksTasksGet = (
  options?: AxiosRequestConfig
): Promise<AxiosResponse<TaskOut[]>> => {
  return axios.get(`/tasks`, options)
}

export const getGetTasksTasksGetQueryKey = () => [`/tasks`]

export type GetTasksTasksGetQueryResult = NonNullable<Awaited<ReturnType<typeof getTasksTasksGet>>>
export type GetTasksTasksGetQueryError = AxiosError<
  DefaultHttpException | void | HTTPValidationError
>

export const useGetTasksTasksGet = <
  TData = Awaited<ReturnType<typeof getTasksTasksGet>>,
  TError = AxiosError<DefaultHttpException | void | HTTPValidationError>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getTasksTasksGet>>, TError, TData>
  axios?: AxiosRequestConfig
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetTasksTasksGetQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getTasksTasksGet>>> = ({ signal }) =>
    getTasksTasksGet({ signal, ...axiosOptions })

  const query = useQuery<Awaited<ReturnType<typeof getTasksTasksGet>>, TError, TData>(
    queryKey,
    queryFn,
    queryOptions
  ) as UseQueryResult<TData, TError> & { queryKey: QueryKey }

  query.queryKey = queryKey

  return query
}

/**
 * @summary Create Task
 */
export const createTaskTasksPost = (
  taskIn: TaskIn,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<TaskOut>> => {
  return axios.post(`/tasks`, taskIn, options)
}

export type CreateTaskTasksPostMutationResult = NonNullable<
  Awaited<ReturnType<typeof createTaskTasksPost>>
>
export type CreateTaskTasksPostMutationBody = TaskIn
export type CreateTaskTasksPostMutationError = AxiosError<
  DefaultHttpException | void | HTTPValidationError
>

export const useCreateTaskTasksPost = <
  TError = AxiosError<DefaultHttpException | void | HTTPValidationError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createTaskTasksPost>>,
    TError,
    { data: TaskIn },
    TContext
  >
  axios?: AxiosRequestConfig
}) => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createTaskTasksPost>>,
    { data: TaskIn }
  > = (props) => {
    const { data } = props ?? {}

    return createTaskTasksPost(data, axiosOptions)
  }

  return useMutation<
    Awaited<ReturnType<typeof createTaskTasksPost>>,
    TError,
    { data: TaskIn },
    TContext
  >(mutationFn, mutationOptions)
}

/**
 * task_id:
 * @summary Get Task
 */
export const getTaskTasksTaskIdGet = (
  taskId: number,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<TaskOut>> => {
  return axios.get(`/tasks/${taskId}`, options)
}

export const getGetTaskTasksTaskIdGetQueryKey = (taskId: number) => [`/tasks/${taskId}`]

export type GetTaskTasksTaskIdGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof getTaskTasksTaskIdGet>>
>
export type GetTaskTasksTaskIdGetQueryError = AxiosError<
  DefaultHttpException | void | HTTPValidationError
>

export const useGetTaskTasksTaskIdGet = <
  TData = Awaited<ReturnType<typeof getTaskTasksTaskIdGet>>,
  TError = AxiosError<DefaultHttpException | void | HTTPValidationError>
>(
  taskId: number,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTaskTasksTaskIdGet>>, TError, TData>
    axios?: AxiosRequestConfig
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetTaskTasksTaskIdGetQueryKey(taskId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getTaskTasksTaskIdGet>>> = ({ signal }) =>
    getTaskTasksTaskIdGet(taskId, { signal, ...axiosOptions })

  const query = useQuery<Awaited<ReturnType<typeof getTaskTasksTaskIdGet>>, TError, TData>(
    queryKey,
    queryFn,
    { enabled: !!taskId, ...queryOptions }
  ) as UseQueryResult<TData, TError> & { queryKey: QueryKey }

  query.queryKey = queryKey

  return query
}

/**
 * @summary Upload File
 */
export const uploadFileTasksTaskIdUploadFilePost = (
  taskId: number,
  bodyUploadFileTasksTaskIdUploadFilePost: BodyUploadFileTasksTaskIdUploadFilePost,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<unknown>> => {
  const formData = new FormData()
  formData.append('file', bodyUploadFileTasksTaskIdUploadFilePost.file)

  return axios.post(`/tasks/${taskId}/upload_file`, formData, options)
}

export type UploadFileTasksTaskIdUploadFilePostMutationResult = NonNullable<
  Awaited<ReturnType<typeof uploadFileTasksTaskIdUploadFilePost>>
>
export type UploadFileTasksTaskIdUploadFilePostMutationBody =
  BodyUploadFileTasksTaskIdUploadFilePost
export type UploadFileTasksTaskIdUploadFilePostMutationError = AxiosError<
  DefaultHttpException | void | HTTPValidationError
>

export const useUploadFileTasksTaskIdUploadFilePost = <
  TError = AxiosError<DefaultHttpException | void | HTTPValidationError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof uploadFileTasksTaskIdUploadFilePost>>,
    TError,
    { taskId: number; data: BodyUploadFileTasksTaskIdUploadFilePost },
    TContext
  >
  axios?: AxiosRequestConfig
}) => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof uploadFileTasksTaskIdUploadFilePost>>,
    { taskId: number; data: BodyUploadFileTasksTaskIdUploadFilePost }
  > = (props) => {
    const { taskId, data } = props ?? {}

    return uploadFileTasksTaskIdUploadFilePost(taskId, data, axiosOptions)
  }

  return useMutation<
    Awaited<ReturnType<typeof uploadFileTasksTaskIdUploadFilePost>>,
    TError,
    { taskId: number; data: BodyUploadFileTasksTaskIdUploadFilePost },
    TContext
  >(mutationFn, mutationOptions)
}

/**
 * @summary Login For Access Token
 */
export const loginForAccessTokenTokenPost = (
  bodyLoginForAccessTokenTokenPost: BodyLoginForAccessTokenTokenPost,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<Token>> => {
  const formUrlEncoded = new URLSearchParams()
  if (bodyLoginForAccessTokenTokenPost.grant_type !== undefined) {
    formUrlEncoded.append('grant_type', bodyLoginForAccessTokenTokenPost.grant_type)
  }
  formUrlEncoded.append('username', bodyLoginForAccessTokenTokenPost.username)
  formUrlEncoded.append('password', bodyLoginForAccessTokenTokenPost.password)
  if (bodyLoginForAccessTokenTokenPost.scope !== undefined) {
    formUrlEncoded.append('scope', bodyLoginForAccessTokenTokenPost.scope)
  }
  if (bodyLoginForAccessTokenTokenPost.client_id !== undefined) {
    formUrlEncoded.append('client_id', bodyLoginForAccessTokenTokenPost.client_id)
  }
  if (bodyLoginForAccessTokenTokenPost.client_secret !== undefined) {
    formUrlEncoded.append('client_secret', bodyLoginForAccessTokenTokenPost.client_secret)
  }

  return axios.post(`/token`, formUrlEncoded, options)
}

export type LoginForAccessTokenTokenPostMutationResult = NonNullable<
  Awaited<ReturnType<typeof loginForAccessTokenTokenPost>>
>
export type LoginForAccessTokenTokenPostMutationBody = BodyLoginForAccessTokenTokenPost
export type LoginForAccessTokenTokenPostMutationError = AxiosError<void | HTTPValidationError>

export const useLoginForAccessTokenTokenPost = <
  TError = AxiosError<void | HTTPValidationError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof loginForAccessTokenTokenPost>>,
    TError,
    { data: BodyLoginForAccessTokenTokenPost },
    TContext
  >
  axios?: AxiosRequestConfig
}) => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof loginForAccessTokenTokenPost>>,
    { data: BodyLoginForAccessTokenTokenPost }
  > = (props) => {
    const { data } = props ?? {}

    return loginForAccessTokenTokenPost(data, axiosOptions)
  }

  return useMutation<
    Awaited<ReturnType<typeof loginForAccessTokenTokenPost>>,
    TError,
    { data: BodyLoginForAccessTokenTokenPost },
    TContext
  >(mutationFn, mutationOptions)
}

/**
 * @summary Refresh Token
 */
export const refreshTokenRefreshPost = (
  options?: AxiosRequestConfig
): Promise<AxiosResponse<Token>> => {
  return axios.post(`/refresh`, undefined, options)
}

export type RefreshTokenRefreshPostMutationResult = NonNullable<
  Awaited<ReturnType<typeof refreshTokenRefreshPost>>
>

export type RefreshTokenRefreshPostMutationError = AxiosError<void | HTTPValidationError>

export const useRefreshTokenRefreshPost = <
  TError = AxiosError<void | HTTPValidationError>,
  TVariables = void,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof refreshTokenRefreshPost>>,
    TError,
    TVariables,
    TContext
  >
  axios?: AxiosRequestConfig
}) => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof refreshTokenRefreshPost>>,
    TVariables
  > = () => {
    return refreshTokenRefreshPost(axiosOptions)
  }

  return useMutation<
    Awaited<ReturnType<typeof refreshTokenRefreshPost>>,
    TError,
    TVariables,
    TContext
  >(mutationFn, mutationOptions)
}
