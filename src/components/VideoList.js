import VideoItem from "./VideoItem";

const VideoList =(props)=>{

    const data = props.videos.map(video =>{
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={props.onVideoSelect}/>
    })

    return(
        <div className="ui relaxed divided list"> {data}</div>
    )
}

export default VideoList;