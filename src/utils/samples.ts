export const samples = [
  {
    title: "Warning Alert with HTML Overlay",
    description:
      "By using the HTML overlays inserted in the MPD, it is possible to alert all users of any threat that may be near their home or the location where they are viewing the content.",
    path: "/iframe-overlay",
    url: "video-thumbnails/thumbnail-warning.png",
    mpd: `
    <?xml version="1.0" encoding="UTF-8"?>
    <MPD xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns="urn:mpeg:dash:schema:mpd:2011"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xsi:schemaLocation="urn:mpeg:DASH:schema:MPD:2011 http://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-DASH_schema_files/DASH-MPD.xsd"
        profiles="urn:mpeg:dash:profile:isoff-live:2011"
        type="static"
        mediaPresentationDuration="PT9M56.458S"
        minBufferTime="PT1.5S">
    <ProgramInformation>
        <Title>sample.mp4</Title>
    </ProgramInformation>
    <Period id="0" start="PT0.0S">
        <AdaptationSet id="0" mimeType="video/mp4" width="424" height="240" par="16:9" frameRate="24" segmentAlignment="true" startWithSAP="1" subsegmentAlignment="true" subsegmentStartsWithSAP="1">
            <SegmentTemplate timescale="90000" media="chunk_ctvideo_cfm4s_rid$RepresentationID$_cs$Time$_w1759006020_mpd.m4s" initialization="chunk_ctvideo_cfm4s_rid$RepresentationID$_cinit_w1759006020_mpd.m4s">
                <SegmentTimeline>
                    <S t="0" d="1012500"/>
                    <S d="1012500"/>
                    <S d="1012500"/>
                    <S d="476190"/>
                </SegmentTimeline>
            </SegmentTemplate>
            <Representation id="p0a0r0" codecs="avc1.42c01e" sar="1:1" bandwidth="420000" />
        </AdaptationSet>
        <AdaptationSet id="1" mimeType="audio/mp4" lang="eng" segmentAlignment="true" startWithSAP="1" subsegmentAlignment="true" subsegmentStartsWithSAP="1">
            <Role schemeIdUri="urn:mpeg:dash:role:2011" value="main"/>
            <SegmentTemplate timescale="48000" media="chunk_ctaudio_cfm4s_rid$RepresentationID$_cs$Time$_w1759006020_mpd.m4s" initialization="chunk_ctaudio_cfm4s_rid$RepresentationID$_cinit_w1759006020_mpd.m4s">
                <SegmentTimeline>
                    <S t="0" d="540000"/>
                    <S d="639984"/>
                </SegmentTimeline>
            </SegmentTemplate>
            <Representation id="p0a1r0" codecs="mp4a.40.2" audioSamplingRate="48000" bandwidth="99000">
            <AudioChannelConfiguration schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011" value="2"/>
            </Representation>
        </AdaptationSet>

        <!-- Alert Overlay -->
        <EventStream schemeIdUri="urn:mpeg:dash:event:2012" timescale="1">
            <Event presentationTime="0" duration="5" id="1">
                <OverlayEvent uri="http://alertsystem.com/emergency"
                              mimeType="text/html"
                              earlestResolutionTime="0.0"
                              z="1"
                              mode="start" />
            </Event>
        </EventStream>        
    </Period>
    </MPD>`,
  },
  {
    title: "Picture-in-Picture Sign Language Video",
    description:
      "As overlays can be videos you can make content accessible for everyone adding sign language interpretation to your videos by doing a Picture-in-Picture. HINT: if you pause the video, the overlay will pause too.",
    path: "/pip-overlay",
    url: "video-thumbnails/thumbnail-asl.png",
    mpd: `
<?xml version="1.0" encoding="UTF-8"?>
<MPD xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="urn:mpeg:dash:schema:mpd:2011"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xsi:schemaLocation="urn:mpeg:DASH:schema:MPD:2011 http://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-DASH_schema_files/DASH-MPD.xsd"
    profiles="urn:mpeg:dash:profile:isoff-live:2011"
    type="static"
    mediaPresentationDuration="PT9M56.458S"
    minBufferTime="PT1.5S">
    <ProgramInformation>
        <Title>sample.mp4</Title>
    </ProgramInformation>
    <Period id="0" start="PT0.0S">
        <AdaptationSet id="0" mimeType="video/mp4" width="424" height="240" par="16:9" frameRate="24" segmentAlignment="true" startWithSAP="1" subsegmentAlignment="true" subsegmentStartsWithSAP="1">
            <SegmentTemplate timescale="90000" media="chunk_ctvideo_cfm4s_rid$RepresentationID$_cs$Time$_w1759006020_mpd.m4s" initialization="chunk_ctvideo_cfm4s_rid$RepresentationID$_cinit_w1759006020_mpd.m4s">
                <SegmentTimeline>
                    <S t="0" d="1012500"/>
                    <S d="1012500"/>
                    <S d="1012500"/>
                    <S d="476190"/>
                </SegmentTimeline>
            </SegmentTemplate>
            <Representation id="p0a0r0" codecs="avc1.42c01e" sar="1:1" bandwidth="420000" />
        </AdaptationSet>
        <AdaptationSet id="1" mimeType="audio/mp4" lang="eng" segmentAlignment="true" startWithSAP="1" subsegmentAlignment="true" subsegmentStartsWithSAP="1">
            <Role schemeIdUri="urn:mpeg:dash:role:2011" value="main"/>
            <SegmentTemplate timescale="48000" media="chunk_ctaudio_cfm4s_rid$RepresentationID$_cs$Time$_w1759006020_mpd.m4s" initialization="chunk_ctaudio_cfm4s_rid$RepresentationID$_cinit_w1759006020_mpd.m4s">
                <SegmentTimeline>
                    <S t="0" d="540000"/>
                    <S d="639984"/>
                </SegmentTimeline>
            </SegmentTemplate>
            <Representation id="p0a1r0" codecs="mp4a.40.2" audioSamplingRate="48000" bandwidth="99000">
                <AudioChannelConfiguration schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011" value="2"/>
            </Representation>
        </AdaptationSet>
        
        <!-- ASL DASH overlay -->
        <EventStream schemeIdUri="urn:mpeg:dash:event:2012" timescale="1">
            <Event presentationTime="0" id="2">
                <OverlayEvent uri="http://cdn.service.com/channel1/asl/main.mpd"
                              mimeType="application/dash+xml"
                              earlestResolutionTime="0.0"
                              z="1"
                              mode="start">
                    <Viewport x="1920" y="1080"/>
                    <TopLeft x="0" y="720"/>
                    <Size x="480" y="360"/>
                </OverlayEvent>
            </Event>
        </EventStream>
    </Period>
</MPD>`,
  },
  {
    title: "Add your logo in your FAST channels",
    description:
      "Using your VOD library to create FAST channels is a great way to monetize your content. Now, with Overlays, it’s also possible to add your logo without the need to pre-process the video. In this example, you can see an overlay of a video with transparency on top of the FAST channel content. HINT: if you pause the video, the overlay will pause too.",
    path: "/video-overlay",
    url: "video-thumbnails/thumbnail-with-logo.png",
    mpd: `
<?xml version="1.0" encoding="UTF-8"?>
<MPD xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="urn:mpeg:dash:schema:mpd:2011"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xsi:schemaLocation="urn:mpeg:DASH:schema:MPD:2011 http://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-DASH_schema_files/DASH-MPD.xsd"
    profiles="urn:mpeg:dash:profile:isoff-live:2011"
    type="static"
    mediaPresentationDuration="PT9M56.458S"
    minBufferTime="PT1.5S">
    <ProgramInformation>
        <Title>sample.mp4</Title>
    </ProgramInformation>
    <Period id="0" start="PT0.0S">
        <AdaptationSet id="0" mimeType="video/mp4" width="424" height="240" par="16:9" frameRate="24" segmentAlignment="true" startWithSAP="1" subsegmentAlignment="true" subsegmentStartsWithSAP="1">
            <SegmentTemplate timescale="90000" media="chunk_ctvideo_cfm4s_rid$RepresentationID$_cs$Time$_w1759006020_mpd.m4s" initialization="chunk_ctvideo_cfm4s_rid$RepresentationID$_cinit_w1759006020_mpd.m4s">
                <SegmentTimeline>
                    <S t="0" d="1012500"/>
                    <S d="1012500"/>
                    <S d="1012500"/>
                    <S d="476190"/>
                </SegmentTimeline>
            </SegmentTemplate>
            <Representation id="p0a0r0" codecs="avc1.42c01e" sar="1:1" bandwidth="420000" />
        </AdaptationSet>
        <AdaptationSet id="1" mimeType="audio/mp4" lang="eng" segmentAlignment="true" startWithSAP="1" subsegmentAlignment="true" subsegmentStartsWithSAP="1">
            <Role schemeIdUri="urn:mpeg:dash:role:2011" value="main"/>
            <SegmentTemplate timescale="48000" media="chunk_ctaudio_cfm4s_rid$RepresentationID$_cs$Time$_w1759006020_mpd.m4s" initialization="chunk_ctaudio_cfm4s_rid$RepresentationID$_cinit_w1759006020_mpd.m4s">
                <SegmentTimeline>
                    <S t="0" d="540000"/>
                    <S d="639984"/>
                </SegmentTimeline>
            </SegmentTemplate>
            <Representation id="p0a1r0" codecs="mp4a.40.2" audioSamplingRate="48000" bandwidth="99000">
                <AudioChannelConfiguration schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011" value="2"/>
            </Representation>
        </AdaptationSet>
        
        <!-- FAST Channel Logo Overlay -->
        <EventStream schemeIdUri="urn:mpeg:dash:event:2012" timescale="1">
            <Event presentationTime="0" id="4">
                <OverlayEvent uri="http://cdn.provider.com/fast_channel_logo/comcast_qualabs.mp4"
                              mimeType="video/mp4"
                              earlestResolutionTime="0.0"
                              loop="true"
                              z="1"
                              mode="start">
                    <Viewport x="1920" y="1080"/>
                    <TopLeft x="1440" y="0"/>
                    <Size x="480" y="360"/>
                </OverlayEvent>
            </Event>
        </EventStream>
    </Period>
</MPD>`,
  },
  {
    title: "Ads Overlay",
    description:
      "With Overlays, you can monetize your content seamlessly by displaying ads directly over your videos using HTML or video Overlays.",
    path: "/ads-overlay",
    url: "video-thumbnails/thumbnail-ads-overlay.png",
    mpd: `
<?xml version="1.0" encoding="UTF-8"?>
<MPD xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="urn:mpeg:dash:schema:mpd:2011"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xsi:schemaLocation="urn:mpeg:DASH:schema:MPD:2011 http://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-DASH_schema_files/DASH-MPD.xsd"
    profiles="urn:mpeg:dash:profile:isoff-live:2011"
    type="static"
    mediaPresentationDuration="PT9M56.458S"
    minBufferTime="PT1.5S">
    <ProgramInformation>
        <Title>sample.mp4</Title>
    </ProgramInformation>
    <Period id="0" start="PT0.0S">
        <AdaptationSet id="0" mimeType="video/mp4" width="424" height="240" par="16:9" frameRate="24" segmentAlignment="true" startWithSAP="1" subsegmentAlignment="true" subsegmentStartsWithSAP="1">
            <SegmentTemplate timescale="90000" media="chunk_ctvideo_cfm4s_rid$RepresentationID$_cs$Time$_w1759006020_mpd.m4s" initialization="chunk_ctvideo_cfm4s_rid$RepresentationID$_cinit_w1759006020_mpd.m4s">
                <SegmentTimeline>
                    <S t="0" d="1012500"/>
                    <S d="1012500"/>
                    <S d="1012500"/>
                    <S d="476190"/>
                </SegmentTimeline>
            </SegmentTemplate>
            <Representation id="p0a0r0" codecs="avc1.42c01e" sar="1:1" bandwidth="420000" />
        </AdaptationSet>
        <AdaptationSet id="1" mimeType="audio/mp4" lang="eng" segmentAlignment="true" startWithSAP="1" subsegmentAlignment="true" subsegmentStartsWithSAP="1">
            <Role schemeIdUri="urn:mpeg:dash:role:2011" value="main"/>
            <SegmentTemplate timescale="48000" media="chunk_ctaudio_cfm4s_rid$RepresentationID$_cs$Time$_w1759006020_mpd.m4s" initialization="chunk_ctaudio_cfm4s_rid$RepresentationID$_cinit_w1759006020_mpd.m4s">
                <SegmentTimeline>
                    <S t="0" d="540000"/>
                    <S d="639984"/>
                </SegmentTimeline>
            </SegmentTemplate>
            <Representation id="p0a1r0" codecs="mp4a.40.2" audioSamplingRate="48000" bandwidth="99000">
                <AudioChannelConfiguration schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011" value="2"/>
            </Representation>
        </AdaptationSet>
        
        <!-- FAST Channel Logo Overlay -->
        <EventStream schemeIdUri="urn:mpeg:dash:event:2012" timescale="1">
            <Event presentationTime="0" id="5" >
                <OverlayEvent uri="http://cdn.provider.com/ad/qualabs.mp4"
                              mimeType="video/mp4"
                              earlestResolutionTime="0.0"
                              loop="false"
                              z="1"
                              mode="start">
                </OverlayEvent>
            </Event>
        </EventStream>
    </Period>
</MPD>
    `,
  },
  {
    title: "Interactive Overlays",
    description:
      "Add interactive elements to your videos and expand the possibilities with clickable overlays (don't be shy and press the 'Show stats' button). Also, update your previous overlays with new information to keep sync between your video and overlay content.",
    path: "/interactive-overlay",
    url: "video-thumbnails/thumbnail-interactive-overlay.png",
    mpd: `
<?xml version="1.0" encoding="UTF-8"?>
<MPD xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="urn:mpeg:dash:schema:mpd:2011"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xsi:schemaLocation="urn:mpeg:DASH:schema:MPD:2011 http://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-DASH_schema_files/DASH-MPD.xsd"
    profiles="urn:mpeg:dash:profile:isoff-live:2011"
    type="static"
    mediaPresentationDuration="PT9M56.458S"
    minBufferTime="PT1.5S">
<ProgramInformation>
    <Title>sample.mp4</Title>
</ProgramInformation>
<Period id="0" start="PT0.0S">
    <AdaptationSet id="0" mimeType="video/mp4" width="424" height="240" par="16:9" frameRate="24" segmentAlignment="true" startWithSAP="1" subsegmentAlignment="true" subsegmentStartsWithSAP="1">
        <SegmentTemplate timescale="90000" media="chunk_ctvideo_cfm4s_rid$RepresentationID$_cs$Time$_w1759006020_mpd.m4s" initialization="chunk_ctvideo_cfm4s_rid$RepresentationID$_cinit_w1759006020_mpd.m4s">
            <SegmentTimeline>
                <S t="0" d="1012500"/>
                <S d="1012500"/>
                <S d="1012500"/>
                <S d="476190"/>
            </SegmentTimeline>
        </SegmentTemplate>
        <Representation id="p0a0r0" codecs="avc1.42c01e" sar="1:1" bandwidth="420000" />
    </AdaptationSet>
    <AdaptationSet id="1" mimeType="audio/mp4" lang="eng" segmentAlignment="true" startWithSAP="1" subsegmentAlignment="true" subsegmentStartsWithSAP="1">
        <Role schemeIdUri="urn:mpeg:dash:role:2011" value="main"/>
        <SegmentTemplate timescale="48000" media="chunk_ctaudio_cfm4s_rid$RepresentationID$_cs$Time$_w1759006020_mpd.m4s" initialization="chunk_ctaudio_cfm4s_rid$RepresentationID$_cinit_w1759006020_mpd.m4s">
            <SegmentTimeline>
                <S t="0" d="540000"/>
                <S d="639984"/>
            </SegmentTimeline>
        </SegmentTemplate>
        <Representation id="p0a1r0" codecs="mp4a.40.2" audioSamplingRate="48000" bandwidth="99000">
        <AudioChannelConfiguration schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011" value="2"/>
        </Representation>
    </AdaptationSet>

    <!-- Interactive Overlay with information updates -->
    <EventStream schemeIdUri="urn:mpeg:dash:event:2012" timescale="1">
        <Event presentationTime="0" id="7">
            <OverlayEvent uri="http://interactivetvapps.com/soccer_score.html"
                          mimeType="text/html"
                          earlestResolutionTime="0.0"
                          mode="start" />
        </Event>
        <Event presentationTime="5" id="8">
            <OverlayEvent uri="http://interactivetvapps.com/soccer_score.html"
                          mimeType="text/html"
                          earlestResolutionTime="0.0"
                          refID="7"
                          mode="extend" 
                          messageData="score:uruguay:3"
                          />
        </Event>
    </EventStream>        
</Period>
</MPD>`,
  },
  {
    title: "Picture-in-Picture Sports Match Overlay",
    description: "Two important sporting events happening at the same time? Create Picture-in-Picture experiences showcasing these events on the MPD so your customers don't need to do more channel surfing. HINT: if you pause the video, the overlay will pause too.",
    path: "/pip-match-overlay",
    url: "video-thumbnails/thumbnail-pip-match-overlay.png",
    mpd: `<?xml version="1.0" encoding="UTF-8"?>
<MPD xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="urn:mpeg:dash:schema:mpd:2011"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xsi:schemaLocation="urn:mpeg:DASH:schema:MPD:2011 http://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-DASH_schema_files/DASH-MPD.xsd"
    profiles="urn:mpeg:dash:profile:isoff-live:2011"
    type="static"
    mediaPresentationDuration="PT9M56.458S"
    minBufferTime="PT1.5S">
    <ProgramInformation>
        <Title>sample.mp4</Title>
    </ProgramInformation>
    <Period id="0" start="PT0.0S">
        <AdaptationSet id="0" mimeType="video/mp4" width="424" height="240" par="16:9" frameRate="24" segmentAlignment="true" startWithSAP="1" subsegmentAlignment="true" subsegmentStartsWithSAP="1">
            <SegmentTemplate timescale="90000" media="chunk_ctvideo_cfm4s_rid$RepresentationID$_cs$Time$_w1759006020_mpd.m4s" initialization="chunk_ctvideo_cfm4s_rid$RepresentationID$_cinit_w1759006020_mpd.m4s">
                <SegmentTimeline>
                    <S t="0" d="1012500"/>
                    <S d="1012500"/>
                    <S d="1012500"/>
                    <S d="476190"/>
                </SegmentTimeline>
            </SegmentTemplate>
            <Representation id="p0a0r0" codecs="avc1.42c01e" sar="1:1" bandwidth="420000" />
        </AdaptationSet>
        <AdaptationSet id="1" mimeType="audio/mp4" lang="eng" segmentAlignment="true" startWithSAP="1" subsegmentAlignment="true" subsegmentStartsWithSAP="1">
            <Role schemeIdUri="urn:mpeg:dash:role:2011" value="main"/>
            <SegmentTemplate timescale="48000" media="chunk_ctaudio_cfm4s_rid$RepresentationID$_cs$Time$_w1759006020_mpd.m4s" initialization="chunk_ctaudio_cfm4s_rid$RepresentationID$_cinit_w1759006020_mpd.m4s">
                <SegmentTimeline>
                    <S t="0" d="540000"/>
                    <S d="639984"/>
                </SegmentTimeline>
            </SegmentTemplate>
            <Representation id="p0a1r0" codecs="mp4a.40.2" audioSamplingRate="48000" bandwidth="99000">
                <AudioChannelConfiguration schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011" value="2"/>
            </Representation>
        </AdaptationSet>
        
        <!-- ASL DASH overlay -->
        <EventStream schemeIdUri="urn:mpeg:dash:event:2012" timescale="1">
            <Event presentationTime="0" id="2"
                   messageData="">
                <OverlayEvent uri="http://cdn.service.com/main_event_tennis/main.mpd"
                              mimeType="application/dash+xml"
                              earlestResolutionTime="0.0"
                              mode="start">
                    <Viewport x="1920" y="1080"/>
                    <TopLeft x="0" y="720"/>
                    <Size x="480" y="360"/>
                </OverlayEvent>
            </Event>
        </EventStream>
    </Period>
</MPD>`,
  },
];
