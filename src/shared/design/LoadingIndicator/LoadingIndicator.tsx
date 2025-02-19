import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"

const LoadingIndicator: React.FC<{ size?: number }> = ({ size = 3 }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress size={size * 40} />
    </Box>
  )
}

export default LoadingIndicator
