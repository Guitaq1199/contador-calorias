import { categories } from "../data/categories"
export default function Form() {
  return (
        <form className="space-y-5 bg-white shadow p-10 rounded-lg">
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="categorie">Categoría: </label>
                <select className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                 id="cateogy">
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
                 <label htmlFor="activitie">Actividad: </label>
                 <input 
                    type="text" 
                    id="activity"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej. Comida, jugo de naranja, ensalada, ejercico, pesas, bicicleta"
                 />
            </div>
            <div className="grid grid-cols-1 gap-3">
                 <label htmlFor="calories">calorias: </label>
                 <input 
                    type="number" 
                    id="calories"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Calorias, ej. 300"
                 />
            </div>
            <input 
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer" 
                value="Guardar comida o ejercicio"
            />
        </form>
  )
}
