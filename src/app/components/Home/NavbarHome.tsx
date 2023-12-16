function NavbarHome() {
    return (
    <section>
        <div className="flex items-center max-sm:justify-center sm:justify-end mx-auto w-2/4">
            <ul className="flex flex-row justify-end text-white gap-2 p-2">
            <a href="/#about" className="block hover:text-white hover:opacity-40 transition-all">
                <code>/about</code></a>
                <a href="/" className="block opacity-40 transition-all cursor-not-allowed">
                <code>/project</code> 
                </a>
                <a href="#SkillHome" className="block opacity-40 hover:opacity-100 transition-all">
                <code>/skills</code> 
                </a>
            </ul>
        </div>
    </section>
    );
}

export { NavbarHome }