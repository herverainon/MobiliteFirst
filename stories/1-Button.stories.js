import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, object } from '@storybook/addon-knobs';
import Button from '../src/components/Button';
import Color from '../src/components/Color';
import Icone from '../src/components/Icone';
import {Icone2 }from '../src/components/Icone';
import Input from '../src/components/Input';



const themes = ['purple', 'gold'];

storiesOf('Button', module)
 .addDecorator(withKnobs)

 .add('Default button', () => <Button label={text('label', 'VALIDER')} />)
 .add('full width', () => <Button label="Vélos en libre service > COMMANDER" big={boolean('big', true)} />)
 .add('Different backgrounds', () => (
   <Button label={text('label', 'different colors')} theme={select('theme', themes)} onClick={boolean('onClick',true)} />
 ))
 .add('custom style', () => (
   <Button
     label="Custom style"
     style={object('style', {
       
       border: '2px solid purple',
     })}
   />
 ))
 .add('playground', () => (
  <Button
    label={text('label', 'COMMANDER')}
    big={boolean('big', true)}
    theme={select('theme', themes)}
    style={object('style', {})}
    onClick={boolean('onClick',true)}
  />
));



storiesOf('Color', module)

.add('grey', () => <>
<Color colorway='grey'/></>)

.add('salmon', () => 
<Color colorway='salmon'/>
)
.add('oldpink', () => 
<Color colorway='oldpink'/>
)
.add('gold', () => 
<Color colorway='gold'/>
)
.add('orange', () => 
<Color colorway='orange'/>
)
.add('purple', () => 
<Color colorway='purple'/>
)
.add('velvet', () => 
<Color colorway='velvet'/>
)
.add('plum', () => 
<Color colorway='plum'/>
)
.add('emerald', () => 
<Color colorway='emerald'/>
)
.add('turquoise', () => 
<Color colorway='turquoise'/>
)
.add('asura', () => 
<Color colorway='asura'/>
);

storiesOf('Icone', module)

.add('Itinerary', () => 
<Icone/>)
.add('Menu', () => 
<Icone2/>)

storiesOf('Input', module)

.add('Form', () => 
<Input/>)