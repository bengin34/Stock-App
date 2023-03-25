import { Button } from "@mui/material"
import Typography from "@mui/material/Typography"
import { useEffect } from "react"
import axios from "axios"
import useStockCall from "../hooks/useStockCall"
// import { useDispatch, useSelector } from "react-redux"
// import { fetchFail, getSuccess, fetchStart } from "../features/stockSlice"

const Firms = () => {
  // const { token } = useSelector((state) => state.auth)
  // const dispatch = useDispatch()


  const { getStockData } = useStockCall()

  useEffect(() => {
    // getFirms()
    getStockData("firms")
  }, [])

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firm
      </Typography>

      <Button variant="contained">New Firm</Button>
    </div>
  )
}

export default Firms
