import { Button, Typography } from '@mui/material'
import { useCreateTaskTasksPost, useGetTasksTasksGet } from '../api/generated/endpoints'

export const ResultPage = () => {
  const { data, isLoading } = useGetTasksTasksGet()
  console.log(data)

  // const { mutate } = useCreateTaskTasksPost()
  // const handler = () => {
  //   mutate({ data: { user_id: 0, type: 'text', rate: 0 } })
  // }

  return (
    <div>
      <Typography>Результат сжатия...</Typography>
    </div>
  )
}
