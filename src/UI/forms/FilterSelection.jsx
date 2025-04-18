import { useClickMeet } from "../../context/ClickMeetContext";
import FilterSelected from "../txt/FilterSelected";

const FilterSelection = () => {
  const { submittedData, months, days, isAvailable } = useClickMeet();

  const getFilterData = () => {
    if (!submittedData) return [];

    // Only get entries with non-empty values
    return (
      Object.entries(submittedData)
        // First filter: remove empty values
        .filter(([_, value]) => value && value.trim() !== "")
        .map(([key, value]) => {
          let displayValue = value;

          // Convert IDs to labels only if they exist
          if (key === "month" && value) {
            displayValue = months.find((m) => m.value === value)?.label;
          } else if (key === "day" && value) {
            displayValue = days.find((d) => d.value === value)?.label;
          } else if (key === "status" && value) {
            displayValue = isAvailable.find((s) => s.value === value)?.label;
          }

          return {
            key,
            value: displayValue,
          };
        })
        // Second filter: remove any items that didn't get a valid display value
        .filter((item) => item.value && item.value.trim() !== "")
    );
  };

  const selectedItems = getFilterData();

  return (
    <>
      {selectedItems.length > 0 ? (
        <div className="flex p-3 justify-center">
          {selectedItems.map((item) => (
            <FilterSelected
              key={item.key}
              filterKey={item.key}
              filterWord={item.value}
            />
          ))}
        </div>
      ) : (
        <div className="text-center p-4">No filters selected</div>
      )}
    </>
  );
};

export default FilterSelection;
