const Button = ({ Class, children }) => {
	return <div className={"btn " + Class}>{children}</div>;
};

export default Button;
