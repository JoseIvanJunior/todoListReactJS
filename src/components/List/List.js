import React from 'react'

function List(props) {
    const { tasks } = props

    return (
        <div className="tasks-list">
            {tasks.map((task, index) => {
                return (
                    <div
                        key={index}
                        className="task-card">
                        <span className={task.isComplete ? "complete" : ""}>{task.task}</span>

                        <div className="actions">
                            <button onClick={() => props.deleteTask(index)}>Excluir</button>
                            <button onClick={() => props.completeTask(index)}>
                                {task.isComplete ? "Desfazer" : "Completar"}
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default List;