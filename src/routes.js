import Login from './pages/login';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
} from "react-router-dom"

function Routes() {
    <Router>
        <Switch>
            <Route path={'/'} element={<Login/>}/>
        </Switch>
    </Router>
}

export default Routes