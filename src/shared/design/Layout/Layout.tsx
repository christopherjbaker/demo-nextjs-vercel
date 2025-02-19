import Divider from "@mui/material/Divider"

import Content from "./Content"
import Footer from "./Footer"
import Header, { NavigationItem } from "./Header"

const Layout: React.FC<{
  navigation: NavigationItem[]
  children: React.ReactNode
}> = ({ navigation, children }) => {
  return (
    <>
      <Header navigation={navigation} />
      <Content>{children}</Content>
      <Divider />
      <Footer />
    </>
  )
}

export default Layout
