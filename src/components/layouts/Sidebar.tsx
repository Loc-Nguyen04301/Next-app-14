import { menuItems } from "@/src/consts";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200">
      <Link href="/" className="font-bold text-3xl inline-block mb-5">
        Ucademy
      </Link>
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
    </div>
  );
};

const MenuItem = ({ url = "/", title = "", icon }: {
  url: string;
  title: string;
  icon?: React.ReactNode;
}) => {
  return (
    <li>
      <a href={url} className="p-3 rounded-md flex items-center gap-3 hover:text-primary hover:bg-primary hover:bg-opacity-1">
        {icon}
        {title}
      </a>
    </li>
  );
}

export default Sidebar;
