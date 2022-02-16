function NavBar() {
    return (
        <nav className="md:w-20 w-screen md:h-screen h-16
                        fixed bg-indigo-900 group md:block hidden
                        md:transition-all md:ease-in-out md:hover:w-60 md:duration-300
                        text-indigo-100"
        >
            <ul className="flex md:flex-col flex-row list-none p-0 m-0 h-full w-full">
                <a className="flex grow items-center"
                   href=""
                >
                    <i className="fixed flex justify-center fa-solid fa-house md:scale-150 sm:scale-125 w-20 h-4"/>
                    <span className="hidden ml-20 md:group-hover:block">Feed</span>
                </a>
                <a className="flex grow items-center"
                   href=""
                >
                    <i className="fixed flex justify-center fa-solid fa-bookmark md:scale-150 sm:scale-125 w-20 h-4"/>
                    <span className="hidden ml-20 md:group-hover:block">Bookmark</span>
                </a>
                <a className="flex grow items-center"
                   href=""
                >
                    <i className="fixed flex justify-center fa-solid fa-bell md:scale-150 sm:scale-125 w-20 h-4"/>
                    <span className="hidden ml-20 md:group-hover:block">Notification</span>
                </a>
                <a className="flex grow items-center"
                   href=""
                >
                    <i className="fixed flex justify-center fa-solid fa-square-plus md:scale-150 sm:scale-125 w-20 h-4"/>
                    <span className="hidden ml-20 md:group-hover:block">Post</span>
                </a>
                <div className="md:grow-[5] sm:grow w-[calc(100vw/7)]"/>
                <a className="flex grow items-center"
                   href=""
                >
                    <i className="fixed flex justify-center fa-solid fa-user-tie md:scale-150 sm:scale-125 w-20 h-4"/>
                    <span className="hidden ml-20 md:group-hover:block">Profile</span>
                </a>
            </ul>
        </nav>
    );
}

export default NavBar;