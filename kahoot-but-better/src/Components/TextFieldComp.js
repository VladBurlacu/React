import {Box, FormControl, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {handleAmountChange} from "../redux/actions";
import React from "react";


const TextFieldComp = () => {
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(handleAmountChange(e.target.value));
    }

    return (
        <Box mt={3} width = "100%" size="small">
            <FormControl fullWidth>
                <TextField
                    onChange = {handleChange}
                    variant = "outlined"
                    label = "Amount of Questions"
                    type = "number"
                    size = "small"
                />
            </FormControl>
        </Box>
    )
}

export default TextFieldComp;