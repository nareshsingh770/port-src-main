import { Grid, Paper, Typography, Button, Stack, Box } from '@mui/material'
import { Container } from '@mui/system'
import Heading, { Para } from '../../styled component'
import { styled } from '@mui/material/styles';
import { LinearProgress, linearProgressClasses } from '@mui/material';

const Skills = () => {
    const skills = { 'HTML': '95', 'CSS': '90', 'Javascript': '85', 'JQuery': '70', 'Bootstrap': '90', 'Material UI': '80', 'React Js': '80' }

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.primary.main,
        },
    }));
    return (
        <>
            <Paper sx={{ py: 10, boxShadow: 'none', borderRadius: 0 }}>
                <Container maxWidth='xl'>
                    <Heading>My Skills</Heading>
                    <Grid container spacing={15}>
                        <Grid item lg={6}>
                            <Typography variant='subtitle1' color='primary' sx={{ fontSize: '2rem', fontWeight: 'medium' }} >My creative skills & experiences.</Typography>
                            <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</Para>
                            <Button variant='outlined' size='large'>Read More</Button>
                        </Grid>
                        <Grid item lg={6}>
                            {
                                Object.entries(skills).map((skill, ind) => {
                                    return (
                                        <Box key={ind} sx={{ my: 3 }}>
                                            <Stack direction="row" justifyContent="space-between" alignItems="center"><Typography>{skill[0]}</Typography><Typography>{skill[1]}%</Typography> </Stack>
                                            <BorderLinearProgress variant="determinate" value={skill[1]} />
                                        </Box>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </>
    )
}

export default Skills
