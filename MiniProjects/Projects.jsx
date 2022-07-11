import { Grid, Paper, Typography, Button, Container } from '@mui/material'
import Heading from '../styled component'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import projects from './ProjectList';
import { grey } from '@mui/material/colors'
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
        <>
            <Paper sx={{ py: 10, boxShadow: 'none', borderRadius: 0 }}>
                <Container maxWidth='xl'>
                    <Heading>Projects Examples</Heading>
                    <Typography variant='h6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ullam quia magnam tenetur
                        assumenda veritatis vero incidunt nobis voluptatum nihil, laboriosam, pariatur voluptatem ut labore ea blanditiis aut doloremque harum?</Typography>
                    <Grid container sx={{ mt: 4 }} spacing={4}>
                        {
                            projects.map((val, ind) => {
                                return (
                                    <Grid key={ind + 1} item xl={4} md={6} xs={12}>
                                        <Card elevation={5}>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="250"
                                                image={val.screenShot}
                                            />
                                            <CardContent sx={{ backgroundColor: (theme) => theme.palette.mode === 'light' && grey[100] }}>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {val.projectName}
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary">
                                                    {val.description}
                                                </Typography>
                                            </CardContent>
                                            <CardActions sx={{ justifyContent: 'flex-end', backgroundColor: (theme) => theme.palette.mode === 'light' && grey[100] }}>
                                                <Link to={val.url}><Button size="medium">View</Button></Link>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })

                        }
                    </Grid>
                </Container>
            </Paper>


            {/* <div className='container overflow-auto projects-wrap'>


                <div className='row project-container'>
                    <div className='col-md-4 mb-5'>
                        <NavLink to='/projects/restuarant'>
                            <div className=' project-cards'>
                                <div className='project-img'>
                                    <img src={project1} alt='projects' />
                                </div>
                                <div className='title'>
                                    <h5></h5>
                                    <p>Categories with Breakfast, Lunch, Dinner as per the applied filter buttons</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className='col-md-4 mb-5'>
                        <NavLink to='/projects/weather'>
                            <div className=' project-cards'>
                                <div className='project-img'>
                                    <img src={project2} alt='projects' />
                                </div>
                                <div className='title'>
                                    <h5>Weather Report API</h5>
                                    <p>Categories with Breakfast, Lunch, Dinner as per the applied filter buttons</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className='col-md-4 mb-5'>
                        <NavLink to='/projects/number-with-reducer'>
                            <div className=' project-cards'>
                                <div className='project-img'>
                                    <img src={project3} alt='projects' />
                                </div>
                                <div className='title'>
                                    <h5>Use Reducer Count</h5>
                                    <p>Categories with Breakfast, Lunch, Dinner as per the applied filter buttons</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className='col-md-4 mb-5'>
                        <NavLink to='/projects/todo-list'>
                            <div className=' project-cards'>
                                <div className='project-img'>
                                    <img src={project4} alt='projects' />
                                </div>
                                <div className='title'>
                                    <h5>Todo List with local storage</h5>
                                    <p>Categories with Breakfast, Lunch, Dinner as per the applied filter buttons</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className='col-md-4 mb-5'>
                        <NavLink to='/projects/contacts'>
                            <div className=' project-cards'>
                                <div className='project-img'>
                                    <img src={project4} alt='projects' />
                                </div>
                                <div className='title'>
                                    <h5>Phonebook/Contacts</h5>
                                    <p>Categories with Breakfast, Lunch, Dinner as per the applied filter buttons</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div> */}


        </>
    )
}

export default Projects
