import { Box, Typography, Button, Grid, Divider } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";

export default function Home() {
  return (
    <Box>
      <Box id="banner" sx={{ minHeight: "90vh" }}>
        <Box
          sx={{
            height: "10vh",
            blkground: "",
            display: "flex",
            justifyContent: "space-between",
            padding: { xs: "21px 2.5rem", lg: "0 7rem" },
            color: "#111",
          }}
        >
          <Box
            sx={{
              background: "",
              // width: "300px",
              display: { xs: "none", lg: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              // background: "red",
              flex: "3",
            }}
          >
            <Typography sx={{ cursor: "pointer", fontSize: "10px" }}>
              {" "}
              Home{" "}
            </Typography>
            <Typography sx={{ cursor: "pointer", fontSize: "10px" }}>
              {" "}
              Services{" "}
            </Typography>
            <Typography sx={{ cursor: "pointer", fontSize: "10px" }}>
              {" "}
              Our Team{" "}
            </Typography>
            <Typography sx={{ cursor: "pointer", fontSize: "10px" }}>
              {" "}
              Contact{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              // width: "25%",
              flex: "2",
              height: "10vh",
              backgroundImage: "url(/logo.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              // backgroundColor: "red",
              display: "flex",
              justifyContent: "space-between",
            }}
          ></Box>

          <Box
            sx={{
              height: "10vh",
              flex: "3",
              // background: "purple",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{
                borderRadius: "21px",
                background: "white",
                color: "#111",
                padding: "12px 21px",
                fontWeight: "600",
              }}
            >
              {" "}
              Book Now{" "}
            </Button>
          </Box>
        </Box>

        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              minHeight: "90vh",
              // background: "rgba(1,1,1,.3)",
              display: "flex",
              // flexDirection: "column",
              alignItems: "center",
              justifyContent: { xs: "center", lg: "flex-end" },
              padding: "2.5rem 0 0 0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                // alignItems: "center",
                flexDirection: "column",
                width: "80%",
                // background: "rgba(1,1,1,.1)",
                // margin: "0 auto",
                padding: { xs: "1rem", lg: "2.5rem" },

                // justifyContent: "space-evenly",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  // justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "180px", lg: "200px" },
                    height: "4px",
                    background: "#111",
                  }}
                />
                <Typography
                  className="app-font"
                  sx={{ cursor: "pointer", fontSize: "21px", margin: "0 21px" }}
                >
                  {"Johannesburg , South Africa"}
                </Typography>
              </Box>
              <Typography
                className="app-font"
                sx={{
                  cursor: "pointer",
                  fontSize: { xs: "75px", lg: "100px" },
                  fontWeight: 600,
                }}
              >
                {"All for the sake of your"}
              </Typography>
              <Typography
                className="app-font"
                sx={{
                  cursor: "pointer",
                  fontSize: { xs: "75px", lg: "100px" },
                  fontWeight: 600,
                  color: "white",
                }}
              >
                {"beauty"}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  sx={{
                    borderRadius: "21px",
                    color: "white",
                    background: "#111",
                    padding: "12px 32px",
                    fontWeight: "600",
                    margin: "32px 0",
                  }}
                >
                  {" "}
                  Book Now{" "}
                </Button>
                <Button
                  sx={{
                    borderRadius: "21px",
                    background: "transparent",
                    color: "#111",
                    padding: "12px",
                    fontWeight: "600",
                    margin: "32px 12px",
                  }}
                >
                  <PlayCircleIcon sx={{ color: "white", fontSize: "32px" }} />
                </Button>
                <Typography
                  className="app-font"
                  sx={{
                    cursor: "pointer",
                    fontSize: "16px",
                    textDecoration: "underline",
                    margin: "0 12px",
                  }}
                >
                  {"See Our Clients Being Happy"}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              height: { xs: "fit-content", lg: "90vh" },
              display: "flex",
              alignItems: "flex-end",
              padding: { xs: "0", lg: "2.5rem 0 0 0" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "70vh",
                // background: "red",
                backgroundImage: "url(/banner-img.png)",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          minHeight: "100vh",
          background: "#111",
          padding: { xs: "2.5rem", lg: "2.5rem 7rem" },
          color: "#eee",
        }}
      >
        <Grid container spacing={12}>
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                padding: "0 1.5rem",
              }}
            >
              <Typography
                className="app-font"
                sx={{
                  cursor: "pointer",
                  fontSize: { xs: "35px", lg: "65px" },
                  margin: "6px 0 0 0",
                  padding: "0",
                  fontWeight: 600,
                }}
              >
                {"02 /"}
              </Typography>
              <Typography
                className="app-font"
                sx={{
                  cursor: "pointer",
                  fontSize: { xs: "25px", lg: "55px" },
                  margin: "0 12px",
                  padding: "0",
                  fontWeight: 600,
                }}
              >
                {"About Us"}
              </Typography>
            </Box>
            <Typography
              className="app-font"
              sx={{
                cursor: "pointer",
                fontSize: { xs: "18px", lg: "21px" },
                margin: "0",
                padding: "0",
                fontWeight: 300,
              }}
            >
              Hair & Beauty Salon Description
              <p>
                Located at Twin Park’s Centre, Lucinda’s Hair & Beauty salon
                provides you a range of highly trendy hair cuts and styling,
                makeup, hair coloring, waxing services, spray tanning and
                facials. It was established in the year 2005 and has a team of
                highly skilled and experienced stylists.
              </p>
              <strong>Hair & Beauty Salon Mission Statement</strong>
              <p>
                Our mission at Lucinda’s Hair & Beauty is to provide a friendly,
                personalized service through a team of highly skilled and
                creative professionals. Teamwork is our most valuable asset
                which ensures our clients are always number one, and we strive
                to exceed your expectations.
              </p>
              <em>{"Lucinda’s Hair & Beauty Salon Tingalpa, Audtralia"}</em>
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: { xs: "column", lg: "row" },
              }}
            >
              <Box
                sx={{
                  width: "50%",
                  borderRadius: "64px",
                  background: "rgba(255,255,255,.7)",
                  display: "flex",
                  padding: "21px 12px",
                  margin: "32px auto ",
                  color: "#111",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  className="app-font"
                  sx={{
                    cursor: "pointer",
                    fontSize: { xs: "18px", lg: "40px" },
                    margin: "0 12px",
                    padding: "0",
                    fontWeight: 600,
                  }}
                >
                  {"+100k"}
                </Typography>
                <Box
                  sx={{ width: "1px", height: "32px", background: "#111" }}
                />
                <Typography
                  className="app-font"
                  sx={{
                    cursor: "pointer",
                    fontSize: { xs: "18px", lg: "40px" },
                    margin: "0 12px",
                    padding: "0",
                    fontWeight: 600,
                  }}
                >
                  {"+10k"}
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "300px",
                  height: "",
                  padding: "21px",
                  margin: "0 auto",
                  // background: "yellow",
                }}
              >
                <Instagram
                  sx={{
                    margin: "0 32px 0 0",
                    color: "white",
                    fontSize: "32px",
                  }}
                />
                <Facebook
                  sx={{
                    margin: "0 32px 0 0",
                    color: "white",
                    fontSize: "32px",
                  }}
                />
                <Twitter
                  sx={{
                    margin: "0 32px 0 0",
                    color: "white",
                    fontSize: "32px",
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              minHeight: "90vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              // background: "purple",
            }}
          >
            <Box
              sx={{
                height: { xs: "350px", lg: "500px" },
                width: "180px",
                borderRadius: "100px",
                // background: "red",
                transform: "translateY(120px)",
                backgroundImage:
                  'url("https://images.pexels.com/photos/973406/pexels-photo-973406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
              }}
            />
            <Box
              sx={{
                height: { xs: "350px", lg: "500px" },
                width: "180px",
                borderRadius: "100px",
                backgroundImage:
                  'url("https://images.pexels.com/photos/3268732/pexels-photo-3268732.jpeg?auto=compress&cs=tinysrgb&w=1600")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                margin: "0 21px",
              }}
            />
            <Box
              sx={{
                height: { xs: "350px", lg: "500px" },
                width: "180px",
                borderRadius: "100px",
                transform: "translateY(-120px)",
                backgroundImage:
                  'url("https://images.pexels.com/photos/331989/pexels-photo-331989.jpeg?auto=compress&cs=tinysrgb&w=1600")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
