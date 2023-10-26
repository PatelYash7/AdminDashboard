import React from 'react'
import { Header } from '../components'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
};
const CustomColorPicker = ({ id, mode }) =>
<ColorPickerComponent id={id} mode={mode} modeSwitcher={false} inline showButtons={false} change={change} />;

const ColorPicker = () => {

  
  return (
    <div className="m-2 md:m-8 mt-12 p-1 md:p-6 bg-white rounded-3xl">
      <Header category="App" title="ColorPicker" />
    <div className="text-center">
      <div id="preview" />
      <div className="flex justify-center items-center gap-20 flex-wrap">
        <div>
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
          <CustomColorPicker id="inline-palette" mode="Palette" />
        </div>
        <div>
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
          <CustomColorPicker id="inline-picker" mode="Picker" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default ColorPicker