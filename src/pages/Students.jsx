import { Link } from "react-router-dom";

export default function Students() {
    return (
        <div className="flex min-h-screen">
            <aside className="sidebar-container fixed h-[calc(100vh-20px)] w-full max-w-[280px] my-[10px] ml-[10px] bg-[#060A23] overflow-hidden flex flex-1 rounded-[20px]">
                <div className="scroll-container flex w-full hide-scrollbar">
                    <nav className="flex flex-col w-full h-fit p-[30px] gap-10 z-10">
                        <a href="#">
                            <img src="assets/images/logos/logo.svg" alt="logo" />
                        </a>
                        <ul className="flex flex-col gap-4">
                            <p className="font-semibold text-xs leading-[18px] text-white">
                                GENERAL
                            </p>
                            <li>
                                <Link to={'/home'}>
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img
                                            src="assets/images/icons/3dcube-white.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <span className="font-semibold text-white">Overview</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/manage-course'}>
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img
                                            src="assets/images/icons/note-favorite-white.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <span className="font-semibold text-white">Courses</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img
                                            src="assets/images/icons/crown-white.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <span className="font-semibold text-white">Categories</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <Link to={'/students'}>
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#662FFF] border-[#8661EE] ">
                                        <img
                                            src="assets/images/icons/profile-2user-white.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <span className="font-semibold text-white">Students</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-4">
                            <p className="font-semibold text-xs leading-[18px] text-white">
                                OTHERS
                            </p>
                            <li>
                                <a href="#">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img
                                            src="assets/images/icons/security-card-white.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <span className="font-semibold text-white">Subscription</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img
                                            src="assets/images/icons/cup-white.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <span className="font-semibold text-white">Rewards</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img
                                            src="assets/images/icons/setting-2-white.svg"
                                            className="w-6 h-6"
                                            alt="icon"
                                        />
                                        <span className="font-semibold text-white">Settings</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <img
                    src="assets/images/backgrounds/sidebar-glow.png"
                    className="absolute object-contain object-bottom bottom-0"
                    alt="background"
                />
            </aside>
            <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
                <div id="TopBar" className="flex items-center justify-between gap-[30px]">
                    <form
                        action=""
                        className="flex items-center w-full max-w-[450px] rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]"
                    >
                        <input
                            type="text"
                            name="search"
                            id="search"
                            className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D]"
                            placeholder="Search course, student, other file..."
                        />
                        <img
                            src="assets/images/icons/search-normal.svg"
                            className="w-6 h-6"
                            alt="icon"
                        />
                    </form>
                    <div className="relative flex items-center justify-end gap-[14px]">
                        <div className="text-right">
                            <p className="font-semibold">Shayna Angga</p>
                            <p className="text-sm leading-[21px] text-[#838C9D]">Manager</p>
                        </div>
                        <button
                            type="button"
                            id="profileButton"
                            className="flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden"
                        >
                            <img
                                src="assets/images/photos/photo-1.png"
                                className="w-full h-full object-cover"
                                alt="profile photos"
                            />
                        </button>
                        <div id="ProfileDropdown" className="absolute top-full hidden">
                            <ul className="flex flex-col w-[200px] rounded-[20px] border border-[#CFDBEF] p-5 gap-4 bg-white mt-4">
                                <li className="font-semibold">
                                    <a href="#">My Account</a>
                                </li>
                                <li className="font-semibold">
                                    <a href="#">Subscriptions</a>
                                </li>
                                <li className="font-semibold">
                                    <a href="#">Settings</a>
                                </li>
                                <li className="font-semibold">
                                    <a href="signin.html">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <header className="flex items-center justify-between gap-[30px]">
                    <div>
                        <h1 className="font-extrabold text-[28px] leading-[42px]">
                            Manage Students
                        </h1>
                        <p className="text-[#838C9D] mt-[1]">
                            Keep your employee or student happy
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href="#"
                            className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
                        >
                            Import File
                        </a>
                        <a
                            href="create-new-student.html"
                            className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
                        >
                            Add Student
                        </a>
                    </div>
                </header>
                <section
                    id="CourseList"
                    className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
                >
                    <div className="card flex items-center gap-5">
                        <div className="relative flex shrink-0 w-20 h-20">
                            <div className="rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                <img
                                    src="assets/images/photos/photo-3.png"
                                    className="w-full h-full object-cover"
                                    alt="photo"
                                />
                            </div>
                        </div>
                        <div className="w-full">
                            <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
                                Angga Risky Setiawan
                            </h3>
                            <div className="flex items-center gap-5">
                                <div className="flex items-center gap-[6px] mt-[6px]">
                                    <img
                                        src="assets/images/icons/note-favorite-purple.svg"
                                        className="w-5 h-5"
                                        alt="icon"
                                    />
                                    <p className="text-[#838C9D]">183 Course Joined</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-3">
                            <a
                                href="#"
                                className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
                            >
                                Edit Profile
                            </a>
                            <button
                                type="button"
                                className="w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className="card flex items-center gap-5">
                        <div className="relative flex shrink-0 w-20 h-20">
                            <div className="rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                <img
                                    src="assets/images/photos/photo-4.png"
                                    className="w-full h-full object-cover"
                                    alt="photo"
                                />
                            </div>
                        </div>
                        <div className="w-full">
                            <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
                                Yulia Putri
                            </h3>
                            <div className="flex items-center gap-5">
                                <div className="flex items-center gap-[6px] mt-[6px]">
                                    <img
                                        src="assets/images/icons/note-favorite-purple.svg"
                                        className="w-5 h-5"
                                        alt="icon"
                                    />
                                    <p className="text-[#838C9D]">183 Course Joined</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-3">
                            <a
                                href="#"
                                className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
                            >
                                Edit Profile
                            </a>
                            <button
                                type="button"
                                className="w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className="card flex items-center gap-5">
                        <div className="relative flex shrink-0 w-20 h-20">
                            <div className="rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                <img
                                    src="assets/images/photos/photo-5.png"
                                    className="w-full h-full object-cover"
                                    alt="photo"
                                />
                            </div>
                        </div>
                        <div className="w-full">
                            <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
                                Shayna Wo
                            </h3>
                            <div className="flex items-center gap-5">
                                <div className="flex items-center gap-[6px] mt-[6px]">
                                    <img
                                        src="assets/images/icons/note-favorite-purple.svg"
                                        className="w-5 h-5"
                                        alt="icon"
                                    />
                                    <p className="text-[#838C9D]">183 Course Joined</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-3">
                            <a
                                href="#"
                                className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
                            >
                                Edit Profile
                            </a>
                            <button
                                type="button"
                                className="w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className="card flex items-center gap-5">
                        <div className="relative flex shrink-0 w-20 h-20">
                            <div className="rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                <img
                                    src="assets/images/photos/photo-2.png"
                                    className="w-full h-full object-cover"
                                    alt="photo"
                                />
                            </div>
                        </div>
                        <div className="w-full">
                            <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
                                Battita Gunber
                            </h3>
                            <div className="flex items-center gap-5">
                                <div className="flex items-center gap-[6px] mt-[6px]">
                                    <img
                                        src="assets/images/icons/note-favorite-purple.svg"
                                        className="w-5 h-5"
                                        alt="icon"
                                    />
                                    <p className="text-[#838C9D]">183 Course Joined</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-3">
                            <a
                                href="#"
                                className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
                            >
                                Edit Profile
                            </a>
                            <button
                                type="button"
                                className="w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className="card flex items-center gap-5">
                        <div className="relative flex shrink-0 w-20 h-20">
                            <div className="rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                <img
                                    src="assets/images/photos/photo-4.png"
                                    className="w-full h-full object-cover"
                                    alt="photo"
                                />
                            </div>
                        </div>
                        <div className="w-full">
                            <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
                                Yulia Putri
                            </h3>
                            <div className="flex items-center gap-5">
                                <div className="flex items-center gap-[6px] mt-[6px]">
                                    <img
                                        src="assets/images/icons/note-favorite-purple.svg"
                                        className="w-5 h-5"
                                        alt="icon"
                                    />
                                    <p className="text-[#838C9D]">183 Course Joined</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-3">
                            <a
                                href="#"
                                className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
                            >
                                Edit Profile
                            </a>
                            <button
                                type="button"
                                className="w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    <div id="Pagination" className="flex items-center gap-3">
                        <button
                            type="button"
                            className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 bg-[#662FFF] text-white"
                        >
                            <span className="font-semibold text-sm leading-[21px]">1</span>
                        </button>
                        <button
                            type="button"
                            className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
                        >
                            <span className="font-semibold text-sm leading-[21px]">2</span>
                        </button>
                        <button
                            type="button"
                            className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
                        >
                            <span className="font-semibold text-sm leading-[21px]">3</span>
                        </button>
                        <button
                            type="button"
                            className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
                        >
                            <span className="font-semibold text-sm leading-[21px]">4</span>
                        </button>
                        <button
                            type="button"
                            className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
                        >
                            <span className="font-semibold text-sm leading-[21px]">5</span>
                        </button>
                    </div>
                </section>
            </main>
        </div>

    )
}