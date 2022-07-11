import { Box, Container, Typography, Paper } from '@mui/material'
import backgroundImg from '../../Assets/Background.png';
import ButtonComp from '../custom component';

const Hero = () => {
    return (
        <><Paper className="hero-section" sx={{ boxShadow: 'none', borderRadius: 0 }}>
            <Container maxWidth="xl">
                <Box className="text-heading">
                    <Typography variant='h3' className="text-1">Hello, My Name is</Typography>
                    <Typography variant='h3' className="text-2">John Doe</Typography>
                    <Typography variant='h3' className="text-3">And I am a <span>Developer</span><span className="cursor">|</span></Typography>
                    <ButtonComp type="button" variant='contained' color="primary" >Hire me</ButtonComp>
                </Box>
                <img src={backgroundImg} className='hero-image' alt='main hero' />
            </Container>
        </Paper>
        </>
    )
}

export default Hero
