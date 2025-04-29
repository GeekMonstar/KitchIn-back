import app from "./app";
app.listen(4000, ()=>{
    console.log(process.env.DATABASE_URL)
    console.log("Server is runnin on port 4000")
})