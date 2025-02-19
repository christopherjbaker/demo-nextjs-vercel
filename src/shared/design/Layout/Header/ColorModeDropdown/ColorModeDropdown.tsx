import DarkModeIcon from "@mui/icons-material/DarkModeRounded"
import LightModeIcon from "@mui/icons-material/LightModeRounded"
import IconButton, { IconButtonOwnProps } from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { useColorScheme } from "@mui/material/styles"
import { useState } from "react"

const ColorModeDropdown: React.FC<IconButtonOwnProps> = ({ ...props }) => {
  const { mode, systemMode, setMode } = useColorScheme()
  const resolvedMode = (systemMode ?? mode) as "light" | "dark"

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMode = (mode: "system" | "light" | "dark") => () => {
    setMode(mode)
    handleClose()
  }

  if (!mode) {
    return null
  }

  return (
    <>
      <IconButton
        onClick={handleToggle}
        aria-haspopup="true"
        aria-controls={open ? "color-scheme-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        {...props}
      >
        {resolvedMode === "light" && <LightModeIcon />}
        {resolvedMode === "dark" && <DarkModeIcon />}
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        slotProps={{
          paper: {
            variant: "outlined",
            elevation: 0,
            sx: {
              my: "4px",
            },
          },
        }}
      >
        <MenuItem selected={mode === "system"} onClick={handleMode("system")}>
          System
        </MenuItem>
        <MenuItem selected={mode === "light"} onClick={handleMode("light")}>
          Light
        </MenuItem>
        <MenuItem selected={mode === "dark"} onClick={handleMode("dark")}>
          Dark
        </MenuItem>
      </Menu>
    </>
  )
}

export default ColorModeDropdown
