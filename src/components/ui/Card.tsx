import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  stls: object;
}

const Card = ({ children, stls }: Props) => {
  const styles = {
        border: "none",
        borderRadius: '10px',
        backgroundColor: "white",
        padding: 2,
        ...stls}
  return ( 
    <Box 
      sx={styles}>
      {children}
    </Box>
  );
}
 
export default Card;