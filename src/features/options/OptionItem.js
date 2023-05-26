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
import styles from './Options.module.css'



const OptionItem = ({option, question}) => {
    const dispatch = useDispatch()

    function handleClick() {
        dispatch({
            type: 'questions/optionSelected',
            payload: {questionId: question.id, breadcrumb: question.breadcrumb, optionId: option.id}
        })
    }

    return(
        <div>
            <Link className={styles.optionItemLink} to={`/${option.nextQuestionId}`}>
                <li className={styles.optionItem} onClick={handleClick} key={option.id}>
                    {option.text}
                </li>
            </Link>
        </div>
    )
}

export default OptionItem
