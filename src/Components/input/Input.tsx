import React from "react";
import { noop } from "lodash";
import { TextField, styled, TextFieldProps } from "@mui/material";

export const Input = (props: TextFieldProps) => {
    return(
        <TextField
            {...props}
            variant="filled"
            InputProps={{ 
                disableUnderline: true, 
                sx: ({ palette, shape }) => ({
                    borderRadius: shape.borderRadius,
                    backgroundColor: palette.background.paper,
                    backgroundImage: "none"
                }) 
            }}
            InputLabelProps={{
                sx: ({ palette }) => ({ color: palette.text.secondary }),
                focused: false
            }}
            focused
            fullWidth
            autoComplete='off'
        />
    );
}