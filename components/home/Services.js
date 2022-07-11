import Heading from '../../styled component'
import { Grid, Paper, Typography, Container } from '@mui/material'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import CampaignIcon from '@mui/icons-material/Campaign';

const Services = () => {
    return (
        <>
            <Paper sx={{ py: 10, boxShadow: 'none', borderRadius: 0 }}>
                <Container maxWidth='xl'>
                    <Heading>My Services</Heading>
                    <Grid container spacing={4}>
                        <Grid item lg={4} xs={12} textAlign='center'>
                            <Paper sx={{ p: 4 }}>
                                <DashboardCustomizeIcon sx={{ fontSize: '4.5rem', my: 3 }} color='primary' />
                                <Typography variant='h4' sx={{ my: 3 }}>Web Design/Development</Typography>
                                <Typography variant='subtitle1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim. Rem quia sunt, quasi quo illo enim. Rem quia sunt, quasi quo illo enim.</Typography>
                            </Paper>
                        </Grid>
                        <Grid item lg={4} xs={12} textAlign='center'>
                            <Paper sx={{ p: 4 }}>
                                <AppSettingsAltIcon sx={{ fontSize: '4.5rem', my: 3 }} color='primary' />
                                <Typography variant='h4' sx={{ my: 3 }}>App Design/Development</Typography>
                                <Typography variant='subtitle1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim. Rem quia sunt, quasi quo illo enim. Rem quia sunt, quasi quo illo enim.</Typography>
                            </Paper>
                        </Grid>
                        <Grid item lg={4} xs={12} textAlign='center'>
                            <Paper sx={{ p: 4 }}>
                                <CampaignIcon sx={{ fontSize: '4.5rem', my: 3 }} color='primary' />
                                <Typography variant='h4' sx={{ my: 3 }}>Digital Marketing</Typography>
                                <Typography variant='subtitle1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim. Rem quia sunt, quasi quo illo enim. Rem quia sunt, quasi quo illo enim.</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </>
    )
}

export default Services
