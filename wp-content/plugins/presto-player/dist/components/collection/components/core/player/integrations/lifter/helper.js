const prevent_default=e=>{e.preventDefault()};function toggle_mark_complete(e){var t=jQuery(".llms-complete-lesson-form"),n=jQuery('.llms-complete-lesson-form button[type="submit"]'),o=jQuery("#llms_start_quiz, #llms-start-assignment");!0===e?(t.off("submit",prevent_default),n.removeAttr("disabled"),o.removeClass("llms-av-disabled").off("click",prevent_default)):(t.on("submit",prevent_default),n.attr("disabled","disabled"),o.addClass("llms-av-disabled").on("click",prevent_default))}const getEventMeta=e=>({ts:e.currentTime,duration:e.duration,url:e.source,provider:e.provider,id:e.config.id}),track_event=(e,t)=>{llms.tracking.addEvent("video."+e,{meta:t})};function start_countdown(e){var t,n=e.find(".llms-av-pv--seconds");setInterval((function(){1==(t=1*n.text()-1)&&n.closest("a")[0].click(),t>=0&&n.text(t)}),1e3)}function do_ajax_completion(e,t){LLMS.Ajax.call({data:{action:"llms_av_video_ended",id:t.post_id,nonce:t.nonce},beforeSend:function(){LLMS.Spinner.start(e)},error:function(t,n,o){LLMS.Spinner.stop(e),console.error(t.responseText+" ("+o+" "+n+")"),console.log(t)},success:function(t){LLMS.Spinner.stop(e),t?.html&&(e.append(t.html),start_countdown(e))}})}export{getEventMeta,track_event,toggle_mark_complete,do_ajax_completion};