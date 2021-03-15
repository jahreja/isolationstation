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
    var d = {"propagateClick":false,"layout":"absolute","desktopMipmappingEnabled":false,"data":{"name":"Player7457","textToSpeechConfig":{"speechOnTooltip":false,"speechOnQuizQuestion":false,"pitch":1,"speechOnInfoWindow":false,"volume":1,"rate":1},"locales":{"en":"locale/en.txt"},"defaultLocale":"en"},"definitions": [{"id":"media_22166B80_3128_779D_41B4_B36A7EAD27AE_camera","automaticRotationSpeed":10,"class":"RotationalCamera","manualRotationSpeed":1800,"manualZoomSpeed":1,"initialPosition":{"yaw":0,"class":"RotationalCameraPosition","hfov":120,"pitch":0},"automaticZoomSpeed":10},{"id":"popup_251754CA_3119_F1AD_4198_37AD36F1BDD2","showDuration":0,"yaw":0,"class":"PopupPanoramaOverlay","rotationY":0,"showEasing":"cubic_in","hideDuration":0,"rotationX":0,"rotationZ":0,"popupMaxWidth":"60%","hideEasing":"cubic_out","playbackPositions":[{"yaw":-163.17,"timestamp":0,"class":"PopupPanoramaOverlayPlaybackPosition","pitch":0.11,"hfov":6.12}],"hfov":10,"image":"this.res_25B3FAA9_3118_11EF_41C2_384A2911F3BC","popupDistance":100,"pitch":0,"popupMaxHeight":"60%"},{"id":"audio_208A2576_30E8_3365_41C0_1EDBB27C29DE","data":{"label":"Background Sounds 2"},"class":"MediaAudio","autoplay":true,"loop":true,"audio":{"mp3Url":"media/audio_208A2576_30E8_3365_41C0_1EDBB27C29DE.mp3","class":"AudioResource","oggUrl":"media/audio_208A2576_30E8_3365_41C0_1EDBB27C29DE.ogg"}},{"paddingLeft":0,"closeButtonPressedIconLineWidth":3,"paddingRight":0,"footerBackgroundColorRatios":[0,0.9,1],"titlePaddingLeft":5,"scrollBarVisible":"rollOver","class":"Window","closeButtonPressedBorderColor":"#000000","headerBackgroundColorDirection":"vertical","modal":false,"closeButtonIconHeight":20,"scrollBarOpacity":0.5,"closeButtonPressedBorderSize":0,"bodyBackgroundOpacity":0,"headerPaddingBottom":5,"backgroundColorDirection":"vertical","closeButtonIconLineWidth":2,"headerBackgroundColorRatios":[0,0.1,1],"bodyPaddingLeft":0,"backgroundColor":[],"closeButtonBackgroundOpacity":0,"veilColor":["#000000","#000000"],"gap":10,"children":["this.WebFrame_25C9AC77_3168_3163_41C6_B5667EA27FBA"],"scrollBarColor":"#000000","veilShowEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":1000},"veilHideEffect":{"easing":"cubic_in_out","class":"FadeOutEffect","duration":1000},"closeButtonRollOverBackgroundColorRatios":[],"veilColorRatios":[0,1],"veilColorDirection":"horizontal","closeButtonPressedIconColor":"#FFFFFF","headerPaddingLeft":10,"headerPaddingTop":10,"titlePaddingBottom":5,"bodyPaddingRight":0,"closeButtonRollOverBackgroundOpacity":0,"closeButtonBackgroundColorRatios":[],"shadowSpread":1,"closeButtonRollOverBorderColor":"#000000","headerPaddingRight":0,"closeButtonPaddingRight":0,"shadowVerticalLength":0,"minWidth":20,"minHeight":20,"paddingTop":0,"overflow":"scroll","shadowHorizontalLength":3,"bodyBackgroundColorRatios":[0,0.5,1],"layout":"vertical","footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"footerBackgroundOpacity":0,"borderSize":0,"footerBackgroundColorDirection":"vertical","paddingBottom":0,"propagateClick":false,"closeButtonBorderColor":"#000000","borderRadius":5,"shadowColor":"#000000","veilOpacity":0.4,"verticalAlign":"middle","shadowOpacity":0.5,"closeButtonBorderRadius":11,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"scrollBarWidth":10,"showEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":1000},"hideEffect":{"easing":"cubic_in_out","class":"FadeOutEffect","duration":1000},"backgroundColorRatios":[],"closeButtonIconColor":"#B2B2B2","closeButtonRollOverIconLineWidth":2,"titleFontSize":"1.29vmin","closeButtonPressedBackgroundOpacity":0,"width":"40%","horizontalAlign":"center","contentOpaque":false,"closeButtonRollOverIconColor":"#FFFFFF","closeButtonBackgroundColor":[],"toolTipHorizontalAlign":"center","titlePaddingTop":5,"closeButtonPaddingBottom":0,"id":"window_2084752C_30E8_70E5_41C6_B8C3247466EC","closeButtonRollOverBorderSize":0,"closeButtonBorderSize":0,"shadowBlurRadius":6,"headerVerticalAlign":"middle","bodyPaddingBottom":0,"bodyPaddingTop":0,"closeButtonPaddingLeft":0,"closeButtonIconWidth":20,"height":"20%","bodyBackgroundColorDirection":"vertical","titlePaddingRight":5,"footerHeight":5,"closeButtonPressedBackgroundColor":[],"backgroundOpacity":1,"closeButtonPressedBackgroundColorRatios":[],"scrollBarMargin":2,"titleFontFamily":"Arial","headerBackgroundOpacity":0,"closeButtonPaddingTop":0,"closeButtonRollOverBackgroundColor":[],"shadow":true,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"data":{"name":"Window11300"},"titleFontColor":"#000000"},{"id":"res_25B3FAA9_3118_11EF_41C2_384A2911F3BC","levels":[{"height":512,"width":512,"class":"ImageResourceLevel","url":"media/res_25B3FAA9_3118_11EF_41C2_384A2911F3BC_4.png"},{"height":1024,"width":1024,"class":"ImageResourceLevel","url":"media/res_25B3FAA9_3118_11EF_41C2_384A2911F3BC_3.png"}],"data":{"extraLevels":[{"height":2048,"width":2048,"class":"ImageResourceLevel","url":"media/res_25B3FAA9_3118_11EF_41C2_384A2911F3BC_2.png"},{"height":4096,"width":4096,"class":"ImageResourceLevel","url":"media/res_25B3FAA9_3118_11EF_41C2_384A2911F3BC_1.png"},{"height":4500,"width":4500,"class":"ImageResourceLevel","url":"media/res_25B3FAA9_3118_11EF_41C2_384A2911F3BC_0.png"}]},"class":"ImageResource"},{"surfaceReticleSelectionOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","data":{"name":"Main Viewer"},"toolTipShadowSpread":0,"paddingLeft":0,"playbackBarHeadShadowHorizontalLength":0,"toolTipBorderColor":"#767676","toolTipBorderSize":1,"toolTipFontFamily":"Arial","toolTipPaddingTop":4,"paddingRight":0,"subtitlesFontColor":"#FFFFFF","progressBackgroundOpacity":1,"toolTipTextShadowBlurRadius":3,"toolTipShadowColor":"#333333","subtitlesTop":0,"class":"ViewerArea","progressBarBackgroundColorDirection":"vertical","playbackBarProgressBackgroundColorRatios":[0],"toolTipTextShadowOpacity":0,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowHorizontalLength":0,"playbackBarOpacity":1,"subtitlesTextShadowColor":"#000000","toolTipFontColor":"#606060","vrPointerSelectionColor":"#FF6600","progressBarBackgroundColor":["#3399FF"],"playbackBarBorderRadius":0,"subtitlesFontSize":"3vmin","playbackBarBottom":5,"playbackBarProgressBorderColor":"#000000","subtitlesPaddingBottom":5,"progressBarOpacity":1,"subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBackgroundColorDirection":"vertical","vrPointerColor":"#FFFFFF","progressHeight":10,"progressBackgroundColorRatios":[0],"progressBackgroundColor":["#FFFFFF"],"progressBarBorderSize":0,"minHeight":50,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBorderRadius":0,"subtitlesFontWeight":"normal","playbackBarProgressOpacity":1,"playbackBarHeight":10,"subtitlesBorderColor":"#FFFFFF","toolTipPaddingLeft":6,"paddingTop":0,"minWidth":100,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipShadowVerticalLength":0,"progressBorderRadius":0,"progressBarBorderColor":"#000000","toolTipBorderRadius":3,"playbackBarHeadBorderColor":"#000000","toolTipShadowBlurRadius":3,"firstTransitionDuration":0,"paddingBottom":0,"propagateClick":false,"playbackBarBorderSize":0,"progressBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"transitionDuration":500,"subtitlesPaddingLeft":5,"borderSize":0,"transitionMode":"blending","vrPointerSelectionTime":2000,"borderRadius":0,"subtitlesTextDecoration":"none","toolTipBackgroundColor":"#F6F6F6","toolTipOpacity":1,"displayTooltipInTouchScreens":true,"subtitlesTextShadowBlurRadius":0,"surfaceReticleOpacity":0.6,"toolTipFontStyle":"normal","playbackBarHeadShadowVerticalLength":0,"playbackBarHeadShadowBlurRadius":3,"subtitlesBottom":50,"toolTipPaddingBottom":4,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","surfaceReticleColor":"#FFFFFF","progressBorderSize":0,"toolTipTextShadowColor":"#000000","subtitlesPaddingRight":5,"toolTipPaddingRight":6,"width":"100%","subtitlesFontFamily":"Arial","subtitlesPaddingTop":5,"playbackBarLeft":0,"toolTipHorizontalAlign":"center","displayTooltipInSurfaceSelection":true,"subtitlesShadow":false,"playbackBarProgressBorderRadius":0,"playbackBarRight":0,"progressBarBorderRadius":0,"toolTipFontWeight":"normal","id":"MainViewer","progressLeft":0,"progressBottom":0,"playbackBarHeadHeight":15,"height":"100%","subtitlesOpacity":1,"subtitlesGap":0,"doubleClickAction":"toggle_fullscreen","toolTipFontSize":"1.11vmin","toolTipShadowOpacity":1,"playbackBarHeadShadowColor":"#000000","progressRight":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesVerticalAlign":"bottom","playbackBarHeadBorderSize":0,"toolTipDisplayTime":600,"playbackBarHeadShadowOpacity":0.7,"subtitlesBackgroundColor":"#000000","subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadow":true,"subtitlesHorizontalAlign":"center","playbackBarBackgroundOpacity":1,"playbackBarHeadOpacity":1,"shadow":false,"progressBorderColor":"#000000","subtitlesBorderSize":0,"progressOpacity":1,"subtitlesTextShadowOpacity":1},{"id":"media_22166B80_3128_779D_41B4_B36A7EAD27AE","vfov":180,"overlays":["this.overlay_22167B80_3128_779D_41B6_D3772D12B074","this.overlay_22160B80_3128_779D_41B7_C6EC3BDB1CAC","this.overlay_22161B80_3128_779D_41B7_DAE47030B91C","this.overlay_22162B80_3128_779D_41A4_AECEBDACFC6A","this.overlay_22163B80_3128_779D_41C8_1FFFAC272060","this.popup_251754CA_3119_F1AD_4198_37AD36F1BDD2"],"label":trans('media_22166B80_3128_779D_41B4_B36A7EAD27AE.label'),"loop":true,"hfovMin":60,"hfovMax":140,"pitch":0,"hfov":360,"class":"Video360","data":{"label":"String Ray Render"},"thumbnailUrl":"media/media_22166B80_3128_779D_41B4_B36A7EAD27AE_t.jpg","video":[{"width":4000,"bitrate":10008,"posterURL":"media/media_22166B80_3128_779D_41B4_B36A7EAD27AE_poster.jpg","height":2000,"framerate":30,"type":"video/mp4","class":"Video360Resource","url":"media/media_22166B80_3128_779D_41B4_B36A7EAD27AE.mp4"},{"width":3168,"bitrate":10008,"posterURL":"media/media_22166B80_3128_779D_41B4_B36A7EAD27AE_poster.jpg","height":1584,"framerate":30,"type":"video/mp4","class":"Video360Resource","url":"media/media_22166B80_3128_779D_41B4_B36A7EAD27AE_ios.mp4"}],"partial":false},{"id":"mainPlayList","items":[{"begin":"this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_208A2576_30E8_3365_41C0_1EDBB27C29DE, true, undefined); this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"Video360PlayListItem","camera":"this.media_22166B80_3128_779D_41B4_B36A7EAD27AE_camera","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)","media":"this.media_22166B80_3128_779D_41B4_B36A7EAD27AE"}],"class":"PlayList"},{"paddingLeft":0,"closeButtonPressedIconLineWidth":3,"paddingRight":0,"footerBackgroundColorRatios":[0,0.9,1],"titlePaddingLeft":5,"scrollBarVisible":"rollOver","class":"Window","closeButtonPressedBorderColor":"#000000","headerBackgroundColorDirection":"vertical","modal":false,"closeButtonIconHeight":20,"scrollBarOpacity":0.5,"closeButtonPressedBorderSize":0,"bodyBackgroundOpacity":0,"headerPaddingBottom":5,"backgroundColorDirection":"vertical","closeButtonIconLineWidth":2,"headerBackgroundColorRatios":[0,0.1,1],"bodyPaddingLeft":0,"backgroundColor":[],"closeButtonBackgroundOpacity":0,"veilColor":["#000000","#000000"],"gap":10,"children":["this.WebFrame_25C8FC76_3168_3165_41BD_74AF3D15129A"],"scrollBarColor":"#000000","veilShowEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":1000},"veilHideEffect":{"easing":"cubic_in_out","class":"FadeOutEffect","duration":1000},"closeButtonRollOverBackgroundColorRatios":[],"veilColorRatios":[0,1],"veilColorDirection":"horizontal","closeButtonPressedIconColor":"#FFFFFF","headerPaddingLeft":10,"headerPaddingTop":10,"titlePaddingBottom":5,"bodyPaddingRight":0,"closeButtonRollOverBackgroundOpacity":0,"closeButtonBackgroundColorRatios":[],"shadowSpread":1,"closeButtonRollOverBorderColor":"#000000","headerPaddingRight":0,"closeButtonPaddingRight":0,"shadowVerticalLength":0,"minWidth":20,"minHeight":20,"paddingTop":0,"overflow":"scroll","shadowHorizontalLength":3,"bodyBackgroundColorRatios":[0,0.5,1],"layout":"vertical","footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"footerBackgroundOpacity":0,"borderSize":0,"footerBackgroundColorDirection":"vertical","paddingBottom":0,"propagateClick":false,"closeButtonBorderColor":"#000000","borderRadius":5,"shadowColor":"#000000","veilOpacity":0.4,"verticalAlign":"middle","shadowOpacity":0.5,"closeButtonBorderRadius":11,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"scrollBarWidth":10,"showEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":1000},"hideEffect":{"easing":"cubic_in_out","class":"FadeOutEffect","duration":1000},"backgroundColorRatios":[],"closeButtonIconColor":"#B2B2B2","closeButtonRollOverIconLineWidth":2,"titleFontSize":"1.29vmin","closeButtonPressedBackgroundOpacity":0,"width":"40%","horizontalAlign":"center","contentOpaque":false,"closeButtonRollOverIconColor":"#FFFFFF","closeButtonBackgroundColor":[],"toolTipHorizontalAlign":"center","titlePaddingTop":5,"closeButtonPaddingBottom":0,"id":"window_208AB4AE_30E8_31E5_41BA_C822FE107D1E","closeButtonRollOverBorderSize":0,"closeButtonBorderSize":0,"shadowBlurRadius":6,"headerVerticalAlign":"middle","bodyPaddingBottom":0,"bodyPaddingTop":0,"closeButtonPaddingLeft":0,"closeButtonIconWidth":20,"height":"20%","bodyBackgroundColorDirection":"vertical","titlePaddingRight":5,"footerHeight":5,"closeButtonPressedBackgroundColor":[],"backgroundOpacity":1,"closeButtonPressedBackgroundColorRatios":[],"scrollBarMargin":2,"titleFontFamily":"Arial","headerBackgroundOpacity":0,"closeButtonPaddingTop":0,"closeButtonRollOverBackgroundColor":[],"shadow":true,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"data":{"name":"Window9585"},"titleFontColor":"#000000"},{"id":"MainViewerPanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"zoomEnabled":true,"class":"PanoramaPlayer","viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","arrowKeysAction":"translate","touchControlMode":"drag_rotation","surfaceSelectionEnabled":false,"displayPlaybackBar":true},{"propagateClick":false,"paddingLeft":0,"left":0,"right":0,"paddingRight":0,"borderRadius":0,"class":"UIComponent","backgroundColorRatios":[0],"showEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":350},"backgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","backgroundColor":["#000000"],"id":"veilPopupPanorama","visible":false,"minHeight":0,"minWidth":0,"backgroundOpacity":0.55,"top":0,"paddingTop":0,"shadow":false,"bottom":0,"paddingBottom":0,"data":{"name":"UIComponent36202"},"borderSize":0},{"propagateClick":false,"paddingLeft":0,"left":0,"right":0,"paddingRight":0,"scaleMode":"custom","borderRadius":0,"class":"ZoomImage","backgroundColorRatios":[],"backgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","backgroundColor":[],"id":"zoomImagePopupPanorama","visible":false,"minHeight":0,"minWidth":0,"backgroundOpacity":1,"top":0,"paddingTop":0,"shadow":false,"bottom":0,"paddingBottom":0,"data":{"name":"ZoomImage36203"},"borderSize":0},{"textDecoration":"none","paddingBottom":5,"propagateClick":false,"pressedIconColor":"#888888","paddingLeft":5,"rollOverIconColor":"#666666","verticalAlign":"middle","right":10,"paddingRight":5,"shadowColor":"#000000","fontFamily":"Arial","borderRadius":0,"borderColor":"#000000","class":"CloseButton","backgroundColorRatios":[0,0.1,1],"showEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":350},"horizontalAlign":"center","backgroundColorDirection":"vertical","fontStyle":"normal","iconColor":"#000000","toolTipHorizontalAlign":"center","backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"id":"closeButtonPopupPanorama","gap":5,"mode":"push","shadowBlurRadius":6,"layout":"horizontal","iconHeight":"100%","visible":false,"shadowSpread":1,"iconLineWidth":5,"minHeight":0,"minWidth":0,"backgroundOpacity":0.3,"top":10,"paddingTop":5,"iconWidth":"100%","shadow":false,"data":{"name":"CloseButton36204"},"cursor":"hand","fontSize":"1.29vmin","fontWeight":"normal","borderSize":0,"fontColor":"#FFFFFF"},{"propagateClick":false,"paddingLeft":0,"scrollEnabled":true,"paddingRight":0,"borderRadius":0,"class":"WebFrame","backgroundColorRatios":[],"width":"100%","backgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","backgroundColor":[],"id":"WebFrame_25C9AC77_3168_3163_41C6_B5667EA27FBA","height":"100%","insetBorder":false,"minHeight":0,"minWidth":0,"backgroundOpacity":1,"paddingTop":0,"shadow":false,"paddingBottom":0,"data":{"name":"WebFrame36201"},"borderSize":0},{"id":"overlay_22167B80_3128_779D_41B6_D3772D12B074","rollOverDisplay":false,"areas":["this.HotspotPanoramaOverlayArea_3F14D589_30F8_73AF_41C6_622006E34B60"],"maps":[],"items":[{"verticalAlign":"middle","playbackPositions":[{"roll":0,"timestamp":0,"class":"PanoramaOverlayPlaybackPosition","pitch":-4.06,"opacity":1,"yaw":-0.19,"hfov":17}],"pitch":0,"image":"this.AnimatedImageResource_25CEFBB0_3168_37FD_41B2_83A61EDF6875","yaw":0,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","data":{"label":"Circle 03c"},"distance":100}],"data":{"label":"Circle 03c"},"class":"HotspotPanoramaOverlay","useHandCursor":true},{"id":"overlay_22160B80_3128_779D_41B7_C6EC3BDB1CAC","rollOverDisplay":false,"areas":["this.HotspotPanoramaOverlayArea_3FB311B2_30F8_13FD_4187_A36BBC484A0A"],"maps":[],"items":[{"scaleMode":"fit_inside","image":"this.res_3F7145D5_30E8_13A7_4171_F5ACF1298D5E","class":"HotspotPanoramaOverlayImage","data":{"label":"Click Here"},"horizontalAlign":"center","verticalAlign":"middle","playbackPositions":[{"roll":0,"timestamp":0,"class":"PanoramaOverlayPlaybackPosition","pitch":-0.78,"opacity":1,"yaw":-0.55,"hfov":16.37}],"distance":50,"pitch":0,"yaw":0}],"data":{"label":"Click Here"},"class":"HotspotPanoramaOverlay","useHandCursor":true},{"id":"overlay_22161B80_3128_779D_41B7_DAE47030B91C","rollOverDisplay":false,"areas":["this.HotspotPanoramaOverlayArea_3E83AF5D_3138_70A7_41AA_91491143501D"],"maps":[],"items":[{"scaleMode":"fit_inside","image":"this.res_212ECE59_3138_10AF_41A6_2FF585E62386","class":"HotspotPanoramaOverlayImage","data":{"label":"Instagram"},"horizontalAlign":"center","verticalAlign":"middle","playbackPositions":[{"roll":0,"timestamp":0,"class":"PanoramaOverlayPlaybackPosition","pitch":-3.68,"opacity":1,"yaw":-92.94,"hfov":4.09},{"roll":0,"timestamp":2,"class":"PanoramaOverlayPlaybackPosition","pitch":-3.84,"opacity":1,"yaw":-92.88,"hfov":7.05},{"roll":0,"timestamp":5.08,"class":"PanoramaOverlayPlaybackPosition","pitch":-3.68,"opacity":1,"yaw":-92.94,"hfov":4.09}],"distance":50,"pitch":0,"yaw":0}],"data":{"label":"Instagram"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true},{"id":"overlay_22162B80_3128_779D_41A4_AECEBDACFC6A","rollOverDisplay":false,"areas":["this.HotspotPanoramaOverlayArea_205B32E0_3128_719D_41BF_F2CED2F9533B"],"maps":[],"items":[{"verticalAlign":"middle","playbackPositions":[{"roll":0,"timestamp":0,"class":"PanoramaOverlayPlaybackPosition","pitch":0.11,"opacity":1,"yaw":-163.17,"hfov":6.12}],"pitch":0,"image":"this.AnimatedImageResource_25CF4BB1_3168_37FF_41B9_AE306EBE576B","yaw":0,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","data":{"label":"Circle Generic 03"},"distance":100}],"data":{"label":"Circle Generic 03"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true},{"id":"overlay_22163B80_3128_779D_41C8_1FFFAC272060","rollOverDisplay":false,"areas":["this.HotspotPanoramaOverlayArea_20602361_3118_109F_41BF_4C30E29A4195"],"maps":[],"items":[{"scaleMode":"fit_inside","image":"this.res_200171EA_3118_136D_4178_DBA8B5ED438A","class":"HotspotPanoramaOverlayImage","data":{"label":"Get in Touch"},"horizontalAlign":"center","verticalAlign":"middle","playbackPositions":[{"roll":0,"timestamp":0,"class":"PanoramaOverlayPlaybackPosition","pitch":-3.94,"opacity":1,"yaw":-163.23,"hfov":10.51}],"distance":50,"pitch":0,"yaw":0}],"data":{"label":"Get in Touch"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true},{"propagateClick":false,"paddingLeft":0,"scrollEnabled":true,"paddingRight":0,"borderRadius":0,"class":"WebFrame","backgroundColorRatios":[],"width":"100%","backgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","backgroundColor":[],"id":"WebFrame_25C8FC76_3168_3165_41BD_74AF3D15129A","height":"100%","insetBorder":false,"minHeight":0,"minWidth":0,"backgroundOpacity":1,"paddingTop":0,"shadow":false,"paddingBottom":0,"data":{"name":"WebFrame36200"},"borderSize":0},{"id":"HotspotPanoramaOverlayArea_3F14D589_30F8_73AF_41C6_622006E34B60","click":"this.WebFrame_25C8FC76_3168_3165_41BD_74AF3D15129A.set('url', this.translate('PopupWebFrameBehaviour_3F254CA4_30F8_31E6_41BE_9386CAF15D0A.url')); this.showWindow(this.window_208AB4AE_30E8_31E5_41BA_C822FE107D1E, null, false)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"AnimatedImageResource_25CEFBB0_3168_37FD_41B2_83A61EDF6875","colCount":4,"class":"AnimatedImageResource","frameCount":24,"levels":[{"height":306,"width":784,"class":"ImageResourceLevel","url":"media/res_3F7045D4_30E8_13A5_41A6_963B01472FD3_0.png"}],"rowCount":6,"frameDuration":33},{"id":"HotspotPanoramaOverlayArea_3FB311B2_30F8_13FD_4187_A36BBC484A0A","click":"this.WebFrame_25C9AC77_3168_3163_41C6_B5667EA27FBA.set('url', this.translate('PopupWebFrameBehaviour_20A41AA3_30E8_11E3_41B1_4F68F57F8938.url')); this.showWindow(this.window_2084752C_30E8_70E5_41C6_B8C3247466EC, null, false)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"res_3F7145D5_30E8_13A7_4171_F5ACF1298D5E","levels":[{"height":182,"width":182,"class":"ImageResourceLevel","url":"media/res_3F7145D5_30E8_13A7_4171_F5ACF1298D5E_0.png"}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_3E83AF5D_3138_70A7_41AA_91491143501D","click":"this.openLink(this.translate('LinkBehaviour_20797A08_3138_10AE_41B2_29D258FEC156.source'), '_blank')","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"res_212ECE59_3138_10AF_41A6_2FF585E62386","levels":[{"height":100,"width":100,"class":"ImageResourceLevel","url":"media/res_212ECE59_3138_10AF_41A6_2FF585E62386_0.png"}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_205B32E0_3128_719D_41BF_F2CED2F9533B","click":"this.showPopupPanoramaOverlay(this.popup_251754CA_3119_F1AD_4198_37AD36F1BDD2, {'rollOverIconHeight':20,'rollOverBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'iconLineWidth':5,'borderRadius':0,'paddingBottom':5,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'rollOverIconWidth':20,'paddingRight':5,'iconColor':'#000000','iconHeight':20,'rollOverIconLineWidth':5,'borderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','pressedIconColor':'#888888','backgroundOpacity':0.3,'paddingTop':5,'iconWidth':20,'backgroundColorDirection':'vertical','rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedIconHeight':20,'pressedIconLineWidth':5,'rollOverIconColor':'#666666','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0}, this.res_25B3FAA9_3118_11EF_41C2_384A2911F3BC, null, null, null, false)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"AnimatedImageResource_25CF4BB1_3168_37FF_41B9_AE306EBE576B","colCount":4,"class":"AnimatedImageResource","frameCount":24,"levels":[{"height":600,"width":400,"class":"ImageResourceLevel","url":"media/res_200181EA_3118_136D_41C6_89FD0857B8E7_0.png"}],"rowCount":6,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_20602361_3118_109F_41BF_4C30E29A4195","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"res_200171EA_3118_136D_4178_DBA8B5ED438A","levels":[{"height":117,"width":117,"class":"ImageResourceLevel","url":"media/res_200171EA_3118_136D_4178_DBA8B5ED438A_0.png"}],"class":"ImageResource"}],"paddingLeft":0,"mobileMipmappingEnabled":false,"mouseWheelEnabled":true,"verticalAlign":"top","scrollBarVisible":"rollOver","paddingRight":0,"scrollBarWidth":10,"borderRadius":0,"class":"Player","backgroundColorRatios":[0],"scrollBarOpacity":0.5,"width":"100%","horizontalAlign":"left","backgroundColorDirection":"vertical","contentOpaque":false,"backgroundPreloadEnabled":true,"toolTipHorizontalAlign":"center","backgroundColor":["#FFFFFF"],"id":"rootPlayer","gap":10,"scrollBarColor":"#000000","children":["this.MainViewer","this.veilPopupPanorama","this.zoomImagePopupPanorama","this.closeButtonPopupPanorama"],"height":"100%","start":"this.init()","downloadEnabled":false,"minHeight":20,"defaultVRPointer":"laser","minWidth":20,"vrPolyfillScale":0.75,"backgroundOpacity":1,"overflow":"hidden","paddingTop":0,"scrollBarMargin":2,"shadow":false,"scripts":{"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizShowScore":TDV.Tour.Script.quizShowScore,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizStart":TDV.Tour.Script.quizStart,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizFinish":TDV.Tour.Script.quizFinish,"isPanorama":TDV.Tour.Script.isPanorama,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"shareSocial":TDV.Tour.Script.shareSocial,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPixels":TDV.Tour.Script.getPixels,"showWindow":TDV.Tour.Script.showWindow,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"historyGoBack":TDV.Tour.Script.historyGoBack,"setLocale":TDV.Tour.Script.setLocale,"resumePlayers":TDV.Tour.Script.resumePlayers,"init":TDV.Tour.Script.init,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"cloneCamera":TDV.Tour.Script.cloneCamera,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getComponentByName":TDV.Tour.Script.getComponentByName,"textToSpeech":TDV.Tour.Script.textToSpeech,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getMainViewer":TDV.Tour.Script.getMainViewer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playAudioList":TDV.Tour.Script.playAudioList,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"registerKey":TDV.Tour.Script.registerKey,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"openLink":TDV.Tour.Script.openLink,"initGA":TDV.Tour.Script.initGA,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showPopupImage":TDV.Tour.Script.showPopupImage,"setValue":TDV.Tour.Script.setValue,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"existsKey":TDV.Tour.Script.existsKey,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"unregisterKey":TDV.Tour.Script.unregisterKey,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"initQuiz":TDV.Tour.Script.initQuiz,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getOverlays":TDV.Tour.Script.getOverlays,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"mixObject":TDV.Tour.Script.mixObject,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"clone":TDV.Tour.Script.clone,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"translate":TDV.Tour.Script.translate,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getMediaByName":TDV.Tour.Script.getMediaByName,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getKey":TDV.Tour.Script.getKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver},"paddingBottom":0,"mediaActivationMode":"window","borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.5.26.js.map
//Generated with v2020.5.26, Sun Mar 14 2021