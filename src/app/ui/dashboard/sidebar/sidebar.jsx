import { FaBuffer } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5"
import { IoIosNotifications } from "react-icons/io";;
import { FaUsers } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { SiMyanimelist } from "react-icons/si";

const menuItems = [
    {
        category: "ภาพรวม",
        items: [
            {
                title: "แดชบอร์ด",
                path: "/dashboard",
                icon: <FaBuffer />,
            },
            {
                title: "สร้างซีรีย์",
                path: "/dashboard/addvideo",
                icon: <IoAddSharp />,
            },
            {
                title: "เพิ่มรายชื่ออนิเมะ",
                path: "/dashboard/animelists/add",
                icon: <SiMyanimelist />,
            },
            {
                title: "สร้างคอมมิค",
                path: "/dashboard/comics/add",
                icon: <FaBook />,
            },
        ],
    },
    {
        category: "ผู้ใช้",
        items: [
            {
                title: "จัดการผู้ใช้",
                path: "/dashboard/users",
                icon: <FaUsers />,
            },
            {
                title: "ข้อความแจ้งเตือน",
                path: "/users",
                icon: <IoIosNotifications />,
            },
        ],
    },
];

const Sidebar = () => {
    return (
        <div className="h-screen fixed w-14 md:w-64 p-2 md:p-4">
            <div className="flex">
                <div>
                    <img className="w-10 h-10 rounded-full" src="/Profile-PNG-Images-defaullt.png" alt="Profile" />
                </div>
                <div className="hidden md:flex md:flex-col md:pl-2">
                    <h2 className="text-3xl font-bold">Admin</h2>
                    <p>ผู้ดูและระบบ</p>
                </div>
            </div><hr className="mt-4 mb-6" />
            {menuItems.map((cat) => (
                <div key={cat.category}>
                    <h3 className="hidden md:mb-2 md:mt-2 md:block font-medium text-sm">{cat.category}</h3>
                    <ul>
                        {cat.items.map((item) => (
                            <li key={item.title} className="p-1 mb-2 hover:bg-gray-200 rounded-md">
                                <a href={item.path} className="flex items-center p-2">
                                    <span className="mr-2 text-1xl">{item.icon}</span>
                                   <span className="hidden md:block">{item.title}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;