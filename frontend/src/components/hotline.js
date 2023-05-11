

const Hotline = () => {
    return (
        <div className="cursor-pointer animate-bounce fixed right-16 bottom-16 px-4 py-2 bg-[#ffcce0] rounded-3xl border-2 border-white">
            <div className="flex flex-row items-center gap-x-2  ">
                <p className="font-semibold text-white text-lg">HOTLINE</p>
                <div className="p-2 rounded-2xl bg-red-500">
                    <svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" fill="white"></path> </svg>
                </div>
            </div>
        </div>
    )
}

export default Hotline