import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch
} from "react-router-dom"



const OptionItem = ({option, question}) => {
    const dispatch = useDispatch()

    function handleClick() {
        dispatch({ type: 'questions/optionSelected', payload: {questionId: question.id, breadcrumb: question.breadcrumb, optionId: option.id} })
    }

    return(
        <div>
            <Link to={`/${option.nextQuestionId}`}><li onClick={handleClick} key={option.id}>{option.text}</li></Link>
        </div>
    )
}

export default OptionItem
