import { Grid, Paper, Typography, Button } from '@mui/material'
import { Container } from '@mui/system'
import Heading from '../../styled component'
import { Para } from '../../styled component'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const About = () => {
    return (
        <>
            <Paper sx={{ py: 10, boxShadow: 'none', borderRadius: 0 }}>
                <Container maxWidth='xl'>
                    <Heading>About me</Heading>
                    <Grid container>
                        <Grid item lg={5} xs={12}>
                        </Grid>
                        <Grid item lg={7} xs={12}>
                            <Typography variant='subtitle1' color='primary' sx={{ fontSize: '2rem', fontWeight: 'medium' }} >I'm Naresh and I'm a Freelancer</Typography>
                            <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</Para>
                            <Button variant='outlined' size="large">
                                Download CV
                                <CloudDownloadIcon sx={{ mx: 2 }} />
                            </Button>
                        </Grid>
                    </Grid>

                </Container>
            </Paper>
        </>
    )
}

export default About
