import PropTypes from "prop-types";

const AddTask = ({ listTask, setlistTask }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const title = e.target[0].value; // Obtén el valor del input
        const description = e.target[1].value; // Obtén el valor del textarea

        setlistTask([...listTask, { title, description }]);
    };

    return (
        <section>
            <h1>Agregar una tarea</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" />
                <textarea></textarea>

                <button type="submit">Agregar</button>
            </form>
        </section>
    );
};

AddTask.propTypes = {
    listTask: PropTypes.array.isRequired,
    setlistTask: PropTypes.func.isRequired,
};

export default AddTask;
