

/*
function drawIcon(ctx, factor, mainImg, iconImg, verticalBarInfo) {
    const rectH = mainImg.height * factor
    const iconImgH = iconImg.width
    const iconImgW = iconImg.height

    const iconFactor = {"H":2/3, "Y": 6}
    if (iconImgW/iconImgH >= 1.5 || iconImgH/iconImgW >= 1.5) {
        iconFactor["H"] = 1/3
        iconFactor["Y"] = 4
    }
    const middle = getRectMiddle(mainImg, factor)
    let maxIconHeight = rectH * iconFactor["H"]
    let iconHeight = maxIconHeight
    const scale = iconImg.width/iconImg.height
    let iconWidth = iconHeight * scale
    // const
    const maxIconWidth = mainImg.width / 6
    if (iconWidth > maxIconWidth) {
        iconWidth = maxIconWidth
        iconHeight = maxIconWidth / scale
    }
    const iconPosX = verticalBarInfo["X"] - verticalBarInfo["W"] - iconWidth
    const iconPosY = middle - iconHeight/2
    ctx.drawImage(iconImg, iconPosX, iconPosY, iconWidth, iconHeight)
    // debug(ctx, iconPosX, iconPosY)
}*/

function calcIconSize(iconWidth, iconHeight, rectH, rectW, maxLen) {
    let verticalMaxRadio = 1/2
    const horizonMaxRadio = 1/6
    console.log(iconWidth/iconHeight)
    console.log(iconHeight/iconWidth)

    if (iconWidth/iconHeight >= 1.25 || iconHeight/iconWidth >= 1.25) {
        verticalMaxRadio = 1/4
    }


    let iconImgHeight = rectH * verticalMaxRadio
    const scale = iconWidth/iconHeight
    let iconImgWidth = iconImgHeight * scale
    const maxIconWidth =  maxLen > (rectW * horizonMaxRadio)? (rectW * horizonMaxRadio) : maxLen
    if (iconImgWidth > maxIconWidth) {
        iconImgWidth = maxIconWidth
        iconImgHeight = maxIconWidth / scale
    }

    return {
        "iconImgWidth": iconImgWidth,
        "iconImgHeight":iconImgHeight,
        "scaleX":iconImgWidth/iconWidth,
        "scaleY":iconImgHeight/iconHeight
    }

}


export {calcIconSize}