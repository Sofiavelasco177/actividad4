import PropTypes from "prop-types";

const SeeTask = ({ listTask, onDeleteTask }) => {
    const handleDelete = (index) => {
        onDeleteTask(index);
    };

    return (
        <div className="see-task">
            <h1>Lista de tareas</h1>

            {listTask.length === 0 ? (
                <p className="no-tasks">No hay tareas disponibles.</p>
            ) : (
                <div className="task-list">
                    {listTask.map((item, index) => (
                        <div key={index} className="task-card">
                            <h2 className="task-title">{item.title || "Sin título"}</h2>
                            <p className="task-description">{item.description || "Sin descripción"}</p>
                            <button onClick={() => handleDelete(index)} className="delete-button">
                                Eliminar
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

SeeTask.propTypes = {
    listTask: PropTypes.array.isRequired,
    onDeleteTask: PropTypes.func.isRequired,
};

export default SeeTask;
