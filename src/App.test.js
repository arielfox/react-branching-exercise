import { render, screen } from '@testing-library/react'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducer from './reducer'
import { renderWithProviders } from "./TestUtils"
import {Router, MemoryRouter} from "react-router-dom"
import {createMemoryHistory} from 'history'
import Header from "./features/header/Header";
import React from "react";

test('renders header text', () => {
    render(<Header />);
    const headerText = screen.getByText('What to Eat');
    expect(headerText).toBeInTheDocument();
});

test('renders image with alt text in header', () => {
    render(<Header />);
    const altText = screen.getByAltText('plates');
    expect(altText).toBeInTheDocument();
});

// Todo get renderWithProviders to work, path not currently working so Question isn't rendered
test('renders question title', () => {
    const {store} = renderWithProviders(
        {
            state: [{questionId: 0, breadcrumb: "Home", optionId: 1}],
            path: "/:id",
            route: ["/1"]
        });

    // screen.debug();
    // console.log(window.location.pathname)
    const title = screen.getByText(/5 minutes/i);

    expect(title).toBeInTheDocument();
});