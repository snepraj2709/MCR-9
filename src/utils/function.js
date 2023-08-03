export const isUnique = (name, playlists) => {
  const value = playlists.find((playlist) => playlist.name === name);
  if (value) {
    return false;
  }
  return true;
};

export function mergedPlaylist(video, allPlaylists) {
  const mergedPlaylists = allPlaylists?.reduce(
    (acc, curr) =>
      video?.playlists?.includes(curr.name)
        ? [...acc, { ...curr, checked: true }]
        : [...acc, { ...curr, checked: false }],
    []
  );
  return mergedPlaylists;
}

export const embedLink = (link) => {
  const videoId = link.match(
    /(?:\/(?:watch\?v=|embed\/|youtu.be\/))([a-zA-Z0-9_-]{11})/
  );
  if (videoId && videoId[1]) {
    return `https://www.youtube.com/embed/${videoId[1]}`;
  } else {
    return link;
  }
};

export const toggledPlaylist = (
  allPlaylists,
  currentPlaylist,
  currentVideo
) => {
  const updatedPlaylists = allPlaylists?.reduce((acc, playlist) => {
    if (playlist.name === currentPlaylist.name) {
      if (playlist?.checked) {
        const updatedVideos = playlist?.videos?.filter(
          (vid) => vid._id !== currentVideo._id
        );

        return [
          ...acc,
          { ...currentPlaylist, checked: false, videos: [...updatedVideos] },
        ];
      } else {
        const updateCurrentVideo = {
          ...currentVideo,
          playlists: [...currentVideo.playlists, currentPlaylist.name],
        };

        return [
          ...acc,
          {
            ...currentPlaylist,
            checked: true,
            videos: [...playlist?.videos, { ...updateCurrentVideo }],
          },
        ];
      }
    } else {
      return [...acc, { ...playlist }];
    }
  }, []);
  return updatedPlaylists;
};
