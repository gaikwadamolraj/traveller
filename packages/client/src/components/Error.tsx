import { Alert, AlertIcon } from '@chakra-ui/react'
import type { IErrorProps } from '../dataStructure'

export const Error: React.FC<IErrorProps> = ({ error }) => {
  if (error?.length) {
    return (
      <Alert status="error">
        <AlertIcon />
        {error}
      </Alert>
    )
  }
  return <></>
}
