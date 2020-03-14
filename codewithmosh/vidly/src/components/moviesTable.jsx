import React from "react";
import Like from "./common/likes";
const MoviesTable = props => {
  const { movies, onDelete, onLike } = props;
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => {
          return (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like onClick={onLike} liked={movie.liked} />
              </td>
              <td>
                <button onClick={onDelete} className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MoviesTable;
