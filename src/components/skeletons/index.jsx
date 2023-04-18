import { Skeleton } from "@mui/material";
import React from "react";

export const Skeletons = () => {
    return (
        <Skeleton variant="rounded" width='100%' height='100vh' sx={{margin:'1em', padding:'1em', fontSize:'2em'}} > loading ... </Skeleton>
    )
}