import {Box, FormControl, TextField} from "@mui/material";


const TextFieldComp = () => {

    const handleChange = () => { }

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