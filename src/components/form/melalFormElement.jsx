import ReactLoading from "react-loading";
import "./melalFormElement.css";
function MelalFormElements({name, type, label, option, change, value, click, error, loading}) {


    const translateError = (errorType) => {
        switch(errorType){
            case("string.email"):
                return 'نام کاربری باید یک ایمیل معتبر باشد!'
            break;
            case("string.min"):
                return 'باید حداقل ۶ کاراکتر داشته باشد!'
            break;
            case("string.max"):
                return 'تعداد کاراکتر پسورد باید کمتر از ۳۰ کاراکتر باشد!'
        }
    }

   

    const renderInput = (type) => {
        switch(type){
            case "select":
                return (
                    <div className="selectWrapper">
                        <label>{label}</label>
                        <select name={name}  onChange={(e) => change(e)}>
                            {
                                option.map((o,i)=>{
                                    return (<option value={o.value}>{o.label}</option>)
                                })
                            }                   
                        </select>
                    </div>
                )
            break;
            case "text-area":
                return  (
                    <>
                        <label>{label}</label>
                        <textarea name={name} onChange={(e) => change(e)}></textarea>   
                    </>
                )    
            break;
            case "button":
                return  (
                    <>
                        <button name={name} onClick={click}>{loading ? <ReactLoading type='bubbles' color='#fff' className="loading_container"/>  : value}</button>
                    </>
                )    
            break;


            default:
                return (
                    <div style={{position:'relative'}}>
                        <label>{label}</label><br />
                        <input type={type} name={name} value={value}  onChange={(e) => change(e)}
                            style={Object.keys(error).length !== 0 && error[name] ? {borderColor: 'red',color: 'red'} : null}
                        /><br />
                        <small className="login_error">{error[name] ? translateError(error[name].error_type) : null}</small>
                    </div>
                )
        }
    }


    
    return ( 
      <>
        { renderInput(type)}
      </>
      );
}

export default MelalFormElements;