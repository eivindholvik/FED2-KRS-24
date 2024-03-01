function Button({ onClick, children }) {
    return (
        <button
            className="my-4 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-3"
            type="button"
            onClick={onClick}
        >
            <img
                src="https://docs.material-tailwind.com/icons/metamask.svg"
                alt="metamask"
                className="w-6 h-6"
            />
            {children}
        </button>
    );
}

export default Button;
