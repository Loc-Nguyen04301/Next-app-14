import ActiveLink from "@/components/common/ActiveLink";
import { ModeToggle } from "@/components/common/ModeToggle";
import { menuItems } from "@/consts";
import { UserButton } from "@clerk/nextjs";

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200 flex flex-col">
      <a href="/" className="font-bold text-3xl inline-block mb-5">
        <span className="text-primary">U</span>
        cademy
      </a>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
          ></MenuItem>
        ))}
      </ul>
      <div className="mt-auto">
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};

function MenuItem({
  url = "/",
  title = "",
  icon,
}: {
  url: string;
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  );
}

export default Sidebar;
