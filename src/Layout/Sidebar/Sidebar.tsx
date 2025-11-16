import { useNavigate, useLocation } from "react-router-dom";
import * as _ from "./styled";
import SidebarLogo from "../../assets/LogoOnsidebar.svg";
import Logo from "../../assets/sidebarFoldedLogo.svg";
import { Icon } from "../../components/Icons/Icon";
import { Theme } from "../../Theme/theme";
import { NavMenu } from "../components/NavMenu/NavMenu";
import github from "../../assets/github.svg";
import { VIP } from "../components/VIP/VIP";
import { useState, useEffect } from "react";
import { useStatio } from "statio-lib";

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isFolded, setIsFolded] = useStatio("isFolded", false);
  const [selected, setSelected] = useState<string>("dashboard");

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    setSelected(path);
  }, [location.pathname]);

  return (
    <_.Container isFolded={isFolded}>
      <_.Head isFolded={isFolded}>
        <_.SidebarLogo
          isFolded={isFolded}
          src={isFolded ? Logo : SidebarLogo}
          onClick={isFolded ? () => setIsFolded(!isFolded) : undefined}
        />

        {!isFolded && (
          <_.IconBox onClick={() => setIsFolded(!isFolded)}>
            <Icon size="M" color={Theme.Text.Text_20} fill={true}>
              keyboard_double_arrow_left
            </Icon>
          </_.IconBox>
        )}
      </_.Head>

      <_.BoxFill>
        <_.Indicator selected={selected} />
        <NavMenu
          icon="dashboard"
          selected={selected === "dashboard"}
          onClick={() => {
            navigate("/dashboard");
            setSelected("dashboard");
          }}
        >
          {!isFolded && "Dashboard"}
        </NavMenu>

        <NavMenu
          icon="workspaces"
          selected={selected === "project"}
          onClick={() => {
            navigate("/project");
            setSelected("project");
          }}
        >
          {!isFolded && "Project"}
        </NavMenu>
        <NavMenu
          icon="bar_chart"
          selected={selected === "analytics"}
          onClick={() => {
            navigate("/analytics");
            setSelected("analytics");
          }}
        >
          {isFolded ? "" : "Analytics"}
        </NavMenu>
        <NavMenu
          icon="person"
          selected={selected === "user"}
          onClick={() => {
            navigate("/user");
            setSelected("user");
          }}
        >
          {!isFolded && "User"}
        </NavMenu>
      </_.BoxFill>
      <_.Box>
        <NavMenu icon="settings_b_roll">{isFolded ? "" : "Settings"}</NavMenu>
        <NavMenu icon="help">{!isFolded && "Help\u00A0&\u00A0Support"}</NavMenu>
      </_.Box>
      <_.BoxP>
        <VIP />
      </_.BoxP>
      <_.Box>
        <_.GitHub>
          <_.GitHubIcon src={github} />
          <_.GitHubLink href="/" isFolded={isFolded}>
            {!isFolded && "Go\u00A0to\u00A0github"}
          </_.GitHubLink>
        </_.GitHub>
      </_.Box>
    </_.Container>
  );
}
