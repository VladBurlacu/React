import SelectField from "./SelectField";
import {Box, Button} from "@mui/material";
import TextFieldComp from "./TextFieldComp";


const Settings = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <form onSubmit={ handleSubmit }>
            <SelectField label = "Subject"/>
            <SelectField label = "Difficulty"/>
            <SelectField label = "Type"/>
            <TextFieldComp />
            <Box mt={3} width = "100%">
                <Button fullWidth variant = "contained" type = "submit">
                    Get started!
                </Button>
            </Box>
        </form>
    )
}

export default Settings;