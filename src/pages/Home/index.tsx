import { Avatar, Box, Button, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100vh"
      >
        <Box m="100px 0px">
          <Typography fontWeight={400}>Current Pool</Typography>
          <Typography
            fontWeight={500}
            fontSize={30}
            color="blue"
            textAlign="center"
          >
            {" "}
            500$
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="15px"
        >
          <Avatar sizes="200px"></Avatar>
          <Typography fontWeight={85}>Tenshi_6666</Typography>
        </Box>
        <Box
          mt="20px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Typography
            fontWeight={500}
            fontSize={12}
            textAlign="center"
            m="20px 0px"
            width="80%"
          >
            By clicking this button you will bet 5$ worth of TON <br></br> (4$
            will go to pool)
          </Typography>

          <Button variant="outlined" color="primary" style={{ width: "80%" }}>
            Bet TON
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
