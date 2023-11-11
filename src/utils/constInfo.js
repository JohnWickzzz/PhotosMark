
function getInitData() {
    return {
        previewStageConfig:{
            width: 800,
            height: 600,
            scaleX:1,
            scaleY:1,
            name:"previewStage",
        },
        downloadStageConfig:{
            width : 100,
            height : 200,
            visible: true,
            name:"downloadStage",
        },
        mainImgConfig: {
            image: null,
            name:"mainImg",
        },
        iconGroupConfig: {},
        bannerRectConfig: {
            height : 100,
            width : 100,
            y : 100,
            fill : "white",
            name:"bannerRect",
        },
        deviceInfoConfig: {
            x:100,
            y:0,
            text:"",
            fontSize:0,
            fontStyle:"bold",
            offsetY:0,
            fill:"black",
            draggable:true,
            name:"deviceInfo",
        },
        lensInfoConfig: {
            x:100,
            y:0,
            text:"",
            fontSize:0,
            offsetY:0,
            fontStyle:"normal",
            align:"center",
            fill:"gray",
            draggable:true,
            name:"lensInfo",
        },
        iconInfoConfig: {
            image: null,
            x: 0,
            y:0,
            height:0,
            width:0,
            draggable:true,
            name:"iconInfo"
        },
        verticalBarInfoConfig: {
            x: 0,
            y: 0,
            width:5,
            height:0,
            fill: "gray",
            draggable:true,
            name:"verticalBarInfo"
        },
        parameterInfoConfig: {
            x:100,
            y:0,
            text:"",
            fontSize:0,
            fontStyle:"bold",
            align:"center",
            offsetY:0,
            verticalAlign:"middle",
            fill:"black",
            draggable:true,
            name:"parameterInfo"
        },
        timeInfoConfig: {
            x:100,
            y:0,
            text:"",
            fontSize:0,
            fontStyle:"normal",
            align:"center",
            verticalAlign:"middle",
            offsetY:0,
            fill:"gray",
            draggable:true,
            name:"timeInfo",
        },
    }
}

export {getInitData}