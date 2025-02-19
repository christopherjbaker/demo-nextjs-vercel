import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

const Footer: React.FC = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: { sm: "center", md: "left" },
        gap: 0.5,
        py: 2,
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>Primary footer text.</Typography>
      <Typography sx={{ color: "text.secondary" }}>
        Secondary footer text.
      </Typography>
    </Container>
  )
}

export default Footer
