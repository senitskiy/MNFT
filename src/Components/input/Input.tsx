import React from "react";
import { noop } from "lodash";
import { TextField, styled, TextFieldProps } from "@mui/material";

export const Input = (props: TextFieldProps & {
    min?: number | Date,
    max?: number | Date
}) => {
    return(
        <TextField
            {...props}
            variant="filled"
            inputProps={{
                min: props.min,
                max: props.max
            }}
            InputProps={{ 
                disableUnderline: true,
                sx: ({ palette, shape }) => ({
                    borderRadius: shape.borderRadius,
                    backgroundColor: palette.background.paper,
                    backgroundImage: "none",
                }) 
            }}
            InputLabelProps={{
                sx: ({ palette }) => ({ color: palette.text.secondary }),
                focused: false
            }}
            fullWidth
            autoComplete='off'
        />
    );
}