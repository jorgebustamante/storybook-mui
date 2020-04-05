import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import OurStepper from '../components/ourStepper';

export default{
    title: 'MUI Stepper',
    component: OurStepper,

};

//theme provider being applied on component away from the base
const materialTheme = createMuiTheme({
    typography: {
        fontSize: 20,
    }
});
//props to pass in to replace default props
let stepArray = ['Download Halo 3', 'Play team slayer', 'lose with a k/d ratio of 0.2'];
let kudos = 'Woo! You did it.'

    export const Default = () => (
        <MuiThemeProvider theme={materialTheme}>
        <OurStepper 
        infosteps={stepArray}
        completionText={kudos}
        />
        </MuiThemeProvider>
      );

