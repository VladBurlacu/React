import SelectField from "./SelectField";
import {Box, Button, CircularProgress, Typography} from "@mui/material";
import TextFieldComp from "./TextFieldComp";
import useAxios from "../hooks/useAxios";
import {useHistory} from "react-router-dom";


const Settings = () => {
    const { response, error, loading} = useAxios({ url: "/api_category.php" })
    const history = useHistory();
    if(loading) {
        return (
            <Box mt={20}>
                <CircularProgress />
            </Box>
        )
    }

    if(error) {
        return (
            <Typography variant="h6" mt={20} color="red">
               Ops! Something Went Wrong!
            </Typography>
        )
    }

    const difficultyOptions = [
        { id: "easy", name: "Easy"},
        { id: "medium", name: "Medium"},
        { id: "hard", name: "Hard"},
    ]

    const typeOptions = [
        { id: "multiple", name: "Multiple Choice"},
        { id: 'boolean', name: "True/False"},
    ]

    const handleSubmit = e => {
        e.preventDefault();
        history.push("/questions")

    }

    return (
        <form onSubmit={ handleSubmit }>
            <SelectField options={response.trivia_categories} label = "Subject"/>
            <SelectField options={difficultyOptions} label = "Difficulty"/>
            <SelectField options={typeOptions} label = "Type"/>
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