function VideoGallery({ videos }) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {videos.map((video, index) => (
                <div key={index} className="flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="w-full h-64 relative">
		    	<div className="h-full w-auto mx-auto"
  				dangerouslySetInnerHTML={{ __html: video.data.video.html }}
			/>
                    </div>
                    <p className="p-4 text-center text-main-300 font-semibold">{video.data.description}</p>
                </div>
            ))}
        </section>
    );
}

export default VideoGallery;
/**<video controls className="h-full w-auto mx-auto">
                            <source src={video.src} type={video.type} />
                            Your browser does not support the video tag.
                        </video>*/
