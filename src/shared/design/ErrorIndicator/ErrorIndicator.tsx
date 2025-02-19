import Alert from "@mui/material/Alert"
import Box from "@mui/material/Box"

const ErrorIndicator: React.FC<{ error?: Error; onReload?: () => void }> = ({
  error,
  onReload,
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Alert
        variant="outlined"
        severity="error"
        sx={{
          fontSize: "1.25rem",
          lineHeight: 1.5,
          "& .MuiAlert-icon": {
            fontSize: "1.875rem",
          },
        }}
      >
        <div>{error ? `Error: ${error.message}` : "Error"}</div>
        <div>An error occurred. Please try again.</div>
        {onReload && (
          <div>
            <button onClick={onReload}>Reload</button>
          </div>
        )}
      </Alert>
    </Box>
  )
}

export default ErrorIndicator
