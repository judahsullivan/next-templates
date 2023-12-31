import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";





export const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

