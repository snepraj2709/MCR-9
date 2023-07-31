import { actions } from "../utils/constants";

const {
  CreatePlaylist,
  DeletePlaylist,
  AddToWatchlist,
  RemoveFromWatchlist,
  UpdatePlaylist,
  UpdateNote,
  FilterVideo,
} = actions;

export const DataReducer = (state, { type, payload }) => {
  switch (type) {
    case CreatePlaylist: {
      return {
        ...state,
        playlists: [...state.playlists, { ...payload }],
      };
    }
    case DeletePlaylist: {
      const updatedPlaylist = state.playlists?.filter(
        (playlist) => playlist._id !== payload
      );
      return {
        ...state,
        playlists: updatedPlaylist,
      };
    }
    case AddToWatchlist: {
      const updatedVideos = state.allVideos.reduce(
        (acc, curr) =>
          curr._id === payload._id
            ? [...acc, { ...payload, watchLater: true }]
            : [...acc, curr],
        []
      );
      return { ...state, allVideos: updatedVideos };
    }

    case RemoveFromWatchlist: {
      const updatedVideos = state.allVideos.reduce(
        (acc, curr) =>
          curr._id === payload._id
            ? [...acc, { ...payload, watchLater: false }]
            : [...acc, curr],
        []
      );
      return { ...state, allVideos: updatedVideos };
    }

    case UpdatePlaylist: {
      return { ...state, playlists: [...state.playlists, payload] };
    }

    case UpdateNote: {
      const updatedVideos = state.allVideos.reduce(
        (acc, curr) =>
          curr._id === payload._id
            ? [...acc, { ...payload }]
            : [...acc, { ...curr }],
        []
      );
      return {
        ...state,
        allVideos: updatedVideos,
      };
    }
    case UpdateNote: {
      const updatedVideos = state.allVideos.reduce(
        (acc, curr) =>
          curr._id === payload._id ? [acc, ...payload] : [acc, ...curr],
        []
      );
      return {
        ...state,
        allVideos: updatedVideos,
      };
    }
    case FilterVideo: {
      const videos = state.allVideos.filter(
        (video) => video.category.toLowerCase() === payload.toLowerCase()
      );
      return { ...state, filteredVideos: videos };
    }

    default:
      return state;
  }
};
