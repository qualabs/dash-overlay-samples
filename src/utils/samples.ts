export const samples = [
  {
    title: "Warning Alert with Iframe ",
    description:
      "Show important info live interrupting playback in case of emergency! Our Iframe lets you display content in an iframe.",
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
    <Location>http://localhost:1935/vod/_definst_/mp4:sample.mp4/manifest_w1759006020.mpd</Location>
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
    </Period>
    </MPD>`,
  },
  {
    title: "Picture-in-Picture Sign Language Video",
    description:
      "Make content accessible for everyone adding sign language interpretation to your videos using Picture-in-Picture mode.",
    path: "/pip-overlay",
    url: "video-thumbnails/thumbnail-asl.png",
    mpd: ``,
  },
  {
    title: "Overlay Video of Logo",
    description:
      "Make your brand stand out with a logo overlay on your videos! Perfect for promos and presentations.",
    path: "/video-overlay",
    url: "video-thumbnails/thumbnail-with-logo.png",
    mpd: ``,
  },
  {
    title: "Ads Overlay",
    description:
      "Monetize your content seamlessly by displaying ads directly over your videos.",
    path: "/ads-overlay",
    url: "video-thumbnails/thumbnail-ads-overlay.png",
    mpd: ``,
  },
  {
    title: "Interactive Overlay",
    description:
      "Add interactive elements to your videos and expand the possibilities with clickable overlays.",
    path: "/interactive-overlay",
    url: "video-thumbnails/thumbnail-interactive-overlay.png",
    mpd: ``,
  },
  {
    title: "Picture-in-Picture Sports Match Overlay",
    description: "",
    path: "/pip-match-overlay",
    url: "video-thumbnails/thumbnail-pip-match-overlay.png",
    mpd: ``,
  },
];
