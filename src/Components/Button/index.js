import './button.css'

const Button = ({children, type}) => {
    return (
        <>
            {
                type === 'btn_outline' && 
                (<div className="btn_outline">
                    {children}
                </div>) 
                || 
                type === 'btn_no_outline' && 
                (<div className="btn_no_outline">
                    {children}
                </div>) 
                || 
                type === 'btn' && 
                (<div className="btn">
                    {children}
                </div>)
            }
            
        </>
    );
};

export default Button;