$(function () {

    var a = window.dialogArguments;
    var imgStr = '<object id="player" height="700" width="100%" classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6">'
                          + '<param NAME="AutoStart" VALUE="-1">'
                          + '<param NAME="Balance" VALUE="-1">'
                          + '<param name="enabled" value="-1">'
                          + '<param NAME="EnableContextMenu" VALUE="-1">'
                          + '<param NAME="url" VALUE="' + a.srcPath + '">'
                          + '<param NAME="PlayCount" VALUE="1">'
                          + '<param name="rate" value="1">'
                          + '<param name="currentPosition" value="0">'
                          + '<param name="currentMarker" value="0">'
                          + '<param name="defaultFrame" value="">'
                          + '<param name="invokeURLs" value="0">'
                          + '<param name="baseURL" value="">'
                          + '<param name="stretchToFit" value="0">'
                          + '<param name="volume" value="50">'
                          + '<param name="mute" value="0">'
                          + '<param name="uiMode" value="mini">'
                          + '<param name="windowlessVideo" value="0">'
                          + '<param name="fullScreen" value="0">'
                          + '<param name="enableErrorDialogs" value="-1">' +
                           +'</object>';

    

    var content = '<div class="ScanImgDlg"><div class="ScanModel"></div><div class="Scanclose"></div>' +
                       '<div class="Scancontent"><div class="ScanresultChart" >' + imgStr + '</div></div></div>';
    $("body").html(content);
})