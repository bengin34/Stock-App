import React from "react"
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import FirmCard from "../components/FirmCard";
import { flex } from "../styles/globalStyles";
import FirmModal from "../modals/FirmModal";
import { handleBreakpoints } from "@mui/system";
// import { useDispatch, useSelector } from "react-redux"
// import { fetchFail, getSuccess, fetchStart } from "../features/stockSlice"

const Firms = () => {
  // const { token } = useSelector((state) => state.auth)
  // const dispatch = useDispatch()

  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // getFirms()
    getStockData("firms");
  }, []);
  console.log(firms);
  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firm
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Firm
      </Button>

      <FirmModal handleOpen={handleOpen} handleClose={handleClose} open={open} setOpen={setOpen} />

      <Grid container sx={flex}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
