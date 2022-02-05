import React from "react";
import { noop } from "lodash";
import { TextField } from "@mui/material";

interface InputProps {
    label?: string,
    placeholder?: string,
    value?: any,
    name?: string,
    onChange?: (e: any) => void,
    type?: string
}

export const Textarea = ({ label, placeholder, name, value, onChange, type = "text" }: InputProps) => {
    return(
        <TextField
            fullWidth
            name={name}
            multiline
            maxRows={4}
            minRows={4}
            variant="filled" 
            label={label} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type} 
            InputLabelProps={{ shrink: true }} 
            InputProps={{ disableUnderline: true }} 
        />
    );   
}