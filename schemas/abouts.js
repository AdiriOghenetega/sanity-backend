export default{
    name:'abouts',
    title:'Abouts',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'subtitle',
            title:'Subtitle',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'resume',
            title:'Resume',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
        name:'accomplishments',
        title:'Accomplishments',
        type: 'array',
        of:[
       {
        name:"list",
        title:"List",
        type:"document",
        fields:[
            {
                name:'imgUrl',
                title:'ImgUrl',
                type: 'image',
            },
            {
                name:'description',
                title:'Description',
                type:'string'
            }
        ]
       }
    ]
        }
        
    ]
}