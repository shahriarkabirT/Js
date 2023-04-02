 const hasmMeeting = true;
 const meeting = new Promise((resolve,reject)=>{
    if(hasmMeeting){
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Google meet",
            time : "8 PM"
        }
        resolve(meetingDetails);
    }
    else{
        reject(new Error("Meeting Already scheduled"))
    }

 })

 /*const getDetails = (meetingDetails) =>{
            return new Promise((resolve , reject)=>{
            const calandar = `${meetingDetails.name} is scheduled in ${meetingDetails.location}
             at ${meetingDetails.time}`;
             resolve(calandar);
            })
 }*/    // one way


 const getDetails = (meetingDetails) =>{
  
    const calandar = `${meetingDetails.name} is scheduled in ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calandar);

}


 meeting 
 .then(getDetails)
 .then((res)=>{
    console.log(res);
 })
 .catch((err)=>{
    console.log(err.message);
 })

