import React, { useState } from 'react'
import { questions } from './data'
import OptionList from '../options/OptionList'
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
    let question = findQuestion(parseInt(id)); // Why is a string returned with useParams? All the examples seem to get integers

    return (
        <>
            <Link to="/"><p>Home</p></Link>
            <section>
                <p>{question.text}</p>
                {question.options.length > 0 && <OptionList key={question.id} question={question} />}
            </section>
        </>
    )
}

function findQuestion(id){
    return questions.find(question => question.id === id)
}

export default Question