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

    return (
        <main className="phone-container">
            <div className="encabezado">
                <h1>TODOS</h1>
                <p>Pendientes por hoy</p>
            </div>
            <ul className="list-group">
                <li className="list-group-item">
                    <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)}
                        className="form-control" placeholder="Ingresa tarea..." />
                </li>
                {tareas.map((tarea, index) => (<li key={index} className="list-group-item">{tarea}</li>))}
            </ul>
            <button onClick={addTarea} className="btn btn-primary">Add Tarea</button>
        </main>
    );
};
export default Todolist;
