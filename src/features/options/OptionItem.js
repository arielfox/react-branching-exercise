import React, { useState } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch
} from "react-router-dom"

const OptionItem = ({option}) => {
    return(
        <div>
            <Link to={`/${option.nextQuestionId}`}><li key={option.id}>{option.text}</li></Link>
        </div>
    )
}

export default OptionItem