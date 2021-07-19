const fs = require('fs');
const Canvas = require('canvas');

const width = 1000, calibration = 1000 / 6, offset = calibration / 2 - 6,
    process = 300;
// console.log(icon._handle);

async function createEmail(len) {
    const imgSrc = createImage(len);
    const vmlStr = getVMLTemplate(len);

    let result = `
    <center>
        <table width="1000px" border="0" cellspacing="0" cellpadding="0" style="margin-left:20px;width:1000px">
            <tbody>
                <tr height="60px" style="text-align: center;vertical-align:bottom;">
                    <td width="${calibration}">AA</td>
                    <td width="${calibration}">BBBB</td>
                    <td width="${calibration}">CCCC</td>
                    <td width="${calibration}">DDDDD</td>
                    <td width="${calibration}">EEEE</td>
                    <td width="${calibration}">FFFFFF</td>
                </tr>
                <tr style="height: 40px;text-align: center">
                    <td colspan="${len}">
                    <!--[if mso]>
                    ${vmlStr}
                    <![endif]-->
                    <div style="background-image:url(${imgSrc});mso-hide:all;display:inline-block;width: 100%;height: 40px"></div>
                    </td>
                </tr>
                <tr height="60px" style="text-align: center;vertical-align:top;">
                    <td width="${calibration}">AAAA</td>
                    <td width="${calibration}">BBBBBB</p></td>
                    <td width="${calibration}">CCCC</td>
                    <td width="${calibration}">DDDD</td>
                    <td width="${calibration}">EEEE</td>
                    <td width="${calibration}">FFFFFF</td>
                </tr>
            </tbody>
        </table>
    </center>
    `;
    return result;
}

module.exports = createEmail;

function createImage(len) {
    const canvas = Canvas.createCanvas(width, 40);
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(0, 30);
    ctx.lineTo(process, 30);
    ctx.strokeStyle = '#fa3e3e';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(process, 30);
    ctx.lineTo(width, 30);
    ctx.strokeStyle = '#333333';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(process, 7, 7, 0, Math.PI * 2, true);
    ctx.fillStyle = '#fa3e3e';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(process, 10);
    ctx.lineTo(process, 30);
    ctx.strokeStyle = '#fa3e3e';
    ctx.lineWidth = 2;
    ctx.stroke();

    for (let i = 0; i < len; i++) {
        const left = i * calibration + offset + 6;

        ctx.beginPath();
        ctx.arc(left, 30, 5, 0, Math.PI * 2, true);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.strokeStyle = left <= process ? '#fa3e3e' :'#333333';
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    return canvas.toDataURL();
}

function getVMLTemplate(len) {
    let VMLString = `
        <v:line xmlns:v="urn:schemas-microsoft-com:vml" strokeweight="2px" strokecolor="#fa3e3e" style="position:relative;left:0;"
        from="0,30" to="${process},30"></v:line>
        <v:line xmlns:v="urn:schemas-microsoft-com:vml" strokeweight="2px" strokecolor="#333333" style="position:relative;left:0;"
        from="${process},30" to="${width},30"></v:line>
        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" o:oleicon="True"
        style="position:relative;height:14px;width:14px;top: 0;left:${process - 8};" arcsize="50%" fillcolor="#fa3e3e" stroked="False">
        </v:roundrect>
        <v:line xmlns:v="urn:schemas-microsoft-com:vml" strokeweight="2px" strokecolor="#fa3e3e" style="position:relative;"
        from="${process - 1},10" to="${process - 1},30"></v:line>
    `;

    for (let i = 0; i < len; i++) {
        const left = i * calibration + offset;
        VMLString += `
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" o:oleicon="True"
            style="position:relative;height:10px;width:10px;top: 24;left:${left};" arcsize="50%"
            strokeweight="2px" strokecolor="${left <= process - 6 ? '#fa3e3e' : '#333333'}" fillcolor="#ffffff">
            </v:roundrect>
        `
    }

    return VMLString;
}