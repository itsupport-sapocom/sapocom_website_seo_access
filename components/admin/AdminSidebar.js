import { sidebarList } from "@/configs/config";

export default function AdminSidebar() {
  return (
    <>
      <div className="h-[100vh] w-full x-sm:w-[250px] fixed z-[90] p-4 shadow-nav bg-white">
        <nav>
          <ul className="flex flex-col justify-center items-center ">
            {Object.keys(sidebarList).map((listItem) => (
              <li className="w-full text-center x-sm:text-left" key={listItem}>
                <a
                  className="p-2 block font-semibold border-transparent hover:text-primary text-black/30 hover:bg-gray-100 rounded-md"
                  href={sidebarList[listItem]}
                >
                  {listItem}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
