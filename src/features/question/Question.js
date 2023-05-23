import React, { useState } from 'react'
import { questions } from './data'
import OptionList from '../options/OptionList'
import Breadcrumbs from "../breadcrumbs/Breadcrumbs"
import { useSelector, useDispatch } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch
} from "react-router-dom"


const Question = () => {
    const { id } = useParams();
    const question = findQuestion(parseInt(id)); // Why is a string returned with useParams? All the examples seem to get integers
    const dispatch = useDispatch()
    function handleResetClick() {
        dispatch({ type: 'questions/clearAllSelections' })
    }
    let content;
    if (question.options.length > 0) {
        content = (<OptionList key={question.id} question={question} />);
    } else {
        content = (<Link to={`/`}><button onClick={handleResetClick}>Start Over</button></Link>);
    }
    return (
        <>
            <Breadcrumbs question={question}/>
            <section>
                <p>{question.text}</p>
                {content}
            </section>
        </>
    )
}

function findQuestion(id){
    return questions.find(question => question.id === id)
}

export default Question
