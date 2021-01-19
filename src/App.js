import React from "react"
import './App.css';
import Video from './Video'
// import db from './firebase'

function App() {
  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   // fires once when the component loads and videos changes
  //   db.collection('videos').onSnapshot(snapshot => (
  //     setVideos([snapshot.docs.map(doc => doc.data())])
  //   ))
  // }, [videos])

  return (
    <div className="App">
      <h1>Hello Tik-Tok Clone</h1>
      <div className="app__videos">
        {/* {videos.map(({}) => {

        })} */}
      {/* {videos.map(
              ({url, channel, description, song, likes, messages, shares})=>(
                <Video 
                    url={url}
                    channel={channel}
                    description={description}
                    song={song}
                    likes={likes}
                    messages={messages}
                    shares={shares}
                  />
              )
            )} */}
          
          <Video 
            url="https://v77.tiktokcdn.com/e0d25293a7071b3ee0c1025d8ccb5c50/6005bb27/video/tos/alisg/tos-alisg-pve-0037c001/2b3f9c5d3941460bbfe3ae222609bb09/?a=1233&br=1974&bt=987&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210118104440010188061219537087AF&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajV5NDRsbXM3MzMzOjczM0ApNWhmZmhlNzs2NzkzZTdpM2djXmNuX29zYC9gLS02MTRzczVeYzYzM14vX18wYGM0Xl86Yw%3D%3D&vl=&vr="
            channel="azontv_rasmiy"
            description="Allohu Akbar"
            song="Original azonTv sound"
            likes={123}
            messages={400}
            shares={200}
          />
          <Video
            url="https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/913f795baccd432b91809c28fc56cd66/?a=1988&br=376&bt=188&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1610568492&l=202101131407150101890491561B0F5A35&lr=tiktok_m&mime_type=video_mp4&policy=2&qs=0&rc=Mzdtb3Jpd21keTMzNDczM0ApaDc5NWhnNjw2N2U3OjU4N2diMWFkYWFzNGdfLS0yMTRzcy5fLzFfNi8vMDE1YWI2NjE6Yw%3D%3D&signature=b92197addbd0a57c85e02a761c75a2bc&tk=tt_webid_v2&vl=&vr="
            channel="azontv_rasmiy"
            description="Allohu Akbar"
            song="Original azonTv sound"
            likes={123}
            messages={400}
            shares={200}
          />
          <Video 
            url="https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/1848cfc1a3fd4082bef79acdb92fc9e8/?a=1988&br=426&bt=213&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1610568494&l=202101131407150101890491561B0F5A35&lr=tiktok_m&mime_type=video_mp4&policy=2&qs=0&rc=Mzp2bmtlZWxkeTMzNjczM0ApNjo8aGhlZTw4N2g6Nmc6M2draTFwazJlMmdfLS00MTRzczIzLzY1MDExMDY1M15iYjQ6Yw%3D%3D&signature=34aec44f92a825a57fff9e677400a5df&tk=tt_webid_v2&vl=&vr="
            channel="azontv_rasmiy"
            description="Allohu Akbar"
            song="Original azonTv sound"
            likes={123}
            messages={400}
            shares={200}
          />
          <Video
            url="https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/4591315b19874fbabb195ad19e81a243/?a=1988&br=424&bt=212&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1610568494&l=202101131407150101890491561B0F5A35&lr=tiktok_m&mime_type=video_mp4&policy=2&qs=0&rc=MzRsZW5rbHA3eTMzNTczM0ApPDozNWU7Z2RmN2c8NmZnZWdzMDBuMzRlX2VfLS1gMTRzcy1hYjYzYTIzNmEvLi5eMzM6Yw%3D%3D&signature=048003224bb52dfb74461a9cff17bb52&tk=tt_webid_v2&vl=&vr="
            channel="azontv_rasmiy"
            description="Allohu Akbar"
            song="Original azonTv sound"
            likes={123}
            messages={400}
            shares={200}
          />
          <Video 
            url="https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/84d9ce5f17bb4445a1771f286180c79d/?a=1988&br=458&bt=229&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1610568489&l=202101131407150101890491561B0F5A35&lr=tiktok_m&mime_type=video_mp4&policy=2&qs=0&rc=M2p5aXRzOm43eTMzOjczM0ApOmhpOjxlOztnN2k5Zzk7NmcwLy1uX24uNmVfLS0vMTRzcy0zMl8yXjJeXzItNF9gM186Yw%3D%3D&signature=e13ced83c49f905216177d4c5f91bec6&tk=tt_webid_v2&vl=&vr="
            channel="azontv_rasmiy"
            description="Allohu Akbar"
            song="Original azonTv sound"
            likes={123}
            messages={400}
            shares={200}
          />
          <Video 
            url="https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/2265b9fdfa0a42f4acb066960c0c899c/?a=1988&br=388&bt=194&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1610568477&l=202101131407150101890491561B0F5A35&lr=tiktok_m&mime_type=video_mp4&policy=2&qs=0&rc=M3FvcG93aXE3eTMzZDczM0ApOzc3PDM8aDw6NzxmNDZoPGdoc21fMGNyM2VfLS0tMTRzc2FgNi8wYC9gLWMwXzJhL186Yw%3D%3D&signature=69c9f804afaec9621796cc7b5867e739&tk=tt_webid_v2&vl=&vr="
            channel="azontv_rasmiy"
            description="Allohu Akbar"
            song="Original azonTv sound"
            likes={123}
            messages={400}
            shares={200}
          />
          <Video 
            url="https://v77.tiktokcdn.com/c0b7e8c52ada5c849b91c9ef301d16d1/5fff6f37/video/tos/useast2a/tos-useast2a-pve-0068/035d47d085324c9ca37d52634c3f035b/?a=1180&br=4112&bt=2056&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=202101131607240101901880170614430A&lr=tiktok&mime_type=video_mp4&qs=0&rc=ajk2O3ZqM2t3eTMzZzczM0ApZDVoaTs3PGRpNzs3NDg6NGdvNWVqX3ItMWlfLS1fMTZzczIzYjEzMmFhLTRgLzE2LTY6Yw%3D%3D&vl=&vr="
            channel="azontv_rasmiy"
            description="Allohu Akbar"
            song="Original azonTv sound"
            likes={123}
            messages={400}
            shares={200}
          />
      </div>
    </div>
  );
}

export default App;
