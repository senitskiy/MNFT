import { Box } from "@mui/material";

interface ImageProps {
    width?: number,
    height?: number,
    src?: string 
}

export const Image = ({ src, width, height }: ImageProps) => {
    return(
        <Box
        width={width || 300}
        height={height || 300}
        sx={{
            backgroundImage: `url(${src})`,
            backgroundColor: "#414144",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            borderRadius: 8
        }}
    >
    </Box>
    );
}