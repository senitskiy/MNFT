import React from "react";
import { noop } from "lodash";
import { TextField } from "@mui/material";

interface InputProps {
    label?: string,
    placeholder?: string,
    name?: string,
    value?: any,
    onChange?: (e: any) => void,
    type?: string
}

export const Input = ({ label, placeholder, name, value, onChange, type = "text" }: InputProps) => {
    return(
        <TextField
            name={name}
            fullWidth
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