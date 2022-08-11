import SelectField from "./SelectField";
import {Box, Button} from "@mui/material";


const Settings = () => {
    return (
        <form>
            <SelectField label = "Subject"/>
            <SelectField label = "Difficulty"/>
            <SelectField label = "Amount of Questions"/>
            <Box mt={3} width = "100%">
                <Button fullWidth variant = "contained" type = "submit">
                    Get started!
                </Button>
            </Box>
        </form>
    )
}

export default Settings;