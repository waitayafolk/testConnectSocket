import React , {useEffect , useState} from "react";
import Parse from "parse";
export default function App() {

  useEffect(()=>{
    callSocket()
  },[])
  const callSocket = async () => {
    let ip_connect = "http://206.189.36.7:4000/api";
    let ip_ws = "ws://206.189.36.7:4002";

    Parse.initialize("streaming", "streaming", "streaming");
    Parse.serverURL = ip_connect;
    Parse.liveQueryServerURL = ip_ws;
    let query = new Parse.Query("GameScore");
    let subscription = await query.subscribe();

    subscription.on("open", async () => {
      console.log("open");
    });

    subscription.on("create", async (object) => {
      console.log("object create", object);
    });

    subscription.on("update", async (object) => {
      console.log("object updated", object);
    });
  };
  return <div>App</div>;
}
