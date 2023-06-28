import { Button } from "@chakra-ui/react"
import { FaArrowLeft } from "react-icons/fa"

export const BackButton = () => {
  return(
    <Button
      leftIcon={<FaArrowLeft />}
    >
      Go Back
    </Button>
  )
}



export const ForwardButton = () => {
  return(
    <Button>
      Go Forward
    </Button>
  )
}

