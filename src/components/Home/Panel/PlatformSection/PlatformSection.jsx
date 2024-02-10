import { useState } from "react";
import './PlatformSection.css';


export const PlatformSection = () => {

    const [radioButtons, setRadioButtons] = useState([
        {  
            id: 'party', 
            isChecked: true,
            label: 'Party' 
        },
        { 
            id: 'match', 
            isChecked: false,
            label: 'Match' 
        },
        { 
            id: 'stream', 
            isChecked: false,
            label: 'Stream'
         },
      ]);



      const onChangeCheck = (radioId) => {
        setRadioButtons( radioButtons.map( radio => {
            if(radio.id === radioId) {
                return {
                    ...radio,
                    isChecked: true
                }
            } else {
                return {
                    ...radio,
                    isChecked: false
                }
            }
        } ) )
      }

    return (
        <form className="platformSection_form">
            {
                radioButtons.map( radio => {
                    return (
                        <div key={ radio.id } className={ radio.isChecked ? 'checked radio_container' : 'radio_container' }>
                            <label htmlFor={ radio.id } >{ radio.label }</label>
                            <input onChange={ () => onChangeCheck(radio.id) } type="radio" id={ radio.id } checked={ radio.isChecked } />
                        </div>
                    )
                } )
            }
        </form>
    )
}
