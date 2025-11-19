export const Window = () => {
    return <>
        <div className="window-container border max-w-150">
            <div className="border bg-black text-white">
                <h1 className="mx-3">index</h1>
            </div>
            <div className="inner-window bg-[#C0C0C0]">
                <div className="main-menu py-1 px-3 flex justify-between">
                    <button className="text-gray-700">File</button>
                </div>
                <div className="text-area bg-white p-4 font-[Quicksand] border">
                    <h3>WebApps</h3>
                    <ul className="ml-2">
                        <li><a href="https://im-ivan.github.io/bio-data" target="_blank" className="text-blue-700 hover:underline visited:text-fuchsia-900">Bio-data</a> - Lorem, ipsum dolor.</li>
                        <li><a href="https://im-ivan.github.io/my-landing-page" target="_blank" className="text-blue-700 hover:underline">Landing-page</a> - Aamet consectetur, adipisicing elit. Iure..</li>
                        <li><a href="https://im-ivan.github.io/periodic-table" target="_blank" className="text-blue-700 hover:underline">Periodic-table</a> - Lorem ipsum dolor sit.</li>
                    </ul>
                    <h3 className="mt-3">Endereços</h3>
                    <ul className="ml-2">
                        <li><a href="https://im-ivan.github.io/bio-data" target="_blank" className="text-blue-700 hover:underline visited:text-fuchsia-900">GitHub</a></li>
                        <li>6qivan@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}