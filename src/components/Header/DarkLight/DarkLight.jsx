import { useEffect, useState } from "react"


export const DarkLight = () => {

    const [themeStatus, setThemeStatus] = useState('dark');
    const [themeIcon, setThemeIcon] = useState('bx-sun');

    useEffect(() => {

      document.body.setAttribute('data-theme', themeStatus)
    
    }, [themeStatus])
    

    const handleThemeChange = () => {
        if(themeIcon === 'bx-moon') {
            setThemeIcon('bx-sun');
            setThemeStatus('dark');
        } else {
            setThemeIcon('bx-moon');
            setThemeStatus('light');
        }
    }

  return (
    <div className="darklight_container">
        <i onClick={ handleThemeChange } className={`bx ${themeIcon} bx-sm`}></i>
    </div>
  )
}
