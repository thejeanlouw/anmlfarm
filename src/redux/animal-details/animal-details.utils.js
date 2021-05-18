export const mapStringToFilters = ({filters}) => {
    const pairs = filters.split('&');

  var array = pairs.map((el) => {
    const parts = el.split('=');
    return parts;
  });

  return Object.fromEntries(array);
}