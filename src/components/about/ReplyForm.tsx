import { Box, Button, FormControl, FormHelperText, Input } from "@mui/material"

import hutao from "../../assets/images/hutao_pasphoto.jpeg";

import SendIcon from '@mui/icons-material/Send';

import { useCommentsvalidation } from "../../stores/hooks/useCommentsvalidation";
import { reply } from "../../lib/api/call/reply";
import { Controller } from "react-hook-form";
import CustomInput from "../common/Input";
import { useParams } from "react-router-dom";


const Replyinput = () => {
  const { handleSubmit, reset, control } = useCommentsvalidation();
  const {id} = useParams()
  const parentId = id ? parseInt(id) : -1
  //Karena id bisa undefined, perlu dicek sebelum diproses oleh parseInt().
  const onSubmit = async (data: { content: string; }) => {
    await reply(parentId, data.content)
    reset();
 };
 const onError = (errors: any) => {
    console.log(errors);
 };

  // const onSubmit: SubmitHandler<IComment> = data => (setCommentsState([...comments,data]), reset()) onSubmit={handleSubmit(onSubmit)}

  return (
    <form 
      onSubmit={handleSubmit(onSubmit, onError)}
      >
      <Box sx={{ display: "flex", flexDirection: "row", width: "90%", alignItems: "center", height: "min-content",gap:"10px",margin:"auto" }}>
        <Box sx={{ display: "flex",flex: "1",justifyContent: "center",alignContent: "center" }}>
          <Box sx={{ width: "50px", height: "50px", borderRadius: "100%", backgroundColor: "grey", flex: "2",justifyContent: "center",display: "flex",alignItems: "center" }}>
            <img src={hutao} style={{ width: "50px", height: "50px", borderRadius: "100%" }} alt="profile" />
          </Box>
        </Box>
        <Box sx={{ display: "flex",flex:"8" }}>
        <Controller
          control={control}
          name="content"
          render={({ field, fieldState }) => (
             <FormControl error={Boolean(fieldState.error)}>
                <CustomInput
                   placeholder="what do you think ?"
                   sx={{ mb: 2 }}
                   {...field}
                />
                {Boolean(fieldState.error) && (
                   <FormHelperText>
                      {fieldState.error?.message}
                   </FormHelperText>
                )}
             </FormControl>
             )}
        />  
        </Box>
        <Box sx={{ display: "flex",flex: "1" }}>
          <Button
            type="submit"
            variant="contained"
            color="success"
          ><SendIcon /></Button>
        </Box>
      </Box>

    </form>
  )
}

export default Replyinput



