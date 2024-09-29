import { useState } from "react";
import AddTask from "../components/AddTask";
import Header from "../components/header/Header";
import SeeTask from "../components/SeeTask";

function Home() {
    const [showComponent, setShowComponent] = useState(true);
    const [listTask, setlistTask] = useState([]);

    const handleDeleteTask = (index) => {
        // Filtra la lista de tareas para eliminar la tarea en el índice dado
        const updatedTasks = listTask.filter((_, i) => i !== index);
        setlistTask(updatedTasks);
    };

    return (
        <>
            <Header setShowComponent={setShowComponent} />
            {showComponent ? (
                <AddTask listTask={listTask} setlistTask={setlistTask} />
            ) : (
                <SeeTask listTask={listTask} onDeleteTask={handleDeleteTask} />
            )}
        </>
    );
}

export default Home;
