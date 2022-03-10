import { StarIcon } from '@chakra-ui/icons'
import type { StarIconProps } from '../dataStructure'

export const StarIconWithAction: React.FC<StarIconProps> = ({ page, city, color, handleFunc }) => {
  if (typeof handleFunc === 'function') {
    return <StarIcon onClick={() => handleFunc(city, page)} marginLeft={'20px'} color={color} />
  }

  return <StarIcon marginLeft={'20px'} color={color} />
}
