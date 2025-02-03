const Button = ({ children, transparent, MoreClass }) => {
   return (
      <button
         className={`btn btn-ghost rounded-full ${MoreClass}  ${transparent ? "bg-transparent btn-ghost" : "bg-stone-900 text-white"
            }`}
      >
         {children}
      </button>
   );
};

export default Button;
