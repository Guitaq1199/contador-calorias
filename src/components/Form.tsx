import { useState } from "react"
import type { Activity } from "../types"
import { categories } from "../data/categories"
export default function Form() {
    const [activity, setActivity] = useState<Activity>({
        category: 1,
        name: '',
        calories: 0
    })
    const handleChange = (e : React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) =>{
        const isNumberField = ['category', 'calories'].includes(e.target.id);
        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        });
    }
    const isValidACtivity = () =>{
        const {name, calories} = activity;
        return name.trim() !== '' && calories > 0;
    }
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log('submit', activity);
    }
  return (
        <form className="space-y-5 bg-white shadow p-10 rounded-lg"
            onSubmit = {handleSubmit}
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category">Categoría: </label>
                <select 
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    id="category"
                    value={activity.category}
                    onChange={handleChange}
                    >
                    {categories.map(category => (
                        <option 
                            key={category.id} 
                            value={category.id}>
                            {category.name}
                        </option>
                    ))}

                </select>
            </div>
            <div className="grid grid-cols-1 gap-3">
                 <label htmlFor="name">Actividad: </label>
                 <input 
                    type="text" 
                    id="name"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej. Comida, jugo de naranja, ensalada, ejercico, pesas, bicicleta"
                    value={activity.name}
                    onChange={handleChange}
                 />
            </div>
            <div className="grid grid-cols-1 gap-3">
                 <label htmlFor="calories">calorias: </label>
                 <input 
                    type="number" 
                    id="calories"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Calorias, ej. 300"
                    value={activity.calories}
                    onChange={handleChange}
                 />
            </div>
            <input 
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase
                 text-white cursor-pointer disabled:opacity-10" 
                value={activity.category === 1 ? 'Agregar comida' : 'Agregar ejercicio'}
                disabled={!isValidACtivity()}
            />
        </form>
  )
}
