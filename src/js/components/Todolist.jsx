import React, { useState } from "react";

const Todolist = () => {
    const [nuevaTarea, setNuevaTarea] = useState("");
    const [tareas, setTareas] = useState(["Limpiar la casa", "Aprender React"]);

    const addTarea = () => {
        if (nuevaTarea.trim() !== "") {
            setTareas([...tareas, nuevaTarea]);
            setNuevaTarea("");
        }
    };

    const tocarEnter = (e) => {
        if (e.key === "Enter") {
            addTarea();
        }
    };

    const eliminarTarea = (indexEliminar) => {
        const nuevasTareas = tareas.filter((_, index) => index !== indexEliminar);
        setTareas(nuevasTareas);
    };

    return (
        <main className="phone-container">
            <div className="encabezado">
                <h1>TODOS</h1>
                <p>Pendientes por hoy</p>
            </div>
            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        type="text"
                        value={nuevaTarea}
                        onChange={(e) => setNuevaTarea(e.target.value)}
                        onKeyDown={tocarEnter}
                        className="form-control"
                        placeholder="Ingresa tarea..."
                    />
                </li>

                {tareas.length === 0 ? (
                    <li className="list-group-item text-muted text-center" style={{ fontStyle: 'italic' }}>
                        "No hay tareas, añadir tareas"
                    </li>) : (tareas.map((tarea, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            {tarea}
                            <span
                                className="delete-icon"
                                onClick={() => eliminarTarea(index)}
                                style={{ cursor: 'pointer', color: 'red', fontWeight: 'bold' }}
                            >
                                x
                            </span>
                        </li>
                    ))
                )}
            </ul>
        </main>
    );
};

export default Todolist;

