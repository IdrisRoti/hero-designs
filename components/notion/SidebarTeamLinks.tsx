import { sidebarTeamLinks } from "./constants"
import SidebarTeamLink from "./SidebarTeamLink";

const SidebarTeamLinks = () => {

  return (
    <div className="">
        {
            sidebarTeamLinks.map(({id, title, links}) => (
                <div key={id} className="mt-3">
                    <h2 className="text-xs opacity-80 mb-3">{title}</h2>
                    {
                        links.length && links.map(({id, icon, label, subLinks}) => (
                            <SidebarTeamLink key={id} icon={icon} label={label} subLinks={subLinks} />
                        ))
                    }
                </div>
            ))
        }
    </div>
  )
}

export default SidebarTeamLinks