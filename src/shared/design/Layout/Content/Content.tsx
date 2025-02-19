import Container from "@mui/material/Container"

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: "flex", flexDirection: "column", my: 12, gap: 4 }}
    >
      {children}
    </Container>
  )
}

export default Content
