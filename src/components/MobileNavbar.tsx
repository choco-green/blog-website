function MobileNavBar() {
    return (
        <>
            <a className="items-center justify-center
                          fixed bottom-24 right-2 md:hidden block"
               href=""
            >
                <div className="w-16 h-16 rounded-2xl bg-black text-white"/>
                <i className="flex justify-center fa-solid fa-square-plus"/>
            </a>
            <nav className="fixed bottom-0 w-full h-16 flex overflow-x-auto
                        bg-indigo-900 text-indigo-100 md:hidden block"
            >
                <a href="#"
                   className="flex flex-col items-center justify-center grow"
                >
                    <i className="flex justify-center fa-solid fa-house lg:w-20 w-16 h-4"/>
                </a>
                <a className="flex flex-col items-center justify-center grow"
                   href=""
                >
                    <i className="flex justify-center fa-solid fa-bookmark lg:w-20 w-16 h-4"/>
                </a>
                <a className="flex flex-col items-center justify-center grow"
                   href=""
                >
                    <i className="flex justify-center fa-solid fa-bell lg:w-20 w-16 h-4"/>
                </a>

                <a className="flex flex-col items-center justify-center grow"
                   href=""
                >
                    <i className="flex justify-center fa-solid fa-user-tie lg:w-20 w-16 h-4"/>
                </a>
            </nav>
        </>
    );
}

export default MobileNavBar;