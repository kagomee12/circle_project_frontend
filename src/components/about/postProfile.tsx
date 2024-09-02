import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import useStore from "../../stores/hook";
import { useComment } from "../../stores/useComments";
import CommentItem from "./commentRender";
import { Box } from "@mui/material";
import {CommentItembyuserId, StandardImageList} from "./commentbyuseridRender";

interface Props {
  user_id: number;
}
export default function PostProfile({user_id}: Props) {
  return (
    <Box>
    <Tabs
      aria-label="full width tabs example"
      defaultValue={0}
      sx={{
        width: "100%",
        backgroundColor: "#1D1D1D",
        alignItems: "center",
        justifyContent: "center",
      }}
      
    >
      
      <TabList sx={{ width: "100%", alignItems: "center", justifyContent: "center"
       }}
       variant="plain"
       >
        <Tab>All Post</Tab>
        <Tab>Media</Tab>
      </TabList>
      <TabPanel value={0} sx={{ width: "100%" }}>
        <CommentItembyuserId user_id ={user_id? user_id : 0}  />
      </TabPanel>
      <TabPanel value={1} sx={{ width: "100%" }}>
        <StandardImageList user_id={user_id}/>
      </TabPanel>
    </Tabs>
    </Box>
  );
}
