export default function YouTubeVideo({ src, autoplay = false }) {
  return (
    <iframe
      width="100%"
      height="315"
      src={autoplay ? `${src}?autoplay=1` : src}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  );
}
