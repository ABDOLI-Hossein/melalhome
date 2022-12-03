import { multiply } from "lodash";
import { useState } from "react";
import DatePicker from "react-modern-calendar-datepicker";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import ReactLoading from "react-loading";
import './formRendering.css';
function FormRendering({formdata, change, images, loading}) {

    const [selectedDate, setSelectedDate] = useState(null);


    

    const pad = (num) => {
        return (num < 10) ? '0' + num.toString() : num.toString();
    };

    const showLabel = (show,label,id,type) => {
        return show ? 
            <label htmlFor={id} className={type === 'file' ? 'file_label' : null}>{label}</label>
        : null
    }

    const renderTemplate = () => {
        let formTemplate = null;

        switch(formdata.element){
            case('input'):
                formTemplate = (
                    <div>
                        {showLabel(formdata.label, formdata.labelText, formdata.config.id, formdata.config.type)}
                        {formdata.config.type === 'date' ?
                        (<DatePicker 
                            onChange={(event)=>{
                                 const e = {
                                        target:{
                                            name:"submit_date",
                                            value:`${event.year}/${pad(event.month)}/${pad(event.day)}`
                                        }
                                 }
                                 setSelectedDate(event)
                                 change(e)
                            }}
                            isPersian
                            value={selectedDate}
                            shouldHighlightWeekends
                            locale="fa"
                        />) : 
                        (<input
                            {...formdata.config}
                            value={formdata.value}
                            onChange={(event) => change(event)}
                            //multiple={formdata.config.type === 'file' ? true : null} 
                        />)
                        }
                        
                       
                    </div>
                )
                break;
            case('select'):
                formTemplate = (
                    <div>
                        {showLabel(formdata.label,formdata.labelText)}
                        <select
                            value={formdata.value}
                            name={formdata.config.name}
                            onChange={(event) => change(event)}
                        >
                            <optgroup>
                                { formdata.config.options.map((item,i)=>(
                                    <option key={i} value={item.id}>{item.name}</option>
                                ))}
                            </optgroup>
                        </select>
                    </div>
                )
                break;
            case('textarea'):
                formTemplate = (
                    <div>
                        {showLabel(formdata.label,formdata.labelText)}
                        <textarea
                            value={formdata.value}
                            name={formdata.config.name}
                            onChange={(event) => change(event)}
                            rows={formdata.config.rows} 
                            cols={formdata.config.cols}
                        >
                        </textarea>
                    </div>
                )
                break;
            case('p'):
                formTemplate = (
                     <p>{formdata.value}</p>
                )
                break;
            case('div'):
                formTemplate = (
                    
                    <div className="image_container">
                        {images.map((item, i) => <img src={item} key={i} />)}
                        {loading ? (<ReactLoading type='bubbles' color='#533cdd' className="loading_container"/>) : null} 

                    </div>
                )

                break;
                default:
                formTemplate = null;
        }
        return formTemplate;

    }

    return ( <>
        { renderTemplate()}
    </> );
}

export default FormRendering;
