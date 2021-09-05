import React from 'react'
import "./RecommendedVideos.css";
import VideoCard from './VideoCard';
import Thumbnail01 from "./assets/react.png"
import Thumbnail02 from "./assets/stopwatch-app.png"
import Thumbnail03 from "./assets/THUMB.jpg"
import Thumbnail04 from "./assets/yt-clone.png"
import ChannelImg from "./assets/channel-profile.jpg"
import ChannelImgOmi from "./assets/unnamed.jpg"

function RecommendedVideos() {
    const listVideos = [
        {   
            title:"ReactJS : Buat Project To Do List (Pemula)",
            views:"2.7k Views",
            timestamp :"3 days ago",
            channelImage: ChannelImg,
            channel:"O. Riastanjung",
            image:Thumbnail01
        },
        {   
            title:"ReactJS : Buat Project Simple Timer (Pemula)",
            views:"1.3K Views",
            timestamp :"1 days ago",
            channelImage: ChannelImg,
            channel:"O. Riastanjung",
            image:Thumbnail02
        },
        {   
            title:"MotoGP 21 - Catalunya Race M1 Class MotoGP eSports Indonesia",
            views:"2.3M Views",
            timestamp :"6 days ago",
            channelImage: ChannelImgOmi,
            channel:"O. Midiyanto",
            image:Thumbnail03
        },
        {   
            title:"ReactJS : Buat Youtube Clone Website (Belajar)",
            views:"789 Views",
            timestamp :"1 days ago",
            channelImage: ChannelImg,
            channel:"O. Riastanjung",
            image:Thumbnail04
        },
        {   
            title:"MotoGP 21 - Catalunya Race M1 Class MotoGP eSports Indonesia",
            views:"2.3M Views",
            timestamp :"6 days ago",
            channelImage: ChannelImgOmi,
            channel:"O. Midiyanto",
            image:Thumbnail03
        },
        {   
            title:"ReactJS : Buat Youtube Clone Website (Belajar)",
            views:"789 Views",
            timestamp :"1 days ago",
            channelImage: ChannelImg,
            channel:"O. Riastanjung",
            image:Thumbnail04
        },
        {   
            title:"ReactJS : Buat Project To Do List (Pemula)",
            views:"2.7k Views",
            timestamp :"3 days ago",
            channelImage: ChannelImg,
            channel:"O. Riastanjung",
            image:Thumbnail01
        },
        {   
            title:"ReactJS : Buat Project Simple Timer (Pemula)",
            views:"1.3K Views",
            timestamp :"1 days ago",
            channelImage: ChannelImg,
            channel:"O. Riastanjung",
            image:Thumbnail02
        },
        {   
            title:"MotoGP 21 - Catalunya Race M1 Class MotoGP eSports Indonesia",
            views:"2.3M Views",
            timestamp :"6 days ago",
            channelImage: ChannelImgOmi,
            channel:"O. Midiyanto",
            image:Thumbnail03
        },
        {   
            title:"ReactJS : Buat Youtube Clone Website (Belajar)",
            views:"789 Views",
            timestamp :"1 days ago",
            channelImage: ChannelImg,
            channel:"O. Riastanjung",
            image:Thumbnail04
        },
        {   
            title:"MotoGP 21 - Catalunya Race M1 Class MotoGP eSports Indonesia",
            views:"2.3M Views",
            timestamp :"6 days ago",
            channelImage: ChannelImgOmi,
            channel:"O. Midiyanto",
            image:Thumbnail03
        },
        {   
            title:"ReactJS : Buat Youtube Clone Website (Belajar)",
            views:"789 Views",
            timestamp :"1 days ago",
            channelImage: ChannelImg,
            channel:"O. Riastanjung",
            image:Thumbnail04
        },
        {   
            title:"ReactJS : Buat Project Simple Timer (Pemula)",
            views:"1.3K Views",
            timestamp :"1 days ago",
            channelImage: ChannelImg,
            channel:"O. Riastanjung",
            image:Thumbnail02
        },
        {   
            title:"MotoGP 21 - Catalunya Race M1 Class MotoGP eSports Indonesia",
            views:"2.3M Views",
            timestamp :"6 days ago",
            channelImage: ChannelImgOmi,
            channel:"O. Midiyanto",
            image:Thumbnail03
        },
        {   
            title:"ReactJS : Buat Youtube Clone Website (Belajar)",
            views:"789 Views",
            timestamp :"1 days ago",
            channelImage: ChannelImg,
            channel:"O. Riastanjung",
            image:Thumbnail04
        },
        {   
            title:"MotoGP 21 - Catalunya Race M1 Class MotoGP eSports Indonesia",
            views:"2.3M Views",
            timestamp :"6 days ago",
            channelImage: ChannelImgOmi,
            channel:"O. Midiyanto",
            image:Thumbnail03
        },
        {   
            title:"ReactJS : Buat Youtube Clone Website (Belajar)",
            views:"789 Views",
            timestamp :"1 days ago",
            channelImage: ChannelImg,
            channel:"O. Riastanjung",
            image:Thumbnail04
        },
        {   
            title:"ReactJS : Buat Project To Do List (Pemula)",
            views:"2.7k Views",
            timestamp :"3 days ago",
            channelImage: ChannelImg,
            channel:"O. Riastanjung",
            image:Thumbnail01
        },
        {   
            title:"ReactJS : Buat Project Simple Timer (Pemula)",
            views:"1.3K Views",
            timestamp :"1 days ago",
            channelImage: ChannelImg,
            channel:"O. Riastanjung",
            image:Thumbnail02
        }
        
    ];

    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__Videos">
                {
                    listVideos.map((item, index) => 
                    <VideoCard 
                    key ={index}
                        title = {item.title} 
                        views = {item.views}
                        timestamp = {item.timestamp}
                        channelImage = {item.channelImage}
                        channel = {item.channel}
                        image = {item.image}  
                    />)
                }
                
            </div>
        </div>
    )
}

export default RecommendedVideos
