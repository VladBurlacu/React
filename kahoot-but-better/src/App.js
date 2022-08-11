import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Settings from "./Components/Settings";
import Questions from "./Components/Questions";
import Results from "./Components/Results";
import {Box, Container, Typography} from "@mui/material";

function App() {
    return (
        <Router>
            <Container maxWidth="sm">
                <Box textAlign="center" mt={5}>
                    <Switch>
                        <Route path="/" exact>
                            <Typography variant="h2" fontWeight="bold">Kahoot but Better!</Typography>
                            <Settings/>
                        </Route>
                        <Route path="/questions">
                            <Questions/>
                        </Route>
                        <Route path="/score">
                            <Results/>
                        </Route>
                    </Switch>
                </Box>
            </Container>
        </Router>
    );
}

export default App;


