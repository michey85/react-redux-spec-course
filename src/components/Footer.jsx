import { Box, Container, Grid, Typography, Link } from '@material-ui/core';

const Footer = () => {
    return (
        <Box
            style={{
                backgroundColor: 'lightgrey',
                padding: '1.5rem 0',
                marginTop: '1rem',
            }}
        >
            <Container>
                <Grid container direction='row' justify='space-between'>
                    <Grid item>
                        <Typography>&copy; 2021 React Shop</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            <Link href='#'>Repo</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
