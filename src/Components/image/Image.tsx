import { Box } from "@mui/material";

interface ImageProps {
    width?: number | string,
    height?: number | string,
    src?: string 
    onClick?: () => void
}

export const Image = ({ src, width, height, onClick }: ImageProps) => {
    return(
        <Box
        width={width || 300}
        height={height || 300}
        onClick={onClick}
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