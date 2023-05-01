export default {
    name:"hcue_photos",
    title:"Hcue Photos",
    type:"document",
    fields:[
        {
            name:"images",
            title:"Images",
            type:"array",
            of:[{type:"image"}]
        },
        {
            name:"backgrounds",
            title:"Backgrounds",
            type:"array",
            of:[{type:"image"}]
        },

    ]
   
}
