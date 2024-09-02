import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import image from "../../assets/images/image.png";
import images from "../../assets/images/a3ead9bdd8650aeb12505ec58cee3c99.jpg";
import Modal from "@mui/material/Modal";
import { findUser, updateProfile } from "../../lib/api/call/user";
import useStore from "../../stores/hook";
import TextField from "@mui/material/TextField";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import { toast } from "react-toastify";


export default function ModalEditProfile() {
  
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#1D1D1D",
    border: "1px solid grey",
    boxShadow: 24,
    borderRadius: 4,
    height: "max-content",
    p: 4,
  };
  const BaseURL = "http://localhost:3000/uploads/";
  const { user, setUserState,getPosts } = useStore();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [username, setuserName] = React.useState(user.username || "");
  const [fullName, setfullName] = React.useState(user.fullName || "");
  const [bio, setBio] = React.useState(user.bio || "");
  const [profil_pic, setProfil_pic] = React.useState<any>(null);
  const [banner_pic, setBanner_pic] = React.useState<any>(null);

  const handleusernametChange = (event: any) => {
    setuserName(event.target.value);
  };
  const handlefullnametChange = (event: any) => {
    setfullName(event.target.value);
  };
  const handlebioChange = (event: any) => {
    setBio(event.target.value);
  };
  const handleprofilChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setProfil_pic(event.target.files[0]);
    }
  };
  const handlebannerChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setBanner_pic(event.target.files[0]);
    }
  };
  const onSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("fullName", fullName);

    if (profil_pic) {
      formData.append("profil_pic", profil_pic);
    } else if (user.profile?.profil_pic) {
      formData.append("profil_pic", user.profile?.profil_pic);
    }

    if (banner_pic) {
      formData.append("banner_pic", banner_pic);
    } else if (user.profile?.banner_pic) {
      formData.append("banner_pic", user.profile?.banner_pic);
    }

    formData.append("bio", bio);

    
    await updateProfile(user.id, formData);
    await getPosts()

   const data = await findUser(user.id);

   

   setUserState({
    id: user.id,
    username: data.username,
    fullName: data.fullName,
    bio: data.bio,
    email: data.email,
    profile: {
      profil_pic:
        data.profil_pic,
      banner_pic:
        data.banner_pic
    },
  });
  toast.success("Profile Updated", { autoClose: 2000 });
  };

  return (
    <div>
      <Button onClick={handleOpen}>Edit Profile</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "100%" },
            }}
          >
            <Box>
              <h3 style={{ color: "white", marginLeft: "20px" }}>
                Edit Profile
              </h3>
            </Box>
            <form
              onSubmit={(event) => {
                onSubmit(event);
                setOpen(false);
              }}
            >
              <Box
                style={{
                  width: "100%",
                  height: "75px",
                  backgroundImage: `url(${BaseURL}${user.profile?.banner_pic})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <input
                  type="file"
                  name="banner_pic"
                  multiple
                  onChange={handlebannerChange}
                  id="banner_pic"
                  style={{ display: "none" }}
                />
                <label htmlFor="banner_pic">
                  <WallpaperIcon
                    sx={{
                      color: "secondary",
                      marginRight: "20px",
                      "&:hover": { color: "white" },
                    }}
                  />
                </label>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "100%",
                    marginTop: "-30px",
                    marginLeft: "20px",
                    border: "solid rgb(33, 37, 41)",
                    backgroundImage: `url(${BaseURL}${user.profile?.profil_pic})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "black",
                      width: "30px",
                      height: "30px",
                      borderRadius: "100%",
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="file"
                      name="profil_pic"
                      multiple
                      onChange={handleprofilChange}
                      id="profil_pic"
                      style={{ display: "none" }}
                    />
                    <label htmlFor="profil_pic">
                      <AddToPhotosIcon
                        style={{
                          color: "white",
                          cursor: "pointer blue",
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.color = "blue")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.color = "white")
                        }
                      />
                    </label>
                  </Box>
                </Box>
              </Box>
              <TextField
                id="outlined-multiline-static"
                label="fullname"
                multiline
                defaultValue={user.fullName}
                onChange={handlefullnametChange}
                inputProps={{ style: { color: "white" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "white",
                  },
                }}
              />

              <TextField
                label="username"
                multiline
                defaultValue={user.username}
                onChange={handleusernametChange}
                inputProps={{ style: { color: "white" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "white",
                  },
                }}
              />

              <TextField
                id="outlined-multiline-static"
                label="bio"
                multiline
                defaultValue={user.bio}
                onChange={handlebioChange}
                rows={4}
                inputProps={{ style: { color: "white" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "white",
                  },
                }}
              />

              <Button
                variant="contained"
                type="submit"
                color="success"
                sx={{ justifySelf: "end" }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Box>

        {/* <Box sx={style}>
          <Box id="modal-modal-description" sx={{ display: "flex",flexDirection: "column", gap: "10px" }} >
            
          <form onSubmit={(event)=>{onSubmit(event);setBanner_pic(null);setProfil_pic(null);setOpen(false)}}>
            <Box sx={{ display: "flex",flexDirection: "column", gap: "10px" }}>
            <Box>
              <label style={{ color: "white" }}>username</label>
            <input
              onChange={handleusernametChange}
              name="username"
              id="username"
              placeholder={user.username}
              style={{
                width: "30vw",
                border: "1px solid gray",
                color: "black",
                borderRadius: "10px",
                padding: "5px",
             }}
             
            />
            </Box>
            <Box >
            <label style={{ color: "white" }}>fullname</label>
              <input
              onChange={handlefullnametChange}
              name="fullName"
              placeholder={user.fullName}
              style={{
                width: "30vw",
                border: "1px solid gray",
                color: "white",
                borderRadius: "10px",
                padding: "5px",
             }}
            /></Box>
            <Box>
            <label style={{ color: "white" }}>bio</label>
            <input
              onChange={handlebioChange}
              name="bio"
              placeholder={user.bio ? user.bio : ""}
              style={{
                width: "30vw",
                border: "1px solid gray",
                color: "white",
                borderRadius: "10px",
                padding: "5px",
             }}
            />
            </Box>
            <Box>
            <label style={{ color: "white" }}>profil_pic</label>
            <input type="file" onChange={handleprofilChange} name="profil_pic"/>
            </Box>
            <Box>
            <label style={{ color: "white" }}>banner_pic</label>
            <input type="file" onChange={handlebannerChange} name="banner_pic"/>
            </Box>
            <Box>
            <Button type="submit">Submit</Button>
            </Box>
            </Box>
          </form>
          </Box>

        </Box> */}
      </Modal>
    </div>
  );
}
