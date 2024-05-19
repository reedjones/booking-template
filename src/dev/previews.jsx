import React from 'react'
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import { PaletteTree } from './palette'
import Calendar from "../components/Calendar.jsx";
import { Button } from "../components/Button.jsx";
import Home from "../page/home.jsx";

const ComponentPreviews = () => {
    return (
      <Previews palette={<PaletteTree/>}>
        <ComponentPreview path="/Calendar">
<Calendar/>
</ComponentPreview>
<ComponentPreview path="/Button">
<Button/>
</ComponentPreview>
<ComponentPreview path="/Home">
<Home/>
</ComponentPreview>
</Previews>
    )
}

export default ComponentPreviews