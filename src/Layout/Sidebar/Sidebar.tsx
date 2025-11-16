import { useNavigate } from "react-router-dom";
import * as _ from "./styled";
import SidebarLogo from "../../assets/LogoOnsidebar.svg";
import { Icon } from "../../components/Icons/Icon";
import { Theme } from "../../Theme/theme";
import { NavMenu } from "../components/NavMenu/NavMenu";
import github from "../../assets/github.svg";
import { VIP } from "../components/VIP/VIP";

export function Sidebar() {
  const navigate = useNavigate();

  return (
    <_.Container>
      <_.Head>
        <_.SidebarLogo src={SidebarLogo} />
        <Icon size="M" color={Theme.Text.Text_20} fill={true}>
          keyboard_double_arrow_left
        </Icon>
      </_.Head>
      <_.BoxFill>
        <NavMenu icon="dashboard" onClick={() => navigate("/dashboard")}>
          Dashboard
        </NavMenu>
        <NavMenu icon="workspaces" onClick={() => navigate("/project")}>
          Project
        </NavMenu>
        <NavMenu icon="bar_chart" onClick={() => navigate("/analytics")}>
          Analytics
        </NavMenu>
        <NavMenu icon="person" onClick={() => navigate("/user")}>
          User
        </NavMenu>
      </_.BoxFill>
      <_.Box>
        <NavMenu icon="settings_b_roll">Settings</NavMenu>
        <NavMenu icon="help">Help & Support</NavMenu>
      </_.Box>
      <_.BoxP>
        <VIP />
      </_.BoxP>
      <_.Box>
        <NavMenu>
          <_.GitHub src={github} />
          Help & Support
        </NavMenu>
      </_.Box>
    </_.Container>
  );
}
