/*
 Copyright (c) {{2013}}, {{DerpTheBass and Emub}} All rights reserved.

 Permission is granted to any person wishing to use the code contained within this repository under the following conditions.

 The copyright notice listed above is displayed in any websites, files, or repositories which contain the code.

 Visible credit is given to software itself as well as the authors on any website, file, or repository which contains code from this repository.

 The edited versions of the code may not be easily confused with the original code contained within this repository.

 You understand that any code you copy from this repository may be reviewed by the original authors and included in the original software.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

function requireRequire(){
    LS = require('app/store/LocalStorage');
    AV = require('app/views/room/AudienceView');
    CHAT = require('app/facades/ChatFacade');
    POPOUT = require('app/views/room/popout/PopoutView');
}

/*
     OOOOOOOOO          BBBBBBBBBBBBBBBBB                  JJJJJJJJJJJ     EEEEEEEEEEEEEEEEEEEEEE             CCCCCCCCCCCCC     TTTTTTTTTTTTTTTTTTTTTTT        SSSSSSSSSSSSSSS 
   OO:::::::::OO        B::::::::::::::::B                 J:::::::::J     E::::::::::::::::::::E          CCC::::::::::::C     T:::::::::::::::::::::T      SS:::::::::::::::S
 OO:::::::::::::OO      B::::::BBBBBB:::::B                J:::::::::J     E::::::::::::::::::::E        CC:::::::::::::::C     T:::::::::::::::::::::T     S:::::SSSSSS::::::S
O:::::::OOO:::::::O     BB:::::B     B:::::B               JJ:::::::JJ     EE::::::EEEEEEEEE::::E       C:::::CCCCCCCC::::C     T:::::TT:::::::TT:::::T     S:::::S     SSSSSSS
O::::::O   O::::::O       B::::B     B:::::B                 J:::::J         E:::::E       EEEEEE      C:::::C       CCCCCC     TTTTTT  T:::::T  TTTTTT     S:::::S            
O:::::O     O:::::O       B::::B     B:::::B                 J:::::J         E:::::E                  C:::::C                           T:::::T             S:::::S            
O:::::O     O:::::O       B::::BBBBBB:::::B                  J:::::J         E::::::EEEEEEEEEE        C:::::C                           T:::::T              S::::SSSS         
O:::::O     O:::::O       B:::::::::::::BB                   J:::::j         E:::::::::::::::E        C:::::C                           T:::::T               SS::::::SSSSS    
O:::::O     O:::::O       B::::BBBBBB:::::B                  J:::::J         E:::::::::::::::E        C:::::C                           T:::::T                 SSS::::::::SS  
O:::::O     O:::::O       B::::B     B:::::B     JJJJJJJ     J:::::J         E::::::EEEEEEEEEE        C:::::C                           T:::::T                    SSSSSS::::S 
O:::::O     O:::::O       B::::B     B:::::B     J:::::J     J:::::J         E:::::E                  C:::::C                           T:::::T                         S:::::S
O::::::O   O::::::O       B::::B     B:::::B     J::::::J   J::::::J         E:::::E       EEEEEE      C:::::C       CCCCCC             T:::::T                         S:::::S
O:::::::OOO:::::::O     BB:::::BBBBBB::::::B     J:::::::JJJ:::::::J       EE::::::EEEEEEEE:::::E       C:::::CCCCCCCC::::C           TT:::::::TT           SSSSSSS     S:::::S
 OO:::::::::::::OO      B:::::::::::::::::B       JJ:::::::::::::JJ        E::::::::::::::::::::E        CC:::::::::::::::C           T:::::::::T           S::::::SSSSSS:::::S
   OO:::::::::OO        B::::::::::::::::B          JJ:::::::::JJ          E::::::::::::::::::::E          CCC::::::::::::C           T:::::::::T           S:::::::::::::::SS 
     OOOOOOOOO          BBBBBBBBBBBBBBBBB             JJJJJJJJJ            EEEEEEEEEEEEEEEEEEEEEE             CCCCCCCCCCCCC           TTTTTTTTTTT            SSSSSSSSSSSSSSS  
*/

