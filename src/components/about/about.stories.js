import React from 'react';
import  About  from './About';

export default{
    title: 'THALIAROMAY/About',
    component: About,
}
 const Template = (args) => <About {...args} />;

 export const about= Template.bind({});

 about.args ={
     
    bibliografia:''
    
 };