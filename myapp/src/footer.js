import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Email from '@material-ui/icons/Email'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({

    container: {
        overflow: "hidden",
        backgroundColor:   '#f7f6f6' ,
        marginBottom: 10,
        marginTop: 515, 
        height: 100, /* original: 150, */
        color:"black" , 
    },
    

    copyright:{
    color:  '#9fafc1' ,
    position: "relative",
    top:60 ,
    left: 10,
    },

    contactUs :{
        /* textAlign:"right", */
        fontWeight: 900,
        position: "relative",
        top: 5,
        left:1020,
    },

    phoneIcon :{
        color: "#d79652" ,
        position: "relative",
        top:-14,
        left: 1100
    },

    emailIcon :{ 
        color: "#d79652" ,
        position: "relative",
        top:-37,
        left:1100
    },

    phoneNo: {
        fontWeight: 900,
        position:"relative",
        top:-37,
        left: -57
    },

    PO:{ 
        fontWeight: 900,
        position:"relative",
        top:-60,
        left: -49
    },

    email:{
        fontWeight: 900,
        position:"relative",
        top:-60,
        left: -25
    }
})

const Footer = () => {
    const classes = useStyles()
    return (      
      <Container
      className= { classes.container }
      maxWidth='xl'
      >
             <Typography
                className = { classes.copyright }
                variant='body2' >
                    All rights reserved © Mo7amy team
            </Typography>
                <Typography className={ classes.contactUs } 
                variant='body2'
                >
                     Contact us: 
                </Typography>
                <PhoneInTalkIcon className={ classes.phoneIcon }
                 fontSize="small"
                 align="right"
                />
                <Typography variant='body2'
                 align='right'
                 className={ classes.phoneNo }>
                     +962 79 999 9999
                </Typography> 
                <Email className={ classes.emailIcon }
                 fontSize="small"
                 align="right" />
                <Typography variant='body2'
                 align='right' 
                className={ classes.email }>
                    Mo7amy@support.com
                </Typography> 
                <Typography variant='body2'
                 align='right'
                 className={ classes.PO }>
                    PO: 212121-Jordan
                </Typography> 
      </Container>
      );
}
 
export default Footer;