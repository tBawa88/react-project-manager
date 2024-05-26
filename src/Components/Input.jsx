
export const Input = ({ label, textArea, ...props }) => {
    const inputClasses = "w-full bg-stone-200 border-b-2 border-stone-400 p-1 text-stone-600 outline-none focus:border-stone-700"
    return <div className="flex flex-col gap-2 my-6 ">
        <label className="uppercase text-sm font-bold text-stone-500">{label}</label>
        {textArea ? <textarea {...props} className={`${inputClasses}`} /> : <input {...props} className={inputClasses} />}
    </div>
}