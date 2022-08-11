import SelectField from "./SelectField";
import {Box, Button} from "@mui/material";
import TextFieldComp from "./TextFieldComp";
import useAxios from "../hooks/useAxios";


const Settings = () => {
    const { response, error, loading} = useAxios({ url: "/api_category.php" })
    console.log(response)
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