function defineOBJs(){
    reload = {
        options: {
            autoWoot                    : false,
            autoJoin                    : false,
            historyAlerts               : false,
            userlistShown               : false,
            upcomingHistoryAlerts       : false,
            curateAlerts                : false,
            hideVideo                   : false,
            joinAlerts                  : false,
            leaveAlerts                 : false,
            previousSongAlerts          : false,
            newSongAlerts               : false,
            autoHide                    : false,
            removedSongAlerts           : false,
            debug                       : false,
            smallChat                   : false,
            autoMute                    : false,
            confirmSkip                 : false,
            autoMeh                     : false,
            autoRespond                 : false,
            respondMessage              : 'I\'m currently away, please try again some other time!',
            mehMute                     : false,
            oneTimeMute                 : false,
            greenText                   : false,
            deletedMessages             : false,
            clickToRemove               : false,
            upcomingRemovedSongAlerts   : false,
            linkFilterAlerts            : false,
            shortenLinks                : false,
            ignore                      : false,
            greenText                   : false,
            autoMute                    : false,
            alertOn                     : [],
            ignoring                    : [],
            autoMuteArray               : [],
            autoMehArray                : [],
            theme: {
                background                          : "/_/static/images/room_background1.91844df.jpg",
                booth                               : "/_/static/images/DJConsole2.2e8ce6f.png",
                mehButton                           : "/_/static/images/en/ButtonVoteNegative.ef04d51.png",
                wootButton                          : "/_/static/images/en/ButtonVotePositive.ca7fc3f.png",
                colors: {
                    reloadGreen                     : "#5BD708",
                    bassPlugBlue                    : "#58FAF4",
                    adminColor                      : "#42A5DC",
                    BAColor                         : "#9A50FF",
                    hostColor                       : "#FF0004",
                    coHostColor                     : "#FF4000",
                    managerColor                    : "#16BF00",
                    bouncerColor                    : "#E90E82",
                    featuredColor                   : "#00C4FF",
                    yourColor                       : "#FFDD6F",
                    PMColor                         : "#00E29A",
                    backgroundColor                 : "#000000",
                    emoteColor                      : "#DEE97D",
                    joinAlert                       : "#58FAF4",
                    leaveAlert                      : "#58FAF4",
                    curateAlert                     : "yellow",
                    historyAlert                    : "#FFF",
                    previousSongAlert               : "orange",
                    mentionBackground               : "rgba(82, 0, 255, 0.12)",
                    moderationBackground            : "rgba(255, 0, 0, 0.09)",
                    skipBackground                  : "rgba(255, 0, 0, 0.09)",
                    privateMessageBackground        : "rgba(0, 255, 184, 0.09)",
                    previousSongAlertBackground     : "",
                    historyAlertBackground          : "#F00",
                    curateAlertBackground           : "",
                    leaveAlertBackground            : "",
                    joinAlertBackground             : ""
                }
            }
        },
        version         : '0.01.00',
        updatesSent     : 0,
        PMsSent         : 0,
        changelog       : "Early Beta, everything is broken.",
        lastPM          : '',
        joined          : new Date().getTime(),
        volume          : API.getVolume(),
        tempMute        : false,
        responseReady   : true,
        animatingToggle : false
    };

    reload.functions        = {};
    reload.def              = {};
    reload.users            = {};
    reload.globalUsers      = {};

    reload.events = {
        joinAlert: function(a){ 
            if (reload.options.joinAlerts) reload.functions.sendChatUpdate(reload.functions.cleanString(a.username) + " just joined the room!", reload.options.theme.colors.joinAlert, reload.options.theme.colors.joinAlertBackground);
        },
        leaveAlert: function(a){
            if (reload.options.leaveAlerts) reload.functions.sendChatUpdate(reload.functions.cleanString(a.username) + " just left the room!", reload.options.theme.colors.leaveAlert, reload.options.theme.colors.leaveAlertBackground);
        },
        curateAlert: function(a){
            if (reload.options.curateAlerts) reload.functions.sendChatUpdate(reload.functions.cleanString(a.username) + ' just curated ' + API.getMedia().author + ' - ' + API.getMedia().title, reload.options.theme.colors.curateAlert, reload.options.theme.colors.curateAlertBackground)
        },
        historyAlert: function(a){
            if (reload.options.historyAlerts && a > 0) reload.functions.sendChatUpdate('This song is still in the history! (' + a + '/' + API.getHistory().length, reload.options.theme.colors.historyAlert, reload.options.theme.colors.historyAlertBackground);
        },
        upcomingHistoryAlert: function(a){
            if (reload.options.upcomingHistoryAlerts && a > 0) reload.functions.sendChatUpdate('Your next song is in the history! (' + a + '/' + API.getHistory().length + ')', reload.options.theme.colors.upcomingHistoryAlert, reload.options.theme.colors.upcomingHistoryAlertBackground);
        },
        newSongAlert: function(a){
            if (reload.options.newSongAlerts) reload.functions.sendChatUpdate(a.dj.username + ' is now playing ' + a.media.author + ' - ' + a.media.title, reload.options.theme.colors.newSongAlert, reload.options.theme.colors.newSongAlertBackground);
        },
        previousSongAlert: function(a){
            if (reload.options.previousSongAlerts) reload.functions.sendChatUpdate(a.lastPlay.dj.attributes.username + ' just played ' + a.lastPlay.media.attributes.author + ' - ' +  a.lastPlay.media.attributes.title + '<br> Woots: ' + a.lastPlay.score.positive + ' Mehs: ' + a.lastPlay.score.negative + ' Grabs: ' + a.lastPlay.score.curates, reload.options.theme.colors.previousSongAlert, reload.options.theme.colors.previousSongAlertBackground);
        },
        unavailableSongAlert: function(a){
            if (reload.options.unavailableSongAlerts && a) reload.functions.sendChatUpdate('This song is unavailable!', reload.options.theme.colors.unavailableAlert, reload.options.theme.colors.unavailableAlertBackground);
        },
        linkFilterAlert: function(a){
            if (reload.options.linkFilterAlerts && API.getUser().permission == 0 && Date.now() - joined < 600000 && (a.indexOf('http://') > -1 || a.indexOf('https://') > -1)) relaod.functions.sendChatUpdate('Links cannot be sent for ' + Math.ceil((600000 - (Date.now() - reload.joined)) / 1000) + ' more seconds', reload.options.theme.colors.linkFilterAlert, reload.options.theme.colors.linkFilterAlertBackground);
        },
        autoMeh: function(){
            if (reload.options.autoMeh && reload.options.autoMehArray.indexOf(API.getMedia().id) > -1 && API.getUser().vote === 0) $('#button-vote-negative').click();
        },
        autoMute: function(){
            if (reload.options.autoMute && reload.options.autoMuteArray.indexOf(API.getMedia().id) > -1 && API.getVolume() > 0) $('#button-sound').click();
        },
        woot: function(){
            if (reload.options.autoWoot) setTimeout(function(){$('#button-vote-positive').click()}, 2000);
        }

    }

    reload.functions.load = function(){
        var storage = JSON.parse(localStorage.getItem('reload'));
        for(var i in window.reload.options){
            if(typeof storage[i] !== "undefined") window.reload.options[i] = storage[i];
        }};

    reload.functions.save = function(){localStorage.setItem("reload", JSON.stringify(reload.options))};
    reload.functions.debug = function(a){console.log("[Plug.DJ Reloaded " + reload.version + "] " + a);};

    reload.functions.loadStorage = function(){
        if(localStorage.getItem("reload") !== null){
            reload.functions.load();
            reload.functions.adapt();
        }else{
            reload.functions.save();
            reload.functions.adapt();
            $("#firstRunExit").css("display", "block");
            $("#firstRun").css("display", "block");
        }
    };

    //LOG PM
    reload.functions.logPM = function(color, from, message){
        scroll = $('#chat-messages').scrollTop() > $('#chat-messages')[0].scrollHeight - $('#chat-messages').height() - 20;
        var hours = new Date().getHours();
        var minutes = new Date().getMinutes();
        if(minutes < 10) minutes = "0" + minutes;
        var period = "am";
        if(hours > 12){
            hours = hours - 12;
            period = "pm";
        }
        from.id === '50aeb07e96fba52c3ca04ca8' || from.id === '50aeaf683e083e18fa2d187e' ? style='style="color: #FF2C2C";' : style='style="color:'+color+';"';

        if(from){
            pm = $('<div class="chat-private-message"><div class="chat-timestamp" style="display: block;">' + hours + ":" + minutes + period + '</div><span class="private-message-from"'+style+ '>'+from+'</span><span class="private-message-text"'+style+'>: '+message+'</span></div>')[0];
        } else {
            pm = $('<div class="chat-private-message"><div class="chat-timestamp" style="display: block;">' + hours + ":" + minutes + period + '</div><span class="private-message-text"'+style+'>: '+message+'</span></div>')[0];
        }

        POPOUT._window === undefined ? $(POPOUT.chat.$chatMessages, '#chat-messages').append(pm) : $('#chat-messages').append(pm);
        scroll && $('#chat-messages').scrollTop($('#chat-messages')[0].scrollHeight);
    };

    //SEND CHAT UPDATE
sendChatUpdate = function(text, textcolor, color){
        reload.updatesSent++;
        $('<div />', {class: 'reload-chat-update', id: 'reloadChatUpdate' + reload.updatesSent});

        var spanChatUpdate = $('<span>');
        spanChatUpdate.html(text).attr("class", "chat-text").css("text-align", "center");

        chatUpdate.append(spanChatUpdate);
        $("#chat-messages").append(chatUpdate);
        scroll && $('#chat-messages').scrollTop($('#chat-messages')[0].scrollHeight);
    };

    reload.functions.logWhois = function(text, textcolor, color){
        reload.updatesSent++; var args = reload.functions.logWhois.arguments;
        var chatUpdate = $('<div>');
        chatUpdate.attr("class", "chat-update").attr("id", "reloadChatUpdate" + reload.updatesSent).css("cursor", "pointer").css("color", "black");

        var spanChatUpdate = $('<span>');
        spanChatUpdate.html(text).attr("class", "chat-text");

        switch(args.length){
            case 0:
                console.error("Chat update error: At least one argument must be passed.");
                return false;
                break;
            case 2:
                if(args[1] != "") chatUpdate.css("color", args[1]);
                break;
            case 3:
                if(args[1] != "") chatUpdate.css("color", args[1]);
                chatUpdate.css("background-color", args[2]);
                break;
        }

        chatUpdate.append(spanChatUpdate);
        $("#chat-messages").append(chatUpdate);

        scroll && $('#chat-messages').scrollTop($('#chat-messages')[0].scrollHeight);
    };

    reload.functions.testHistory = function(songID){
        var args = reload.functions.testHistory.arguments;
        var history = API.getHistory();
        caught = 0;

        if(args.length === 1){

            for(var i = 1; i < history.length; i++){
                if(songID === history[i].media.id){
                    caught++;
                }
            }

        }else{

            currentlyPlaying = API.getMedia();
            for(var i = 1; i < history.length; i++){
                if(currentlyPlaying.id === history[length].media.id){
                    caught++;
                }
            }

        }

        return caught;
    };

    reload.functions.defineUsers = function(){
        for(var i = 0; i < API.getUsers().length; i++){
            reload.users[API.getUsers()[i].id] = {
                id: API.getUsers()[i].id,
                wootCount: 0,
                mehCount: 0,
                curateCount: 0,
                joined: new Date().getTime(),
                idle: 0
            };
        }
    };

    reload.functions.updateParagraphs = function(){
        users = API.getWaitList();
        var userID = API.getUser().id;
        var DJs = API.getDJs();
        var onWaitlist = false;
        var isDJ = false;
        var waitlistPosition;
        var DJPosition;
        var output;
        for(var p = 0; p < users.length; p++){
            if(userID === users[p].id){
                onWaitlist = true;
                waitlistPosition = p + 1;
            }
        }

        for(var q = 0; q < DJs.length; q++){
            if(userID === DJs[q].id){
                DJPosition = q;
                isDJ = true;
            }
        }

        onWaitlist ? $("#waitlistPara").html("Waitlist: " + waitlistPosition + " / " + users.length) : $("#waitlistPara").html("Waitlist: " + users.length);
        if(isDJ){
            var a = $("#DJPara");
            if(DJPosition === 0) a.html("In booth");
            if(DJPosition === 1) a.html("On deck 1/4");
            if(DJPosition === 2) a.html("On deck 2/4");
            if(DJPosition === 3) a.html("On deck 3/4");
            if(DJPosition === 4) a.html("On deck 4/4");
            $("#waitlistPara").css("display", "none");
            a.css("display", "block");
        }else{
            $("#DJPara").css("display", "none");
            $("#waitlistPara").css("display", "block");
        }
    };

    reload.functions.colorUserlist = function(){
        var users = API.getUsers();
        var color;
        for(var o in users){
            var ID = users[o].username + "Entry";
            if(API.getDJs()[0].id != users[o].id){
                switch(users[o].vote){
                    case 1:
                        color = "#49b800";
                        size = '12px';
                        break;
                    case 0:
                        color = "#DBDBDB";
                        size = '12px';
                        break;
                    case -1:
                        color = "red";
                        size = '12px';
                        break;
                    default:
                        color = "#DBDBDB";
                        size = '12px';
                        break;
                }
            }else{
                color = '#00F5FF';
                size = '14px'
            }
            var object = document.getElementById(ID);
            $(object).css("color", color).css('font-size', size);
        }
    }

    reload.functions.updateUserlist = function(){
        var users = API.getUsers(), usersCase = "";
        users.length > 1 ?usersCase = " users in the room" : usersCase = " user in the room";
        $("#userlistDiv").html("");
        $("#usersPara").html(users.length + usersCase);
        for(var i = 0; i < users.length; i++){
            var userPara = $('<p>'); var userParaSpan = $('<span>'); var userParaImage = $('<img>'); var userParaName = $('<span>'); var userCurateImage = $('<img>');
            userParaName.html(users[i].username).attr("id", users[i].username + "Entry").attr("class", "userParaName");
            userPara.attr("class", "userlistParagraph");
            switch(users[i].permission){
                case 1:
                    userParaImage.attr("src", "http://i.imgur.com/nohDf9l.png").attr("class", "imageSpan");
                    break;
                case 2:
                    userParaImage.attr("src", "http://i.imgur.com/bW75HNL.png").attr("class", "imageSpan");
                    break;
                case 3:
                    userParaImage.attr("src", "http://i.imgur.com/PpHziJF.png").attr("class", "imageSpan");
                    break;
                case 4:
                    userParaImage.attr("src", "http://i.imgur.com/mTLOMEi.png").attr("class", "imageSpan");
                    break;
                case 5:
                    userParaImage.attr("src", "http://i.imgur.com/1gS3StB.png").attr("class", "imageSpan");
                    break;
                case 9:
                    userParaImage.attr("src", "http://i.imgur.com/gEMSNwG.png").attr("class", "imageSpan");
                    break;
                case 10:
                    userParaImage.attr("src", "http://i.imgur.com/KkElZ14.png").attr("class", "imageSpan");
                    break;
            }

            if(users[i].permission > 0) userParaSpan.append(userParaImage);
            if(users[i].curated != false){
                userCurateImage.attr("src", "http://i.imgur.com/mYOM9qa.png").attr("class", "imageSpan").attr("id", "curateImage");
                userParaSpan.append(userCurateImage);
            }else{
                userCurateImage.remove();
            }
            userParaSpan.attr("id", users[i].username + "Span").append(userParaName);
            userPara.append(userParaSpan);
            $("#userlistDiv").append(userPara);
        }

        var windowHeight = $(window).height();
        $("#userlistDiv").css("height", windowHeight - 139 + "px");
        reload.functions.updateParagraphs();
        reload.functions.colorUserlist();
    };

    reload.functions.whois = function(a){
        switch(a.language){
            case 'en':
                language = 'English';
                break;
            case 'de':
                language = 'German';
                break;
            case 'pt':
                language = 'Portugese';
                break;
            case 'fr':
                language = 'French';
                break;
            case 'zh':
                language = 'Chinese';
                break;
            case 'es':
                language = 'Spanish';
                break;
            case 'ja':
                language = 'Japanese';
                break;
            case 'ko':
                language = 'Korean';
                break;
            case 'id':
                language = 'Indonesian';
                break;
            case 'no':
                language = 'Norwegian';
                break;
            case 'da':
                language = 'Danish';
                break;
            case 'nl':
                language = 'Dutch';
                break;
            case 'af':
                language = 'Afrikaans';
                break;
            case 'sq':
                language = 'Albanian';
                break;
            case 'ar':
                language = 'Arabic';
                break;
            case 'be':
                language = 'Belarusian';
                break;
            case 'bg':
                language = 'Bulgarian';
                break;
            case 'ca':
                language = 'Catalan';
                break;
            case 'hr':
                language = 'Croatian';
                break;
            case 'cs':
                language = 'Czech';
                break;
            case 'et':
                language = 'Estonian';
                break;
            case 'tl':
                language = 'Tagalog';
                break;
            case 'fi':
                language = 'Finnish';
                break;
            case 'gl':
                language = 'Galacian';
                break;
            case 'el':
                language = 'Greek';
                break;
            case 'iw':
                language = 'Hebrew';
                break;
            case 'hi':
                language = 'Hindi';
                break;
            case 'hu':
                language = 'Hungarian';
                break;
            case 'is':
                language = 'Icelandic';
                break;
            case 'ga':
                language = 'Irish';
                break;
            case 'it':
                language = 'Italian';
                break;
            case 'lv':
                language = 'Latvian';
                break;
            case 'lt':
                language = 'Lithuanian';
                break;
            case 'mk':
                language = 'Macedonian';
                break;
            case 'ms':
                language = 'Malay';
                break;
            case 'mt':
                language = 'Maltese';
                break;
            case 'fa':
                language = 'Persian';
                break;
            case 'pl':
                language = 'Polish';
                break;
            case 'ro':
                language = 'Romanian';
                break;
            case 'ru':
                language = 'Russian';
                break;
            case 'sr':
                language = 'Serbian';
                break;
            case 'sk':
                language = 'Slovakian';
                break;
            case 'sl':
                language = 'Slovenian';
                break;
            case 'sw':
                language = 'Kiswahili';
                break;
            case 'sv':
                language = 'Swedish';
                break;
            case 'th':
                language = 'Thai';
                break;
            case 'tr':
                language = 'Turkish';
                break;
            case 'uk':
                language = 'Ukranian';
                break;
            case 'vi':
                language = 'Vietnamese';
                break;
            case 'cy':
                language = 'Welsh';
                break;
            case 'yi':
                language = 'Yiddish';
                break;
            default:
                language = 'Unknown!';
                break;
        }
        switch(a.permission){
            case 0:
                rank = 'User';
                break;
            case 1:
                rank = 'Featured DJ';
                break;
            case 2:
                rank = 'Bouncer';
                break;
            case 3:
                rank = 'Manager';
                break;
            case 4:
                rank = 'Co-Host';
                break;
            case 5:
                rank = 'Host';
                break;
            case 8:
                rank = 'Recruit';
                break;
            case 9:
                rank = 'Ambassador';
                break;
            case 10:
                rank = 'Plug.DJ Admin';
                break;
            default:
                rank = 'Unknown!';
                break;
        }
        switch(a.status){
            case 0:
                status = 'Available';
                break;
            case 1:
                status = 'AFK';
                break;
            case 2:
                status = 'Working';
                break;
            case 3:
                status = 'Sleeping';
                break;
            default:
                status = 'Unknown!';
                break;
        }
        var RA = "No";
        if(reload.admins.indexOf(a.id)) RA = "Yes";
        switch(a.relationship){
            case 0:
                relationship = "None";
                break;
            case 1:
                relationship = "They are your fan";
                break;
            case 2:
                relationship = "You are their fan";
                break;
            case 3:
                relationship = "You are fans of each other";
                break;
            default:
                relationship = "Unknown!";
                break;
        }
        var vote = "None";
        switch(a.vote){
            case 1:
                vote = "Woot";
                break;
            case -1:
                vote = "Meh";
                break;
            case 0:
                vote = "Undecided";
                break;
            default:
                vote = "Unknown!";
                break;
        }

        var currentTime = new Date().getTime();
        var minutes = Math.round((currentTime - reload.users[a.id].joined) / 60000);
        var hours = 0;
        while(minutes > 60){
            minutes = minutes - 60;
            hours++;
        }
        if(minutes === Math.round((currentTime - reload.joined) / 60000)){
            minutes = "9001";
            hours = "9001";
        }

        reload.functions.logWhois("<b>Username:</b> <span style='color: #FFF'>"+a.username+"</span><br><b>ID:</b> <span style='color: #FFF'>"+a.id+"</span><br><b>Lang:</b> <span style='color: #FFF'>"+language+"</span>&nbsp;&nbsp;<b>Rank:</b> <span style='color: #FFF'>"+rank+"</span>&nbsp;&nbsp;<b>RA:</b> <span style='color: #FFF'>"+RA+"</span><br><b>Status:</b> <span style='color: #FFF'>"+status+"</span>&nbsp;&nbsp;<b>Idle:</b> <span style='color: #FFF'>5m</span>&nbsp;&nbsp;<b>Time on:</b> <span style='color: #FFF'>"+hours+"h "+minutes+"m"+"</span><br><b>In queue:</b> <span style='color: #FFF'>54/54</span>&nbsp;&nbsp;<b>Vote:</b> <span style='color: #FFF'>"+vote+"</span><br /><b>Woot/Meh Ratio:</b> <span style='color: #FFF'>200:1</span><br><b>Relationship:</b> <span style='color: #FFF'>"+relationship+"</span><br><b>Running Plug.DJ Reloaded:</b> <span style='color: #FFF'>N/A</span>", '#42a5dc', null);
    };

    reload.functions.quickToggleHovered = function(){
        if($("#quickToggleDiv").attr("class").indexOf("hover") === -1 && $("#quick-toggle").attr("class").indexOf("hover") === -1 && $("#hoverSpace").attr("class").indexOf("hover") === -1){
            return false;
        }

        return true;
    }

    reload.functions.adapt = function(){

        //USER COLOR INPUT
        $("#adminColorInput").val(reload.options.theme.colors.adminColor.substring(1));
        $("#BAColorInput").val(reload.options.theme.colors.BAColor.substring(1));
        $("#hostColorInput").val(reload.options.theme.colors.hostColor.substring(1));
        $("#coHostColorInput").val(reload.options.theme.colors.coHostColor.substring(1));
        $("#managerColorInput").val(reload.options.theme.colors.managerColor.substring(1));
        $("#bouncerColorInput").val(reload.options.theme.colors.bouncerColor.substring(1));
        $("#featuredColorInput").val(reload.options.theme.colors.featuredColor.substring(1));
        $("#yourColorInput").val(reload.options.theme.colors.yourColor.substring(1));
        $("#emoteColorInput").val(reload.options.theme.colors.emoteColor.substring(1));
        $("#PMColorInput").val(reload.options.theme.colors.PMColor.substring(1));
        $("#backgroundColorInput").val(reload.options.theme.colors.backgroundColor.substring(1));

        reload.options.autoWoot                         ? $($("#autoWootButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")              : $($("#autoWootButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.autoJoin                         ? $($("#autoJoinButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")              : $($("#autoJoinButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.userlistShown                    ? $($("#userlistButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")              : $($("#userlistButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.hideVideo                        ? $($("#hideVideoButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")             : $($("#hideVideoButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.autoMute                         ? $($("#autoMuteButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")              : $($("#autoMuteButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.autoHide                         ? $($("#autoHideButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")              : $($("#autoHideButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.confirmSkip                      ? $($("#confirmSelfSkipButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")       : $($("#confirmSelfSkipButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.autoMeh                          ? $($("#autoMehButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")               : $($("#autoMehButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.autoRespond                      ? $($("#autoRespondButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")           : $($("#autoRespondButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.mehMute                          ? $($("#mehMuteButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")               : $($("#mehMuteButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.oneTimeMute                      ? $($("#oneTimeMuteButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")           : $($("#oneTimeMuteButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.announceStatus                   ? $($("#announceStatusButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")        : $($("#announceStatusButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.deletedMessages                  ? $($("#deletedMessagesButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")       : $($("#deletedMessagesButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.greenText                        ? $($("#greenTextButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")             : $($("#greenTextButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.smallChat                        ? $($("#smallChatButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")             : $($("#smallChatButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.nightmode                        ? $($("#nightmodeButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")             : $($("#nightmodeButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.clickToRemove                    ? $($("#clickToRemoveButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")         : $($("#clickToRemoveButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.shortenLinks                     ? $($("#shortenLinksButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")          : $($("#shortenLinksButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.ignore                           ? $($("#ignoreButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")                : $($("#ignoreButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.greentext                        ? $($("#greentextButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")             : $($("#greentextButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.joinAlerts                       ? $($("#joinAlertsButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")            : $($("#joinAlertsButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.leaveAlerts                      ? $($("#leaveAlertsButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")           : $($("#leaveAlertsButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.upcomingHistoryAlerts            ? $($("#upcomingHistoryAlertsButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green") : $($("#upcomingHistoryAlertsButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.warnOnLinkFilter                 ? $($('#linkFilterAlertsButton').children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")      : $($("#linkFilterAlertsButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.previousSongAlerts               ? $($('#previousSongAlertsButton').children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")    : $($("#previousSongAlertsButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.newSongAlerts                    ? $($('#newSongAlertsButton').children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")         : $($("#newSongAlertsButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.djLeaveAlerts                    ? $($('#djLeaveAlertsButton').children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")         : $($("#djLeaveAlertsButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.djJoinAlerts                     ? $($('#djJoinAlertsButton').children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")          : $($("#djJoinAlertsButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.removedSongAlerts                ? $($('#removedSongAlertsButton').children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")     : $($("#removedSongAlertsButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.historyAlerts                    ? $($("#historyAlertsButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")         : $($("#historyAlertsButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.upcomingRemovedSongAlerts        ? $($("#upcomingRemsovedSongAlertsButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green") : $($("#upcomingRemovedSongAlertsButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");
        reload.options.curateAlerts                     ? $($("#curateAlertsButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")          : $($("#curateAlertsButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red");

        setTimeout(function(){
        !JSON.parse(LS.getItem('stngs')).streamDisabled  ? $($("#streamButton").children()[0]).css("box-shadow", "0 0 10px red").css("background", "red")                   : $($("#streamButton").children()[0]).css("box-shadow", "0 0 10px green").css("background", "green")
        }, 100)

        reload.options.hideVideo ? $("#playback-container").fadeOut(300, function(){
            $(this).css("display", "none");
        }) : $("#playback-container").fadeIn(300, function(){
            $(this).css("display", "block");
        });
        reload.options.smallChat ? $("#smallChat").html(' .chat-message,.chat-mention,.chat-emote,.chat-skip,.chat-moderation,.chat-system,.chat-update { padding-top: 1px !important; padding-bottom: 1px !important; } .chat-admin{background:url(/_/static/images/chat_admin_icon.5394b21.png) no-repeat 0 1px;}.chat-ambassador{background:url(/_/static/images/chat_ambassador_icon.322d2fd.png) no-repeat 0 1px;}.chat-host{background:url("http://i.imgur.com/p2FzDNP.png") no-repeat 0 1px;}.chat-cohost{background:url("http://i.imgur.com/Vf1KvPO.png") no-repeat 0 1px;}.chat-manager{background:url("http://i.imgur.com/aeEE6jF.png") no-repeat 0 1px;}.chat-bouncer{background:url(/_/static/images/chat_bouncer_icon.38c0727.png) no-repeat 0 1px;}') : $("#smallChat").html(' .chat-message,.chat-mention,.chat-emote,.chat-skip,.chat-moderation,.chat-system,.chat-update { padding-top: 5px !important; padding-bottom: 5px !important; } .chat-admin{background:url(/_/static/images/chat_admin_icon.5394b21.png) no-repeat 0 5px;}.chat-ambassador{background:url(/_/static/images/chat_ambassador_icon.322d2fd.png) no-repeat 0 5px;}.chat-host{background:url("http://i.imgur.com/p2FzDNP.png") no-repeat 0 5px;}.chat-cohost{background:url("http://i.imgur.com/Vf1KvPO.png") no-repeat 0 5px;}.chat-manager{background:url("http://i.imgur.com/aeEE6jF.png") no-repeat 0 5px;}.chat-bouncer{background:url(/_/static/images/chat_bouncer_icon.38c0727.png) no-repeat 0 5px;}');

        if(reload.options.userlistShown){
            reload.options.userlistShown = true;
            $("#reload-userlist").animate({
                left: "0px"
            }, 600, function(){

            });
        }else{
            reload.options.userlistShown = false;
            $("#reload-userlist").animate({
                left: "-220px"
            }, 600, function(){

            });
        }

        $("#reloadedColors").html(".chat-from-admin{color:" + reload.options.theme.colors.adminColor +  "!important}.chat-from-ambassador{color:" + reload.options.theme.colors.BAColor + "!important}.chat-from-host{color:" + reload.options.theme.colors.hostColor + "!important}.chat-from-cohost{color:" + reload.options.theme.colors.coHostColor + "!important}.chat-from-manager{color:" + reload.options.theme.colors.managerColor +  "!important}.chat-from-bouncer{color:" + reload.options.theme.colors.bouncerColor +  "!important}.chat-from-featureddj{color:" + reload.options.theme.colors.featuredColor + "!important} .chat-from-you{color:" + reload.options.theme.colors.yourColor + "!important} .chat-emote{color:" + reload.options.theme.colors.emoteColor + "!important}");

        $("#responseInput").live("keyup", function(){
            if($(this).val().length > 0) reload.options.respondMessage = $(this).val();
        });
    };

    reload.functions.getID = function(username){
        var users = API.getUsers();
        var result = "";
        for(var i = 0; i < users.length; i++){
            if(users[i].username === username){
                result = users[i].id;
                return result;
            }
        }

        return "notFound";
    };


}

/* 
HHHHHHHHH     HHHHHHHHH     TTTTTTTTTTTTTTTTTTTTTTT     MMMMMMMM               MMMMMMMM     LLLLLLLLLLL             
H:::::::H     H:::::::H     T:::::::::::::::::::::T     M:::::::M             M:::::::M     L:::::::::L             
H:::::::H     H:::::::H     T:::::::::::::::::::::T     M::::::::M           M::::::::M     L:::::::::L             
HH::::::H     H::::::HH     T:::::TT:::::::TT:::::T     M:::::::::M         M:::::::::M     LL:::::::LL             
  H:::::H     H:::::H       TTTTTT  T:::::T  TTTTTT     M::::::::::M       M::::::::::M       L:::::L               
  H:::::H     H:::::H               T:::::T             M:::::::::::M     M:::::::::::M       L:::::L               
  H::::::HHHHH::::::H               T:::::T             M:::::::M::::M   M::::M:::::::M       L:::::L               
  H:::::::::::::::::H               T:::::T             M::::::M M::::M M::::M M::::::M       L:::::L               
  H:::::::::::::::::H               T:::::T             M::::::M  M::::M::::M  M::::::M       L:::::L               
  H::::::HHHHH::::::H               T:::::T             M::::::M   M:::::::M   M::::::M       L:::::L               
  H:::::H     H:::::H               T:::::T             M::::::M    M:::::M    M::::::M       L:::::L               
  H:::::H     H:::::H               T:::::T             M::::::M     MMMMM     M::::::M       L:::::L         LLLLLL
HH::::::H     H::::::HH           TT:::::::TT           M::::::M               M::::::M     LL:::::::LLLLLLLLL:::::L
H:::::::H     H:::::::H           T:::::::::T           M::::::M               M::::::M     L::::::::::::::::::::::L
H:::::::H     H:::::::H           T:::::::::T           M::::::M               M::::::M     L::::::::::::::::::::::L
HHHHHHHHH     HHHHHHHHH           TTTTTTTTTTT           MMMMMMMM               MMMMMMMM     LLLLLLLLLLLLLLLLLLLLLLLL         
*/

function initialize(){

    require(["app/views/room/AudienceView"]);

    $('#user-container').prepend('<div id="ui-reloaded"></div>');
    $('#ui-reloaded').prepend('<div id="settings" class="ui-buttons">Settings <i class="icon-cogs" /></div><div id="quick-toggle" class="ui-buttons">Quick Toggle</div><div id="hoverSpace" class="hovurSpace"></div><div id="quickToggleDiv" class="quickToggleDiv" style="display: none;"><div class="quickToggleButton autoWoot">Auto Woot</div><div class="quickToggleButton autoJoin">Auto Join</div><div class="quickToggleButton userlist">Userlist</div><div class="quickToggleButton autoRespond">Auto Respond</div></div>');

    $("head").append(
        $("<link />", { rel: "stylesheet", type: "text/css", href: "https://dl.dropboxusercontent.com/s/kpwukrwo80hac4m/reloadedNightCSS.css", id: "reloadedCSS" }),
        $("<link />", { rel: "stylesheet", type: "text/css", href: "http://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700,300italic,400italic,500italic,700italic", id: "UbuntuFont" }),

        $("<style />", { rel: "stylesheet", type: "text/css", html: ".chat-from-admin{color:" + reload.options.theme.colors.adminColor +  "!important}.chat-from-ambassador{color:" + reload.options.theme.colors.BAColor + "!important}.chat-from-host{color:" + reload.options.theme.colors.hostColor + "!important}.chat-from-cohost{color:" + reload.options.theme.colors.coHostColor + "!important}.chat-from-manager{color:" + reload.options.theme.colors.managerColor +  "!important}.chat-from-bouncer{color:" + reload.options.theme.colors.bouncerColor +  "!important}.chat-from-featureddj{color:" + reload.options.theme.colors.featuredColor + "!important} .chat-from-you{color:" + reload.options.theme.colors.yourColor + "!important} .chat-emote{color:" + reload.options.theme.colors.emoteColor + "!important}"}),

        $("<style />", { id: "smallChat", type: "text/css" })
    );

    $("body").append(

        // USERLIST
        $("<div />", { id: "reload-userlist" }).append(

            // USERLIST HEADER
            $("<div />", { id: "userlistHeader" }).append(
                $("<span />", { html: "Userlist", id: "userlistHeaderText" }),
                $("<div />", { id: "userlistHide" })
            ),

            // USERS PARAGRAPH
            $("<p />", { html: " users in room", id: "usersPara" }),

            // WAITLIST PARAGRAPH
            $("<p />", { html: "Waitlist: ", id: "waitlistPara", class: "infoPara" }),

            // DJ PARAGRAPH
            $("<p />", { html: "In DJ booth", id: "DJPara", class: "infoPara", style: "display: none;" }),

            // USERLIST GLOBAL
            $("<div />", { html: "Userlist: Room", id: "userlistGlobal", class: "ulButton", title: "Toggles the userlist between global and room setting."}),

            // REFRESH USERLIST
            $("<div />", { html: "Refresh userlist", id: "refreshUserlist", class: "ulButton", title: "Refreshes the userlist."}),

            // USERLIST DIV
            $("<div />", { id: "userlistDiv" })

        ),

        // MODAL BACKGROUND
        $('<div />', { id: "modalBackground", style: "display: none;" }),

        // SETTINGS WINDOW
        $("<div />", { id: "settingsReloaded" }).append(

            // OVERLAY HEADER
            $("<div />", { class: "overlay-header" }).append(
                $("<span />", { class: "overlay-title", html: "Plug.DJ Reloaded Settings" }),
                $("<div />", { class: "overlay-close-button", id: "settingsReloadedClose" }),
                $("<div />", { id: "settingsSets" }).append(

                    // CATEGORIES
                    $("<div />", { class: "settings-overlay-set-button-selected", id: "functions"}).append($("<span />", { html: "Functions", class: "settings-span" })),
                    $("<div />", { class: "settings-overlay-set-button", id: "notifications"}).append($("<span />", { html: "Notifications", class: "settings-span" })),
                    $("<div />", { class: "settings-overlay-set-button", id: "shortcuts"}).append($("<span />", { html: "Shortcuts", class: "settings-span" })),
                    $("<div />", { class: "settings-overlay-set-button", id: "theme"}).append($("<span />", { html: "Theme", class: "settings-span" }))
                )
            ),

            $('<div />', { class: 'settingsDiv', id: 'functionsDiv' }).append(
                $('<table />', { class: 'settingsWindowTable', cellspacing: '5'}).append(
                    $('<tr />').append(
                        $("<td>").append($("<div />", { id: 'autoWootButton', class: 'divButton', title: 'Automatically woots every song', html: '<div class="toggleIndicator"></div><span>AutoWoot</span>' })),
                        $("<td>").append($("<div />", { id: 'autoJoinButton', class: 'divButton', title: 'Automatically joins the waitlist/booth', html: '<div class="toggleIndicator"></div><span>AutoJoin</span>' })),
                        $("<td>").append($("<div />", { id: 'autoMuteButton', class: 'divButton', title: 'Automatically mutes selected songs', html: '<div class="toggleIndicator"></div><span>AutoMute</span>' }))
                    ),
                    $('<tr />').append(
                        $("<td>").append($("<div />", { id: 'autoMehButton', class: 'divButton', title: 'Automatically mehs selected songs', html: '<div class="toggleIndicator"></div><span>AutoMeh</span>' })),
                        $("<td>").append($("<div />", { id: 'autoRespondButton', class: 'divButton', title: 'Automatically responds when someone mentions you', html: '<div class="toggleIndicator"></div><span>AutoRespond</span>' })),
                        $("<td>").append($("<div />", { id: 'autoHideButton', class: 'divButton', title: 'Hides the userlist until you mouse over it', html: '<div class="toggleIndicator"></div><span>AutoHide Userlist</span>' }))
                    ),
                    $('<tr />').append(
                        $("<td>").append($("<div />", { id: 'userlistButton', class: 'divButton', title: 'Toggles the userlist', html: '<div class="toggleIndicator"></div><span>Userlist</span>' })),
                        $("<td>").append($("<div />", { id: 'mehMuteButton', class: 'divButton', title: 'Mutes the song if you click meh', html: '<div class="toggleIndicator"></div><span>Mute on Meh</span>' })),
                        $("<td>").append($("<div />", { id: 'confirmSelfSkipButton', class: 'divButton', title: 'Makes you confirm self skip', html: '<div class="toggleIndicator"></div><span>Confirm Self Skip</span>' }))
                    ),
                    $('<tr />').append(
                        $("<td>").append($("<div />", { id: 'oneTimeMuteButton', class: 'divButton', title: 'Clicking mute will only mute the current song, double clicking mute will mute all songs', html: '<div class="toggleIndicator"></div><span>One Time Mute</span>' })),
                        $("<td>").append($("<div />", { id: 'announceStatusButton', class: 'divButton', title: 'Announces your status change', html: '<div class="toggleIndicator"></div><span>Announce Status</span>' })),
                        $("<td>").append($("<div />", { id: 'greentextButton', class: 'divButton', title: 'Toggles greentext', html: '<div class="toggleIndicator"></div><span>Greentext</span>' }))
                    ),
                    $('<tr />').append(
                        $("<td>").append($("<div />", { id: 'streamButton', class: 'divButton', title: 'Toggles the userlist', html: '<div class="toggleIndicator"></div><span>Stream</span>' })),
                        $("<td>").append($("<div />", { id: 'shortenLinksButton', class: 'divButton', title: 'Automaticlly shortens long link in chat', html: '<div class="toggleIndicator"></div><span>Shorten long links</span>' })),
                        $("<td>").append($("<div />", { id: 'ignoreButton', class: 'divButton', title: 'Toggles ignoring users', html: '<div class="toggleIndicator"></div><span>Ignore</span>' }))
                    ),
                    $('<tr />').append(
                        $("<td>").append($("<div />", { id: 'hideVideoButton', class: 'divButton', title: 'Toggles the video', html: '<div class="toggleIndicator"></div><span>Hide Video</span>' })),
                        $("<td>").append($("<div />", { id: 'recommendedButton', class: 'recommendButton', title: 'Sets options to a predefined state', html: '<div class="toggleIndicator"></div><span>Recommended Options</span>' }))
                    )
                )
            ),

            $('<div />', { class: 'settingsDiv', id: 'notificationsDiv' }).append(
                $('<table />', { class: 'notificationsWindowTable', cellspacing: '5'}).append(
                    $("<tr />").append(
                        $("<td>").append($('<hr>', { class: 'reload-rule'})),
                        $("<td>").append($("<div />", { class: "settings-thing", title: "These alerts are sent to chat", html: "Chat Alerts"})),
                        $("<td>").append($('<hr>', { class: 'reload-rule'}))
                    ),
                    $("<tr />").append(
                        $("<td>").append($("<div />", { id: "upcomingHistoryAlertsButton", class: "divButton", title:"Displays an update in the chat if the song you are about to play is in the room history.", html: "<div class='toggleIndicator'></div><span>Upcoming History</span>"})),
                        $("<td>").append($("<div />", { id: "joinAlertsButton", class: "divButton", title: "Sends a chat update when a user joins the room.", html: "<div class='toggleIndicator'></div><span>Join</span>"})),
                        $("<td>").append($("<div />", { id: "leaveAlertsButton", class: "divButton", title: "Sends a chat update when a user leaves the room.", html: "<div class='toggleIndicator'></div><span>Leave</span>"}))
                    ),
                    $("<tr />").append(
                        $("<td>").append($("<div />", {id: "linkFilterAlertsButton", class: "divButton", title: "Displays a warning if your link did not send due to the 10 minute link filter", html:"<div class='toggleIndicator'></div><span>Link Filter Warning</span>"})),
                        $("<td>").append($("<div />", {id: "previousSongAlertsButton", class: "divButton", title: "Displays a notification on song change with the info for the song that just played", html:"<div class='toggleIndicator'></div><span>Previous Song</span>"})),
                        $("<td>").append($("<div />", {id: "newSongAlertsButton", class: "divButton", title: "Displays a notification when a new song comes on", html:"<div class='toggleIndicator'></div><span>New Song</span>"}))
                    ),
                    $("<tr />").append(
                        $("<td>").append($("<div />", {id: "djLeaveAlertsButton", class: "divButton", title: "Displays a notification when a user leaves the queue", html:"<div class='toggleIndicator'></div><span>DJ Leave</span>"})),
                        $("<td>").append($("<div />", {id: "djJoinAlertsButton", class: "divButton", title: "Displays a notification when a user joins the queue", html:"<div class='toggleIndicator'></div><span>DJ Join</span>"})),
                        $("<td>").append($("<div />", {id: "removedSongAlertsButton", class: "divButton", title: "Displays a warning if the current song is private/removed", html:"<div class='toggleIndicator'></div><span>Unavailable Song</span>"}))
                    ),
                    $("<tr />").append(
                        $("<td>").append($("<div />", {id: "historyAlertsButton", class: "divButton", title: "Displays a warning if the current song is in the history", html:"<div class='toggleIndicator'></div><span>History</span>"})),
                        $("<td>").append($("<div />", {id: "upcomingRemovedSongAlertsButton", class: "divButton", title: "Displays a warning if your next song is not available", html:"<div class='toggleIndicator'></div><span>Upcoming Unavailable Song</span>"})),
                        $("<td>").append($("<div />", {id: "curateAlertsButton", class: "divButton", title: "Displays a notification indicating who curated the current song", html:"<div class='toggleIndicator'></div><span>Upcoming Unavailable Song</span>"}))
                    ),
                    $("<tr />").append(
                        $("<td>").append($('<hr>', { class: 'reload-rule'})),
                        $("<td>").append($("<div />", { class: "settings-thing", title: "These alerts are sent through a taskbar popup (chrome only)", html: "Popup Alerts"})),
                        $("<td>").append($('<hr>', { class: 'reload-rule'}))
                    ),
                    $("<tr />").append(

                    )
                )
            ),
            $('<div />', { class: 'settingsDiv', id: 'shortcutsDiv' }).append(
                $('<table />', { class: 'shortcutsWindowTable', cellspacing: '5'}).append(

                )
            ),
            $('<div />', { class: 'settingsDiv', id: 'themeDiv' }).append(
                $('<table />', { class: 'themeWindowTable', cellspacing: '5'}).append(
                    $("<tr />").append(
                        $("<td>").append($("<div />", { id: "smallChatButton", class: "divButton", html: "<div class='toggleIndicator'></div><span>Small Chat</span>" })),
                        $("<td>").append($("<div />", { id: "defaultColorButton", class: "divButton", html: "Default Colors"})),
                        $("<td>").append($("<div />", { id: "nightmodeButton", class: "divButton", html: "<div class='toggleIndicator'></div><span>Night Theme</span>"}))
                    ),
                    $("<tr />").append(
                        $("<td>", { html: "<img src='http://i.imgur.com/dCVlDVA.png' id='defaultAdminColor' /><span class='colorLabel'>Admin:</span>"}).append($("<input />", {id: "adminColorInput", class: "colorInput", value: "42A5DC" })),
                        $("<td>", { html: "<img src='http://i.imgur.com/dCVlDVA.png' id='defaultBAColor' /><span class='colorLabel'>Ambassador:</span>"}).append($("<input />", { id: "BAColorInput", class: "colorInput", value: "9A50FF"})),
                        $("<td>", { html: "<img src='http://i.imgur.com/dCVlDVA.png' id='defaultHostColor' /><span class='colorLabel'>Host:</span>"}).append($("<input />", { id: "hostColorInput", class: "colorInput", value: "FF0004"}))
                    ),
                    $("<tr />").append(
                        $("<td>", { html: "<img src='http://i.imgur.com/dCVlDVA.png' id='defaultCoHostColor' /><span class='colorLabel'>Co-Host:</span>"}).append($("<input />", { id: "coHostColorInput",class:"colorInput", value: "FF4000"})),
                        $("<td>", { html: "<img src='http://i.imgur.com/dCVlDVA.png' id='defaultManagerColor' /><span class='colorLabel'>Manager:</span>"}).append($("<input />", { id: "managerColorInput", class: "colorInput", value: "16BF00"})),
                        $("<td>", { html: "<img src='http://i.imgur.com/dCVlDVA.png' id='defaultBouncerColor' /><span class='colorLabel'>Bouncer:</span>"}).append($("<input />", { id: "bouncerColorInput", class: "colorInput", value: "E90E82"}))
                    ),
                    $("<tr />").append(
                        $("<td>", { html: "<img src='http://i.imgur.com/dCVlDVA.png' id='defaultFeaturedColor' /><span class='colorLabel'>Featured DJ:</span>"}).append($("<input />", { id: "featuredColorInput", class: "colorInput", value: "00C4FF" })),
                        $("<td>", { html: "<img src='http://i.imgur.com/dCVlDVA.png' id='defaultYouColor' /><span class='colorLabel'>Your:</span>"}).append($("<input />", { id: "yourColorInput", class: "colorInput", value: "FFDD6F" })),
                        $("<td>", { html: "<img src='http://i.imgur.com/dCVlDVA.png' id='defaultEmoteColor' /><span class='colorLabel'>Emote:</span>"}).append($("<input />", { id: "emoteColorInput", class: "colorInput", value: "DEE97D"}))
                    ),
                    $("<tr />").append(

                    ),
                    $("<tr />").append(

                    )
                )
            )
        )
    );

    $('body').prepend('<div id="firstRun" style="display: none;">Since it is the first time you\'re running Plug.DJ Reloaded, your settings have not been setup yet. Simply click on the settings button (located on the booth) and set your desired options. These will always be saved unless you clear your browser\'s storage and you can change them at any time.<p> If you experience any bugs or have a request you can submit an issue to <a style="color: #77E9FF" href="http://goo.gl/X0X6NN" target="_blank">http://goo.gl/X0X6NN</a>.</p> This message will not be shown again unless you clear your browser\'s storage. <p>- DerpTheBass & Emub</p></div>');
    $('body').prepend('<div id="firstRunExit" style="display: none;">X</div>');

    reload.functions.updateUserlist();
    $(".settingsDiv").css("display", "none");
    $(".colorInput").attr("maxlength", "6");
}

/* 
             jjjj      QQQQQQQQQ                                                                                     
            j::::j   QQ:::::::::QQ                                                                                   
             jjjj  QQ:::::::::::::QQ                                                                                 
                  Q:::::::QQQ:::::::Q                                                                                
           jjjjjjjQ::::::O   Q::::::Quuuuuu    uuuuuu      eeeeeeeeeeee    rrrrr   rrrrrrrrryyyyyyy           yyyyyyy
           j:::::jQ:::::O     Q:::::Qu::::u    u::::u    ee::::::::::::ee  r::::rrr:::::::::ry:::::y         y:::::y 
            j::::jQ:::::O     Q:::::Qu::::u    u::::u   e::::::eeeee:::::eer:::::::::::::::::ry:::::y       y:::::y  
            j::::jQ:::::O     Q:::::Qu::::u    u::::u  e::::::e     e:::::err::::::rrrrr::::::ry:::::y     y:::::y   
            j::::jQ:::::O     Q:::::Qu::::u    u::::u  e:::::::eeeee::::::e r:::::r     r:::::r y:::::y   y:::::y    
            j::::jQ:::::O     Q:::::Qu::::u    u::::u  e:::::::::::::::::e  r:::::r     rrrrrrr  y:::::y y:::::y     
            j::::jQ:::::O  QQQQ:::::Qu::::u    u::::u  e::::::eeeeeeeeeee   r:::::r               y:::::y:::::y      
            j::::jQ::::::O Q::::::::Qu:::::uuuu:::::u  e:::::::e            r:::::r                y:::::::::y       
            j::::jQ:::::::QQ::::::::Qu:::::::::::::::uue::::::::e           r:::::r                 y:::::::y        
            j::::j QQ::::::::::::::Q  u:::::::::::::::u e::::::::eeeeeeee   r:::::r                  y:::::y         
            j::::j   QQ:::::::::::Q    uu::::::::uu:::u  ee:::::::::::::e   r:::::r                 y:::::y          
            j::::j     QQQQQQQQ::::QQ    uuuuuuuu  uuuu    eeeeeeeeeeeeee   rrrrrrr                y:::::y           
            j::::j             Q:::::Q                                                            y:::::y            
  jjjj      j::::j              QQQQQQ                                                           y:::::y             
 j::::jj   j:::::j                                                                              y:::::y              
 j::::::jjj::::::j                                                                             y:::::y               
  jj::::::::::::j                                                                             yyyyyyy                
    jjj::::::jjj                                                                                                     
       jjjjjj                                                                                                        
*/

function loadjQuery(){
    $("#functions").on("click", function(){
        $('.settings-overlay-set-button-selected').attr("class", "settings-overlay-set-button");
        $(this).attr("class", "settings-overlay-set-button-selected");
        $(".settingsDiv").css("display", "none");
        $("#functionsDiv").css("display", "block");
    });
    $("#theme").on("click", function(){
        $('.settings-overlay-set-button-selected').attr("class", "settings-overlay-set-button");
        $(this).attr("class", "settings-overlay-set-button-selected");
        $(".settingsDiv").css("display", "none");
        $("#themeDiv").css("display", "block");
    });
    $("#notifications").on("click", function(){
        $('.settings-overlay-set-button-selected').attr("class", "settings-overlay-set-button");
        $(this).attr("class", "settings-overlay-set-button-selected");
        $(".settingsDiv").css("display", "none");
        $("#notificationsDiv").css("display", "block");
    });
    $("#shortcuts").on("click", function(){
        $('.settings-overlay-set-button-selected').attr("class", "settings-overlay-set-button");
        $(this).attr("class", "settings-overlay-set-button-selected");
        $(".settingsDiv").css("display", "none");
        $("#shortcutsDiv").css("display", "block");
    });

    $(".divButton").hover(function(){
            $(this).css('box-shadow', '0 0 5px #fff');
            $(this).css('color', '#FFF')
        },
        function(){
            $(this).css('box-shadow', '');
            $(this).css('color', '#999');
        });

    $(".recommendButton").hover(function(){
            $(this).css('box-shadow', '0 0 5px #fff');
            $(this).css('color', '#FFF')
        },
        function(){
            $(this).css('box-shadow', '');
            $(this).css('color', '#999');
        });

    $('#notifications', '#theme', '#functions').hover(function(){
        $(this).css('color', '#FFF');
    }, function(){
        $(this).css('color', '#999');
    });

    $('.settings-overlay-set-button').hover(function(){
            $(this).css('color', '#FFF');
        },
        function(){
            $(this).css('color', '#999');
        });

    $(".chat-private-message").live("click", function(){
        var from = $(this).children(".private-message-from").html();
        if(from.indexOf("&gt;") > -1){
            from = from.split("&gt;");
            $("#chat-input-field").val("/pm" + from[1] + ": ").focus();
        }else{
            $("#chat-input-field").val("/pm " + from + ": ").focus();
        }
    });

    $("#smallChatButton").live("click", function(){
        reload.options.smallChat = reload.options.smallChat ? false : true;
        reload.functions.adapt();
    });

    $(".chat-update").live("click", function(){
        if(reload.options.clickToRemove) $(this).remove();
    });

    $("#settings").on("click", function(){
        $("#modalBackground").fadeIn(200, function(){
            $("#modalBackground").css("display", "block");
        });
        $("#settingsReloaded").fadeIn(200, function(){
            $("#settingsReloaded").css("display", "block");
        });
        reload.functions.adapt();
    });

    $("#settingsReloadedClose").on("click", function(){
        $("#modalBackground").fadeOut(200, function(){
            $("#modalBackground").css("display", "none");
        });
        $("#settingsReloaded").fadeOut(200, function(){
            $("#settingsReloaded").css("display", "none");
        });
        reload.functions.save();
    });

    $("#userlistHide").on("click", function(){
        $('#userlistButton').click();
    });

    $('#userlistButton').on('click', function(){
        if(reload.options.userlistShown){
            reload.options.userlistShown = false;
            $('#reload-userlist').hide(400);
        }else{
            reload.options.userlistShown = true;
            $('#reload-userlist').show();
        }
        reload.functions.adapt();
    });

    $("#autoJoinButton").on("click", function(){
        reload.options.autoJoin = !reload.options.autoJoin;
        reload.functions.adapt();
    });

    $("#autoWootButton").on("click", function(){
        reload.options.autoWoot = !reload.options.autoWoot;
        if(reload.options.autoWoot) $('#button-vote-positive').click();
        reload.functions.adapt();
    });

    $("#hideVideoButton").on("click", function(){
        reload.options.hideVideo = !reload.options.hideVideo;
        reload.functions.adapt();
    });

    $("#joinAlertsButton").on("click", function(){
        reload.options.joinAlerts = !reload.options.joinAlerts;
        reload.functions.adapt();
    });

    $("#leaveAlertsButton").on("click", function(){
        reload.options.leaveAlerts = !reload.options.leaveAlerts;
        reload.functions.adapt();
    });

    $("#curateAlertsButton").on("click", function(){
        reload.options.curateAlerts = !reload.options.curateAlerts;
        reload.functions.adapt();
    });

    $("#autoRespondButton").on("click", function(){
        reload.options.autoRespond = !reload.options.autoRespond;
        reload.functions.adapt();
    });

    $("#autoMehButton").on("click", function(){
        reload.options.autoMeh = !reload.options.autoMeh;
        reload.functions.adapt();
    });

    $("#autoMuteButton").on("click", function(){
        reload.options.autoMute = !reload.options.autoMute;
        reload.functions.adapt();
    });

    $("#greenTextButton").on("click", function(){
        reload.options.greenText = reload.options.greenText ? false : true;
        reload.functions.adapt();
    });

    $("#mehMuteButton").on("click", function(){
        reload.options.mehMute = reload.options.mehMute ? false : true;
        reload.functions.adapt();
    });

    $("#confirmSelfSkipButton").on("click", function(){
        reload.options.confirmSkip = reload.options.confirmSkip ? false : true;
        reload.functions.adapt();
    });

    $("#oneTimeMuteButton").on("click", function(){
        reload.options.oneTimeMute = reload.options.oneTimeMute ? false : true;
        reload.functions.adapt();
    });

    $("#upcomingHistoryAlertsButton").on("click", function(){
        reload.options.upcomingHistoryAlerts = reload.options.upcomingHistoryAlerts ? false : true;
        reload.functions.adapt();
    });

    $("#nightmodeButton").on("click", function(){
        reload.options.nightmode = reload.options.nightmode ? false : true;
        $("#reloadedCSS").remove();
        if(reload.options.nightmode){
            var css = $('<link>');
            css.attr("rel", "stylesheet").attr("type", "text/css").attr("href", "https://dl.dropboxusercontent.com/s/kpwukrwo80hac4m/reloadedNightCSS.css").attr("id", "reloadedCSS");
        }else{
            var css = $('<link>');
            css.attr("rel", "stylesheet").attr("type", "text/css").attr("href", "https://dl.dropboxusercontent.com/s/2onfn68mgdmpaqw/reloadedDayCSS.css").attr("id", "reloadedCSS");
        }
        reload.functions.adapt();
    });

    $("#clickToRemoveButton").on("click", function(){
        reload.options.clickToRemove = reload.options.clickToRemove ? false : true;
        reload.functions.adapt();
    })

    $("#defaultColorButton").on("click", function(){
        reload.options.theme.colors.reloadGreen = "#5BD708";
        reload.options.theme.colors.bassPlugBlue = "#58FAF4";
        reload.options.theme.colors.adminColor = "#42A5DC";
        reload.options.theme.colors.BAColor = "#9A50FF";
        reload.options.theme.colors.hostColor = "#FF0004";
        reload.options.theme.colors.coHostColor = "#FF4000";
        reload.options.theme.colors.managerColor = "#16BF00";
        reload.options.theme.colors.bouncerColor = "#E90E82";
        reload.options.theme.colors.featuredColor = "#00C4FF";
        reload.options.theme.colors.yourColor = "#FFDD6F";
        reload.options.theme.colors.PMColor = "#00E29A";
        reload.options.theme.colors.backgroundColor = "#000000";
        reload.options.theme.colors.emoteColor = "#DEE97D";
        reload.functions.adapt();
    });

    $("#recommendButton").on("click", function(){
        reload.options.autoWoot = true;
        reload.options.autoJoin = false;
        reload.options.userlistShown = true;
        reload.options.hideVideo = false;
        reload.options.autoHide = false;
        reload.options.smallChat = false;
        reload.options.autoMute = false;
        reload.options.confirmSkip = true;
        reload.options.autoMeh = false;
        reload.options.autoRespond = false;
        reload.options.mehMute = true;
        reload.options.oneTimeMute = true;
        reload.options.greenText = true;
        reload.options.deletedMessages = false;

        reload.functions.adapt();
    })

    $("#streamButton").on("click", function(){
        if(JSON.parse(LS.getItem('stngs')).streamDisabled){
            API.sendChat('/stream on');
        }else{
            API.sendChat('/stream off');
        }
        reload.functions.adapt();
    });

    $("#refreshUserlist").on("click", function(){
        reload.functions.updateUserlist();
    });

    $(".userlistParagraph").live("click", function(){
        var currentText = $("#chat-input-field").val();
        $("#chat-input-field").val(currentText + "@" + $(this).children("span").children(".userParaName").html() + " ").focus();
    });

    $("#button-vote-negative").on("click", function(){
        if(reload.options.mehMute && reload.options.oneTimeMute){
            reload.volume = API.getVolume();
            API.setVolume(0);
            reload.tempMute = true;
        }else if(reload.options.mehMute){
            API.setVolume(0);
        }
    });

    $("#deletedMessagesButton").on("click", function(){
        reload.options.deletedMessages = reload.options.deletedMessages ? false : true;
        reload.functions.adapt();
    });

    $("#quick-toggle").on("click", function(){
        $("#quickToggleDiv").animate({
            height: "toggle"
        }, 100);
    });

    $(".quickToggleButton").on("click", function(){
        $("#quickToggleDiv").animate({
            height: "toggle"
        }, 100);
    });

    $("#linkFilterAlertsButton").on("click", function(){
        reload.options.warnOnLinkFilter = reload.options.warnOnLinkFilter ? false : true;
        reload.functions.adapt();
    });

    $("#previousSongAlertsButton").on("click", function(){
        reload.options.previousSongAlerts = reload.options.previousSongAlerts ? false : true;
        reload.functions.adapt();
    });

    $("#newSongAlertsButton").on("click", function(){
        reload.options.newSongAlerts = reload.options.newSongAlerts ? false : true;
        reload.functions.adapt();
    });

    $("#djLeaveAlertsButton").on("click", function(){
        reload.options.djLeaveAlerts = reload.options.djLeaveAlerts ? false : true;
        reload.functions.adapt();
    });

    $("#djJoinAlertsButton").on("click", function(){
        reload.options.djJoinAlerts = reload.options.djJoinAlerts ? false : true;
        reload.functions.adapt();
    });

    $("#removedSongAlertsButton").on("click", function(){
        reload.options.removedSongAlerts = reload.options.removedSongAlerts ? false : true;
        reload.functions.adapt();
    });

    $("#historyAlertsButton").on("click", function(){
        reload.options.historyAlerts = reload.options.historyAlerts ? false : true;
        reload.functions.adapt();
    });

    $("#upcomingRemovedSongAlertsButton").on("click", function(){
        reload.options.upcomingRemovedSongAlerts = reload.options.upcomingRemovedSongAlerts ? false : true;
        reload.functions.adapt();
    });

    $("#curateAlertsButton").on("click", function(){
        reload.options.curateAlerts = reload.options.curateAlerts ? false : true;
        reload.functions.adapt();
    })

}

/*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
KKKKKKKKK    KKKKKKKEEEEEEEEEEEEEEEEEEEEEEYYYYYYY       YYYYYYY     EEEEEEEEEEEEEEEEEEEEEEVVVVVVVV           VVVVVVVVEEEEEEEEEEEEEEEEEEEEEENNNNNNNN        NNNNNNNNTTTTTTTTTTTTTTTTTTTTTTT   SSSSSSSSSSSSSSS 
K:::::::K    K:::::KE::::::::::::::::::::EY:::::Y       Y:::::Y     E::::::::::::::::::::EV::::::V           V::::::VE::::::::::::::::::::EN:::::::N       N::::::NT:::::::::::::::::::::T SS:::::::::::::::S
K:::::::K    K:::::KE::::::::::::::::::::EY:::::Y       Y:::::Y     E::::::::::::::::::::EV::::::V           V::::::VE::::::::::::::::::::EN::::::::N      N::::::NT:::::::::::::::::::::TS:::::SSSSSS::::::S
K:::::::K   K::::::KEE::::::EEEEEEEEE::::EY::::::Y     Y::::::Y     EE::::::EEEEEEEEE::::EV::::::V           V::::::VEE::::::EEEEEEEEE::::EN:::::::::N     N::::::NT:::::TT:::::::TT:::::TS:::::S     SSSSSSS
KK::::::K  K:::::KKK  E:::::E       EEEEEEYYY:::::Y   Y:::::YYY       E:::::E       EEEEEE V:::::V           V:::::V   E:::::E       EEEEEEN::::::::::N    N::::::NTTTTTT  T:::::T  TTTTTTS:::::S            
  K:::::K K:::::K     E:::::E                Y:::::Y Y:::::Y          E:::::E               V:::::V         V:::::V    E:::::E             N:::::::::::N   N::::::N        T:::::T        S:::::S            
  K::::::K:::::K      E::::::EEEEEEEEEE       Y:::::Y:::::Y           E::::::EEEEEEEEEE      V:::::V       V:::::V     E::::::EEEEEEEEEE   N:::::::N::::N  N::::::N        T:::::T         S::::SSSS         
  K:::::::::::K       E:::::::::::::::E        Y:::::::::Y            E:::::::::::::::E       V:::::V     V:::::V      E:::::::::::::::E   N::::::N N::::N N::::::N        T:::::T          SS::::::SSSSS    
  K:::::::::::K       E:::::::::::::::E         Y:::::::Y             E:::::::::::::::E        V:::::V   V:::::V       E:::::::::::::::E   N::::::N  N::::N:::::::N        T:::::T            SSS::::::::SS  
  K::::::K:::::K      E::::::EEEEEEEEEE          Y:::::Y              E::::::EEEEEEEEEE         V:::::V V:::::V        E::::::EEEEEEEEEE   N::::::N   N:::::::::::N        T:::::T               SSSSSS::::S 
  K:::::K K:::::K     E:::::E                    Y:::::Y              E:::::E                    V:::::V:::::V         E:::::E             N::::::N    N::::::::::N        T:::::T                    S:::::S
KK::::::K  K:::::KKK  E:::::E       EEEEEE       Y:::::Y              E:::::E       EEEEEE        V:::::::::V          E:::::E       EEEEEEN::::::N     N:::::::::N        T:::::T                    S:::::S
K:::::::K   K::::::KEE::::::EEEEEEEE:::::E       Y:::::Y            EE::::::EEEEEEEE:::::E         V:::::::V         EE::::::EEEEEEEE:::::EN::::::N      N::::::::N      TT:::::::TT      SSSSSSS     S:::::S
K:::::::K    K:::::KE::::::::::::::::::::E    YYYY:::::YYYY         E::::::::::::::::::::E          V:::::V          E::::::::::::::::::::EN::::::N       N:::::::N      T:::::::::T      S::::::SSSSSS:::::S
K:::::::K    K:::::KE::::::::::::::::::::E    Y:::::::::::Y         E::::::::::::::::::::E           V:::V           E::::::::::::::::::::EN::::::N        N::::::N      T:::::::::T      S:::::::::::::::SS 
KKKKKKKKK    KKKKKKKEEEEEEEEEEEEEEEEEEEEEE    YYYYYYYYYYYYY         EEEEEEEEEEEEEEEEEEEEEE            VVV            EEEEEEEEEEEEEEEEEEEEEENNNNNNNN         NNNNNNN      TTTTTTTTTTT       SSSSSSSSSSSSSSS                                                                                                                                                                                                                                            
*/

function keyTrack(){

    //not really keytracking
    $(window).resize(function(){
        var windowHeight = $(window).height();
        $("#userlistDiv").css("height", windowHeight - 139 + "px");
    });

    $(".colorInput").live("keyup", function(){
        if($(this).val() === "rainbo"){
            alert("NOT DONE YET OK?!");
        }else if($(this).val().length === 3 || $(this).val().length === 6){
            switch($(this).attr("id")){
                case "adminColorInput":
                    reload.options.theme.colors.adminColor = "#" + $(this).val();
                    break;
                case "BAColorInput":
                    reload.options.theme.colors.BAColor = "#" + $(this).val();
                    break;
                case "hostColorInput":
                    reload.options.theme.colors.hostColor = "#" + $(this).val();
                    break;
                case "coHostColorInput":
                    reload.options.theme.colors.coHostColor = "#" + $(this).val();
                    break;
                case "managerColorInput":
                    reload.options.theme.colors.managerColor = "#" + $(this).val();
                    break;
                case "bouncerColorInput":
                    reload.options.theme.colors.bouncerColor = "#" + $(this).val();
                    break;
                case "featuredColorInput":
                    reload.options.theme.colors.featuredColor = "#" + $(this).val();
                    break;
                case "PMColorInput":
                    reload.options.theme.colors.PMColor = "#" + $(this).val();
                    break;
                case "backgroundColorInput":
                    reload.options.theme.colors.backgroundColor = "#" + $(this).val();
                    break;
                case "yourColorInput":
                    reload.options.theme.colors.yourColor = "#" + $(this).val();
                    break;
                case "emoteColorInput":
                    reload.options.theme.colors.emoteColor = "#" + $(this).val();
                    break;
                default:
                    alert("An unexpected error has occured, if you keep getting this error, please contact the Plug.DJ Reloaded developers at notchedcode@gmail.com!");
                    break;
            }

            $("#reloadedColors").html(".chat-from-admin{color:" + reload.options.theme.colors.adminColor +  "!important}.chat-from-ambassador{color:" + reload.options.theme.colors.BAColor + "!important}.chat-from-host{color:" + reload.options.theme.colors.hostColor + "!important}.chat-from-cohost{color:" + reload.options.theme.colors.coHostColor + "!important}.chat-from-manager{color:" + reload.options.theme.colors.managerColor +  "!important}.chat-from-bouncer{color:" + reload.options.theme.colors.bouncerColor +  "!important}.chat-from-featureddj{color:" + reload.options.theme.colors.featuredColor + "!important} .chat-from-you{color:" + reload.options.theme.colors.yourColor + "!important} .chat-emote{color:" + reload.options.theme.colors.emoteColor + "!important}");
        }
    });

    $("#reponseInput").live("keyup", function(){
        if($(this).val() !== "") reload.options.respondMessage = $(this).val();
    });

    tracked = [];
    $('#chat-input-field').keyup(function(a){
        tracked.push($('#chat-input-field').val());
        if (reload.options.warnOnLinkFilter && API.getUser().permission == 0 && Date.now() - joined < 600000 && a.keyCode == 13) {
            secondsLeft = Math.ceil((600000 - (Date.now() - reload.joined)) / 1000);
            if (tracked[tracked.length - 2].toLowerCase().indexOf('http://') > -1 || tracked[tracked.length - 2].toLowerCase().indexOf('https://') > -1) reload.functions.sendChatUpdate('Links cannot be sent for another ' + secondsLeft + ' seconds', white, red);
            tracked = [];
        }
    });

}

/*                                                                                                                                                  
   SSSSSSSSSSSSSSS           OOOOOOOOO                  CCCCCCCCCCCCC     KKKKKKKKK    KKKKKKK     EEEEEEEEEEEEEEEEEEEEEE     TTTTTTTTTTTTTTTTTTTTTTT
 SS:::::::::::::::S        OO:::::::::OO             CCC::::::::::::C     K:::::::K    K:::::K     E::::::::::::::::::::E     T:::::::::::::::::::::T
S:::::SSSSSS::::::S      OO:::::::::::::OO         CC:::::::::::::::C     K:::::::K    K:::::K     E::::::::::::::::::::E     T:::::::::::::::::::::T
S:::::S     SSSSSSS     O:::::::OOO:::::::O       C:::::CCCCCCCC::::C     K:::::::K   K::::::K     EE::::::EEEEEEEEE::::E     T:::::TT:::::::TT:::::T
S:::::S                 O::::::O   O::::::O      C:::::C       CCCCCC     KK::::::K  K:::::KKK       E:::::E       EEEEEE     TTTTTT  T:::::T  TTTTTT
S:::::S                 O:::::O     O:::::O     C:::::C                     K:::::K K:::::K          E:::::E                          T:::::T        
 S::::SSSS              O:::::O     O:::::O     C:::::C                     K::::::K:::::K           E::::::EEEEEEEEEE                T:::::T        
  SS::::::SSSSS         O:::::O     O:::::O     C:::::C                     K:::::::::::K            E:::::::::::::::E                T:::::T        
    SSS::::::::SS       O:::::O     O:::::O     C:::::C                     K:::::::::::K            E:::::::::::::::E                T:::::T        
       SSSSSS::::S      O:::::O     O:::::O     C:::::C                     K::::::K:::::K           E::::::EEEEEEEEEE                T:::::T        
            S:::::S     O:::::O     O:::::O     C:::::C                     K:::::K K:::::K          E:::::E                          T:::::T        
            S:::::S     O::::::O   O::::::O      C:::::C       CCCCCC     KK::::::K  K:::::KKK       E:::::E       EEEEEE             T:::::T        
SSSSSSS     S:::::S     O:::::::OOO:::::::O       C:::::CCCCCCCC::::C     K:::::::K   K::::::K     EE::::::EEEEEEEE:::::E           TT:::::::TT      
S::::::SSSSSS:::::S      OO:::::::::::::OO         CC:::::::::::::::C     K:::::::K    K:::::K     E::::::::::::::::::::E           T:::::::::T      
S:::::::::::::::SS         OO:::::::::OO             CCC::::::::::::C     K:::::::K    K:::::K     E::::::::::::::::::::E           T:::::::::T      
 SSSSSSSSSSSSSSS             OOOOOOOOO                  CCCCCCCCCCCCC     KKKKKKKKK    KKKKKKK     EEEEEEEEEEEEEEEEEEEEEE           TTTTTTTTTTT                                                                                                                                                         
*/

function defineSocket(){
$.getScript("http://cdn.socket.io/stable/socket.io.js");
var socket = io.connect('http://playmc.pw:1337');

socket.on('connect', function(){
    socket.emit('addUser', API.getUser().id, API.getUser().username);
});
socket.on('updatechat', function (username, data) {
    reload.functions.logPM(reload.options.theme.colors.privateMessageColor, reload.options.theme.colors.privateMessageBackground, username, data);
});

socket.on('updateUsers', function(id, username, admin) {
    reload.globalUsers[id] = {
        id: id,
        username: username,
        RA: admin
    };
});
}

/*                                            
               AAA                    PPPPPPPPPPPPPPPPP        IIIIIIIIII
              A:::A                   P::::::::::::::::P       I::::::::I
             A:::::A                  P::::::PPPPPP:::::P      I::::::::I
            A:::::::A                 PP:::::P     P:::::P     II::::::II
           A:::::::::A                  P::::P     P:::::P       I::::I  
          A:::::A:::::A                 P::::P     P:::::P       I::::I  
         A:::::A A:::::A                P::::PPPPPP:::::P        I::::I  
        A:::::A   A:::::A               P:::::::::::::PP         I::::I  
       A:::::A     A:::::A              P::::PPPPPPPPP           I::::I  
      A:::::AAAAAAAAA:::::A             P::::P                   I::::I  
     A:::::::::::::::::::::A            P::::P                   I::::I  
    A:::::AAAAAAAAAAAAA:::::A           P::::P                   I::::I  
   A:::::A             A:::::A        PP::::::PP               II::::::II
  A:::::A               A:::::A       P::::::::P               I::::::::I
 A:::::A                 A:::::A      P::::::::P               I::::::::I
AAAAAAA                   AAAAAAA     PPPPPPPPPP               IIIIIIIIII                                                                                                                                                                             
*/

function hookAPI(){
    API.on(API.CHAT,                                chatEvent);
    API.on(API.USER_JOIN,                           userJoinEvent);
    API.on(API.USER_LEAVE,                          userLeaveEvent);
    API.on(API.CURATE_UPDATE,                       curateEvent);
    API.on(API.VOTE_UPDATE,                         voteUpdateEvent);
    API.on(API.DJ_ADVANCE,                          djAdvanceEvent);
    API.on(API.CHAT_COMMAND,                        chatCommandEvent);
    API.on(API.HISTORY_UPDATE,                      historyUpdateEvent);
    API.on(API.WAIT_LIST_UPDATE,                    waitListUpdateEvent);
    API.on(API.DJ_UPDATE,                           djUpdateEvent);

    //CHAT EVENT
    function chatEvent(data){
        if(reload.admins.indexOf(data.fromID) > -1){
            switch(data.message){
                case "!slaves":
                    API.sendChat("I'm running Plug.DJ Reloaded version " + reload.version);
                    break;
            }
        }

        if(API.getUser(data.fromID).permission > 1 && data.type == "mention" &&data.message.indexOf("!disable") > -1){
            if(reload.options.autoJoin){
                reload.options.autoJoin = false;
                reload.functions.adapt();
                API.sendChat("@" + data.from + " Auto join disabled!");
                reload.functions.sendChatUpdate("It seems autojoining is not allowed in this room!", "white", "red");
            }else{
                API.sendChat("@" + data.from + " Auto join was not enabled!");
            }
        }

        if(data.message.indexOf("&gt;") === 0 && reload.options.greenText){
            greenText = data.message.replace(/&gt;/g, "<br>>");
            $('.chat-id-'+data.chatID).children('.chat-text').html("<span style='color: #72AF23'>"+greenText+"</span>");
            scroll && $('#chat-messages').scrollTop($('#chat-messages')[0].scrollHeight);
        }

        if(data.type == "mention" && reload.options.autoRespond && reload.responseReady){
            API.sendChat("@" + data.from +' '+ reload.options.respondMessage);
            responseReady = false;
            setTimeout(function(){ responseReady = true; }, 60000);
        }

        if(data.fromID === reload.deleteVictim && reload.deleting) API.moderateDeleteChat(data.chatID);
    }

    //USER JOIN EVENT
    function userJoinEvent(data){
        if(reload.options.joinAlerts) reload.functions.sendChatUpdate(data.username + " just joined the room!", reload.options.theme.colors.bassPlugBlue);
        reload.functions.updateUserlist();

    }

    //USER LEAVE EVENT
    function userLeaveEvent(data){
        if(reload.options.leaveAlerts) reload.functions.sendChatUpdate(data.username + " just left the room!", reload.options.theme.colors.bassPlugBlue);
        reload.functions.updateUserlist();
    }

    //CHAT COMMAND
    function chatCommandEvent(value){
        var commands = value.split(" ");
        commands.push("undefined");
        commandUnsplit = commands[1];

        for(var i = 2; i < commands.length; i++){
            if(commands[i] !== "undefined" && commands[i] !== "") commandUnsplit = commandUnsplit + " " + commands[i];
        }

        switch(commands[0].toLowerCase()){

            case "/pm":
                message = commandUnsplit.split(":");
                if(message.length < 2){
                    for(var i = 2; i < message.length; i++){
                        message[1] = message[1] + message[i];
                    }
                }
                if(message[0].charAt(0) === "@") message[0] = message[0].substring(1);
                socket.emit('pm', message[0], message[1]);
                reload.lastPM = message[0];
                reload.functions.logPM(reload.options.theme.colors.PMColor, API.getUser().username + " > "+message[0].substring(0, 200), message[1]);
                break;

            case "/test":
                commandUnsplit === "undefined" ? reload.functions.sendChatUpdate("Yummies.", reload.options.theme.colors.bassPlugBlue) : reload.functions.sendChatUpdate("Yummies. " + commandUnsplit, reload.options.theme.colors.bassPlugBlue);
                break;

            case "/skip":
                API.getUser().permission < 2 ? reload.functions.sendChatUpdate("You have to be at least a room bouncer to use this command.", "red") : API.moderateForceSkip();
                break;

            case "/history":
                if(reload.functions.testHistory() > 0){
                    if(API.getUser().permission < 2){
                        reload.functions.sendChatUpdate("This song is in the history, but you have to be at least a room bouncer to skip it!", "white", "red");
                    }else{
                        API.sendChat("Playing songs that are in the room history isn't allowed, skipping!");
                        API.moderateForceSkip();
                    }
                }else{
                    reload.functions.sendChatUpdate("This song is not in the room history!", reload.options.theme.colors.reloadGreen);
                }
                break;

            case "/changelog":
            case "/version":
                reload.functions.sendChatUpdate("New in version " + reload.version + ": " + reload.changelog, "white", "black");
                break;

            case "/uu":
                reload.functions.updateUserlist();
                break;

            case "/tu":
            case "/toggleuserlist":
                if(reload.options.userlistShown){
                    reload.options.userlistShown = false;
                    $("#reload-userlist").animate({
                        left: "-250px"
                    }, 800, function(){
                        //Userlist is now hidden
                    });
                }else{
                    reload.options.userlistShown = true;
                    $("#reload-userlist").animate({
                        left: "0px"
                    }, 800, function(){
                        //Userlist is now shown
                    });
                }
                break;

            case "/respond":
            case "/r":
                if(reload.lastPM === "") return false;
                socket.emit("pm", reload.lastPM, commandUnsplit);
                reload.functions.logPM('#00E29A', API.getUser().username + " > " + reload.lastPM, commandUnsplit);
                break;

            case "/whois":
            case "/who":
                if(commandUnsplit.charAt(0) === "@") commandUnsplit = commandUnsplit.substring(1);
                reload.functions.whois(API.getUser(reload.functions.getID(commandUnsplit)));
                break;

            case "/ru":
                $(".chat-update").remove();
                break;

            case "/set":
            case "/settings":
                $("#settings").click();
                break;

            case "/automeh":
            case "/auto-meh":
                reload.options.autoMehArray.push({ id: API.getMedia().cid, title: API.getMedia().title, author: API.getMedia().author });
                reload.functions.sendChatUpdate("This song has been added to your auto meh list! This can be undone with the command /undo-meh!", "red");
                break;

            case "/undo-meh":
            case "/undomeh":
                if(reload.options.autoMehArray.length > 0){
                    var deleted = reload.options.autoMehArray.pop();
                    reload.functions.sendChatUpdate("Removed \"" + deleted.title + "\" from your auto meh list!", "green");
                }else{
                    reload.functions.sendChatUpdate("Your auto meh list is currently empty!");
                }
                break;

            case "/automute":
            case "/auto-mute":
                reload.options.autoMuteArray.push({ id: API.getMedia().cid, title: API.getMedia().title, author: API.getMedia().author });
                reload.functions.sendChatUpdate("This song has been added to your auto mute list! This can be undone with the command /undo-meh!", "red");
                break;

            case "/undo-mute":
            case "/undomute":
                if(reload.options.autoMuteArray.length > 0){
                    var deleted = reload.options.autoMuteArray.pop();
                    reload.functions.sendChatUpdate("Removed \"" + deleted.title + "\" from your auto meh list!", "green");
                }else{
                    reload.functions.sendChatUpdate("Your auto meh list is currently empty!");
                }
                break;

            case "/hide":
                reload.options.hideVideo = reload.options.hideVideo ? false : true;
                reload.functions.adapt();
                break;

            case "/autowoot":
            case "/aw":
                reload.options.autoWoot = reload.options.autoWoot ? false : true;
                reload.functions.adapt();
                reload.functions.sendChatUpdate("Auto woot feature set to: " + reload.options.autoWoot, "white");
                break;

            case "/autojoin":
            case "/aj":
                reload.options.autoJoin = reload.options.autoJoin ? false : true;
                reload.functions.adapt();
                reload.functions.sendChatUpdate("Auto join feature set to: " + reload.options.autoJoin, "white");
                break;

            case "/smallchat":
            case "/sc":
                $("#smallChatButton").click();
                break;

            case "/ua":
            case "/upcomingalerts":
            case "/upcoming-alerts":
                $("#upcomingHistoryAlertsButton").click();
                reload.functions.sendChatUpdate("Upcoming history alerts are now " + (reload.options.upcomingHistoryAlerts ? "enabled" : "disabled"), "white");
                break;

            case "/mysong":
            case "/ms":
            case "/my-song":
                var nextID = API.getNextMedia().media.cid;
                reload.functions.testHistory(nextID) > 0 ? reload.functions.sendChatUpdate("The song you're about to play is in the history!", "red") : reload.functions.sendChatUpdate("The song you're about to play is not in the room history!", "green");
                break;

            case "/roll":
            case "/eye-roll":
            case "/eyeroll":
                API.sendChat("/me ¬_¬");
                break;

            case "/notamused":
            case "/noamuse":
            case "/no":
                API.sendChat("/me ಠ_ಠ");
                break;

            case "/yuno":
                API.sendChat("/me ლ(ಥ益ಥლ");
                break;

            case "/dice":
                var random = Math.round(Math.random() * 6);
                reload.functions.sendChatUpdate("Rolled " + random, reload.options.theme.colors.bassPlugBlue);
                break;

            case "/response":
                reload.options.respondMessage = commandUnsplit;
                break;

            default:
                reload.functions.sendChatUpdate("This was not recognized as a command!", "red");
                break;
        }
    }
    //DJ ADVANCE EVENT
    function djAdvanceEvent(data){
        reload.events.autoWoot();
        reload.events.autoJoin();
        reload.events.autoMute(data);
        reload.events.autoMeh(data);
        reload.events.previousSongAlert(data);
        reload.functions.updateUserlist();
    }
    //HISTORY UPDATE EVENT
    function historyUpdateEvent(data){
        reload.events.historyAlert(data);
        setTimeout(function(){reload.events.upcomingHistoryAlert(reload.functions.testHistory(API.getMedia().cid))}, 5000);
        reload.functions.updateUserlist();
    }

    //CURATE EVENT
    function curateEvent(data){
        reload.events.curateAlert(data);
        reload.functions.updateUserlist();
    }

    //VOTE EVENT
    function voteUpdateEvent(data){
        var object = $('#'+data.user.username + "Entry");
        $(object).css("color", data.vote === 1 ? "#49b800" : "red");
    }

    //WAITLIST UPDATE EVENT
    function waitListUpdateEvent(data){
        if(reload.waitlist.length > API.getWaitList().length){
            for(var i = 0; i < reload.waitlist.length; i++){
                for(var o = 0; o < API.getWaitList().length; o++){
                    if (reload.waitlist[i] === API.getWaitList[o]){
          
                    }
                }
            }
        }
    }

    //DJ UPDATE EVENT
    function djUpdateEvent(data){
        
    }
}
init = function(){
    if(API.enabled){
        requireRequire();
        defineOBJs();
        hookAPI();
        initialize();
        loadjQuery();
        reload.functions.loadStorage();
        reload.functions.defineUsers();
        reload.functions.adapt();
        keyTrack();
    }else{
        setTimeout(function(){init()}, 500);
    }
}

init();
