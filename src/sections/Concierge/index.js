import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import SectionTextMedium from "../../components/SectionTextMedium/index";
import SectionParagraph from "../../components/SectionParagraph/index";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { styled } from '@material-ui/core/styles';

export class Concierge extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };


  render() {
    const paragraph = "Fashion Concierge is interactive way to send your inquiry to";
    const paragraph2 = "Sebastian Gunawan and team. Tell us what you have in mind. Your color";
    const paragraph3 = "preferences, your style preferences, or even upload your";
    const paragraph4 = "rough sketches about the art piece of your dream";

    const MyButton = styled(Button)({
      height: '56px',
      padding:'0 40px',
      borderradius: '0px',
      border: '1px solid #FFFFFF',
      background:'white',
      color:'black',
      fontweight:300,
      letterspacing: "0.16em",
    })

    return (
       <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
            color='black'
          >
              <SectionTextMedium value="WELCOME TO"></SectionTextMedium>
              <SectionTextMedium value="THE FASHION CONCIERGE"></SectionTextMedium>
              <hr
              style={{
                  border: "1px solid white",
                  width: "45px",
                  margin: "auto",
              }}
              ></hr>
              <br />
              <SectionParagraph value={paragraph}> </SectionParagraph>
              <SectionParagraph value={paragraph2}> </SectionParagraph>
              <SectionParagraph value={paragraph3}> </SectionParagraph>
              <SectionParagraph value={paragraph4}> </SectionParagraph>

              <MyButton
              variant="contained"
              onClick={this.continue}
              >Continue</MyButton>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Concierge;