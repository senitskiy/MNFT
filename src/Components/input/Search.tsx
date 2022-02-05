import React from "react";
import { noop } from "lodash";
import { TextField } from "@mui/material";
import { Icon28SearchOutline } from "@vkontakte/icons";

interface InputProps {
    placeholder?: string,
    name?: string,
    value?: any,
    onChange?: (e: any) => void,
    type?: string
}

export const Search = ({ placeholder, name, value, onChange, type = "text" }: InputProps) => {
    return(
        <TextField
            name={name}
            hiddenLabel={true}
            variant="filled" 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type} 
            InputLabelProps={{ shrink: true }} 
            InputProps={{ disableUnderline: true, endAdornment: <Icon28SearchOutline fill="white" /> }} 
        />
    );   
}