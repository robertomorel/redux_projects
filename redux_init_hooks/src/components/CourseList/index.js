import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CourseList() {
    const qtt = 2;

    // -- Sempre que a variável qtt mudar, o useSelector vai rodar novamente
    const courses = useSelector(state => state.data.slice(0, qtt), [qtt]);
    const dispatch = useDispatch();

    function addCourse() {
        dispatch({ type: 'ADD_COURSE', title: 'GraphQL' });
    }

    return (
        <>
            <ul>
                {courses.map(course => <li key={course}>{course}</li>)}
            </ul>
            <button type="button" onClick={addCourse}>
                Add Curso
            </button>
        </>    
    );
}
