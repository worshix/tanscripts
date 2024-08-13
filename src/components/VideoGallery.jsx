function VideoGallery({ videos }) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {videos.map((video, index) => (
                <div key={index} className="flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="w-full h-0 relative pb-[56.25%] video-container">
                        <div
                            dangerouslySetInnerHTML={{ __html: video.data.video.html }}
                            className="absolute top-0 left-0 w-full h-full"
                        />
                    </div>
                    <p className="p-4 text-center text-main-300 font-semibold">{video.data.description}</p>
                </div>
            ))}
        </section>
    );
}

export default VideoGallery;
