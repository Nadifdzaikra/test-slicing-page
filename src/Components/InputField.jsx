export function InputField(props) {
   return (
      <div className="w-full">
         <input
            type={props.type}
            placeholder={props.placeholder}
            className={`input w-full max-w-xs ${props.MoreClass.includes('input-bordered') ? 'input-bordered' + props.MoreClass : 'input-ghost' + props.MoreClass}`}
         />
      </div>
   )
}  