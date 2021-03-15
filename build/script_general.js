(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('begin', x, this);
                    k['call'](this);
                };
                w['bind']('begin', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R !== undefined) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"borderSize":0,"borderRadius":0,"paddingLeft":0,"scrollBarVisible":"rollOver","paddingTop":0,"paddingBottom":0,"paddingRight":0,"backgroundColorRatios":[0],"desktopMipmappingEnabled":false,"start":"this.init()","scrollBarWidth":10,"mouseWheelEnabled":true,"gap":10,"backgroundColorDirection":"vertical","contentOpaque":false,"verticalAlign":"top","toolTipHorizontalAlign":"center","scrollBarOpacity":0.5,"width":"100%","backgroundPreloadEnabled":true,"backgroundColor":["#FFFFFF"],"scrollBarColor":"#000000","id":"rootPlayer","height":"100%","children":["this.MainViewer"],"class":"Player","downloadEnabled":false,"defaultVRPointer":"laser","vrPolyfillScale":0.75,"horizontalAlign":"left","minHeight":20,"scripts":{"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"isPanorama":TDV.Tour.Script.isPanorama,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"cloneCamera":TDV.Tour.Script.cloneCamera,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getComponentByName":TDV.Tour.Script.getComponentByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"init":TDV.Tour.Script.init,"shareSocial":TDV.Tour.Script.shareSocial,"getPixels":TDV.Tour.Script.getPixels,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMainViewer":TDV.Tour.Script.getMainViewer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getMediaByName":TDV.Tour.Script.getMediaByName,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setLocale":TDV.Tour.Script.setLocale,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"openLink":TDV.Tour.Script.openLink,"quizShowScore":TDV.Tour.Script.quizShowScore,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"historyGoBack":TDV.Tour.Script.historyGoBack,"setValue":TDV.Tour.Script.setValue,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"existsKey":TDV.Tour.Script.existsKey,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showWindow":TDV.Tour.Script.showWindow,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"quizFinish":TDV.Tour.Script.quizFinish,"quizStart":TDV.Tour.Script.quizStart,"playAudioList":TDV.Tour.Script.playAudioList,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"mixObject":TDV.Tour.Script.mixObject,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"unregisterKey":TDV.Tour.Script.unregisterKey,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"textToSpeech":TDV.Tour.Script.textToSpeech,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"translate":TDV.Tour.Script.translate,"clone":TDV.Tour.Script.clone,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"registerKey":TDV.Tour.Script.registerKey,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"initGA":TDV.Tour.Script.initGA,"getOverlays":TDV.Tour.Script.getOverlays,"getKey":TDV.Tour.Script.getKey,"initQuiz":TDV.Tour.Script.initQuiz,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo},"backgroundOpacity":1,"minWidth":20,"scrollBarMargin":2,"shadow":false,"mediaActivationMode":"window","overflow":"hidden","propagateClick":false,"layout":"absolute","data":{"textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"volume":1,"rate":1},"name":"Player7457","locales":{"en":"locale/en.txt"},"defaultLocale":"en"},"definitions": [{"surfaceReticleSelectionOpacity":1,"playbackBarHeadShadowVerticalLength":0,"toolTipBorderColor":"#767676","toolTipBorderSize":1,"paddingLeft":0,"playbackBarHeadShadowHorizontalLength":0,"toolTipPaddingTop":4,"toolTipShadowColor":"#333333","subtitlesFontColor":"#FFFFFF","progressBackgroundOpacity":1,"toolTipFontFamily":"Arial","toolTipTextShadowBlurRadius":3,"playbackBarProgressBackgroundColorRatios":[0],"paddingRight":0,"toolTipTextShadowOpacity":0,"progressBarBackgroundColorDirection":"vertical","subtitlesTop":0,"playbackBarOpacity":1,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowHorizontalLength":0,"subtitlesTextShadowColor":"#000000","toolTipFontColor":"#606060","vrPointerSelectionColor":"#FF6600","playbackBarBorderRadius":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarBottom":5,"playbackBarProgressBorderColor":"#000000","subtitlesPaddingBottom":5,"progressBarOpacity":1,"subtitlesFontSize":"3vmin","playbackBarProgressBackgroundColorDirection":"vertical","vrPointerColor":"#FFFFFF","progressHeight":10,"class":"ViewerArea","progressBackgroundColorRatios":[0],"playbackBarHeadBorderRadius":0,"progressBarBorderSize":0,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesBackgroundOpacity":0.2,"progressBackgroundColor":["#FFFFFF"],"subtitlesFontWeight":"normal","toolTipBorderRadius":3,"playbackBarHeight":10,"subtitlesBorderColor":"#FFFFFF","minHeight":50,"playbackBarProgressOpacity":1,"subtitlesTextShadowHorizontalLength":1,"minWidth":100,"toolTipShadowBlurRadius":3,"toolTipPaddingLeft":6,"progressBorderRadius":0,"transitionMode":"blending","playbackBarHeadBorderColor":"#000000","playbackBarHeadBackgroundColorDirection":"vertical","firstTransitionDuration":0,"toolTipShadowVerticalLength":0,"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"playbackBarBorderSize":0,"progressBackgroundColorDirection":"vertical","propagateClick":false,"borderSize":0,"subtitlesPaddingLeft":5,"vrPointerSelectionTime":2000,"borderRadius":0,"subtitlesTextDecoration":"none","toolTipBackgroundColor":"#F6F6F6","paddingTop":0,"displayTooltipInTouchScreens":true,"subtitlesTextShadowBlurRadius":0,"surfaceReticleColor":"#FFFFFF","playbackBarHeadWidth":6,"playbackBarHeadShadowBlurRadius":3,"toolTipOpacity":1,"toolTipPaddingBottom":4,"paddingBottom":0,"subtitlesPaddingRight":5,"playbackBarBackgroundColorDirection":"vertical","transitionDuration":500,"toolTipFontStyle":"normal","toolTipTextShadowColor":"#000000","toolTipPaddingRight":6,"progressBorderSize":0,"playbackBarProgressBorderSize":0,"playbackBarLeft":0,"toolTipHorizontalAlign":"center","subtitlesFontFamily":"Arial","subtitlesBottom":50,"subtitlesShadow":false,"playbackBarProgressBorderRadius":0,"playbackBarRight":0,"progressBarBorderRadius":0,"subtitlesPaddingTop":5,"displayTooltipInSurfaceSelection":true,"progressLeft":0,"id":"MainViewer","playbackBarHeadHeight":15,"subtitlesOpacity":1,"height":"100%","playbackBarHeadShadowColor":"#000000","toolTipFontWeight":"normal","subtitlesGap":0,"doubleClickAction":"toggle_fullscreen","width":"100%","toolTipFontSize":"1.11vmin","toolTipShadowOpacity":1,"progressBottom":0,"progressRight":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesVerticalAlign":"bottom","playbackBarHeadBorderSize":0,"toolTipDisplayTime":600,"playbackBarHeadShadowOpacity":0.7,"subtitlesBackgroundColor":"#000000","surfaceReticleOpacity":0.6,"playbackBarBackgroundOpacity":1,"subtitlesHorizontalAlign":"center","playbackBarHeadOpacity":1,"subtitlesTextShadowVerticalLength":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadow":true,"progressBorderColor":"#000000","progressOpacity":1,"shadow":false,"subtitlesTextShadowOpacity":1,"data":{"name":"Main Viewer"},"subtitlesBorderSize":0,"toolTipShadowSpread":0},{"paddingLeft":0,"footerBackgroundColorRatios":[0,0.9,1],"scrollBarVisible":"rollOver","headerBackgroundColorDirection":"vertical","paddingRight":0,"closeButtonPressedBorderColor":"#000000","titlePaddingLeft":5,"headerPaddingBottom":5,"closeButtonIconLineWidth":2,"headerPaddingTop":10,"bodyBackgroundOpacity":0,"gap":10,"backgroundColorDirection":"vertical","closeButtonIconHeight":20,"veilColor":["#000000","#000000"],"closeButtonPressedBorderSize":0,"modal":false,"scrollBarOpacity":0.5,"headerBackgroundColorRatios":[0,0.1,1],"veilHideEffect":{"easing":"cubic_in_out","class":"FadeOutEffect","duration":1000},"closeButtonRollOverBackgroundColorRatios":[],"veilColorRatios":[0,1],"veilShowEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":1000},"closeButtonBackgroundOpacity":0,"backgroundColor":[],"scrollBarColor":"#000000","children":["this.WebFrame_26F49DAB_36B6_8982_41B6_7A70714A3E92"],"bodyBackgroundColorDirection":"vertical","closeButtonPaddingRight":0,"class":"Window","closeButtonPressedIconColor":"#FFFFFF","closeButtonRollOverBorderColor":"#000000","veilColorDirection":"horizontal","headerPaddingLeft":10,"headerPaddingRight":0,"shadowSpread":1,"closeButtonBackgroundColorRatios":[],"titlePaddingBottom":5,"minHeight":20,"bodyPaddingLeft":0,"minWidth":20,"overflow":"scroll","veilOpacity":0.4,"layout":"vertical","footerBackgroundOpacity":0,"bodyBackgroundColorRatios":[0,0.5,1],"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"closeButtonRollOverBackgroundOpacity":0,"propagateClick":false,"borderSize":0,"borderRadius":5,"closeButtonBorderColor":"#000000","paddingTop":0,"shadowOpacity":0.5,"shadowColor":"#000000","closeButtonBorderRadius":11,"closeButtonRollOverIconLineWidth":2,"paddingBottom":0,"hideEffect":{"easing":"cubic_in_out","class":"FadeOutEffect","duration":1000},"backgroundColorRatios":[],"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"showEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":1000},"bodyPaddingTop":0,"closeButtonIconColor":"#B2B2B2","titleFontSize":"1.29vmin","contentOpaque":false,"verticalAlign":"middle","closeButtonPressedBackgroundOpacity":0,"scrollBarWidth":10,"closeButtonBackgroundColor":[],"toolTipHorizontalAlign":"center","titlePaddingTop":5,"closeButtonRollOverIconColor":"#FFFFFF","closeButtonBorderSize":0,"shadowBlurRadius":6,"closeButtonPaddingBottom":0,"bodyPaddingRight":0,"titlePaddingRight":5,"id":"window_27F14EEE_36B6_8B82_41A2_577001D11CC8","closeButtonRollOverBorderSize":0,"width":"40%","height":"30%","footerBackgroundColorDirection":"vertical","footerHeight":5,"headerVerticalAlign":"middle","closeButtonPaddingLeft":0,"closeButtonIconWidth":20,"shadowHorizontalLength":3,"bodyPaddingBottom":0,"closeButtonPressedBackgroundColor":[],"headerBackgroundOpacity":0,"horizontalAlign":"center","closeButtonPressedBackgroundColorRatios":[],"backgroundOpacity":1,"titleFontFamily":"Arial","shadowVerticalLength":0,"scrollBarMargin":2,"closeButtonPaddingTop":0,"closeButtonRollOverBackgroundColor":[],"shadow":true,"titleFontColor":"#000000","closeButtonPressedIconLineWidth":3,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"data":{"name":"Window9585"}},{"id":"MainViewerPanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"arrowKeysAction":"translate","zoomEnabled":true,"displayPlaybackBar":true,"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","class":"PanoramaPlayer","surfaceSelectionEnabled":false,"mouseControlMode":"drag_rotation"},{"id":"media_3E6E465C_3118_10A5_41C5_D945B1EF0C23_camera","automaticRotationSpeed":10,"automaticZoomSpeed":10,"manualRotationSpeed":1800,"class":"RotationalCamera","manualZoomSpeed":1,"initialPosition":{"yaw":0,"hfov":120,"class":"RotationalCameraPosition","pitch":0}},{"id":"media_3E6E465C_3118_10A5_41C5_D945B1EF0C23","partial":false,"hfovMin":60,"label":trans('media_3E6E465C_3118_10A5_41C5_D945B1EF0C23.label'),"vfov":180,"loop":true,"class":"Video360","hfovMax":140,"pitch":0,"hfov":360,"data":{"label":"String Ray Render"},"thumbnailUrl":"media/media_3E6E465C_3118_10A5_41C5_D945B1EF0C23_t.jpg","video":[{"width":4000,"framerate":30,"height":2000,"posterURL":"media/media_3E6E465C_3118_10A5_41C5_D945B1EF0C23_poster.jpg","type":"application/x-mpegurl","class":"Video360Resource","url":"media/media_3E6E465C_3118_10A5_41C5_D945B1EF0C23.m3u8"},{"bitrate":10005,"width":4000,"framerate":30,"height":2000,"posterURL":"media/media_3E6E465C_3118_10A5_41C5_D945B1EF0C23_poster.jpg","type":"video/mp4","class":"Video360Resource","url":"media/media_3E6E465C_3118_10A5_41C5_D945B1EF0C23.mp4"}],"overlays":["this.overlay_3E6E765D_3118_10A7_41C7_2009C3EA5C29","this.overlay_3E6E665D_3118_10A7_41B1_41FBA40286A2","this.overlay_21A27F04_3138_70A5_41C0_AE8494B0EB82","this.overlay_2008C2A8_3128_71ED_41C8_6E0D3FC16F01","this.overlay_20B9B273_3118_1163_41B0_E314C8D9D69E"]},{"id":"audio_208A2576_30E8_3365_41C0_1EDBB27C29DE","data":{"label":"Background Sounds 2"},"autoplay":true,"loop":true,"class":"MediaAudio","audio":{"oggUrl":"media/audio_208A2576_30E8_3365_41C0_1EDBB27C29DE.ogg","mp3Url":"media/audio_208A2576_30E8_3365_41C0_1EDBB27C29DE.mp3","class":"AudioResource"}},{"paddingLeft":0,"footerBackgroundColorRatios":[0,0.9,1],"scrollBarVisible":"rollOver","headerBackgroundColorDirection":"vertical","paddingRight":0,"closeButtonPressedBorderColor":"#000000","titlePaddingLeft":5,"headerPaddingBottom":5,"closeButtonIconLineWidth":2,"headerPaddingTop":10,"bodyBackgroundOpacity":0,"gap":10,"backgroundColorDirection":"vertical","closeButtonIconHeight":20,"veilColor":["#000000","#000000"],"closeButtonPressedBorderSize":0,"modal":false,"scrollBarOpacity":0.5,"headerBackgroundColorRatios":[0,0.1,1],"closeButtonBackgroundOpacity":0,"closeButtonRollOverBackgroundColorRatios":[],"veilColorRatios":[0,1],"veilShowEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":500},"veilHideEffect":{"easing":"cubic_in_out","class":"FadeOutEffect","duration":500},"backgroundColor":[],"scrollBarColor":"#000000","children":["this.WebFrame_26F50DAC_36B6_8986_41AC_F8AF3393C5F1"],"bodyBackgroundColorDirection":"vertical","closeButtonPaddingRight":0,"class":"Window","closeButtonPressedIconColor":"#FFFFFF","closeButtonRollOverBorderColor":"#000000","veilColorDirection":"horizontal","headerPaddingLeft":10,"headerPaddingRight":0,"shadowSpread":1,"closeButtonBackgroundColorRatios":[],"titlePaddingBottom":5,"minHeight":20,"bodyPaddingLeft":0,"minWidth":20,"overflow":"scroll","veilOpacity":0.4,"layout":"vertical","footerBackgroundOpacity":0,"bodyBackgroundColorRatios":[0,0.5,1],"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"closeButtonRollOverBackgroundOpacity":0,"propagateClick":false,"borderSize":0,"borderRadius":5,"closeButtonBorderColor":"#000000","paddingTop":0,"shadowOpacity":0.5,"shadowColor":"#000000","closeButtonBorderRadius":11,"closeButtonRollOverIconLineWidth":2,"paddingBottom":0,"hideEffect":{"easing":"cubic_in_out","class":"FadeOutEffect","duration":500},"backgroundColorRatios":[],"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"showEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":500},"bodyPaddingTop":0,"closeButtonIconColor":"#B2B2B2","titleFontSize":"1.29vmin","contentOpaque":false,"verticalAlign":"middle","closeButtonPressedBackgroundOpacity":0,"scrollBarWidth":10,"closeButtonBackgroundColor":[],"toolTipHorizontalAlign":"center","titlePaddingTop":5,"closeButtonRollOverIconColor":"#FFFFFF","closeButtonBorderSize":0,"shadowBlurRadius":6,"closeButtonPaddingBottom":0,"bodyPaddingRight":0,"titlePaddingRight":5,"id":"window_38235422_36B7_9E82_41C3_4084063A80B2","closeButtonRollOverBorderSize":0,"width":"50%","height":"50%","footerBackgroundColorDirection":"vertical","footerHeight":5,"headerVerticalAlign":"middle","closeButtonPaddingLeft":0,"closeButtonIconWidth":20,"shadowHorizontalLength":3,"bodyPaddingBottom":0,"closeButtonPressedBackgroundColor":[],"headerBackgroundOpacity":0,"horizontalAlign":"center","closeButtonPressedBackgroundColorRatios":[],"backgroundOpacity":1,"titleFontFamily":"Arial","shadowVerticalLength":0,"scrollBarMargin":2,"closeButtonPaddingTop":0,"closeButtonRollOverBackgroundColor":[],"shadow":true,"titleFontColor":"#000000","closeButtonPressedIconLineWidth":3,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"data":{"name":"Window5523"}},{"id":"mainPlayList","items":[{"end":"this.trigger('tourEnded')","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)","begin":"this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_208A2576_30E8_3365_41C0_1EDBB27C29DE, true, undefined); this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)","player":"this.MainViewerPanoramaPlayer","class":"Video360PlayListItem","camera":"this.media_3E6E465C_3118_10A5_41C5_D945B1EF0C23_camera","media":"this.media_3E6E465C_3118_10A5_41C5_D945B1EF0C23"}],"class":"PlayList"},{"paddingLeft":0,"footerBackgroundColorRatios":[0,0.9,1],"scrollBarVisible":"rollOver","headerBackgroundColorDirection":"vertical","paddingRight":0,"closeButtonPressedBorderColor":"#000000","titlePaddingLeft":5,"headerPaddingBottom":5,"closeButtonIconLineWidth":2,"headerPaddingTop":10,"bodyBackgroundOpacity":0,"gap":10,"backgroundColorDirection":"vertical","closeButtonIconHeight":20,"veilColor":["#000000","#000000"],"closeButtonPressedBorderSize":0,"modal":false,"scrollBarOpacity":0.5,"headerBackgroundColorRatios":[0,0.1,1],"veilHideEffect":{"easing":"cubic_in_out","class":"FadeOutEffect","duration":1000},"closeButtonRollOverBackgroundColorRatios":[],"veilColorRatios":[0,1],"veilShowEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":1000},"closeButtonBackgroundOpacity":0,"backgroundColor":[],"scrollBarColor":"#000000","children":["this.WebFrame_26F5ADAC_36B6_8986_41B9_027428914EAA"],"bodyBackgroundColorDirection":"vertical","closeButtonPaddingRight":0,"class":"Window","closeButtonPressedIconColor":"#FFFFFF","closeButtonRollOverBorderColor":"#000000","veilColorDirection":"horizontal","headerPaddingLeft":10,"headerPaddingRight":0,"shadowSpread":1,"closeButtonBackgroundColorRatios":[],"titlePaddingBottom":5,"minHeight":20,"bodyPaddingLeft":0,"minWidth":20,"overflow":"scroll","veilOpacity":0.4,"layout":"vertical","footerBackgroundOpacity":0,"bodyBackgroundColorRatios":[0,0.5,1],"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"closeButtonRollOverBackgroundOpacity":0,"propagateClick":false,"borderSize":0,"borderRadius":5,"closeButtonBorderColor":"#000000","paddingTop":0,"shadowOpacity":0.5,"shadowColor":"#000000","closeButtonBorderRadius":11,"closeButtonRollOverIconLineWidth":2,"paddingBottom":0,"hideEffect":{"easing":"cubic_in_out","class":"FadeOutEffect","duration":1000},"backgroundColorRatios":[],"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"showEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":1000},"bodyPaddingTop":0,"closeButtonIconColor":"#B2B2B2","titleFontSize":"1.29vmin","contentOpaque":false,"verticalAlign":"middle","closeButtonPressedBackgroundOpacity":0,"scrollBarWidth":10,"closeButtonBackgroundColor":[],"toolTipHorizontalAlign":"center","titlePaddingTop":5,"closeButtonRollOverIconColor":"#FFFFFF","closeButtonBorderSize":0,"shadowBlurRadius":6,"closeButtonPaddingBottom":0,"bodyPaddingRight":0,"titlePaddingRight":5,"id":"window_27D4AF0A_36B6_8A82_41B1_EF224690C991","closeButtonRollOverBorderSize":0,"width":"40%","height":"30%","footerBackgroundColorDirection":"vertical","footerHeight":5,"headerVerticalAlign":"middle","closeButtonPaddingLeft":0,"closeButtonIconWidth":20,"shadowHorizontalLength":3,"bodyPaddingBottom":0,"closeButtonPressedBackgroundColor":[],"headerBackgroundOpacity":0,"horizontalAlign":"center","closeButtonPressedBackgroundColorRatios":[],"backgroundOpacity":1,"titleFontFamily":"Arial","shadowVerticalLength":0,"scrollBarMargin":2,"closeButtonPaddingTop":0,"closeButtonRollOverBackgroundColor":[],"shadow":true,"titleFontColor":"#000000","closeButtonPressedIconLineWidth":3,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"data":{"name":"Window11300"}},{"scrollEnabled":true,"borderSize":0,"borderRadius":0,"paddingLeft":0,"paddingTop":0,"paddingBottom":0,"paddingRight":0,"backgroundColorRatios":[],"backgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","insetBorder":false,"width":"100%","backgroundColor":[],"id":"WebFrame_26F49DAB_36B6_8982_41B6_7A70714A3E92","height":"100%","class":"WebFrame","minHeight":0,"backgroundOpacity":1,"minWidth":0,"data":{"name":"WebFrame10603"},"shadow":false,"propagateClick":false},{"id":"overlay_3E6E765D_3118_10A7_41C7_2009C3EA5C29","rollOverDisplay":false,"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","pitch":0,"yaw":0,"scaleMode":"fit_inside","image":"this.AnimatedImageResource_26F01CE3_36B6_8F82_41C1_A77C5BAACABF","horizontalAlign":"center","verticalAlign":"middle","playbackPositions":[{"opacity":1,"roll":0,"timestamp":0,"pitch":-4.06,"yaw":-0.19,"hfov":17,"class":"PanoramaOverlayPlaybackPosition"}],"distance":100,"data":{"label":"Circle 03c"}}],"areas":["this.HotspotPanoramaOverlayArea_3F14D589_30F8_73AF_41C6_622006E34B60"],"data":{"label":"Circle 03c"},"class":"HotspotPanoramaOverlay","maps":[]},{"id":"overlay_3E6E665D_3118_10A7_41B1_41FBA40286A2","rollOverDisplay":false,"useHandCursor":true,"items":[{"scaleMode":"fit_inside","yaw":0,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","data":{"label":"Click Here"},"distance":50,"pitch":0,"image":"this.res_3F7145D5_30E8_13A7_4171_F5ACF1298D5E","playbackPositions":[{"opacity":1,"roll":0,"timestamp":0,"pitch":-0.78,"yaw":-0.55,"hfov":16.37,"class":"PanoramaOverlayPlaybackPosition"}],"verticalAlign":"middle"}],"areas":["this.HotspotPanoramaOverlayArea_3FB311B2_30F8_13FD_4187_A36BBC484A0A"],"data":{"label":"Click Here"},"class":"HotspotPanoramaOverlay","maps":[]},{"id":"overlay_21A27F04_3138_70A5_41C0_AE8494B0EB82","rollOverDisplay":false,"enabledInCardboard":true,"useHandCursor":true,"items":[{"scaleMode":"fit_inside","yaw":0,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","data":{"label":"Instagram"},"distance":50,"pitch":0,"image":"this.res_212ECE59_3138_10AF_41A6_2FF585E62386","playbackPositions":[{"opacity":0,"roll":0,"timestamp":0,"pitch":-3.84,"yaw":-92.88,"hfov":7.05,"class":"PanoramaOverlayPlaybackPosition"},{"opacity":0,"roll":0,"timestamp":2,"pitch":-3.84,"yaw":-92.88,"hfov":7.05,"class":"PanoramaOverlayPlaybackPosition"},{"opacity":0.77,"roll":0,"timestamp":2,"pitch":-3.84,"yaw":-92.88,"hfov":7.05,"class":"PanoramaOverlayPlaybackPosition"}],"verticalAlign":"middle"}],"areas":["this.HotspotPanoramaOverlayArea_3E83AF5D_3138_70A7_41AA_91491143501D"],"data":{"label":"Instagram"},"class":"HotspotPanoramaOverlay","maps":[]},{"id":"overlay_2008C2A8_3128_71ED_41C8_6E0D3FC16F01","rollOverDisplay":false,"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","pitch":0,"yaw":0,"scaleMode":"fit_inside","image":"this.AnimatedImageResource_26F1CCE4_36B6_8F86_41AC_6FF29FA7BEAD","horizontalAlign":"center","verticalAlign":"middle","playbackPositions":[{"opacity":1,"roll":0,"timestamp":0,"pitch":0.11,"yaw":-163.17,"hfov":6.12,"class":"PanoramaOverlayPlaybackPosition"}],"distance":100,"data":{"label":"Circle Generic 03"}}],"areas":["this.HotspotPanoramaOverlayArea_205B32E0_3128_719D_41BF_F2CED2F9533B"],"data":{"label":"Circle Generic 03"},"class":"HotspotPanoramaOverlay","maps":[]},{"id":"overlay_20B9B273_3118_1163_41B0_E314C8D9D69E","rollOverDisplay":false,"enabledInCardboard":true,"useHandCursor":true,"items":[{"scaleMode":"fit_inside","yaw":0,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","data":{"label":"Get in Touch"},"distance":50,"pitch":0,"image":"this.res_200171EA_3118_136D_4178_DBA8B5ED438A","playbackPositions":[{"opacity":1,"roll":0,"timestamp":0,"pitch":-3.94,"yaw":-163.23,"hfov":10.51,"class":"PanoramaOverlayPlaybackPosition"}],"verticalAlign":"middle"}],"areas":["this.HotspotPanoramaOverlayArea_20602361_3118_109F_41BF_4C30E29A4195"],"data":{"label":"Get in Touch"},"class":"HotspotPanoramaOverlay","maps":[]},{"scrollEnabled":true,"borderSize":0,"borderRadius":0,"paddingLeft":0,"paddingTop":0,"paddingBottom":0,"paddingRight":0,"backgroundColorRatios":[],"backgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","insetBorder":false,"width":"100%","backgroundColor":[],"id":"WebFrame_26F50DAC_36B6_8986_41AC_F8AF3393C5F1","height":"100%","class":"WebFrame","minHeight":0,"backgroundOpacity":1,"minWidth":0,"data":{"name":"WebFrame10605"},"shadow":false,"propagateClick":false},{"scrollEnabled":true,"borderSize":0,"borderRadius":0,"paddingLeft":0,"paddingTop":0,"paddingBottom":0,"paddingRight":0,"backgroundColorRatios":[],"backgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","insetBorder":false,"width":"100%","backgroundColor":[],"id":"WebFrame_26F5ADAC_36B6_8986_41B9_027428914EAA","height":"100%","class":"WebFrame","minHeight":0,"backgroundOpacity":1,"minWidth":0,"data":{"name":"WebFrame10604"},"shadow":false,"propagateClick":false},{"id":"AnimatedImageResource_26F01CE3_36B6_8F82_41C1_A77C5BAACABF","levels":[{"height":306,"width":784,"class":"ImageResourceLevel","url":"media/res_3F7045D4_30E8_13A5_41A6_963B01472FD3_0.png"}],"frameCount":24,"colCount":4,"frameDuration":33,"class":"AnimatedImageResource","rowCount":6},{"id":"HotspotPanoramaOverlayArea_3F14D589_30F8_73AF_41C6_622006E34B60","click":"this.WebFrame_26F49DAB_36B6_8982_41B6_7A70714A3E92.set('url', this.translate('PopupWebFrameBehaviour_3F254CA4_30F8_31E6_41BE_9386CAF15D0A.url')); this.showWindow(this.window_27F14EEE_36B6_8B82_41A2_577001D11CC8, null, false)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"res_3F7145D5_30E8_13A7_4171_F5ACF1298D5E","levels":[{"height":182,"width":182,"class":"ImageResourceLevel","url":"media/res_3F7145D5_30E8_13A7_4171_F5ACF1298D5E_0.png"}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_3FB311B2_30F8_13FD_4187_A36BBC484A0A","click":"this.WebFrame_26F5ADAC_36B6_8986_41B9_027428914EAA.set('url', this.translate('PopupWebFrameBehaviour_20A41AA3_30E8_11E3_41B1_4F68F57F8938.url')); this.showWindow(this.window_27D4AF0A_36B6_8A82_41B1_EF224690C991, null, false)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"res_212ECE59_3138_10AF_41A6_2FF585E62386","levels":[{"height":100,"width":100,"class":"ImageResourceLevel","url":"media/res_212ECE59_3138_10AF_41A6_2FF585E62386_0.png"}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_3E83AF5D_3138_70A7_41AA_91491143501D","click":"this.openLink(this.translate('LinkBehaviour_20797A08_3138_10AE_41B2_29D258FEC156.source'), '_blank')","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"AnimatedImageResource_26F1CCE4_36B6_8F86_41AC_6FF29FA7BEAD","levels":[{"height":600,"width":400,"class":"ImageResourceLevel","url":"media/res_200181EA_3118_136D_41C6_89FD0857B8E7_0.png"}],"frameCount":24,"colCount":4,"frameDuration":41,"class":"AnimatedImageResource","rowCount":6},{"id":"HotspotPanoramaOverlayArea_205B32E0_3128_719D_41BF_F2CED2F9533B","click":"this.WebFrame_26F50DAC_36B6_8986_41AC_F8AF3393C5F1.set('url', this.translate('PopupWebFrameBehaviour_383E141F_36B7_9E82_41CA_65CAA1741666.url')); this.showWindow(this.window_38235422_36B7_9E82_41C3_4084063A80B2, null, false)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"res_200171EA_3118_136D_4178_DBA8B5ED438A","levels":[{"height":117,"width":117,"class":"ImageResourceLevel","url":"media/res_200171EA_3118_136D_4178_DBA8B5ED438A_0.png"}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_20602361_3118_109F_41BF_4C30E29A4195","mapColor":"any","class":"HotspotPanoramaOverlayArea"}],"mobileMipmappingEnabled":false};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.26.js.map
//Generated with v2020.5.26, Mon Mar 15 2021