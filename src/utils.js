const fs = require('fs');
const Canvas = require('canvas');

const width = 1000 / 6, mid = width / 2 - 6;
// console.log(icon._handle);

async function createEmail() {
    let icon = await fs.readFileSync('./asset/icon-react1.png', 'base64');

    const bg = `
        background: -moz-radial-gradient(circle at center,white, white 5px,grey 5px, grey 7px, white 7px, transparent 7px),
            -moz-linear-gradient(to bottom, white,white 9px, grey 9px, grey 11px, white 11px);
        background: -webkit-radial-gradient(circle at center,white, white 5px,grey 5px, grey 7px, white 7px, transparent 7px),
            -webkit-linear-gradient(to bottom, white,white 9px, grey 9px, grey 11px, white 11px);
        background: radial-gradient(circle at center,white, white 5px,grey 5px, grey 7px, white 7px, transparent 7px),
            linear-gradient(to bottom, white,white 9px, grey 9px, grey 11px, white 11px);
    `

    const content = `
    <td>
    <hr>
    <img src="data:image/png;base64,${icon}" style="position: relative;transform: translateY(-15px);margin-left: 50%;">
</td>
<td>
    <hr>
    <img src="data:image/png;base64,${icon}" style="position: relative;transform: translateY(-15px);margin-left: 50%;">
</td>
<td>
    <hr>
    <img src="data:image/png;base64,${icon}" style="position: relative;transform: translateY(-15px);margin-left: 50%;">
</td>
<td>
    <hr>
    <img src="data:image/png;base64,${icon}" style="position: relative;transform: translateY(-15px);margin-left: 50%;">
</td>
<td>
    <hr>
    <img src="data:image/png;base64,${icon}" style="position: relative;transform: translateY(-15px);margin-left: 50%;">
</td>
<td>
    <hr>
    <img src="data:image/png;base64,${icon}" style="position: relative;transform: translateY(-15px);margin-left: 50%;">
</td>
    `
    
    const imgSrc = createImage();

    let result = `
    <center>
        <table width="1000px" border="0" cellspacing="0" cellpadding="0" style="margin-left:20px;width:1000px">
            <tbody>
                <tr height="60px" style="text-align: center">
                    <td>AAAA</td>
                    <td>BBBB</td>
                    <td>CCCC</td>
                    <td>DDDD</td>
                    <td>EEEE</td>
                    <td>FFFF</td>
                </tr>
                <tr style="height: 20px;text-align: center">
                    <td>
                    <!--[if mso]>
                    <v:line xmlns:v="urn:schemas-microsoft-com:vml" strokeweight="2px" strokecolor="#333333" style="position:relative;left:0;"
                        from="0,10" to="${width},10">
                    </v:line>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" o:oleicon="True" style="position:relative;height:10px;width:10px;top: 4;left:${mid};" arcsize="50%" strokeweight="2px" strokecolor="#333333" fillcolor="#ffffff">
                     
                    </v:roundrect>
                    <![endif]-->
                    <div style="background-image:url(${imgSrc});mso-hide:all;display:inline-block;width: 100%;height: 20px"></div>
                    </td>
                    <td>
                    <!--[if mso]>
                    <v:line xmlns:v="urn:schemas-microsoft-com:vml" strokeweight="2px" strokecolor="#333333" style="position:relative;left:0;"
                        from="0,10" to="${width},10">
                    </v:line>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" o:oleicon="True" style="position:relative;height:10px;width:10px;top: 4;left:${mid};" arcsize="50%" strokeweight="2px" strokecolor="#333333" fillcolor="#ffffff">
                     
                    </v:roundrect>
                    <![endif]-->
                    <div style="background-image:url(${imgSrc});mso-hide:all;display:inline-block;width: 100%;height: 20px"></div>
                    </td>
                    <td>
                    <!--[if mso]>
                    <v:line xmlns:v="urn:schemas-microsoft-com:vml" strokeweight="2px" strokecolor="#333333" style="position:relative;left:0;"
                        from="0,10" to="${width},10">
                    </v:line>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" o:oleicon="True" style="position:relative;height:10px;width:10px;top: 4;left:${mid};" arcsize="50%" strokeweight="2px" strokecolor="#333333" fillcolor="#ffffff">
                     
                    </v:roundrect>
                    <![endif]-->
                    <div style="background-image:url(${imgSrc});mso-hide:all;display:inline-block;width: 100%;height: 20px"></div>
                    </td>
                    <td>
                    <!--[if mso]>
                    <v:line xmlns:v="urn:schemas-microsoft-com:vml" strokeweight="2px" strokecolor="#333333" style="position:relative;left:0;"
                        from="0,10" to="${width},10">
                    </v:line>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" o:oleicon="True" style="position:relative;height:10px;width:10px;top: 4;left:${mid};" arcsize="50%" strokeweight="2px" strokecolor="#333333" fillcolor="#ffffff">
                     
                    </v:roundrect>
                    <![endif]-->
                    <div style="background-image:url(${imgSrc});mso-hide:all;display:inline-block;width: 100%;height: 20px"></div>
                    </td>
                    <td>
                    <!--[if mso]>
                    <v:line xmlns:v="urn:schemas-microsoft-com:vml" strokeweight="2px" strokecolor="#333333" style="position:relative;left:0;"
                        from="0,10" to="${width},10">
                    </v:line>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" o:oleicon="True" style="position:relative;height:10px;width:10px;top: 4;left:${mid};" arcsize="50%" strokeweight="2px" strokecolor="#333333" fillcolor="#ffffff">
                     
                    </v:roundrect>
                    <![endif]-->
                    <div style="background-image:url(${imgSrc});mso-hide:all;display:inline-block;width: 100%;height: 20px"></div>
                    </td>
                    <td>
                    <!--[if mso]>
                    <v:line xmlns:v="urn:schemas-microsoft-com:vml" strokeweight="2px" strokecolor="#333333" style="position:relative;left:0;"
                        from="0,10" to="${width},10">
                    </v:line>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" o:oleicon="True" style="position:relative;height:10px;width:10px;top: 4;left:${mid};" arcsize="50%" strokeweight="2px" strokecolor="#333333" fillcolor="#ffffff">
                     
                    </v:roundrect>
                    <![endif]-->
                    <div style="background-image:url(${imgSrc});mso-hide:all;display:inline-block;width: 100%;height: 20px"></div>
                    </td>
                </tr>
                <tr height="60px" style="text-align: center;">
                    <td>AAAA</td>
                    <td>BBBB</p></td>
                    <td>CCCC</td>
                    <td>DDDD</td>
                    <td>EEEE</td>
                    <td>FFFF</td>
                </tr>
            </tbody>
        </table>
    </center>
    `;
    return result;
}

module.exports = createEmail;

function createImage() {
    const canvas = Canvas.createCanvas(width, 20);
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(0, 10);
    ctx.lineTo(width, 10);
    ctx.strokeStyle = '#333333';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.save();

    ctx.beginPath();
    ctx.arc(width / 2, 10, 5, 0, Math.PI * 2, true);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.strokeStyle = '#333333';
    ctx.lineWidth = 2;
    ctx.stroke();

    return canvas.toDataURL();
}