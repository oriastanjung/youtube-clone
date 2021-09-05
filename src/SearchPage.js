import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow.js";
import VideoRow from "./VideoRow";
import Thumbnail01 from "./assets/react.png";
import Thumbnail02 from "./assets/stopwatch-app.png";
import Thumbnail03 from "./assets/THUMB.jpg";
import Thumbnail04 from "./assets/yt-clone.png";
import ChannelImg from "./assets/channel-profile.jpg";

function SearchPage() {
  const listSearch = [
    {
      views: "789",
      subs: "66",
      description: "Sorry kalo banyak salah, masih baru belajar juga saya :)",
      timestamp: "1 days ago",
      channel: "O. Riastanjung",
      title: "ReactJS : Belajar buat Youtube CloneReactJS : Buat Youtube Clone Website (Belajar)",
      image: Thumbnail04,
    },
    {
      views: "1.3K",
      subs: "66",
      description: "Sorry kalo banyak salah, masih baru belajar juga saya :)",
      timestamp: "1 days ago",
      channel: "O. Riastanjung",
      title: "ReactJS : Buat Project Simple Timer (Pemula)",
      image: Thumbnail01,
    },
    {
      views: "2.3M",
      subs: "344",
      description: "Yuk support saya di event Kejuaraan se-Nasional di Game MotoGP 21 pada event HME MotoGP eSports Indonesia!! ",
      timestamp: "6 days ago",
      channel: "O. Midiyanto",
      title:"MotoGP 21 - Catalunya Race M1 Class MotoGP eSports Indonesia",
      image: Thumbnail03,
    },
    {
      views: "789",
      subs: "66",
      description: "Sorry kalo banyak salah, masih baru belajar juga saya :)",
      timestamp: "1 days ago",
      channel: "O. Riastanjung",
      title:"ReactJS : Buat Project To Do List (Pemula)",
      image: Thumbnail02,
    },
    {
      views: "1.3K",
      subs: "66",
      description: "Sorry kalo banyak salah, masih baru belajar juga saya :)",
      timestamp: "1 days ago",
      channel: "O. Riastanjung",
      title: "ReactJS : Buat Project Simple Timer (Pemula)",
      image: Thumbnail01,
    },
    {
      views: "2.3M",
      subs: "344",
      description: "Yuk support saya di event Kejuaraan se-Nasional di Game MotoGP 21 pada event HME MotoGP eSports Indonesia!! ",
      timestamp: "6 days ago",
      channel: "O. Midiyanto",
      title:"MotoGP 21 - Catalunya Race M1 Class MotoGP eSports Indonesia",
      image: Thumbnail03,
    },
    {
      views: "789",
      subs: "66",
      description: "Sorry kalo banyak salah, masih baru belajar juga saya :)",
      timestamp: "1 days ago",
      channel: "O. Riastanjung",
      title: "ReactJS : Belajar buat Youtube CloneReactJS : Buat Youtube Clone Website (Belajar)",
      image: Thumbnail04,
    },
    {
      views: "1.3K",
      subs: "66",
      description: "Sorry kalo banyak salah, masih baru belajar juga saya :)",
      timestamp: "1 days ago",
      channel: "O. Riastanjung",
      title: "ReactJS : Buat Project Simple Timer (Pemula)",
      image: Thumbnail01,
    },
    {
      views: "2.3M",
      subs: "344",
      description: "Yuk support saya di event Kejuaraan se-Nasional di Game MotoGP 21 pada event HME MotoGP eSports Indonesia!! ",
      timestamp: "6 days ago",
      channel: "O. Midiyanto",
      title:"MotoGP 21 - Catalunya Race M1 Class MotoGP eSports Indonesia",
      image: Thumbnail03,
    },
    {
      views: "1.3K",
      subs: "66",
      description: "Sorry kalo banyak salah, masih baru belajar juga saya :)",
      timestamp: "1 days ago",
      channel: "O. Riastanjung",
      title: "ReactJS : Buat Project Simple Timer (Pemula)",
      image: Thumbnail01,
    },
    {
      views: "2.3M",
      subs: "344",
      description: "Yuk support saya di event Kejuaraan se-Nasional di Game MotoGP 21 pada event HME MotoGP eSports Indonesia!! ",
      timestamp: "6 days ago",
      channel: "O. Midiyanto",
      title:"MotoGP 21 - Catalunya Race M1 Class MotoGP eSports Indonesia",
      image: Thumbnail03,
    },
    {
      views: "789",
      subs: "66",
      description: "Sorry kalo banyak salah, masih baru belajar juga saya :)",
      timestamp: "1 days ago",
      channel: "O. Riastanjung",
      title: "ReactJS : Belajar buat Youtube CloneReactJS : Buat Youtube Clone Website (Belajar)",
      image: Thumbnail04,
    },
    {
      views: "1.3K",
      subs: "66",
      description: "Sorry kalo banyak salah, masih baru belajar juga saya :)",
      timestamp: "1 days ago",
      channel: "O. Riastanjung",
      title: "ReactJS : Buat Project Simple Timer (Pemula)",
      image: Thumbnail01,
    },
    {
      views: "2.3M",
      subs: "344",
      description: "Yuk support saya di event Kejuaraan se-Nasional di Game MotoGP 21 pada event HME MotoGP eSports Indonesia!! ",
      timestamp: "6 days ago",
      channel: "O. Midiyanto",
      title:"MotoGP 21 - Catalunya Race M1 Class MotoGP eSports Indonesia",
      image: Thumbnail03,
    },
    {
      views: "789",
      subs: "66",
      description: "Sorry kalo banyak salah, masih baru belajar juga saya :)",
      timestamp: "1 days ago",
      channel: "O. Riastanjung",
      title: "ReactJS : Belajar buat Youtube CloneReactJS : Buat Youtube Clone Website (Belajar)",
      image: Thumbnail04,
    },
    {
      views: "1.3K",
      subs: "66",
      description: "Sorry kalo banyak salah, masih baru belajar juga saya :)",
      timestamp: "1 days ago",
      channel: "O. Riastanjung",
      title: "ReactJS : Buat Project Simple Timer (Pemula)",
      image: Thumbnail01,
    },
    {
      views: "2.3M",
      subs: "344",
      description: "Yuk support saya di event Kejuaraan se-Nasional di Game MotoGP 21 pada event HME MotoGP eSports Indonesia!! ",
      timestamp: "6 days ago",
      channel: "O. Midiyanto",
      title:"MotoGP 21 - Catalunya Race M1 Class MotoGP eSports Indonesia",
      image: Thumbnail03,
    },
    {
      views: "1.3K",
      subs: "66",
      description: "Sorry kalo banyak salah, masih baru belajar juga saya :)",
      timestamp: "1 days ago",
      channel: "O. Riastanjung",
      title: "ReactJS : Buat Project Simple Timer (Pemula)",
      image: Thumbnail01,
    },
    {
      views: "2.3M",
      subs: "344",
      description: "Yuk support saya di event Kejuaraan se-Nasional di Game MotoGP 21 pada event HME MotoGP eSports Indonesia!! ",
      timestamp: "6 days ago",
      channel: "O. Midiyanto",
      title:"MotoGP 21 - Catalunya Race M1 Class MotoGP eSports Indonesia",
      image: Thumbnail03,
    },
    {
      views: "789",
      subs: "66",
      description: "Sorry kalo banyak salah, masih baru belajar juga saya :)",
      timestamp: "1 days ago",
      channel: "O. Riastanjung",
      title: "ReactJS : Belajar buat Youtube CloneReactJS : Buat Youtube Clone Website (Belajar)",
      image: Thumbnail04,
    },
    


  ];
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image={ChannelImg}
        channel="O. Riastanjung"
        subs="66"
        noOfVideos={12}
        description="Hello World!"
      />
      <hr />
      {
        listSearch.map ((item,index) =>
          <VideoRow 
            key = {index}
            views = {item.views}
            subs = {item.subs}
            description = {item.description}
            timestamp = {item.timestamp}
            channel = {item.channel}
            title = {item.title}
            image = {item.image}

          />
        )
      }
    </div>
  );
}

export default SearchPage;
