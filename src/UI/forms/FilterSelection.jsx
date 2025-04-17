import { useClickMeet } from "../../context/ClickMeetContext";
import FilterSelected from "../txt/FilterSelected";

const FilterSelection = ({}) => {
  const { submittedData, months, days, isAvailable } = useClickMeet();

  const getFilterData = () => {
    if (!submittedData) return [];
    // Object.entries() converts the object into an array of key-value pairs
    // Makes it simpler to filter and map over the data
    // Helps when you need to manipulate both keys and values simultaneously
    return Object.entries(submittedData)
      .filter(([_, value]) => value)
      .map(([key, value]) => {
        let displayValue = value;
        // Convert IDs to labels for select options
        if (key === "month") {
          displayValue = months.find(
            (oneMonth) => oneMonth.value === value
          )?.label;
        } else if (key === "day") {
          displayValue = days.find((oneDay) => oneDay.value === value)?.label;
        } else if (key === "status") {
          displayValue = isAvailable.find(
            (oneStatus) => oneStatus.value === value
          )?.label;
        }

        return {
          key,
          value: displayValue,
        };
      })
      .filter((oneItem) => oneItem.value); // Remove any items that didn't get a display value
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {getFilterData().map((oneItem) => (
        <FilterSelected
          key={oneItem.key}
          filterKey={oneItem.key}
          filterWord={oneItem.value}
        />
      ))}
    </div>
  );
};
export default FilterSelection;
