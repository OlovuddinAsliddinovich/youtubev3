import { Stack } from "@mui/material";
import { category } from "../../constants";
import { colors } from "../../constants/colors";

const Category = ({ selectedCategory, selectedCategoryHandler }) => {
  return (
    <Stack
      sx={{ overflowX: "scroll" }}
      direction={"row"}
      width={"100%"}
      justifyContent={"start"}
      alignItems={"center"}
    >
      {category.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{
            borderRadius: "0",
            background: selectedCategory === item.name && colors.secondary,
            color: selectedCategory === item.name ? "#fff" : colors.secondary,
          }}
          onClick={() => selectedCategoryHandler(item.name)}
        >
          <span
            style={{
              marginRight: "15px",
              color: selectedCategory === item.name && "#fff",
            }}
          >
            {item.icon}
          </span>
          <span
            style={{
              opacity: "1",
              color: selectedCategory === item.name ? "#fff" : "#000",
            }}
          >
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
