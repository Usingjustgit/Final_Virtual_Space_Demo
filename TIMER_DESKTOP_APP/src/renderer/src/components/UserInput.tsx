export const Inputs = ({ label, type, value, onChange }: any) => {
  return (
    <div className="grid grid-cols-2 w-full gap-3">
      <label className="flex justify-start my-auto text-white font-bold">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full bg-white rounded-xl p-2 text-black font-bold focus:outline-none"
      />
    </div>
  )
}
