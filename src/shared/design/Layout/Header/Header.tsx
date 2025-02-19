"use client"

import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import MenuIcon from "@mui/icons-material/Menu"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import MenuItem from "@mui/material/MenuItem"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import NextLink from "next/link"
import { useState } from "react"

import ColorModeDropdown from "./ColorModeDropdown"

export interface NavigationItem {
  href: string
  label: string
  exact?: boolean
}

const Header: React.FC<{ navigation: NavigationItem[] }> = ({ navigation }) => {
  const [open, setOpen] = useState(false)

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="dense"
          disableGutters
          sx={{
            justifyContent: "space-between",
            borderRadius: 4,
            backdropFilter: "blur(24px)",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: 4,
            padding: 1,
          }}
        >
          <Typography
            color="primary"
            sx={{
              display: "flex",
              fontSize: "1.5rem",
              lineHeight: 1,
              fontWeight: "bold",
              paddingLeft: "0.85rem",
              paddingRight: "0.85rem",
            }}
          >
            Demo
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <ColorModeDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="top"
              open={open}
              onClose={() => setOpen(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={() => setOpen(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                {navigation.map(({ label, href }) => (
                  <MenuItem key={label} component={NextLink} href={href}>
                    {label}
                  </MenuItem>
                ))}

                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
            {navigation.map(({ label, href }) => (
              <Button
                key={label}
                component={NextLink}
                href={href}
                variant="text"
                color="info"
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.25,
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            <Button color="primary" variant="text" size="small">
              Sign in
            </Button>
            <Button color="primary" variant="contained" size="small">
              Sign up
            </Button>
            <ColorModeDropdown size="small" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
