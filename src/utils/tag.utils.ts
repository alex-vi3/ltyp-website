export const getTabBadgeColor = (nameTag: string) => {
  switch (nameTag) {
    case "competitions":
      return "bg-red-200";
    case "entrainements":
      return "bg-blue-200";
    case "evenements":
      return "bg-green-200";
    case "divers":
    default:
      return "bg-gray-200";
  }
};
