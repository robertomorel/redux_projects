import React from 'react';
import { connect } from 'react-redux';
// -- Helper do redux
import { bindActionCreators } from 'redux';

import * as CourseActions from '../../store/actions/course';

const Sidebar = ({ modules, toggleLesson /* , dispatch (Dispara uma action pro Redux) */ }) => {
  return (
    <aside>
      {modules.map(module => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map(lesson => (
              <li key={lesson.id}>
                {lesson.title}
                <button onClick={() => toggleLesson(module, lesson)}>Selecionar</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

const mapStateToProps = state => ({
  modules: state.courseReducer.modules,
});

/*
const mapDispatchToProps = dispatch => ({
  toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson)),
});
*/

const mapDispatchToProps = dispatch =>
  bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

//export default connect(state => ({ modules: state.courseReducer.modules }))(Sidebar);
