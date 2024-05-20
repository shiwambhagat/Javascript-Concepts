
function loadingData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("1");
            resolve();
        },2000) 
    })

}
function collectingData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("2")
            reject("error");
        },2000)
    })
   
}
function approvingData(){
    console.log("3")
}
function approved(){
    console.log("4")
}
// loadingData();
// collectingData()
// approvingData()
// approved()
// loadingData().then(collectingData).then(approvingData).then(approved)
async function Ex(){
    await loadingData();
    await collectingData();
    await approvingData();
    await approved();
}
Ex().then().catch(err=>console.error(err));