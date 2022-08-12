import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task} from '../../models/task.class';
import TaskComponent from '../pure/task';



const TaskListComponent = () => {
    
    const defaultTask = new Task('Example', 'Default descrioption',true, LEVELS.NORMAL);
    
    /* const changeSate = (id) =>{
        console.log('TODO: cambiar estado de una tarea')
    } */
    return (
        <div>
            <div>
                <h1>Your Tasks: </h1> 
            </div>
            {/* To Do : aplicar un for/Map para rendererizar una lista */}
            <TaskComponent task = { defaultTask }></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
