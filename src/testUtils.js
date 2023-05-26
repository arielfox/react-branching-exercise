import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import appReducer from "./reducer";
import { createMemoryRouter, RouterProvider } from "react-router";
import Question from "./features/question/Question";
import {
    Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch
} from "react-router-dom"
import { createMemoryHistory } from "history"
import Header from "./features/header/Header";

export function renderWithProviders(
    {
        state = {},
        path = "/:id",
        route = "/0",
        history = createMemoryHistory({ initialEntries: [route] })

    } = {}
) {
    // console.log(history)
    const store = createStore(appReducer, state);
    return {
        ...render(
            <Provider store={store}>
                <Header />
                <Router history={history}>
                    <Switch>
                        <Route path="/:id">
                            <Question />
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        ),
        store,
    };
}