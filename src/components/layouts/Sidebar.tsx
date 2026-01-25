"use client"
import ActiveLink from "@/components/common/ActiveLink";
import { ModeToggle } from "@/components/common/ModeToggle";
import { IconUsers } from "@/components/icons";
import { menuItems } from "@/consts";
import { useAuth, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Sidebar = () => {
  const { userId } = useAuth();

  return (
    <div className="p-5 border-r border-r-gray-200 flex flex-col">
      <a
        href="/"
        className="font-bold text-3xl inline-block mb-5 h-10 self-start"
      >
        <span className="text-primary">U</span>
        <span className="text-2xl font-semibold">cademy</span>
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
      <div className="mt-auto flex items-center justify-end gap-2">
        <ModeToggle />
        {!userId ? (
          <Link
            href="/sign-in"
            className="size-10 rounded-lg bg-primary text-white flex items-center justify-center p-1"
          >
            <IconUsers />
          </Link>
        ) : (
          <UserButton />
        )}
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
