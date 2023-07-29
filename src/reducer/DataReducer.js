import { actions } from "../utils/constants";

const {
  CreatePlaylist,
  DeletePlaylist,
  AddToWatchlist,
  RemoveFromWatchlist,
  AddToPlaylist,
  RemoveFromPlaylist,
  AddNote,
  DeleteNote,
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
      return { state, allVideos: updatedVideos };
    }

    case RemoveFromWatchlist: {
      const updatedVideos = state.allVideos.reduce(
        (acc, curr) =>
          curr._id === payload._id
            ? [...acc, { ...payload, watchLater: false }]
            : [...acc, curr],
        []
      );
      return { state, allVideos: updatedVideos };
    }

    case AddToPlaylist: {
      return { state, playlists: [...state.playlists, payload] };
    }
    case RemoveFromPlaylist: {
      return { state, playlists: [...state.playlists, payload] };
    }
    case AddNote: {
      const updatedVideos = state.allVideos.reduce(
        (acc, curr) =>
          curr._id === payload._id ? [acc, ...payload] : [acc, ...curr],
        []
      );
      return {
        state,
        allVideos: updatedVideos,
      };
    }
    case DeleteNote: {
      const updatedVideos = state.allVideos.reduce(
        (acc, curr) =>
          curr._id === payload._id ? [acc, ...payload] : [acc, ...curr],
        []
      );
      return {
        state,
        allVideos: updatedVideos,
      };
    }

    default:
      return state;
  }
};
