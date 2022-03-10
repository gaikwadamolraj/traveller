import { Spinner } from '@chakra-ui/react'
import type { IEmptyProps } from '../dataStructure'

export const Loading: React.FC<IEmptyProps> = () => (
  <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
)
