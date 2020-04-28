const convert = (drop) => {
    return (
      [
        [3, "Pling"],
        [5, "Plang"],
        [7, "Plong"],
      ].reduce(
        (accumulator, [num, sound]) =>
          drop % num === 0 ? accumulator + sound : accumulator,
        ""
      ) || drop.toString()
    );
  };

  module.exports = convert;